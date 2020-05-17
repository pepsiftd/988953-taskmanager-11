import TasksComponent from "@/components/tasks.js";
import LoadMoreComponent from "@/components/load-more-button.js";
import SortComponent from "@/components/sorting.js";
import TaskController from "@/controllers/task.js";
import {render, RenderPosition} from "@/utils/render.js";

const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTasks = (taskListElement, tasks) => {
  return tasks.map((task) => {
    const newTaskController = new TaskController(taskListElement);

    newTaskController.render(task);
    return newTaskController;
  });
};

export default class BoardController {
  constructor(container) {
    this._tasks = [];
    this._sortComponent = new SortComponent();
    this._tasksContainerComponent = new TasksComponent();
    this._loadMoreButtonComponent = new LoadMoreComponent();
    this._showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
    this._showedTaskControllers = [];

    this._container = container;
    this._tasksContainer = this._tasksContainerComponent.getElement();
  }

  _renderLoadMoreButton() {
    if (this._showingTasksCount >= this._tasks.length) {
      return;
    }

    render(this._container.getElement(), this._loadMoreButtonComponent, RenderPosition.BEFOREEND);

    this._loadMoreButtonComponent.setClickHandler(() => {
      const prevTasksCount = this._showingTasksCount;
      this._showingTasksCount += SHOWING_TASKS_COUNT_BY_BUTTON;

      const newTasks = renderTasks(this._tasksContainer, this._tasks.slice(prevTasksCount, this._showingTasksCount));
      this._showedTaskControllers = this._showedTaskControllers.concat(newTasks);

      if (this._showingTasksCount >= this._tasks.length) {
        this._loadMoreButtonComponent.removeElement();
      }
    });
  }

  render(tasks) {
    this._tasks = tasks;
    render(this._container.getElement(), this._sortComponent, RenderPosition.BEFOREEND);
    render(this._container.getElement(), this._tasksContainerComponent, RenderPosition.BEFOREEND);

    const newTasks = renderTasks(this._tasksContainer, this._tasks.slice(0, this._showingTasksCount));
    this._showedTaskControllers = this._showedTaskControllers.concat(newTasks);

    this._renderLoadMoreButton();
  }
}
