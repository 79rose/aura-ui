<script setup lang="ts">
    import { hello } from '@auraui/shared';

    withDefaults(defineProps<{
        modelValue?: string;
    }>(), {
        modelValue: '',
    });

    const emit = defineEmits<{
        (event: 'update:modelValue', val: string): void;
    }>();

    function inputHandler(e: any) {
        const { value } = e.target;
        emit('update:modelValue', value);
        hello(value);
    }

</script>

<template>
    <input class="aura-input" type="text" :value="modelValue" @input="inputHandler">
</template>
