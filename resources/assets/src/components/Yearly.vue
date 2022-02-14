<template>
  <fieldset class="cdf-yearly">
    <legend class="visually-hidden">{{ 'Repeat yearly' | t() }}</legend>

    <div class="cdf-yearly__option">
      <div class="cdf-yearly__option-seperator">{{ 'every' | t() }}</div>

      <div class="cdf-yearly__option-input">
        <label class="visually-hidden" :for="'interval' | namespaceInputId(id)">{{ 'Repeat interval' | t() }}</label>
        <input
          class="nicetext text"
          type="number"
          min="1"
          steps="1"
          :name="'interval' | namespaceInputName(name)"
          v-model="value.interval"
          :id="'interval' | namespaceInputId(id)"
          :disabled="disabled"
          v-bind:class="{ disabled: disabled }"
        />
      </div>

      <div class="cdf-yearly__option-seperator">{{ 'years(s)' | t() }}</div>
    </div>

    <div class="cdf-yearly__option">
      <div class="cdf-yearly__option-radio">
        <label class="visually-hidden" :for="'mode-same-day' | namespaceInputId(id)">{{ 'Repeat yearly on' | t() }}</label>
        <input
          type="radio"
          :name="'mode' | namespaceInputName(name)"
          value="sameDay"
          v-model="mode"
          :id="'mode-same-day' | namespaceInputId(id)"
          :disabled="disabled"
          v-bind:class="{ disabled: disabled }"
        />
      </div>

      <div class="cdf-yearly__option-seperator">{{ 'on the same day' | t() }}</div>
    </div>

    <div class="cdf-yearly__option">
      <div class="cdf-yearly__option-radio">
        <label class="visually-hidden" :for="'mode-on' | namespaceInputId(id)">{{ 'Repeat yearly on' | t() }}</label>
        <input
          type="radio"
          :name="'mode' | namespaceInputName(name)"
          value="on"
          v-model="mode"
          :id="'mode-on' | namespaceInputId(id)"
          :disabled="disabled"
          v-bind:class="{ disabled: disabled }"
        />
      </div>

      <div class="cdf-yearly__option-seperator">{{ 'on' | t() }}</div>

      <div class="cdf-yearly__option-inputs cdf-yearly__option-inputs--flex">
        <div class="cdf-yearly__option-input" v-bind:class="{ 'cdf-yearly__option-input--disabled': mode !== 'on' }">
          <option-buttons
            :disabled="disabled || mode !== 'on'"
            :id="'month' | namespaceInputId(id)"
            :name="'month' | namespaceInputName(name)"
            :value="value.month || []"
            :options="months"
            :fixedWidth="true"
            :columns="3"
            :small="true"
          />
        </div>

        <div class="cdf-yearly__option-input" v-bind:class="{ 'cdf-yearly__option-input--disabled': mode !== 'on' }">
          <option-buttons
            :disabled="disabled || mode !== 'on'"
            :id="'month-day' | namespaceInputId(id)"
            :name="'monthDay' | namespaceInputName(name)"
            :value="value.monthDay || []"
            :options="monthDays"
            :fixedWidth="true"
            :small="true"
          />
        </div>
      </div>
    </div>

    <div class="cdf-yearly__option">
      <div class="cdf-yearly__option-radio">
        <label class="visually-hidden" :for="'mode-on-the' | namespaceInputId(id)">{{ 'Repeat yearly on the' | t() }}</label>
        <input
          type="radio"
          :name="'mode' | namespaceInputName(name)"
          value="onThe"
          v-model="mode"
          :id="'mode-on-the' | namespaceInputId(id)"
          :disabled="disabled"
          v-bind:class="{ disabled: disabled }"
        />
      </div>

      <div class="cdf-yearly__option-seperator">{{ 'on the' | t() }}</div>

      <div class="cdf-yearly__option-inputs">
        <div class="cdf-yearly__option-input" v-bind:class="{ 'cdf-yearly__option-input--disabled': mode !== 'onThe' }">
          <option-buttons
            :disabled="disabled || mode !== 'onThe'"
            :id="'position' | namespaceInputId(id)"
            :name="'position' | namespaceInputName(name)"
            :value="value.position || []"
            :options="positions"
          />
        </div>

        <div class="cdf-yearly__option-input" v-bind:class="{ 'cdf-yearly__option-input--disabled': mode !== 'onThe' }">
          <option-buttons
            :disabled="disabled || mode !== 'onThe'"
            :id="'day' | namespaceInputId(id)"
            :name="'day' | namespaceInputName(name)"
            :value="value.day || []"
            :options="days"
          />
        </div>

        <div class="cdf-yearly__option-seperator">{{ 'of' | t() }}</div>

        <div class="cdf-yearly__option-input" v-bind:class="{ 'cdf-yearly__option-input--disabled': mode !== 'onThe' }">
          <option-buttons
            :disabled="disabled || mode !== 'onThe'"
            :id="'month' | namespaceInputId(id)"
            :name="'month' | namespaceInputName(name)"
            :value="value.month || []"
            :options="months"
            :fixedWidth="true"
            :columns="3"
            :small="true"
          />
        </div>
      </div>
    </div>
  </fieldset>
</template>

<script>
  import OptionButtons from './OptionButtons.vue';

  import { POSITIONS } from '../constants';
  import { range, fromPairs } from 'lodash';

  export default {
    name: 'Yearly',
    components: {
      OptionButtons,
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
      value: {
        type: Object,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        months: Craft.RecurringDatesLocales.Months,
        days: Craft.RecurringDatesLocales.Weekdays,
        positions: POSITIONS,
        monthDays: fromPairs(range(1, 32).map((day) => [day, day])),
        mode: this.value.position ? 'onThe' : (this.value.monthDay ? 'on' : 'sameDay'),
      };
    },
  };
</script>

<style lang="scss">
  .cdf-yearly__option {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;

    > *:not(:first-child) {
      padding-left: 10px;
    }

    & + & {
      margin-top: 16px;
    }
  }

  .cdf-yearly__option-radio,
  .cdf-yearly__option-seperator {
    height: 34px;
    display: flex;
    align-items: center;
  }

  .cdf-yearly__option-inputs {
    margin: -4px;

    > * {
      margin: 4px;
    }
  }

  .cdf-yearly__option-inputs--flex {
    display: flex;
    flex-wrap: wrap;
  }

  .cdf-yearly__option-input--disabled {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
</style>
