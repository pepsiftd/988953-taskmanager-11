import TaskComponent from "@/components/task.js";
import TaskEditComponent from "@/components/task-edit.js";
import TasksComponent from "@/components/tasks.js";
import LoadMoreComponent from "@/components/load-more-button.js";
import SortComponent from "@/components/sorting.js";
import {render, replace, RenderPosition} from "@/utils/render.js";

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
  taskComponent.setEditButtonClickHandler(editButtonClickHandler);

  const taskEditComponent = new TaskEditComponent(task);
  taskEditComponent.setSubmitHandler(editFormSubmitHandler);

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
  loadMoreButtonComponent.setClickHandler(() => {
    const prevTasksCount = showingTasksCount;
    showingTasksCount = showingTasksCount + SHOWING_TASKS_COUNT_BY_BUTTON;

    tasks.slice(prevTasksCount, showingTasksCount)
      .forEach((task) => renderTask(tasksContainerComponent.getElement(), task));

    if (showingTasksCount >= tasks.length) {
      loadMoreButtonComponent.removeElement();
    }
  });
};

export default class BoardController {
  constructor(container) {
    this._container = container;
  }

  render(tasks) {
    renderBoard(this._container, tasks);
  }
}
