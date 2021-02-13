import { Component } from "./component";
import { html } from "lit-html";

export class Settings extends Component {
  constructor() {
    super("settings");
  }

  render() {
    return html`
      <h2>Settings</h2>
      <p>Here you'll find the settings soon (TM)</p>
    `;
  }
}
