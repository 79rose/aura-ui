<script setup lang="ts">
import { computed } from 'vue';
import { defaultButtonProps, ButtonProps } from './button';

const praus = withDefaults(
  defineProps<ButtonProps>(),
  defaultButtonProps(),
);

const classes = computed(() => {
  const result: string[] = [];
  if (praus.type) {
    result.push(`au-button--${praus.type}`);
  }

  if (praus.plain) {
    result.push('au-button--plain');
  }

  if (praus.disabled) {
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
    <slot />
  </button>
</template>
