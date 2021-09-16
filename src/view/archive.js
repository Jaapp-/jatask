import { Component } from "./component";
import { html } from "lit-html";
import { Task, tasks } from "../model/task";
import { router } from "../router";

export class Archive extends Component {
  constructor() {
    super("Archive");
  }

  /**
   * @returns {Task[]}
   */
  archivedTasks() {
    const archiveTasks = tasks.filter((t) => t.isCompleted());
    archiveTasks.sort((t1, t2) => {
      return (
        t2.getLastCompletion().getTime() - t1.getLastCompletion().getTime()
      );
    });
    return archiveTasks;
  }

  archiveData() {
    const aTasks = this.archivedTasks();
    const data = [];
    let date = null;
    for (const t of aTasks) {
      if (date == null || !t.getLastCompletion().isSameDay(date)) {
        date = t.getLastCompletion();
        data.push(date);
      }
      data.push(t);
    }
    return data;
  }

  render() {
    return html`
      <div class="archived-tasks">
        ${this.archiveData().map((item) => this.renderItem(item))}
      </div>
    `;
  }

  renderItem(item) {
    if (item instanceof Task) {
      return html`
        <div class="card clickable" @click="${() => this.onClick(item)}">
          <div class="title">${item.name}</div>
        </div>
      `;
    } else if (item instanceof Date) {
      return html`<div class="list-heading">${this.formatDate(item)}</div>`;
    }
  }

  formatDate(date) {
    const options = {
      weekday: "short",
      day: "numeric",
      month: "short",
    };

    return date.toLocaleDateString("en-US", options);
  }

  /**
   * @param {Task} task
   */
  onClick(task) {
    router.go("/tasks/edit/" + encodeURIComponent(task.id));
  }
}
