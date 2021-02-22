import { Component } from "./component";
import { html } from "lit-html";
import { tasks } from "./task";

export class Archive extends Component {
  constructor() {
    super("archive");
  }

  archivedTasks() {
    return tasks.filter((t) => t.isCompleted());
  }

  render() {
    return html`<h2 class="page-header">Archive</h2>
      <ul class="archived-tasks">
        ${this.archivedTasks().map(
          (t) => html`
            <li>
              <span>${t.name}</span>
            </li>
          `
        )}
      </ul> `;
  }
}
