import { createElement } from '../render';

const createListPointTemplate = () => '<ul class="trip-events__list"></ul>';

export default class ListPointView {
  getTemplate() {
    return createListPointTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
