import { Router } from "director/build/director.min";
import { render } from "lit-html";
import { HomePage } from "./home-page";
import { Task, tasks } from "./task";
import { EditTask } from "./edit-task";
import { BottomNav } from "./bottom-nav";
import { Archive } from "./archive";
import { Settings } from "./settings";

const content = document.querySelector("#content");
const actionBar = new BottomNav("#bottom-nav", router);
const showPage = (page) => {
  actionBar.setActive(page.name);
  render(page.render(), content);
};

const routes = {
  "/": () => {
    let homePage = new HomePage();
    showPage(homePage);
  },
  create: () => {
    const newTask = new Task({});
    const page = new EditTask({ task: newTask, isNew: true });
    showPage(page);
  },
  "/tasks/edit/:taskId": (taskName) => {
    const task = tasks.find((t) => t.name === decodeURIComponent(taskName));
    if (!task) {
      throw new Error(`Couldn't find task '${taskName}'`);
    }
    const page = new EditTask({ task: task, isNew: false });
    showPage(page);
  },
  "/archive": () => {
    const page = new Archive();
    showPage(page);
  },
  "/settings": () => {
    const page = new Settings();
    showPage(page);
  },
};

export const router = Router(routes);
router.init();
