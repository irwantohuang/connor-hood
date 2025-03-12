<script setup lang="ts">
import Input from '@/components/ui/Input.vue';
import Label from '@/components/ui/Label.vue';
import { useFormStore } from '@/stores/formStores';
import { toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const basePath = 'form_page.step_content.form_approval.company_information'
const formStore = useFormStore();
const { companyInformation } = toRefs(formStore);
</script>


<template>
    <div>
        <h1 class="text-lg md:text-xl font-bold mb-3">{{ t(`${basePath}.title`) }}</h1>
        <div class="space-y-4">
            <div>
                <Label id="company_name">
                    {{ t(`${basePath}.fields.company_name.label`) }}
                    <span class="text-[#989898]">{{ t(`${basePath}.fields.company_name.note`) }}</span>
                </Label>
                <Input 
                    v-model="companyInformation.companyName" 
                    type="text" 
                    id="company_name" 
                    :placeholder="t(`${basePath}.fields.company_name.placeholder`)" 
                />
            </div>
            <div>
                <Label id="company_pic" required>
                    {{ t(`${basePath}.fields.company_pic.label`) }}
                </Label>
                <Input 
                    v-model="companyInformation.pic" 
                    type="text" 
                    id="company_pic" 
                    :placeholder="t(`${basePath}.fields.company_pic.placeholder`)"
                />
            </div>
            <div>
                <Label id="email">
                    {{ t(`${basePath}.fields.email.label`) }}
                    <span class="text-[#989898]">{{ t(`${basePath}.fields.email.note`) }}</span>
                </Label>
                <Input 
                    v-model="companyInformation.email" 
                    type="text" 
                    id="email" 
                    :placeholder="t(`${basePath}.fields.email.placeholder`)" 
                />
            </div>
        </div>
    </div>
</template>