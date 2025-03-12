<script setup lang="ts">

interface LabelProps {
    id: string,
    required?: boolean
}

defineProps<LabelProps>()
</script>

<template>
    <label :for="id" class="font-medium block mb-2">
        <slot></slot>
        <span v-if="required" class="text-[#E21717]"> *</span>
    </label>
</template>