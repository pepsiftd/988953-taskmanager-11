import SiteMenuComponent from "@/components/site-menu.js";
import FiltersController from "@/controllers/filter.js";
import BoardComponent from "@/components/board.js";
import BoardController from "@/controllers/board.js";
import TasksModel from "@/models/tasks.js";
import {generateTasks} from "@/components/mock/tasks.js";
import {render, RenderPosition} from "@/utils/render.js";

const TASK_COUNT = 22;

// генерация моков и создание модели
const tasks = generateTasks(TASK_COUNT);
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

// шапка
//   главное меню
const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, new SiteMenuComponent(), RenderPosition.BEFOREEND);

//   фильтры
const filtersController = new FiltersController(siteMainElement, tasksModel);
filtersController.render();

// доска задач
const boardComponent = new BoardComponent();
render(siteMainElement, boardComponent, RenderPosition.BEFOREEND);

const boardController = new BoardController(boardComponent, tasksModel);
boardController.render();
