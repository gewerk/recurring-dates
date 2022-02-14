<template>
  <fieldset class="cdf-weekly">
    <legend class="visually-hidden">{{ 'Repeat weekly' | t() }}</legend>

    <div class="cdf-weekly__option">
      <div class="cdf-weekly__option-seperator">{{ 'every' | t() }}</div>

      <div class="cdf-weekly__option-input">
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

      <div class="cdf-weekly__option-seperator">{{ 'weeks(s)' | t() }}</div>
    </div>

    <div class="cdf-weekly__option">
      <option-buttons
        :disabled="disabled"
        :id="'day' | namespaceInputId(id)"
        :name="'day' | namespaceInputName(name)"
        :value="value.day || []"
        :options="days"
      />
    </div>
  </fieldset>
</template>

<script>
  import OptionButtons from './OptionButtons.vue';

  export default {
    name: 'Weekly',
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
        days: Craft.RecurringDatesLocales.Weekdays,
      };
    },
  };
</script>

<style lang="scss">
  @import '~craftcms-sass/mixins';

  .cdf-weekly__option {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    > *:not(:first-child) {
      padding-left: 10px;
    }

    & + & {
      margin-top: 16px;
    }
  }
</style>
