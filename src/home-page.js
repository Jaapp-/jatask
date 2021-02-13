import { Component } from "./component";
import { html } from "lit-html";
import { tasks } from "./task";
import { router } from "./router";

export class HomePage extends Component {
  constructor() {
    super("home");
    this.completedTasks = 3;
  }

  render() {
    return html`
      <h2>You have completed ${this.completedTasks} tasks this week!</h2>
      <h2>Open tasks</h2>
      ${this.renderTasks()}
    `;
  }

  renderTasks() {
    return html`
      <div class="task-list">
        ${tasks.map(
          (t) =>
            html`
              <div class="task-card" @click="${() => this.viewTask(t)}">
                <div class="title">${t.name}</div>
                <div class="subtitle">${t.description}</div>
              </div>
            `
        )}
      </div>
    `;
  }

  /**
   *
   * @param {Task} task
   */
  viewTask(task) {
    router.go("/tasks/edit/" + encodeURIComponent(task.name));
  }
}
