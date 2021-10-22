class RepeatModel {
  /** @type {'YEARLY' | 'MONTHLY' | 'WEEKLY' | 'DAILY'} */
  frequency = 'MONTHLY';

  /** @type {number} */
  interval = 1;

  /** @type {string[]|null} */
  day = null;

  /** @type {string[]|null} */
  month = null;

  /** @type {string[]|null} */
  monthDay = null;

  /** @type {string[]|null} */
  position = null;

  /** @type {'never' | 'onDate' | 'after'} */
  endsAfter = 'never';

  /** @type {number} */
  count = 1;

  /** @type {Date} */
  endsOn = new Date();

  /** @type {Date[]} */
  exceptions = [];

  constructor(data = {}) {
    this.frequency = data.frequency ?? this.frequency;
    this.interval = data.interval ?? this.interval;
    this.day = data.day ?? this.day;
    this.month = data.month ?? this.month;
    this.monthDay = data.monthDay ?? this.monthDay;
    this.position = data.position ?? this.position;
    this.endsAfter = data.endsAfter ?? this.endsAfter;
    this.count = data.count ?? this.count;
    this.endsOn = data.endsOn ? new Date(data.endsOn) : new Date();

    if (Array.isArray(data.exceptions)) {
      data.exceptions.forEach((exception) => {
        this.exceptions.push(new Date(exception));
      });
    }
  }
}

export default RepeatModel;
