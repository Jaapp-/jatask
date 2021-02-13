import { Component } from "./component";
import { html } from "lit-html";

export class Archive extends Component {
  constructor() {
    super("archive");
  }

  render() {
    return html` <h2>Archive</h2> `;
  }
}
