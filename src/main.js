import {createSiteMenuTemplate} from "./components/site-menu.js";
import {createFiltersTemplate} from "./components/filters.js";
import {createBoardTemplate} from "./components/board.js";
import {createTaskTemplate} from "./components/task.js";
import {createTaskEditTemplate} from "./components/task-edit.js";
import {createLoadMoreButtonTemplate} from "./components/load-more-button.js";
import {generateFilters} from "./components/mock/filters.js";
import {generateTasks} from "./components/mock/tasks.js";

const TASK_COUNT = 3;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);

const filters = generateFilters();
render(siteHeaderElement, createFiltersTemplate(filters), `afterend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

const boardElement = siteMainElement.querySelector(`.board`);
const tasksContainerElement = boardElement.querySelector(`.board__tasks`);

const tasks = generateTasks(TASK_COUNT);

render(tasksContainerElement, createTaskEditTemplate(tasks[0]), `afterbegin`);

for (let i = 1; i < tasks.length; i++) {
  render(tasksContainerElement, createTaskTemplate(tasks[i]), `beforeend`);
}

render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);
