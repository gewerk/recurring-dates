<template>
  <fieldset class="cdf-monthly">
    <legend class="visually-hidden">{{ 'Repeat monthly' | t() }}</legend>

    <div class="cdf-monthly__option">
      <div class="cdf-monthly__option-seperator">{{ 'every' | t() }}</div>

      <div class="cdf-monthly__option-input">
        <label class="visually-hidden" :for="'interval' | namespaceInputId(id)">{{ 'Repeat interval' | t() }}</label>
        <input class="nicetext text" type="number" min="1" steps="1" :name="'interval' | namespaceInputName(name)" v-model="value.interval" :id="'interval' | namespaceInputId(id)" />
      </div>

      <div class="cdf-monthly__option-seperator">{{ 'month(s)' | t() }}</div>
    </div>

    <div class="cdf-monthly__option">
      <div class="cdf-monthly__option-radio">
        <label class="visually-hidden" :for="'mode-on' | namespaceInputId(id)">{{ 'Repeat monthly on the same day' | t() }}</label>
        <input type="radio" :name="'mode' | namespaceInputName(name)" value="sameDay" v-model="mode" :id="'mode-same-day' | namespaceInputId(id)" />
      </div>

      <div class="cdf-monthly__option-seperator">{{ 'on the same day' | t() }}</div>
    </div>

    <div class="cdf-monthly__option">
      <div class="cdf-monthly__option-radio">
        <label class="visually-hidden" :for="'mode-on' | namespaceInputId(id)">{{ 'Repeat monthly on' | t() }}</label>
        <input type="radio" :name="'mode' | namespaceInputName(name)" value="on" v-model="mode" :id="'mode-on' | namespaceInputId(id)" />
      </div>

      <div class="cdf-monthly__option-seperator">{{ 'on days' | t() }}</div>

      <div class="cdf-monthly__option-input" v-bind:class="{ 'cdf-monthly__option-input--disabled': mode !== 'on' }">
        <option-buttons
          :disabled="mode !== 'on'"
          :id="'month-day' | namespaceInputId(id)"
          :name="'monthDay' | namespaceInputName(name)"
          :value="value.monthDay || []"
          :options="monthDays"
          :fixedWidth="true"
          :small="true"
        />
      </div>
    </div>

    <div class="cdf-monthly__option">
      <div class="cdf-monthly__option-radio">
        <label class="visually-hidden" :for="'mode-on-the' | namespaceInputId(id)">{{ 'Repeat monthly on the' | t() }}</label>
        <input type="radio" :name="'mode' | namespaceInputName(name)" value="onThe" v-model="mode" :id="'mode-on-the' | namespaceInputId(id)" />
      </div>

      <div class="cdf-monthly__option-seperator">{{ 'on the' | t() }}</div>

      <div class="cdf-monthly__option-inputs">
        <div class="cdf-monthly__option-input" v-bind:class="{ 'cdf-monthly__option-input--disabled': mode !== 'onThe' }">
          <option-buttons
            :disabled="mode !== 'onThe'"
            :id="'position' | namespaceInputId(id)"
            :name="'position' | namespaceInputName(name)"
            :value="value.position || []"
            :options="positions"
          />
        </div>

        <div class="cdf-monthly__option-input" v-bind:class="{ 'cdf-monthly__option-input--disabled': mode !== 'onThe' }">
          <option-buttons
            :disabled="mode !== 'onThe'"
            :id="'day' | namespaceInputId(id)"
            :name="'day' | namespaceInputName(name)"
            :value="value.day || []"
            :options="days"
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
    name: 'Monthly',
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
    },
    data() {
      return {
        days: Craft.RecurringDatesLocales.Weekdays,
        positions: POSITIONS,
        monthDays: fromPairs(range(1, 32).map((day) => [day, day])),
        mode: this.value.position ? 'onThe' : (this.value.monthDay ? 'on' : 'sameDay'),
      };
    },
  };
</script>

<style lang="scss">
  .cdf-monthly__option {
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

  .cdf-monthly__option-radio,
  .cdf-monthly__option-seperator {
    height: 34px;
    display: flex;
    align-items: center;
  }

  .cdf-monthly__option-inputs {
    > * + * {
      margin-top: 8px;
    }
  }

  .cdf-monthly__option-input--disabled {
    cursor: not-allowed;
    opacity: 0.4;
    pointer-events: none;
  }
</style>
