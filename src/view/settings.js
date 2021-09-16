import { Component } from "./component";
import { html, render } from "lit-html";
import { saveTasks, Task, tasks } from "../model/task";
import { dismissModal, showModal } from "../util/modal";
import { saveTheme, themes } from "../themes";

const randName = () => {
  return Math.random().toString(36).substr(2, 5);
};

export class Settings extends Component {
  constructor() {
    super("Settings");
  }

  render() {
    return html`
      <div class="settings">
        <div class="list-heading">General</div>
        <div class="card clickable" @click="${() => this.createSampleTasks()}">
          <div class="title">Create sample tasks</div>
          <div class="subtitle">Just for testing...</div>
        </div>
        <div class="list-heading">Danger</div>
        <div class="card clickable" @click="${() => this.clearAllData()}">
          <div class="title">Clear all data</div>
          <div class="subtitle">WARNING: Everything will be gone</div>
        </div>
        <div class="list-heading">Theme</div>
        <div class="themes">
          ${themes.map(
            (theme) => html`
              <div
                class="card clickable"
                @click="${() => this.setTheme(theme)}"
              >
                <div class="title">${theme["name"]}</div>
              </div>
            `
          )}
        </div>
      </div>
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

  clearAllData() {
    showModal(
      html`
        <div class="modal settings-modal">
          <div class="card">
            <div class="title">This will clear all data</div>
            <div class="subtitle">
              Are you sure you want to delete all tasks?
            </div>
            <div class="modal-buttons">
              <button @click="${() => dismissModal()}">Cancel</button>
              <button
                class="danger"
                @click="${() => this.clearAllDataConfirm()}"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      `
    );
  }

  clearAllDataConfirm() {
    tasks.length = 0;
    dismissModal();
  }

  setTheme(theme) {
    saveTheme(theme);
  }
}
