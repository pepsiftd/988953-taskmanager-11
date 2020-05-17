import TaskComponent from "@/components/task.js";
import TaskEditComponent from "@/components/task-edit.js";
import {render, replace, RenderPosition} from "@/utils/render.js";

export default class TaskController {
  constructor(container, onDataChange) {
    this._container = container;
    this._onDataChange = onDataChange;

    this._taskComponent = null;
    this._taskEditComponent = null;
  }

  render(task) {
    const oldTaskComponent = this._taskComponent;
    const oldTaskEditComponent = this._taskEditComponent;
    this._taskComponent = new TaskComponent(task);
    this._taskEditComponent = new TaskEditComponent(task);

    const editButtonClickHandler = () => {
      this._replaceTaskWithEdit();
    };

    const editFormSubmitHandler = (evt) => {
      evt.preventDefault();
      this._replaceEditWithTask();
    };

    const archiveButtonClickHandler = () => {
      this._onDataChange(this, task, Object.assign({}, task, {
        isArchive: !task.isArchive,
      }));
    };

    const favoriteButtonClickHandler = () => {
      this._onDataChange(this, task, Object.assign({}, task, {
        isFavorite: !task.isFavorite,
      }));
    };

    this._taskComponent.setEditButtonClickHandler(editButtonClickHandler);
    this._taskEditComponent.setSubmitHandler(editFormSubmitHandler);
    this._taskComponent.setArchiveButtonClickHandler(archiveButtonClickHandler);
    this._taskComponent.setFavoriteButtonClickHandler(favoriteButtonClickHandler);

    if (oldTaskComponent && oldTaskEditComponent) {
      replace(this._taskComponent, oldTaskComponent);
      replace(this._taskEditComponent, oldTaskEditComponent);
    } else {
      render(this._container, this._taskComponent, RenderPosition.BEFOREEND);
    }
  }

  _replaceTaskWithEdit() {
    replace(this._taskEditComponent, this._taskComponent);
  }

  _replaceEditWithTask() {
    replace(this._taskComponent, this._taskEditComponent);
  }
}
