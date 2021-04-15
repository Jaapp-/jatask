import { Component } from "./component";
import { html } from "lit-html";
import { Task, tasks } from "../model/task";

export class Archive extends Component {
  constructor() {
    super("Archive");
  }

  /**
   * @returns {Task[]}
   */
  archivedTasks() {
    const archiveTasks = tasks.filter((t) => t.isCompleted());
    return archiveTasks;
    const length = archiveTasks.length;
    return archiveTasks.slice(Math.max(0, length - 10));
  }

  archiveData() {
    const aTasks = this.archivedTasks();
    const data = [];
    let date = null;
    for (const t of aTasks) {
      if (date == null || t.createdAt.getDate() !== date.getDate()) {
        date = t.createdAt;
        data.push(date);
      }
      data.push(t);
    }
    return data;
  }

  render() {
    return html`
      <ul class="archived-tasks">
        ${this.archiveData().map((item) => this.renderItem(item))}
      </ul>
    `;
  }

  renderItem(item) {
    if (item instanceof Task) {
      return html`
        <li>
          <div class="task-card">
            <div class="body">
              <div class="title">${item.name}</div>
            </div>
          </div>
        </li>
      `;
    } else if (item instanceof Date) {
      return html`<li class="date">${this.formatDate(item)}</li>`;
    }
  }

  formatDate(date) {
    return date.toLocaleDateString();
  }
}
