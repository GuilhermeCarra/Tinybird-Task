export default class Render {
  renderContent(fragment) {
    document.querySelector('#content_box').replaceChildren(fragment);
  }
}
