<script setup lang="ts">
import FileUpload from '@/components/ui/FileUpload.vue';
import Input from '@/components/ui/Input.vue';
import Label from '@/components/ui/Label.vue';
import { useFormStore } from '@/stores/formStores';
import { toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const basePath = 'form_page.step_content.form_approval.personal_information'
const formStore = useFormStore();
const { personalInformation } = toRefs(formStore);
</script>

<template>
    <div>
        <h1 class="text-lg md:text-xl font-bold mb-3">{{ t(`${basePath}.title`) }}</h1>
        <div class="space-y-4">
            <div>
                <Label id="full_name" required>
                    {{ t(`${basePath}.fields.name.label`) }}
                </Label>
                <Input 
                    v-model="personalInformation.fullName" 
                    type="text" 
                    id="full_name" 
                    :placeholder="t(`${basePath}.fields.name.placeholder`)" 
                />
            </div>

            <div>
                <Label id="id_card" required>
                    {{ t(`${basePath}.fields.id_card.label`) }}
                </Label>
                <Input 
                    v-model="personalInformation.idCard" 
                    type="number" 
                    id="id_card" 
                    :placeholder="t(`${basePath}.fields.id_card.placeholder`)" 
                />
            </div>

            <FileUpload 
                v-model="personalInformation.idCardPhoto" 
                :label="t(`${basePath}.fields.id_card_photo.label`)" 
                id="id_card_photo"
                :placeholder="t(`${basePath}.fields.id_card_photo.placeholder`)" 
            />

            <div>
                <Label id="npwp" required>
                    {{ t(`${basePath}.fields.npwp.label`) }}
                </Label>
                <Input 
                    v-model="personalInformation.npwp" 
                    type="number" 
                    id="npwp" 
                    :placeholder="t(`${basePath}.fields.npwp.placeholder`)" 
                />
            </div>

            <FileUpload 
                v-model="personalInformation.npwpPhoto" 
                :label="t(`${basePath}.fields.npwp_photo.label`)" 
                id="npwp_photo"
                :placeholder="t(`${basePath}.fields.npwp_photo.placeholder`)" 
            />

            <div>
                <Label id="phone_number" required>
                    {{ t(`${basePath}.fields.phone_number.label`) }}
                </Label>
                <div class="relative">
                    <div
                        class="absolute top-0 left-0 flex items-center gap-2 bg-[#F8F8F8] py-2.5 px-3 md:p-3 border border-[#D6D6D6] rounded-l">
                        <img class="size-6" src="/img/svg/flag-indonesia.svg" alt="Flag indonesia">
                        <svg class="size-4 text-[#525252]" data-slot="icon" fill="none" stroke-width="2"
                            stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"></path>
                        </svg>
                    </div>
                    <div class="absolute text-sm md:text-base text-[#525252] font-medium left-[84px] top-1/2 -translate-y-1/2">+62</div>

                    <input 
                        v-model="personalInformation.phoneNumber" 
                        type="number" 
                        id="phone_number" 
                        placeholder="1234567890"
                        class="w-full block rounded border border-[#D6D6D6] outline-none py-3 pr-3 pl-[119px] md:pl-[123px] placeholder:text-[#989898]"
                    />
                </div>
            </div>
        </div>
    </div>
</template>