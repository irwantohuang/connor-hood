<script setup lang="ts">
import StepContent from '@/components/pages/home/StepContent.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, messages, locale } = useI18n();
const title = t('form_page.step_content.chapter_6.title');
const subtitle = t('form_page.step_content.chapter_6.subtitle');
const content = computed(() => (messages.value as any)[locale.value]?.form_page?.step_content?.chapter_6?.content || []);

</script>
<template>
    <StepContent :title="title" :subtitle="subtitle" :content="content" step="#step-1" />
</template>