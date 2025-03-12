<script setup lang="ts">
import { useFormStore } from '@/stores/formStores';
import { ref, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import SignatureModal from './SignatureModal.vue';

const basePath = 'form_page.step_content.form_approval.signature'

const { t } = useI18n();
const showModal = ref(false);
const formStore = useFormStore();
const { signature, setSignature } = toRefs(formStore);


const toggleModal = () => showModal.value = !showModal.value;
const closeModal = (val: boolean) => showModal.value = val;
</script>

<template>
    <SignatureModal v-if="showModal" @close="closeModal" />
    <div>
        <h1 class="text-lg md:text-xl font-bold mb-3">
            {{ t(`${basePath}.title`) }}
            <span class="text-[#E21717]"> *</span>
        </h1>

        <button 
            v-if="!signature" 
            @click.prevent="toggleModal"
            class="cursor-pointer w-full flex items-center justify-center gap-2 h-[164px] bg-[#F4F6FF] border border-dashed border-[#0433FF] rounded-lg"
        >
            <img class="size-5" src="/img/svg/edit.svg" alt="Edit icon">
            <div class="text-sm font-medium text-[#525252]">{{ t(`${basePath}.placeholder`) }}</div>
        </button>

        <div v-else class="mt-3 relative cursor-pointer flex items-center justify-center gap-2 h-[164px] border border-dashed border-[#0433FF] rounded-lg">
            <img class="w-[80%] h-full max-h-[108px] object-contain" :src="signature" alt="Signage">
            <div class="absolute bottom-3 md:bottom-4 right-3 md:right-4 flex items-center gap-4">
                <button class="flex items-center gap-2 cursor-pointer" @click.prevent="toggleModal">
                    <img class="size-5" src="/img/svg/edit-2.svg" alt="Edit icon">
                    <div class="text-sm font-medium text-[#525252]">Edit</div>
                </button>
                <button @click.prevent="setSignature(null)">
                    <svg class="cursor-pointer size-5 text-[#CA0A0A]" data-slot="icon" fill="none" stroke-width="2"
                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">
                        </path>
                    </svg>
                </button>
            </div>
        </div>
    </div>
</template>