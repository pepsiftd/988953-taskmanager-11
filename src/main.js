import SiteMenuComponent from "@/components/site-menu.js";
import FiltersComponent from "@/components/filters.js";
import BoardComponent from "@/components/board.js";
import TaskComponent from "@/components/task.js";
import TaskEditComponent from "@/components/task-edit.js";
import TasksComponent from "@/components/tasks.js";
import LoadMoreComponent from "@/components/load-more-button.js";
import SortComponent from "@/components/sorting.js";
import {generateFilters} from "@/components/mock/filters.js";
import {generateTasks} from "@/components/mock/tasks.js";
import {render, replace, RenderPosition} from "@/utils/render.js";

const TASK_COUNT = 22;
const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTask = (taskListElement, task) => {
  const editButtonClickHandler = () => {
    replace(taskEditComponent, taskComponent);
  };

  const editFormSubmitHandler = () => {
    replace(taskComponent, taskEditComponent);
  };

  const taskComponent = new TaskComponent(task);
  const editButton = taskComponent.getElement().querySelector(`.card__btn--edit`);
  editButton.addEventListener(`click`, editButtonClickHandler);

  const taskEditComponent = new TaskEditComponent(task);
  const editForm = taskEditComponent.getElement().querySelector(`form`);
  editForm.addEventListener(`submit`, editFormSubmitHandler);

  render(taskListElement, taskComponent, RenderPosition.BEFOREEND);
};

const renderBoard = (boardComponent, tasks) => {
  render(boardComponent.getElement(), new SortComponent(), RenderPosition.BEFOREEND);
  const tasksContainerComponent = new TasksComponent();
  render(boardComponent.getElement(), tasksContainerComponent, RenderPosition.BEFOREEND);

  let showingTasksCount = SHOWING_TASKS_COUNT_ON_START;

  //  задачи
  tasks.slice(0, showingTasksCount)
    .forEach((task) => renderTask(tasksContainerComponent.getElement(), task));

  //  кнопка Load More
  const loadMoreButtonComponent = new LoadMoreComponent();
  render(boardComponent.getElement(), loadMoreButtonComponent, RenderPosition.BEFOREEND);

  //     нажатие на кнопку Load More
  loadMoreButtonComponent.getElement().addEventListener(`click`, () => {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTasksCount)
      .forEach((task) => renderTask(tasksContainerComponent.getElement(), task));

    if (showingTasksCount >= tasks.length) {
      loadMoreButtonComponent.getElement().remove();
      loadMoreButtonComponent.removeElement();
    }
  });
};

// шапка
//   главное меню
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

//   фильтры
const filters = generateFilters();
render(siteMainElement, new FiltersComponent(filters), RenderPosition.BEFOREEND);

// доска задач
const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const tasks = generateTasks(TASK_COUNT);

renderBoard(boardComponent, tasks);
