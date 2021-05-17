import { saveTasks, Task, tasks } from "../model/task";
import { html } from "lit-html";
import { router } from "../router";
import { Component } from "./component";

const COMPLETION_DATE_OPTIONS = {
  dateStyle: "short",
  timeStyle: "short",
};

export class EditTask extends Component {
  /**
   * @param {Task} task
   * @param {boolean} isNew
   */
  constructor({ task, isNew = false }) {
    super();
    this.task = task;
    this.isNew = isNew;
    this.name = "Edit " + task.name;
  }

  render() {
    return html`
      <form class="edit-form" @submit="${(e) => this.save(e)}">
        <div class="form-group">
          <div>
            <label for="name">Name</label>
          </div>
          <input
            type="text"
            id="name"
            required
            value="${this.task.name}"
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <div>
            <label for="description">Description</label>
          </div>
          <textarea id="description" rows="4">
${this.task.description}</textarea
          >
        </div>
        <div class="form-group">
          <div>
            <label for="type">Type</label>
          </div>
          <select name="type" id="type">
            <option value="once">Once</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
        <div class="form-group buttons">
          <button
            type="button"
            class="btn-danger"
            @click=${(e) => this.delete(e)}
          >
            Delete task
          </button>
          <button class="primary" type="submit" @click=${(e) => this.save(e)}>
            Save
          </button>
        </div>
        ${this.renderCompletions()}
      </form>
    `;
  }

  renderCompletions() {
    if (this.task.completions.length === 0) return null;
    return html`
      <div class="completions">
        <div class="list-heading">Completions</div>
        ${this.task.completions.map((completion) =>
          this.renderCompletion(completion)
        )}
      </div>
    `;
  }

  /**
   * @param {Date} completion
   */
  renderCompletion(completion) {
    return html`
      <div class="card">
        <div class="title">
          ${completion.toLocaleString("en-US", COMPLETION_DATE_OPTIONS)}
        </div>
      </div>
    `;
  }

  save(e) {
    e.preventDefault();
    const form = document.forms[0];
    if (!form.reportValidity()) return;
    this.task.name = form.elements["name"].value;
    this.task.description = form.elements["description"].value;
    this.task.type = form.elements["type"].value;
    if (this.isNew) {
      tasks.push(this.task);
    }
    saveTasks();
    router.go("/");
  }

  delete(e) {
    if (!this.isNew) {
      const index = tasks.indexOf(this.task);
      if (index !== -1) {
        tasks.splice(index, 1);
        saveTasks();
      }
    }
    router.go("/");
  }
}
