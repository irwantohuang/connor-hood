<script setup lang="ts">
import StepContent from '@/components/pages/home/StepContent.vue';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, messages, locale } = useI18n();
const title = t('form_page.step_content.chapter_5.title');
const subtitle = t('form_page.step_content.chapter_5.subtitle');
const content = computed(() => (messages.value as any)[locale.value]?.form_page?.step_content?.chapter_5?.content.fields || []);
const bankAccountChild = computed(() => (messages.value as any)[locale.value]?.form_page?.step_content?.chapter_5?.content.bank_account.fields || []);
</script>
<template>
    <StepContent :title="title" :subtitle="subtitle" step="#step-1">
        <template #custom-content>
            <div>{{ $t('form_page.step_content.chapter_5.content.description') }}</div>

            <ul class="list-decimal list-outside pl-5 font-medium">
                <li v-for="(text, index) in content" :key="index">
                    {{ text }}
                </li>
                <li>
                    {{ $t('form_page.step_content.chapter_5.content.bank_account.title') }}
                </li>
                <ul class="list-disc list-outside pl-6">
                    <li v-for="(text, index) in bankAccountChild" :key="index">
                        {{ text }}
                    </li>
                </ul>
            </ul>
        </template>
    </StepContent>
</template>