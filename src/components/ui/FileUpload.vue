<script setup lang="ts">
import Label from '@/components/ui/Label.vue';
import { ref } from 'vue';

interface FileUploadProps {
    label: string
    id: string,
    modelValue: File | null
    placeholder?: string
}

const props = defineProps<FileUploadProps>()
const emits = defineEmits(['update:modelValue'])


const fileName = ref<string | null>(props.modelValue ? props.modelValue.name : null);


const handleFileChange = (event: Event) => {
    const target = event.target as HTMLInputElement;

    if (target.files && target.files.length > 0) {
        const file = target.files[0];
        fileName.value = file.name;

        emits('update:modelValue', file)
    }
}

</script>

<template>
    <div>
        <Label id="upload_npwp_title" required class="font-medium block mb-2">{{ label }}</Label>
        <label :for="id"
            class="block rounded-lg bg-[#F8F8F8] border border-dashed border-[#D6D6D6] p-[18px] cursor-pointer">
            <input :id="id" type="file" hidden @change="handleFileChange">
            <div class="flex items-center justify-center gap-2">
                <img class="size-5 object-contain" src="/img/svg/upload.svg" alt="Upload icon">
                <div class="text-sm font-medium text-[#797979]">{{ placeholder }}</div>
            </div>
        </label>
        <div v-if="fileName"
            class="mt-3 bg-[#F8F8F8] border border-dashed border-[#D6D6D6] px-3 py-[18px] rounded-lg flex items-center justify-between gap-2">
            <div class="flex items-center gap-2">
                <svg class="text-[#080808] size-5" fill="none" stroke-width="1.5" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z">
                    </path>
                </svg>
                <div class="text-[#0433FF] font-medium text-sm underline">{{ fileName }}</div>
            </div>
            <div class="flex items-center gap-3">
                <img class="cursor-pointer size-5" src="/img/svg/edit.svg" alt="Edit icon" />
                <svg class="cursor-pointer size-5 text-[#CA0A0A]" fill="none" stroke-width="2" stroke="currentColor"
                    viewBox="0 0 24 24" @click="fileName = null">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0">
                    </path>
                </svg>
            </div>
        </div>
    </div>
</template>