<script setup lang="ts">
import Dropdown from '@/components/ui/Dropdown.vue';
import Input from '@/components/ui/Input.vue';
import Label from '@/components/ui/Label.vue';
import { BANK_NAME } from '@/mocks/banks';
import { useFormStore } from '@/stores/formStores';
import { ref, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const basePath = 'form_page.step_content.form_approval.bank_information'
const formStore = useFormStore();
const { bankInformation } = toRefs(formStore);
const isDropdownOpen = ref(false);

const selectBankName = (item: string) => {
    bankInformation.value.bankName = item;
    isDropdownOpen.value = false;
}


const toggleDropdown = () => {
    isDropdownOpen.value = !isDropdownOpen.value;
};

const validate = () => {
    bankInformation.value.accountName = "Account Name"
}

</script>


<template>
    <div>
        <h1 class="text-lg md:text-xl font-bold mb-3">{{ t(`${basePath}.title`) }}</h1>
        <div class="space-y-4">
            <div>
                <Label id="bank_name" required>
                    {{ t(`${basePath}.fields.bank_name.label`) }}
                </Label>
                <div class="relative inline-block w-full">
                    <button 
                        @click.prevent="toggleDropdown"
                        class="cursor-pointer dropdown-toggle flex items-center justify-between gap-2 w-full rounded border border-[#D6D6D6] outline-none p-3"
                    >
                        {{ 
                            bankInformation.bankName 
                            ? bankInformation.bankName :
                            t(`${basePath}.fields.bank_name.placeholder`) 
                        }}
                    </button>
                    <Dropdown 
                        v-if="isDropdownOpen" 
                        :options="BANK_NAME" 
                        :isOpen="isDropdownOpen"
                        @select="selectBankName" 
                    />
                </div>
            </div>
            <div>
                <Label id="account_number" required>
                    {{ t(`${basePath}.fields.account_number.label`) }}
                </Label>
                <div class="relative">
                    <Input 
                        v-model="bankInformation.accountNumber" 
                        type="number" 
                        id="account_number"
                        :placeholder="t(`${basePath}.fields.account_number.placeholder`)" 
                    />
                    <button 
                        @click.prevent="validate" 
                        class="text-[#0023BD] text-sm font-semibold absolute top-1/2 -translate-y-1/2 right-3"
                    >
                        Validate
                    </button>
                </div>
                
                <p class="mt-2 text-[#E21717] text-xs md:text-sm">{{ t(`${basePath}.fields.account_number.message`) }}</p>
            </div>
            <div>
                <Label id="account_name" required>
                    {{ t(`${basePath}.fields.account_name.label`) }}
                </Label>
                <Input v-model="bankInformation.accountName" type="text" id="account_name" disabled placeholder="" />
            </div>
        </div>
    </div>
</template>