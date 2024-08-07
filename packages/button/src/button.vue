<script setup lang="ts">
import { computed } from 'vue';
import {
  defaultButtonProps,
  ButtonProps,
  ButtonSlots,
} from './props';

const props = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

defineSlots<ButtonSlots>();

const classes = computed(() => {
  const result: string[] = [];
  if (props.type) {
    result.push(`au-button--${props.type}`);
  }

  if (props.plain) {
    result.push('au-button--plain');
  }

  if (props.disabled) {
    result.push('au-button--disabled');
  }

  return result;
});

</script>

<template>
  <button
    class="au-button"
    :class="classes"
  >
    <slot :type="type" />
  </button>
</template>
