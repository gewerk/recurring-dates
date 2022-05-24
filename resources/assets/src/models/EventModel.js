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

  /** @type {{start: Date | null, end: Date | null}} */
  startEnd = {};

  /** @type {string[][]} */
  errors = [];

  /**
   * @param {string | null} id
   * @param {*} data
   */
  constructor(globalName, id = null, data = {}, errors = []) {
    this.#globalName = globalName;
    this.id = id ?? 'NEW';
    this.allDay = data.allDay ? true : false;
    this.recurring = data.repeat ? true : false;
    this.repeat = new RepeatModel(data.repeat ?? {});
    this.startEnd.start = data.startDate ? new Date(data.startDate) : null;
    this.startEnd.end = data.endDate ? new Date(data.endDate) : null;
    this.errors = errors;
  }

  /** @type {string} */
  get name() {
    return namespaceInputName(namespaceInputName(this.id, 'dates'), this.#globalName);
  }

  /** @type {bool} */
  hasErrors() {
    return Object.keys(this.errors).length > 0;
  }
};

export default EventModel;
