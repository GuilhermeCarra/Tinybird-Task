export default class Navigator {
  #queryParams = new URLSearchParams(window.location.search);

  updateParam(name, value) {
    if (value === this.getParam(name)) {
      return;
    }
    if (value) {
      this.#queryParams.set(name, value);
    } else {
      this.#queryParams.delete(name);
    }
    history.replaceState(null, null, `?${this.#queryParams.toString()}`);
  }

  getParam(name) {
    return this.#queryParams.get(name) || '';
  }

  getParams() {
    return [...this.#queryParams.entries()];
  }
}