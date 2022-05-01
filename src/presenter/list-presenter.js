import { render } from '../render';

import ListPointView from '../view/list-point-view';
import PointView from '../view/point-view';
import PointEditView from '../view/point-edit-view';
import SortView from '../view/sort-view';


export default class TripPresenter {
  tripListCompinent = new ListPointView();

  init = (tripContainer) => {
    this.tripContainer = tripContainer;

    render(new SortView(), this.tripContainer);
    render(this.tripListCompinent, this.tripContainer);
    render(new PointEditView(), this.tripListCompinent.getElement());

    for (let i = 0; i < 3; i++) {
      render(new PointView(), this.tripListCompinent.getElement());
    }
  };
}
