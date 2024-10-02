import Navigator from '../../helpers/Navigator';

const CONTAINER_STYLE = 'mdl-textfield mdl-js-textfield mdl-cell mdl-cell--2-col';
const INPUT_STYLE = 'mdl-textfield__input';
const LABEL_STYLE = 'mdl-typography--body-2 mdl-color-text--grey-600';

export default class InputNumberFilter {
  #name;
  #label;

  constructor(label, name) {
    this.#label = label;
    this.#name = name;
  }

  render() {
    const inputContainer = document.createElement('div');
    inputContainer.className = CONTAINER_STYLE;
    inputContainer.appendChild(this.#generateLabel());
    inputContainer.appendChild(this.#generateInput());
    return inputContainer;
  }

  #generateInput() {
    const navigator = new Navigator();
    const input = document.createElement('input');
    input.className = INPUT_STYLE;
    input.id = this.#name;
    input.name = this.#name;
    input.type = 'number';
    input.onblur = event => navigator.updateParam(this.#name, event.target.value);
    input.defaultValue = navigator.getParam(this.#name);
    return input;
  }

  #generateLabel() {
    const label = document.createElement('label');
    label.className = LABEL_STYLE;
    label.htmlFor = this.#name;
    label.innerHTML = this.#label;
    return label;
  }

}
