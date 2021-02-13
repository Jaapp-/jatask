import { saveTasks, Task, tasks } from "./task";
import { html } from "lit-html";

export class EditTask extends Comment {
  /**
   * @param {Task} task
   * @param {boolean} isNew
   */
  constructor({ task, isNew = false }) {
    super();
    console.log(task);
    this.task = task;
    this.isNew = isNew;
  }

  render() {
    return html`
      <h1>${this.isNew ? "Create" : "Edit"} task</h1>
      <form action="">
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
          <textarea id="description">${this.task.description}</textarea>
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
        <div class="form-group">
          <button type="submit" @click=${(e) => this.save(e)}>Save</button>
          <button @click=${(e) => this.delete(e)}>Delete task</button>
        </div>
      </form>
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
    router.setRoute("/");
  }

  delete(e) {
    if (!this.isNew) {
      const index = tasks.indexOf(this.task);
      if (index !== -1) {
        tasks.splice(index, 1);
        saveTasks();
      }
    }
    router.setRoute("/");
  }
}
