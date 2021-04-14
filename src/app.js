import { HomePage } from "./view/home-page";
import { getTaskById, Task, tasks } from "./model/task";
import { EditTask } from "./view/edit-task";
import { BottomNav } from "./view/bottom-nav";
import { Archive } from "./view/archive";
import { Settings } from "./view/settings";
import { router } from "./router";
import { render } from "lit-html";
import { TopBar } from "./view/top-bar";

const content = document.querySelector("#content");
const topBar = new TopBar(".header");
const bottomNav = new BottomNav("#bottom-nav");

const showPage = (page) => {
  bottomNav.setActive(page.name);
  topBar.setTitle(page.name);
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
