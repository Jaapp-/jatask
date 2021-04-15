import { render } from "lit-html";

const modalContainer = document.querySelector("#modal-container");

export function dismissModal() {
  render(null, modalContainer);
}

export function showModal(template) {
  dismissModal();
  render(template, modalContainer);
  const modal = document.querySelector(".modal");
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) dismissModal();
    });
  }
}
