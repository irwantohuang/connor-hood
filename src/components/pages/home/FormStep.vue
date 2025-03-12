<script setup lang="ts">
import { FORM_STEP } from '@/mocks/formStep';
import { computed, onMounted, ref, watchEffect } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const currentStep = ref("#step-1");

const steps = computed(() => {
    return FORM_STEP.map((step) => ({
        ...step,
        label: t(`form_page.step.${step.labelKey}`)
    }))
})

const updateStep = () => {
    currentStep.value = window.location.hash || "#step-1"
}

onMounted(() => {
    updateStep();
    window.addEventListener("hashchange", updateStep)
})

watchEffect(() => {
    window.removeEventListener('hashchange', updateStep)
})
</script> 

<template>
    <div class="relative rounded-lg border border-[#EDEDED] overflow-hidden">
        <div class="tab-links flex items-center justify-start gap-2 md:gap-4 bg-white p-3 rounded-lg overflow-x-auto">
            <div
                class="absolute md:hidden right-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-l from-white to-white/0">
            </div>
            <div
                class="absolute md:hidden left-0 top-0 h-full w-6 pointer-events-none bg-gradient-to-r from-white to-white/0">
            </div>

            <template v-for="step in steps" :key="step.value">
                <a 
                    :href="step.value" 
                    class="active whitespace-nowrap py-2 px-3 text-sm font-medium rounded"
                    :class="currentStep === step.value ? 'bg-[#F4F6FF] text-[#0023BD]' : 'text-[#525252]'"
                >
                    {{ step.label }}
                </a>
            </template>
        </div>
    </div>
</template>