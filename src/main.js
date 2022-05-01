import FilterView from './view/filter-view.js';
import FormInfoHeaderView from './view/info-trip-view.js';
import {render} from './render.js';
import TripPresenter from './presenter/list-presenter.js';

const tripMain = document.querySelector('.trip-main');
const siteFilters = document.querySelector('.trip-controls__filters');
const tripElement = document.querySelector('.trip-events');

render(new FormInfoHeaderView(), tripMain);
render(new FilterView(), siteFilters);

const tripPresenter = new TripPresenter();

tripPresenter.init(tripElement);
