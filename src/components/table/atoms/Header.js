export default class Header {
  #headerItems = [];
  constructor(headerItems) {
    this.#headerItems = headerItems;
  }

  render() {
    const header = document.createElement('thead');
    const tr = document.createElement('tr');

    for (const header of this.#headerItems) {
      const th = document.createElement('th');
      th.innerHTML = header;
      tr.appendChild(th);
    }

    header.appendChild(tr);
    return header;
  }
}
