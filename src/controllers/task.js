import TaskComponent from "@/components/task.js";
import TaskEditComponent from "@/components/task-edit.js";
import {render, replace, RenderPosition} from "@/utils/render.js";

export default class TaskController {
  constructor(container) {
    this._container = container;

    this._taskComponent = null;
    this._taskEditComponent = null;
  }

  render(task) {
    this._taskComponent = new TaskComponent(task);
    this._taskEditComponent = new TaskEditComponent(task);

    const editButtonClickHandler = () => {
      this._replaceTaskWithEdit();
    };

    const editFormSubmitHandler = () => {
      this._replaceEditWithTask();
    };

    this._taskComponent.setEditButtonClickHandler(editButtonClickHandler);
    this._taskEditComponent.setSubmitHandler(editFormSubmitHandler);

    render(this._container, this._taskComponent, RenderPosition.BEFOREEND);
  }

  _replaceTaskWithEdit() {
    replace(this._taskEditComponent, this._taskComponent);
  }

  _replaceEditWithTask() {
    replace(this._taskComponent, this._taskEditComponent);
  }
}
