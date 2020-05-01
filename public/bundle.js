/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/board.js":
/*!*********************************!*\
  !*** ./src/components/board.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Board; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");


const createBoardTemplate = () => {
  return (
    `<section class="board container"></section>`
  );
};

class Board {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createBoardTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/filters.js":
/*!***********************************!*\
  !*** ./src/components/filters.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Filters; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");


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

class Filters {
  constructor(filters) {
    this._filters = filters;

    this._element = null;
  }

  getTemplate() {
    return createFiltersTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element =  null;
  }
}


/***/ }),

/***/ "./src/components/load-more-button.js":
/*!********************************************!*\
  !*** ./src/components/load-more-button.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadMoreButton; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");


const createLoadMoreButtonTemplate = () => {
  return (
    `<button class="load-more" type="button">load more</button>`
  );
};

class LoadMoreButton {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createLoadMoreButtonTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/mock/filters.js":
/*!****************************************!*\
  !*** ./src/components/mock/filters.js ***!
  \****************************************/
/*! exports provided: generateFilters */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateFilters", function() { return generateFilters; });
const filterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateFilters = () => {
  return filterNames.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};




/***/ }),

/***/ "./src/components/mock/tasks.js":
/*!**************************************!*\
  !*** ./src/components/mock/tasks.js ***!
  \**************************************/
/*! exports provided: generateTask, generateTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTask", function() { return generateTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTasks", function() { return generateTasks; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");



const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const DefaultRepeatingDays = {
  "mo": true,
  "tu": false,
  "we": true,
  "th": false,
  "fr": true,
  "sa": false,
  "su": false,
};

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    "mo": Math.random() > 0.5,
  });
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const diffValue = sign * Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomIntegerNumber"])(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? null : getRandomDate();

  return {
    description: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    color: Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["getRandomArrayItem"])(_const_js__WEBPACK_IMPORTED_MODULE_0__["COLORS"]),
    isArchive: Math.random() > 0.5,
    isFavorite: Math.random() > 0.5,
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};




/***/ }),

