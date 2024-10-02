export default class Body {
  #rows = [];

  addRow(rowValues) {
    const tr = document.createElement('tr');
    for (const value of rowValues) {
      const td = document.createElement('td');
      td.innerHTML = value;
      tr.appendChild(td);
    }
    this.#rows.push(tr);
  }

  render() {
    const body = document.createElement('tbody');
    for (const row of this.#rows) {
      body.appendChild(row);
    }
    return body;
  }

}
