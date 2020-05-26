import SiteMenuComponent from "@/components/site-menu.js";
import FiltersComponent from "@/components/filters.js";
import BoardComponent from "@/components/board.js";
import BoardController from "@/controllers/board.js";
import TasksModel from "@/models/tasks.js";
import {generateFilters} from "@/components/mock/filters.js";
import {generateTasks} from "@/components/mock/tasks.js";
import {render, RenderPosition} from "@/utils/render.js";

const TASK_COUNT = 22;


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
const tasksModel = new TasksModel();
tasksModel.setTasks(tasks);

const boardController = new BoardController(boardComponent, tasksModel);
boardController.render(tasks);