/***/ "./src/components/site-menu.js":
/*!*************************************!*\
  !*** ./src/components/site-menu.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SiteMenu; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");


const createSiteMenuTemplate = () => {
  return (
    `<section class="control__btn-wrap">
      <input
        type="radio"
        name="control"
        id="control__new-task"
        class="control__input visually-hidden"
      />
      <label for="control__new-task" class="control__label control__label--new-task"
        >+ ADD NEW TASK</label
      >
      <input
        type="radio"
        name="control"
        id="control__task"
        class="control__input visually-hidden"
        checked
      />
      <label for="control__task" class="control__label">TASKS</label>
      <input
        type="radio"
        name="control"
        id="control__statistic"
        class="control__input visually-hidden"
      />
      <label for="control__statistic" class="control__label"
        >STATISTICS</label
      >
    </section>`
  );
};

class SiteMenu {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSiteMenuTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/sorting.js":
/*!***********************************!*\
  !*** ./src/components/sorting.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sorting; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");


const createSortingTemplate = () => {
  return (
    `<div class="board__filter-list">
      <a href="#" class="board__filter" data-sort-type="default">SORT BY DEFAULT</a>
      <a href="#" class="board__filter" data-sort-type="date-up">SORT BY DATE up</a>
      <a href="#" class="board__filter" data-sort-type="date-down">SORT BY DATE down</a>
    </div>`);
};

class Sorting {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createSortingTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/task-edit.js":
/*!*************************************!*\
  !*** ./src/components/task-edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TaskEdit; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");



const createColorsMarkup = (colors, currentColor) => {
  return colors
    .map((color, index) => {
      return (
        `<input
          type="radio"
          id="color-${color}-${index}"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value="${color}"
          ${currentColor === color ? `checked` : ``}
        />
        <label
          for="color-${color}-${index}"
          class="card__color card__color--${color}"
          >${color}</label
        >`
      );
    })
    .join(`\n`);
};

const createRepeatingDaysMarkup = (days, repeatingDays) => {
  return days
    .map((day, index) => {
      const isChecked = repeatingDays[day];
      return (
        `<input
          class="visually-hidden card__repeat-day-input"
          type="checkbox"
          id="repeat-${day}-${index}"
          name="repeat"
          value="${day}"
          ${isChecked ? `checked` : ``}
        />
        <label class="card__repeat-day" for="repeat-${day}-${index}"
          >${day}</label
        >`
      );
    })
    .join(`\n`);
};

const createTaskEditTemplate = (task) => {
  const {description, dueDate, color, repeatingDays} = task;

  const isDateShowing = !!dueDate;
  const date = isDateShowing ? `${dueDate.getDate()} ${_const_js__WEBPACK_IMPORTED_MODULE_0__["MONTH_NAMES"][dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(dueDate) : ``;

  const repeatClass = `card--repeat`;
  const deadlineClass = `card--deadline`;

  const colorsMarkup = createColorsMarkup(_const_js__WEBPACK_IMPORTED_MODULE_0__["COLORS"], color);
  const repeatingDaysMarkup = createRepeatingDaysMarkup(_const_js__WEBPACK_IMPORTED_MODULE_0__["DAYS"], repeatingDays);

  return (
    `<article class="card card--edit card--${color} ${repeatClass} ${deadlineClass}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >${description}</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <button class="card__date-deadline-toggle" type="button">
                  date: <span class="card__date-status">yes</span>
                </button>

                <fieldset class="card__date-deadline">
                  <label class="card__input-deadline-wrap">
                    <input
                      class="card__date"
                      type="text"
                      placeholder=""
                      name="date"
                      value="${date} ${time}"
                    />
                  </label>
                </fieldset>

                <button class="card__repeat-toggle" type="button">
                  repeat:<span class="card__repeat-status">yes</span>
                </button>

                <fieldset class="card__repeat-days">
                  <div class="card__repeat-days-inner">
                    ${repeatingDaysMarkup}
                  </div>
                </fieldset>
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                ${colorsMarkup}
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
};

class TaskEdit {
  constructor(task) {
    this._task = task;

    this._element = null;
  }

  getTemplate() {
    return createTaskEditTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Task; });
/* harmony import */ var _const_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/const.js */ "./src/const.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");



