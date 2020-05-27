import TaskComponent from "@/components/task.js";
import TaskEditComponent from "@/components/task-edit.js";
import {remove, render, replace, RenderPosition} from "@/utils/render.js";

export const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`,
};

export const EmptyTask = {};

export default class TaskController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;
    this._mode = Mode.DEFAULT;

    this._taskComponent = null;
    this._taskEditComponent = null;
  }

  render(task, mode) {
    this._mode = mode;

    const oldTaskComponent = this._taskComponent;
    const oldTaskEditComponent = this._taskEditComponent;
    this._taskComponent = new TaskComponent(task);
    this._taskEditComponent = new TaskEditComponent(task);

    const editButtonClickHandler = () => {
      this._replaceTaskWithEdit();
    };

    const editFormSubmitHandler = (evt) => {
      evt.preventDefault();
      const data = this._taskEditComponent.getData();
      this._onDataChange(this, task, data);
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
    this._taskEditComponent.setDeleteButtonClickHandler(() => this._onDataChange(this, task, null));

    if (oldTaskComponent && oldTaskEditComponent) {
      replace(this._taskComponent, oldTaskComponent);
      replace(this._taskEditComponent, oldTaskEditComponent);
      this._replaceEditWithTask();
    } else {
      render(this._container, this._taskComponent, RenderPosition.BEFOREEND);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditWithTask();
    }
  }

  _replaceTaskWithEdit() {
    this._onViewChange();
    replace(this._taskEditComponent, this._taskComponent);
    this._mode = Mode.EDIT;
  }

  _replaceEditWithTask() {
    this._taskEditComponent.reset();

    if (document.contains(this._taskEditComponent.getElement())) {
      replace(this._taskComponent, this._taskEditComponent);
    }

    this._mode = Mode.DEFAULT;
  }

  destroy() {
    remove(this._taskEditComponent);
    remove(this._taskComponent);
  }
}
