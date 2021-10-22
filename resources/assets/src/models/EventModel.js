import { namespaceInputName } from "../helpers";
import RepeatModel from "./RepeatModel";

class EventModel {
  /** @type {string} */
  #globalName;

  /** @type {string} */
  id;

  /** @type {boolean} */
  allDay = false;

  /** @type {boolean} */
  recurring = false;

  /** @type {RepeatModel} */
  repeat;

  /** @type {{start: Date, end: Date}} */
  startEnd = {};

  /**
   * @param {string | null} id
   * @param {*} data
   */
  constructor(globalName, id = null, data = {}) {
    this.#globalName = globalName;
    this.id = id ?? 'NEW';
    this.allDay = data.allDay ? true : false;
    this.recurring = data.repeat ? true : false;
    this.repeat = new RepeatModel(data.repeat ?? {});
    this.startEnd.start = data.startDate ? new Date(data.startDate) : new Date();
    this.startEnd.end = data.endDate ? new Date(data.endDate) : new Date();
  }

  /** @type {string} */
  get name() {
    return namespaceInputName(namespaceInputName(this.id, 'dates'), this.#globalName);
  }
};

export default EventModel;
