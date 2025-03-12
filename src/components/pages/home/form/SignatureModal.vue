<script setup lang="ts">
import { useFormStore } from '@/stores/formStores';
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
// @ts-ignore
import { VueSignaturePad } from 'vue-signature-pad';

const basePath = 'form_page.step_content.form_approval.signature'

const { t } = useI18n();
const emits = defineEmits(['close']);
const signaturePad = ref<InstanceType<typeof VueSignaturePad> | null>(null);
const formStore = useFormStore();

const clear = () => signaturePad.value?.clearSignature();

const save = () => {
    if (signaturePad.value) {
        const { isEmpty, data } = signaturePad.value.saveSignature();
        if (!isEmpty) {
            formStore.setSignature(data) 
            emits('close')
        }
    }
};

watch(() => formStore.signature, (newSignature) => {
    if (newSignature && signaturePad.value) {
        signaturePad.value.fromDataURL(newSignature); 
    }
});

onMounted(() => {
    if (formStore.signature && signaturePad.value) {
        signaturePad.value.fromDataURL(formStore.signature);
    }
});
</script>

<template>
    <div class="fixed inset-0 w-screen h-screen flex items-center justify-center bg-[#080808]/40 z-10">
        <div class="modal-content bg-white rounded-t-2xl md:rounded-lg px-4 pt-4 pb-6 md:p-6 w-full md:w-[800px]">
            <div class="flex items-center justify-between mb-5">
                <h1 class="text-lg md:text-xl font-semibold text-[#080808]">{{ t(`${basePath}.modal.title`) }}</h1>
                <button @click="emits('close')" class="size-5">
                    <svg class="size-6 text-[#525252]" data-slot="icon" fill="none" stroke-width="1.5"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                    </svg>
                </button>

            </div>
            <VueSignaturePad ref="signaturePad" height="300px"
                class="border border-gray-300 bg-white w-full rounded-md" />

            <div class="flex items-stretch md:items-center justify-end flex-col md:flex-row gap-3 mt-5">
                <button
                    @click.prevent="clear"
                    class="order-2 md:order-1 modal-close cursor-pointer rounded py-3 px-6 bg-white border border-[#B2B2B2] font-semibold text-[#080808]"
                >
                        {{ t(`${basePath}.modal.cancel`) }}
                </button>
                <button
                    @click.prevent="save"
                    class="order-1 md:order-2 cursor-pointer rounded py-3 px-6 bg-[#F4F6FF] text-[#0023BD] hover:bg-slate-200 font-semibold"
                >
                    {{ t(`${basePath}.modal.title`) }}
                </button>
            </div>
        </div>
    </div>
</template>