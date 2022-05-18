<template>
  <fieldset class="cdf-option-buttons" v-bind:class="{ 'cdf-option-buttons--fixed': fixedWidth, 'cdf-option-buttons--small': small }" :style="`--cdf-option-columns: ${columns};`">
    <legend class="visually-hidden cdf-option-buttons__legend" :for="id">{{ legend }}</legend>

    <div class="cdf-option-buttons__buttons">
      <div class="cdf-option-buttons__button" v-for="(label, key) in options" v-bind:key="key">
        <input class="cdf-option-buttons__button-checkbox" type="checkbox" :value="key" :name="`${name}[]`" :id="key.toString().toLowerCase() | namespaceInputId(id)" v-model="value" :disabled="disabled" />
        <label class="cdf-option-buttons__button-label" :for="key.toString().toLowerCase() | namespaceInputId(id)">{{ label }}</label>
      </div>
    </div>
  </fieldset>
</template>

<script>
  export default {
    name: 'OptionButtons',
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
        type: Array,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      fixedWidth: {
        type: Boolean,
        default: false,
      },
      columns: {
        type: Number,
        default: 7,
      },
      small: {
        type: Boolean,
        default: false,
      },
      options: {
        type: Object,
        default: {},
        required: true,
      },
    },
  };
</script>


<style lang="scss">
  @import '~@craftcms/sass/mixins';

  .cdf-option-buttons {
    overflow: hidden;
    border-radius: $largeBorderRadius;
    display: inline-block;
  }

  .cdf-option-buttons__buttons {
    display: flex;
    flex-wrap: wrap;
    margin-top: -1px;
    overflow: hidden;

    .cdf-option-buttons--fixed & {
      display: grid;
      gap: 1px;
      grid-template-columns: repeat(var(--cdf-option-columns), 1fr);
      grid-template-rows: 1fr;

      &::after {
        content: '';
        width: 1000%;
        background-color: transparentize($inputColor, 0.9);
      }
    }
  }

  .cdf-option-buttons__button {
    margin-right: 1px;
    margin-top: 1px;

    &:last-child {
      margin-right: 0;
    }

    .cdf-option-buttons--fixed & {
      margin: 0;
    }
  }

  .cdf-option-buttons__button-checkbox {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    z-index: -1;

    &:focus {
      outline: 0;
    }
  }

  .cdf-option-buttons__button-label {
    background-color: transparentize($inputColor, 0.75);
    box-sizing: border-box;
    color: $textColor;
    cursor: pointer;
    display: block;
    height: 34px;
    padding: 7px 14px;
    text-align: center;

    .cdf-option-buttons--small & {
      height: 24px;
      padding: 2px 7px;
      font-size: 12px;
    }

    &:hover,
    .cdf-option-buttons__button-checkbox:focus-visible ~ & {
      background-color: transparentize($inputColor, 0.65);
    }

    .cdf-option-buttons__button-checkbox:checked ~ & {
      background-color: $inputColor;
      color: #fff;
    }

    .cdf-option-buttons__button-checkbox:checked ~ &:hover,
    .cdf-option-buttons__button-checkbox:checked:hover ~ & {
      background-color: transparentize($inputColor, 0.2);
      color: #fff;
    }
  }
</style>
