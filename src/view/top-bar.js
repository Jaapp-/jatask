export class TopBar {
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.title = this.elem.querySelector("h1");
    console.log(this.elem, this.title);
  }

  setTitle(name) {
    this.title.innerText = name;
  }
}
