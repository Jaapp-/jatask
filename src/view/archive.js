import { Component } from "./component";
import { html } from "lit-html";
import { tasks } from "../model/task";

export class Archive extends Component {
  constructor() {
    super("Archive");
  }

  archivedTasks() {
    return tasks.filter((t) => t.isCompleted());
  }

  render() {
    return html`
      <ul class="archived-tasks">
        ${this.archivedTasks().map(
          (t) => html`
            <li>
              <span>${t.name}</span>
            </li>
          `
        )}
      </ul>
    `;
  }
}
