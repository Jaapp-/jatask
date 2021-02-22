import { Component } from "./component";
import { html } from "lit-html";
import { saveTasks, Task, tasks } from "./task";

const randName = () => {
  return Math.random().toString(36).substr(2, 5);
};

export class Settings extends Component {
  constructor() {
    super("settings");
  }

  render() {
    return html`
      <h2>Settings</h2>
      <p>Here you'll find the settings soon (TM)</p>
      <button @click="${() => this.createSampleTasks()}">
        Create sample tasks
      </button>
    `;
  }

  createSampleTasks() {
    for (let i = 0; i < 5; i++) {
      const t = new Task({
        name: randName(),
        description:
          Math.random() > 0.5
            ? `${randName()}, ${randName()} ${randName()}`
            : "",
      });
      tasks.push(t);
    }
    saveTasks();
  }
}
