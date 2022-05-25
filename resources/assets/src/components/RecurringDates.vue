<template>
  <div class="cdf-date">
    <div v-for="(date, index) in dates" :key="date.id" class="cdf-date__entry">
      <input type="hidden" :name="'sortOrder[]' | namespaceInputName(name)" :value="date.id" />

      <div class="cdf-date__toolbar">
        <span class="cdf-date__toolbar-label" v-bind:class="{ 'cdf-date__toolbar-label--error': date.hasErrors() }">
          {{ 'Date' | t() }}
          <span data-icon="alert" :aria-label="'Error'|t()" v-if="date.hasErrors()"></span>
        </span>
        <button
          v-on:click="remove(date.id, $event)"
          class="delete icon"
          :title="'Delete date' | t()"
          v-if="!staticItems"
        />
      </div>

      <fieldset class="cdf-date__fieldset">
        <legend class="cdf-date__legend">{{ 'Start & End' | t() }}</legend>

        <div class="cdf-date__date-input">
          <input type="hidden" :name="'startEnd[start][raw]' | namespaceInputName(date.name)" v-if="date.startEnd" :value="date.startEnd.start | dateRaw" :disabled="disabled" />
          <input type="hidden" :name="'startEnd[end][raw]' | namespaceInputName(date.name)" v-if="date.startEnd" :value="date.startEnd.end | dateRaw" :disabled="disabled" />

          <v-date-picker v-model="date.startEnd" :mode="date.allDay ? 'date' : 'dateTime'" is-range is24hr class="cdf-date__start-end">
            <template v-slot="{ inputValue, inputEvents }">
              <label :for="'start' | namespaceInputId(`${id}-${index}`)" class="visually-hidden">
                {{ 'Start' | t() }}
              </label>

              <input
                :id="'start' | namespaceInputId(`${id}-${index}`)"
                :name="'startEnd[start][formatted]' | namespaceInputName(date.name)"
                :value="inputValue.start"
                v-on="disabled ? null : inputEvents.start"
                :disabled="disabled"
                class="nicetext text fullwidth cdf-date__input"
                v-bind:class="{ disabled: disabled }"
              />

              <span class="cdf-date__start-end-separator">&ndash;</span>

              <label :for="'end' | namespaceInputId(`${id}-${index}`)" class="visually-hidden">
                {{ 'End' | t() }}
              </label>

              <input
                :id="'end' | namespaceInputId(`${id}-${index}`)"
                :name="'startEnd[end][formatted]' | namespaceInputName(date.name)"
                :value="inputValue.end"
                v-on="disabled ? null : inputEvents.end"
                :disabled="disabled"
                class="nicetext text fullwidth cdf-date__input"
                v-bind:class="{ disabled: disabled }"
              />
            </template>
          </v-date-picker>

          <div class="cdf-date__all-day">
            <lightswitch-field
              :id="'all-day' | namespaceInputId(`${id}-${index}`)"
              :name="'allDay' | namespaceInputName(date.name)"
              :onLabel="'All Day' | t()"
              :on="date.allDay"
              :disabled="disabled"
              v-on:change="date.allDay = $event"
            />
          </div>

          <div class="cdf-date__has-recurring" v-if="settings.allowRecurring">
            <lightswitch-field
              :id="'recurring' | namespaceInputId(`${id}-${index}`)"
              :name="'recurring' | namespaceInputName(date.name)"
              :onLabel="'Repeat date' | t()"
              :on="date.recurring"
              :disabled="disabled"
              v-on:change="date.recurring = $event"
            />
          </div>
        </div>
      </fieldset>

      <fieldset class="cdf-date__fieldset" v-if="date.recurring && settings.allowRecurring">
        <legend class="cdf-date__legend">{{ 'Repeat' | t() }}</legend>

        <div class="cdf-date__recurring">
          <div class="cdf-date__recurring-type select">
            <select
              class="cdf-date__select"
              :name="'repeat[frequency]' | namespaceInputName(date.name)"
              :id="'repeat-frequency' | namespaceInputId(`${id}-${index}`)"
              v-model="date.repeat.frequency"
              :disabled="disabled"
              v-bind:class="{ disabled: disabled }"
            >
              <option value="YEARLY">{{ 'Yearly' | t() }}</option>
              <option value="MONTHLY">{{ 'Monthly' | t() }}</option>
              <option value="WEEKLY">{{ 'Weekly' | t() }}</option>
              <option value="DAILY">{{ 'Daily' | t() }}</option>
            </select>
          </div>

          <div class="cdf-date__recurring-settings">
            <yearly
              v-if="date.repeat.frequency === 'YEARLY'"
              :id="'repeat-settings' | namespaceInputId(`${id}-${index}`)"
              :name="'repeat' | namespaceInputName(date.name)"
              :value="date.repeat"
              :disabled="disabled"
            />

            <monthly
              v-if="date.repeat.frequency === 'MONTHLY'"
              :id="'repeat-settings' | namespaceInputId(`${id}-${index}`)"
              :name="'repeat' | namespaceInputName(date.name)"
              :value="date.repeat"
              :disabled="disabled"
            />

            <weekly
              v-if="date.repeat.frequency === 'WEEKLY'"
              :id="'repeat-settings' | namespaceInputId(`${id}-${index}`)"
              :name="'repeat' | namespaceInputName(date.name)"
              :value="date.repeat"
              :disabled="disabled"
            />

            <daily
              v-if="date.repeat.frequency === 'DAILY'"
              :id="'repeat-settings' | namespaceInputId(`${id}-${index}`)"
              :name="'repeat' | namespaceInputName(date.name)"
              :value="date.repeat"
              :disabled="disabled"
            />
          </div>
        </div>

        <fieldset class="cdf-date__recurring-end">
          <legend class="cdf-date__legend">{{ 'End' | t() }}</legend>

          <div class="cdf-date__recurring-end-fields">
            <div class="cdf-date__recurring-end-input select">
              <select
                class="cdf-date__select"
                :name="'repeat[endsAfter]' | namespaceInputName(date.name)"
                :id="'repeat-ends-after' | namespaceInputId(`${id}-${index}`)"
                v-model="date.repeat.endsAfter"
                :disabled="disabled"
                v-bind:class="{ disabled: disabled }"
              >
                <option value="never">{{ 'Never' | t() }}</option>
                <option value="after">{{ 'After' | t() }}</option>
                <option value="onDate">{{ 'On Date' | t() }}</option>
              </select>
            </div>

            <div class="cdf-date__recurring-end-input" v-if="date.repeat.endsAfter === 'after'">
              <label class="visually-hidden" :for="'repeat-end-after' | namespaceInputId(`${id}-${index}`)">
                {{ 'Number of Executions' | t() }}
              </label>

              <div class="flex">
                <div class="textwrapper">
                  <input
                    :id="'repeat-count' | namespaceInputId(`${id}-${index}`)"
                    :name="'repeat[count]' | namespaceInputName(date.name)"
                    :value="date.repeat.count"
                    type="number"
                    min="1"
                    steps="1"
                    class="nicetext text"
                    :disabled="disabled"
                    v-bind:class="{ disabled: disabled }"
                  />
                </div>

                <div class="label light">{{ 'executions' | t() }}</div>
              </div>
            </div>

            <input type="hidden" :name="'repeat[endsOn][raw]' | namespaceInputName(date.name)" :value="date.repeat.endsOn | dateRaw" v-if="date.repeat.endsAfter === 'onDate'" />
            <v-date-picker v-if="date.repeat.endsAfter === 'onDate'" v-model="date.repeat.endsOn" mode="date" is24hr class="cdf-date__recurring-end-input">
              <template v-slot="{ inputValue, inputEvents }">
                <label class="visually-hidden" :for="'repeat-end-on' | namespaceInputId(`${id}-${index}`)">
                  {{ 'End on Date' | t() }}
                </label>

                <input
                  :id="'repeat-ends-on' | namespaceInputId(`${id}-${index}`)"
                  :name="'repeat[endsOn][formatted]' | namespaceInputName(date.name)"
                  :value="inputValue"
                  v-on="inputEvents"
                  class="nicetext text"
                  :disabled="disabled"
                  v-bind:class="{ disabled: disabled }"
                />
              </template>
            </v-date-picker>
          </div>
        </fieldset>

        <fieldset class="cdf-date__recurring-exceptions">
          <legend class="cdf-date__legend">{{ 'Exceptions' | t() }}</legend>

          <div class="cdf-date__exceptions">
            <div v-for="(exception, index) in date.repeat.exceptions" :key="index" class="cdf-date__exception">
              <input type="hidden" :name="`repeat[exceptions][${index}][raw]` | namespaceInputName(date.name)" :value="date.repeat.exceptions[index] | dateRaw" />
              <v-date-picker v-model="date.repeat.exceptions[index]" mode="date" is24hr class="cdf-date__exception-input">
                <template v-slot="{ inputValue, inputEvents }">
                  <label class="visually-hidden" :for="'exception' | namespaceInputId(`${id}-${index}`)">
                    {{ 'Exception on Date' | t() }}
                  </label>

                  <input
                    :id="'exception' | namespaceInputId(`${id}-${index}`)"
                    :name="`repeat[exceptions][${index}][formatted]` | namespaceInputName(date.name)"
                    :value="inputValue"
                    v-on="inputEvents"
                    class="nicetext text"
                    :disabled="disabled"
                    v-bind:class="{ disabled: disabled }"
                  />
                </template>
              </v-date-picker>

              <button class="btn delete icon" v-on:click="deleteException(date, index, $event)" :title="'Delete exception' | t()" v-if="!disabled"></button>
            </div>

            <div class="cdf-date__exception-add" v-if="!disabled">
              <button class="btn add icon" v-on:click="addException(date, $event)">
                {{ 'Add exception' | t() }}
              </button>
            </div>
          </div>
        </fieldset>
      </fieldset>

      <ul class="cdf-date__errors" v-if="date.hasErrors()">
        <template v-for="errors in date.errors">
          <li v-for="error in errors">{{ error }}</li>
        </template>
      </ul>
    </div>

    <div class="cdf-date__add" v-if="!staticItems">
      <button class="btn add icon" v-on:click="add($event)" v-bind:disabled="!canAdd">
        {{ 'Add date' | t() }}
      </button>
    </div>
  </div>
