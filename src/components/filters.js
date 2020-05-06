import {createElement} from "@/utils.js";

const CHECKED_FILTER_INDEX = 0;

const createFilterMarkup = (filter, isChecked) => {
  const {name, count} = filter;
  return (
    `<input
      type="radio"
      id="filter__${name}"
      class="filter__input visually-hidden"
      name="filter"
      ${isChecked ? `checked` : ``}
    />
    <label for="filter__${name}" class="filter__label">
      ${name} <span class="filter__${name}-count">${count}</span></label
    >`
  );
};

const createFiltersTemplate = (filters) => {
  const filtersMarkup = filters.map((it, i) => createFilterMarkup(it, i === CHECKED_FILTER_INDEX)).join(`\n`);

  return (
    `<section class="main__filter filter container">
      ${filtersMarkup}
    </section>`
  );
};

export default class Filters {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element.remove();
    this._element = null;
  }
}
