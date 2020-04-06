'use strict';

import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFiltersTemplate} from "./components/filters.js";
import {createBoardTemplate} from "./components/board.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);
render(siteHeaderElement, createFiltersTemplate(), `afterend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const tasksContainerElement = boardElement.querySelector(`.board__tasks`);

render(tasksContainerElement, createTaskEditTemplate(), `afterbegin`);
render(tasksContainerElement, createTaskTemplate(), `beforeend`);
render(tasksContainerElement, createTaskTemplate(), `beforeend`);
render(tasksContainerElement, createTaskTemplate(), `beforeend`);

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
