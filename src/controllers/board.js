import TasksComponent from "@/components/tasks.js";
import LoadMoreComponent from "@/components/load-more-button.js";
import SortComponent from "@/components/sorting.js";
import TaskController from "@/controllers/task.js";
import {render, RenderPosition} from "@/utils/render.js";

const SHOWING_TASKS_COUNT_ON_START = 8;
const SHOWING_TASKS_COUNT_BY_BUTTON = 8;

const renderTasks = (taskListElement, tasks, onDataChange, onViewChange) => {
  return tasks.map((task) => {
    const newTaskController = new TaskController(taskListElement, onDataChange, onViewChange);

    newTaskController.render(task);
    return newTaskController;
  });
};

export default class BoardController {
  constructor(container, tasksModel) {
    this._sortComponent = new SortComponent();
    this._tasksContainerComponent = new TasksComponent();
    this._loadMoreButtonComponent = new LoadMoreComponent();
    this._showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
    this._showedTaskControllers = [];
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    this._onFilterChange = this._onFilterChange.bind(this);

    this._tasksModel = tasksModel;
    this._container = container;

    this._tasksModel.setFilterChangeHandler(this._onFilterChange);
  }

  _onDataChange(taskController, oldData, newData) {
    const isSuccess = this._tasksModel.updateTask(oldData.id, newData);

    if (isSuccess) {
      taskController.render(newData);
    }
  }

  _onViewChange() {
    this._showedTaskControllers.forEach((it) => it.setDefaultView());
  }

  _onFilterChange() {
    this._updateTasks(SHOWING_TASKS_COUNT_ON_START);
  }

  _renderLoadMoreButton() {
    const tasks = this._tasksModel.getTasks();

    if (this._showingTasksCount >= tasks.length) {
      return;
    }

    render(this._container.getElement(), this._loadMoreButtonComponent, RenderPosition.BEFOREEND);

    this._loadMoreButtonComponent.setClickHandler(() => {
      this._loadMoreButtonComponent.getElement().remove();
      this._loadMoreButtonComponent.removeElement();

      const prevTasksCount = this._showingTasksCount;
      this._showingTasksCount += SHOWING_TASKS_COUNT_BY_BUTTON;

      this._renderTasks(tasks.slice(prevTasksCount, this._showingTasksCount));

      if (this._showingTasksCount < tasks.length) {
        this._renderLoadMoreButton();
      }
    });
  }

  _renderTasks(tasks) {
    const tasksContainer = this._tasksContainerComponent.getElement();
    const newTasks = renderTasks(tasksContainer, tasks, this._onDataChange, this._onViewChange);

    this._showedTaskControllers = this._showedTaskControllers.concat(newTasks);
  }

  render() {
    const tasks = this._tasksModel.getTasks();
    const container = this._container.getElement();
    const isAllTasksArchived = tasks.every((task) => task.isArchive);

    if (isAllTasksArchived) {
      render(container, this._noTasksComponent, RenderPosition.BEFOREEND);
      return;
    }

    render(container, this._sortComponent, RenderPosition.BEFOREEND);
    render(container, this._tasksContainerComponent, RenderPosition.BEFOREEND);

    this._renderTasks(tasks.slice(0, this._showingTasksCount));

    this._renderLoadMoreButton();
  }

  _updateTasks(count) {
    this._removeTasks();
    this._renderTasks(this._tasksModel.getTasks().slice(0, count));
    this._renderLoadMoreButton();
  }

  _removeTasks() {
    this._showedTaskControllers.forEach((taskController) => taskController.destroy());
    this._showedTaskControllers = [];
    this._showingTasksCount = SHOWING_TASKS_COUNT_ON_START;
  }
}
