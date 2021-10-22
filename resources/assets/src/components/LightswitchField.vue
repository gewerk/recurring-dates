<template>
  <div class="lightswitch-outer-container">
    <span :id="'desc' | namespaceInputId(id)" class="visually-hidden">
      {{ 'Check for {onLabel}.' | t('app', { onLabel: onLabel }) }}
    </span>
    <div class="lightswitch-inner-container">
      <button ref="lightSwitch" class="lightswitch" type="button" role="checkbox" :id="id" :aria-describedby="'desc' | namespaceInputId(id)">
        <div class="lightswitch-container">
          <div class="handle"></div>
          <input type="hidden" :name="name" :disabled="disabled" />
        </div>
      </button>
      <span data-toggle="on" aria-hidden="true" v-if="onLabel">{{ onLabel }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'LightswitchField',
    props: {
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        default: null,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      on: {
        type: Boolean,
        default: false,
      },
      value: {
        type: String,
        default: null,
      },
      onLabel: {
        type: String,
        default: null,
      },
    },
    mounted() {
      Garnish.$doc.ready(() => {
        const lightSwitch = $(this.$refs.lightSwitch).data('lightswitch') ?? new Craft.LightSwitch(this.$refs.lightSwitch);

        if (this.on) {
          lightSwitch.turnOn(false);
        }

        lightSwitch.setSettings({
          onChange: (value) => {
            this.$emit('change', !!value);
          },
        });
      });
    },
  };
</script>
