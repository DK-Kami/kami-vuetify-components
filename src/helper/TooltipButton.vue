<template>
  <VTooltip
    :bottom="bottom"
    :right="right"
    :left="left"
    :top="top"
  >
    <template #activator="{ on }">
      <VBtn
        :class="`${textColor}--text text--darken-${darken} text--lighten-${lighten}`"
        :medium="medium"
        :color="color"
        :small="small"
        :large="large"
        :text="text"
        v-on="on"
        icon
        @click.prevent="$emit('action', $event)"
      >
        <VIcon
          :medium="medium"
          :small="small"
          :large="large"
        >
          <slot name="icon">{{ icon }}</slot>
        </VIcon>
      </VBtn>
    </template>
    <slot name="tooltip">{{ tooltip }}</slot>
  </VTooltip>
</template>

<script>
import {
  VTooltip,
  VIcon,
  VBtn,
} from 'vuetify/lib';

export default {
  name: 'TooltipButton',

  components: {
    VTooltip,
    VIcon,
    VBtn,
  },

  props: {
    text: {
      type: Boolean,
      default: true,
    },
    top: {
      type: Boolean,
      default: true,
    },
    textColor: {
      type: String,
      default: 'grey',
    },
    lighten: { type: [String, Number] },
    darken: { type: [String, Number] },
    tooltip: { type: String },
    bottom: { type: Boolean },
    medium: { type: Boolean },
    right: { type: Boolean },
    small: { type: Boolean },
    large: { type: Boolean },
    left: { type: Boolean },
    color: { type: String },
    icon: { type: String },
  },
};
</script>
