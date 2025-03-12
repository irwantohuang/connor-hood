<script setup lang="ts">

interface StepContentProps {
    step: string,
    title: string,
    subtitle: string,
    content?: string[]
}

defineProps<StepContentProps>();
</script>

<template>
    <section 
        :id="step"
        class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg"
    >
        <h1 class="text-lg md:text-xl font-bold">{{ title }}</h1>
        <h3 class="text-base md:text-lg font-semibold">{{ subtitle }}</h3>

        <ul v-if="content" class="list-decimal list-outside pl-5">
            <li v-for="(text, index) in content" :key="index">
                {{ text }}
            </li>
        </ul>

        <slot name="custom-content" />
        <slot name="footer" /> 
    </section>
</template>