</template>

<script>
  import LightswitchField from './LightswitchField.vue';
  import Yearly from './Yearly.vue';
  import Monthly from './Monthly.vue';
  import Weekly from './Weekly.vue';
  import Daily from './Daily.vue';

  import EventModel from '../models/EventModel';

  export default {
    name: 'RecurringDates',
    components: {
      LightswitchField,
      Yearly,
      Monthly,
      Weekly,
      Daily,
    },
    props: {
      name: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      settings: {
        type: Object,
        default: {},
      },
      value: {
        type: [String, Array],
        required: true,
        default: [],
      },
    },
    data: function () {
      return {
        settings: {
          min: 0,
          max: null,
          allowRecurring: true,
          static: false,
          fixed: false,
          ...this.settings,
        },
        dates: this.value.map((event) => new EventModel(this.name, event.id, event.fields, event.errors)),
      }
    },
    computed: {
      disabled() {
        return this.settings.fixed;
      },
      staticItems() {
        return this.settings.fixed || this.settings.static;
      },
      canAdd() {
        return !this.settings.fixed || !this.settings.static || !this.settings.max || this.dates.length < this.settings.max;
      },
    },
    created() {
      if (this.dates.length < this.settings.min) {
        const missing = this.settings.min - this.dates.length;

        for (let i = 0; i < missing; i++) {
          this.dates.push(new EventModel(this.name, `NEW${i}`));
        }
      }
    },
    methods: {
      remove(id, $event) {
        $event.preventDefault();

        if (!this.settings.static) {
          this.dates = this.dates.filter(date => date.id !== id);
        }
      },
      add($event) {
        $event.preventDefault();

        if (this.canAdd) {
          this.dates.push(new EventModel(this.name, `NEW${this.dates.length}`));
        }
      },
      addException(date, $event) {
        $event.preventDefault();
        date.repeat.exceptions.push(new Date());
      },
      deleteException(date, index, $event) {
        $event.preventDefault();
        date.repeat.exceptions.splice(index, 1);
      },
    },
  };
