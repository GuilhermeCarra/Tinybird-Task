const ERROR_STYLE = 'mdl-color-text--red-600';

export default class Error {
  static render(message) {
    const error = document.createElement('div');
    error.className = ERROR_STYLE;
    error.innerHTML = message;
    return error;
  }
}
