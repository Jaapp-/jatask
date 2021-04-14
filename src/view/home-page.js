import { Component } from "./component";
import { html } from "lit-html";
import { saveTasks, tasks, TaskType } from "../model/task";
import { router } from "../router";

export class HomePage extends Component {
  constructor() {
    super("JaTask");
    this.completedTasks = 3;
  }

  render() {
    return html` ${this.renderTasks()} `;
  }

  todoTasks() {
    return tasks.filter((t) => !t.isCompleted());
  }

  renderTasks() {
    return html`
      <div class="task-list">
        ${this.todoTasks().map((t) => this.renderTask(t))}
      </div>
    `;
  }

  renderTask(t) {
    return html`
      <div class="task-card" data-id="${t.id}">
        <div class="cb-c" @click="${(e) => this.checkTask(e, t)}">
          <div class="cb"></div>
        </div>
        <div @click="${() => this.viewTask(t)}" class="body">
          <div class="title">${t.name}</div>
          ${t.description
            ? html`<div class="subtitle">${t.description}</div>`
            : ""}
        </div>
      </div>
    `;
  }

  /**
   * @param {Task} task
   */
  viewTask(task) {
    router.go("/tasks/edit/" + encodeURIComponent(task.id));
  }

  /**
   * @param {Event} e
   * @param {Task} task
   */
  checkTask(e, task) {
    e.preventDefault();
    task.complete();
    document
      .querySelector(`.task-card[data-id=${task.id}]`)
      .classList.add("done");
    saveTasks();
  }
}
