import { Component } from "./component";
import { html } from "lit-html";
import { saveTasks, tasks } from "./task";
import { router } from "./router";

export class HomePage extends Component {
  constructor() {
    super("home");
    this.completedTasks = 3;
  }

  render() {
    return html`
      <h2 class="page-header">Open tasks</h2>
      ${this.renderTasks()}
    `;
  }

  todoTasks() {
    return tasks.filter((t) => !t.isCompleted());
  }

  renderTasks() {
    return html`
      <div class="task-list">
        ${this.todoTasks().map(
          (t) =>
            html`
              <div class="task-card" data-id="${t.id}">
                <input
                  class="checkbox"
                  type="checkbox"
                  @click="${(e) => this.checkTask(e, t)}"
                />
                <div @click="${() => this.viewTask(t)}" class="body">
                  <div class="title">${t.name}</div>
                  <div class="subtitle">${t.description}</div>
                </div>
              </div>
            `
        )}
      </div>
    `;
  }

  /**
   * @param {Task} task
   */
  viewTask(task) {
    router.go("/tasks/edit/" + encodeURIComponent(task.name));
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
