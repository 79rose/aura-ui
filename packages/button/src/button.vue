<script setup lang="ts">
import { hello } from '@auraui/shared';

const props = withDefaults(defineProps<{
  text?: string;
}>(), {
  text: 'World',
});

function clickHandler() {
  hello(props.text);
}
</script>

<template>
  <button
    class="aura-button"
    @click="clickHandler"
  >
    <slot />
  </button>
</template>
