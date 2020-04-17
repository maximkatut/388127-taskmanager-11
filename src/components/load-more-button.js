import {createElement} from "../utils.js";

const createLoadMoreButtonTemplate = () => {
  return `<button class="load-more" type="button">load more</button>`;
};

export default class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  getTamplate() {
    return createLoadMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTamplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
