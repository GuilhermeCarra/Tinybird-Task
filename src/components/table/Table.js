import Header from './atoms/Header';
import Body from './atoms/Body';

const TABLE_STYLE = 'mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp';

export default class Table {
  #header;
  #body;

  constructor(headerItems, rowsValue) {
    this.#header = new Header(headerItems);
    this.#body = new Body();
  }

  addRow(rowValues) {
    return this.#body.addRow(rowValues);
  }

  render() {
    const table = document.createElement('table')
    table.className = TABLE_STYLE;
    table.append(this.#header.render());
    table.append(this.#body.render());
    return table;
  }

}
