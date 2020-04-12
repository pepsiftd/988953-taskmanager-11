import {createSiteMenuTemplate} from "@/components/site-menu.js";
import {createFiltersTemplate} from "@/components/filters.js";
import {createBoardTemplate} from "@/components/board.js";
import {createTaskTemplate} from "@/components/task.js";
import {createTaskEditTemplate} from "@/components/task-edit.js";
import {createLoadMoreButtonTemplate} from "@/components/load-more-button.js";
import {generateFilters} from "@/components/mock/filters.js";
import {generateTasks} from "@/components/mock/tasks.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// шапка
  // главное меню
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate(), `beforeend`);

  // фильтры
const filters = generateFilters();
render(siteHeaderElement, createFiltersTemplate(filters), `afterend`);
render(siteMainElement, createBoardTemplate(), `beforeend`);

// доска задач
const boardElement = siteMainElement.querySelector(`.board`);
const tasksContainerElement = boardElement.querySelector(`.board__tasks`);

const tasks = generateTasks(TASK_COUNT);

  // форма редактирования задачи
render(tasksContainerElement, createTaskEditTemplate(tasks[0]), `afterbegin`);

let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

  // остальные задачи
tasks.slice(1, showingTasksCount)
  .forEach((task) => render(tasksContainerElement, createTaskTemplate(task), `beforeend`));

  // кнопка Load More
render(boardElement, createLoadMoreButtonTemplate(), `beforeend`);

const loadMoreButton = boardElement.querySelector(`.load-more`);

    // нажатие на кнопку Load More
loadMoreButton.addEventListener(`click`, () => {
  const prevTasksCount = showingTasksCount;
  showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

  tasks.slice(prevTasksCount, showingTasksCount)
    .forEach((task) => render(tasksContainerElement, createTaskTemplate(task), `beforeend`));

  if (showingTasksCount >= tasks.length) {
    loadMoreButton.remove();
  }
});