const createTaskTemplate = (task) => {
  const {description, dueDate, color, repeatingDays, isArchive, isFavorite} = task;

  const isExpired = dueDate instanceof Date && dueDate < Date.now();
  const isDateShowing = !!dueDate;

  const date = isDateShowing ? `${dueDate.getDate()} ${_const_js__WEBPACK_IMPORTED_MODULE_0__["MONTH_NAMES"][dueDate.getMonth()]}` : ``;
  const time = isDateShowing ? Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(dueDate) : ``;

  const repeatClass = Object.values(repeatingDays).some(Boolean) ? `card--repeat` : ``;
  const deadlineClass = isExpired ? `card--deadline` : ``;
  const archiveButtonInactiveClass = isArchive ? `` : `card__btn--disabled`;
  const favoriteButtonInactiveClass = isFavorite ? `` : `card__btn--disabled`;

  return (
    `<article class="card card--${color} ${repeatClass} ${deadlineClass}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive ${archiveButtonInactiveClass}">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled ${favoriteButtonInactiveClass}"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${date}</span>
                    <span class="card__time">${time}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};

class Task {
  constructor(task) {
    this._task = task;

    this._element = null;
  }

  getTemplate() {
    return createTaskTemplate(this._task);
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_1__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/components/tasks.js":
/*!*********************************!*\
  !*** ./src/components/tasks.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tasks; });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");


const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

class Tasks {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return createTasksTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = Object(_utils_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}


/***/ }),

/***/ "./src/const.js":
/*!**********************!*\
  !*** ./src/const.js ***!
  \**********************/
/*! exports provided: COLORS, DAYS, MONTH_NAMES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DAYS", function() { return DAYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MONTH_NAMES", function() { return MONTH_NAMES; });
const COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];

const DAYS = [`mo`, `tu`, `we`, `th`, `fr`, `sa`, `su`];

const MONTH_NAMES = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_site_menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/site-menu.js */ "./src/components/site-menu.js");
/* harmony import */ var _components_filters_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/filters.js */ "./src/components/filters.js");
/* harmony import */ var _components_board_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/board.js */ "./src/components/board.js");
/* harmony import */ var _components_task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/task.js */ "./src/components/task.js");
/* harmony import */ var _components_task_edit_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/task-edit.js */ "./src/components/task-edit.js");
/* harmony import */ var _components_tasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/tasks.js */ "./src/components/tasks.js");
/* harmony import */ var _components_load_more_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/load-more-button.js */ "./src/components/load-more-button.js");
/* harmony import */ var _components_sorting_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/sorting.js */ "./src/components/sorting.js");
/* harmony import */ var _components_mock_filters_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/mock/filters.js */ "./src/components/mock/filters.js");
/* harmony import */ var _components_mock_tasks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/mock/tasks.js */ "./src/components/mock/tasks.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils.js */ "./src/utils.js");












const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

// шапка
//   главное меню
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(siteHeaderElement, new _components_site_menu_js__WEBPACK_IMPORTED_MODULE_0__["default"]().getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

//  фильтры
const filters = Object(_components_mock_filters_js__WEBPACK_IMPORTED_MODULE_8__["generateFilters"])();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(siteMainElement, new _components_filters_js__WEBPACK_IMPORTED_MODULE_1__["default"](filters).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

// доска задач
const boardElement = new _components_board_js__WEBPACK_IMPORTED_MODULE_2__["default"]().getElement();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(siteMainElement, boardElement, _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

const tasksContainerElement = new _components_tasks_js__WEBPACK_IMPORTED_MODULE_5__["default"]().getElement();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(boardElement, tasksContainerElement, _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

const tasks = Object(_components_mock_tasks_js__WEBPACK_IMPORTED_MODULE_9__["generateTasks"])(TASK_COUNT);

//  форма редактирования задачи
Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(tasksContainerElement, new _components_task_edit_js__WEBPACK_IMPORTED_MODULE_4__["default"](tasks[0]).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].AFTERBEGIN);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

//  остальные задачи
tasks.slice(1, showingTasksCount)
  .forEach((task) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(tasksContainerElement, new _components_task_js__WEBPACK_IMPORTED_MODULE_3__["default"](task).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND));

//  кнопка Load More
const loadMoreButton = new _components_load_more_button_js__WEBPACK_IMPORTED_MODULE_6__["default"]().getElement();
Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(boardElement, loadMoreButton, _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND);

//     нажатие на кнопку Load More
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => Object(_utils_js__WEBPACK_IMPORTED_MODULE_10__["render"])(tasksContainerElement, new _components_task_js__WEBPACK_IMPORTED_MODULE_3__["default"](task).getElement(), _utils_js__WEBPACK_IMPORTED_MODULE_10__["RenderPosition"].BEFOREEND));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});


/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: RenderPosition, formatTime, getRandomArrayItem, getRandomIntegerNumber, createElement, render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderPosition", function() { return RenderPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomArrayItem", function() { return getRandomArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomIntegerNumber", function() { return getRandomIntegerNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const castTimeFormat = (value) => {
  return `0${value}`.slice(-2);
};

const formatTime = (date) => {
  const hours = castTimeFormat(date.getHours() % 12);
  const minutes = castTimeFormat(date.getMinutes());

  return `${hours}:${minutes}`;
};

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);

  return array[randomIndex];
};

const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;

    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
  }
};


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map