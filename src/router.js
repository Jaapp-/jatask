class Router {
  init(routes) {
    this.routes = routes;
    window.onpopstate = () => {
      console.log("Popped state", window.location.pathname);
      this.update();
    }
  }

  update = () => {
    const pathname = window.location.pathname;
    for (const pattern of Object.keys(this.routes)) {
      const match = pathname.match("^" + pattern + "$");
      if (match) {
        this.routes[pattern](...match.slice(1));
        break;
      }
    }
  };

  go(path) {
    window.history.pushState({}, path, window.location.origin + path);
    this.update();
  }

  hookLinks() {
    document.querySelectorAll("a").forEach((elem) => {
      elem.addEventListener("click", (ev) => {
        ev.preventDefault();
        this.go(elem.getAttribute("href"));
      });
    });
  }
}

export const router = new Router();
