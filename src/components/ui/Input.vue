<script setup lang="ts">
interface InputProps {
    id: string,
    type: string,
    placeholder?: string
    modelValue: string | number
}

defineProps<InputProps>();
const emits = defineEmits(['update:modelValue']);
</script>

<template>
    <input 
        :type="type"
        :id="id"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emits('update:modelValue', ($event.target as HTMLInputElement).value)"
        class="w-full block rounded border border-[#D6D6D6] outline-none p-3 placeholder:text-[#989898] disabled:bg-[#EDEDED]" 
    />
</template>
