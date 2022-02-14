<template>
  <fieldset class="cdf-daily">
    <legend class="visually-hidden">{{ 'Repeat daily' | t() }}</legend>

    <div class="cdf-daily__option">
      <div class="cdf-daily__option-seperator">{{ 'every' | t() }}</div>

      <div class="cdf-daily__option-input">
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

      <div class="cdf-daily__option-seperator">{{ 'day(s)' | t() }}</div>
    </div>
  </fieldset>
</template>

<script>
  export default {
    name: 'Daily',
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
  };
</script>

<style lang="scss">
  .cdf-daily__option {
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
