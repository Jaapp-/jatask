import { HomePage } from "./home-page";
import { getTaskById, Task, tasks } from "./task";
import { EditTask } from "./edit-task";
import { BottomNav } from "./bottom-nav";
import { Archive } from "./archive";
import { Settings } from "./settings";
import { router } from "./router";
import { render } from "lit-html";

const content = document.querySelector("#content");
const actionBar = new BottomNav("#bottom-nav");

const showPage = (page) => {
  actionBar.setActive(page.name);
  render(page.render(), content);
};

const routes = {
  "/": () => {
    let homePage = new HomePage();
    showPage(homePage);
  },
  "/create": () => {
    const newTask = new Task({});
    const page = new EditTask({ task: newTask, isNew: true });
    showPage(page);
  },
  "/tasks/edit/(\\w+)": (taskId) => {
    const task = getTaskById(taskId);
    if (!task) {
      throw new Error(`Couldn't find task '${taskId}'`);
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

router.init(routes);
router.hookLinks();
router.update();