</script>

<style lang="scss">
  @import '~@craftcms/sass/mixins';

  .cdf-date {
    padding-top: 8px;
  }

  .cdf-date__entry {
    padding: 8px 16px 24px;
    border: 1px solid $hairlineColor;
    border-radius: $largeBorderRadius;
    background-color: $grey050;

    & + & {
      margin-top: 16px;
    }
  }

  .cdf-date__toolbar {
    border-bottom: 1px solid $hairlineColor;
    color: $grey400;
    display: flex;
    height: 30px;
    justify-content: space-between;
    line-height: 30px;
    margin-bottom: 16px;
  }

  .cdf-date__toolbar-label--error {
    color: $errorColor;
  }

  .cdf-date__fieldset {
    margin-top: 0;
  }

  .cdf-date__legend {
    color: $grey600;
    font-weight: bold;
    margin-bottom: 8px;
  }

  .cdf-date__date-input {
    display: flex;
    flex-wrap: wrap;
    margin: -5px -10px;

    > * {
      margin: 5px 10px;
    }
  }

  .cdf-date__start-end {
    display: flex;
    position: relative;
    max-width: 350px;
  }

  .cdf-date__start-end-separator {
    align-self: center;
    color: $grey600;
    font-weight: bold;
    padding-left: 10px;
    padding-right: 10px;
  }

  .cdf-date__input {
    line-height: 22px;
  }

  .cdf-date__recurring {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    > * {
      margin: 10px;
    }
  }

  .cdf-date__recurring-end-fields {
    align-items: flex-start;
    display: flex;
    flex-wrap: wrap;
    margin: -10px;

    > * {
      margin: 10px;
    }
  }

  .cdf-date__exception {
    margin-bottom: 8px;
  }

  .cdf-date__errors {
    color: $errorColor;
    list-style-type: square;
    padding-left: 20px;
  }

  .cdf-date__add {
    border-top: 1px solid $hairlineColor;
    display: flex;
    justify-content: flex-end;
    margin-top: 16px;
    padding-top: 16px;
  }
</style>
