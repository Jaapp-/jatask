import { router } from "./router";

export class BottomNav {
  /**
   * @param {String} selector
   */
  constructor(selector) {
    this.elem = document.querySelector(selector);
    this.buttons = this.elem.querySelectorAll("a");
  }

  setActive(name) {
    console.log("Activating", name);
    this.buttons.forEach((b) => {
      if (b.dataset.name === name) {
        b.classList.add("active");
      } else {
        b.classList.remove("active");
      }
    });
  }
}
