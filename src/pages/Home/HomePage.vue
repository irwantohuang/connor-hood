<script setup lang="ts">
import FormHeader from '@/components/pages/home/FormHeader.vue';
import FormStep from '@/components/pages/home/FormStep.vue';
import { onMounted, ref, watchEffect } from 'vue';
import StepTwo from './Sections/StepTwo.vue';
import StepThree from './Sections/StepThree.vue';
import StepFour from './Sections/StepFour.vue';
import StepFive from './Sections/StepFive.vue';
import StepSix from './Sections/StepSix.vue';
import StepSeven from './Sections/StepSeven.vue';
import StepEight from './Sections/StepEight.vue';
import StepOne from './Sections/StepOne.vue';
import StepNine from './Sections/StepNine.vue';
import { useFormStore } from '@/stores/formStores';
import { useI18n } from 'vue-i18n';
import Loading from '@/components/Loading.vue';
import { useRouter } from 'vue-router';

const currentStep = ref("#step-1");
const { validateForm, errorMessage} = useFormStore();
const { t, locale } = useI18n();
const isLoading = ref(false);
const formStore = useFormStore()
const router = useRouter();

const updateStep = () => currentStep.value = window.location.hash || "#step-1";

onMounted(() => {
    updateStep();
    window.addEventListener("hashchange", updateStep)
})

watchEffect(() => {
    window.removeEventListener('hashchange', updateStep)
})

const getStepNumber = () => {
    const match = currentStep.value.match(/\d+$/);
    return match ? Number(match[0]) : 1;
};

const handleClickStep = (type: string) => {
    let step = getStepNumber();
    type === 'next' ? step++ : step--;

    currentStep.value = `#step-${step}`;
    window.location.hash = currentStep.value
}

const onSubmit = async () => {
    if (!validateForm(t('form_page.step_content.error_message'))) {
        return;
    }

    isLoading.value = true;

    const formData = {
        personal_information: formStore.personalInformation,
        company_information: formStore.companyInformation,
        bank_information: formStore.bankInformation,
        signature: formStore.signature
    }

    try {
        const response = await fetch('https://webhook.site/115b8a34-7206-4e1d-9d20-730e33ceb628', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })

        await new Promise(resolve => setTimeout(resolve, 2000));

        if (!response.ok) throw new Error("Failed to submit");
        console.log("repsonse ", response)
        router.push("/success")
    } catch (error) {
        console.log("error ", error)
    } finally {
        isLoading.value = false;
    }
}

</script>

<template>
    <Loading v-if="isLoading" />
    <div class="tabs max-w-[924px] w-full mx-auto flex flex-col gap-4">
        <FormHeader />
        <FormStep />

        <div class="tab-contents mb-6 md:mb-8">
            <StepOne v-if="currentStep === '#step-1'" />
            <StepTwo v-if="currentStep === '#step-2'" />
            <StepThree v-if="currentStep === '#step-3'" />
            <StepFour v-if="currentStep === '#step-4'" />
            <StepFive v-if="currentStep === '#step-5'" />
            <StepSix v-if="currentStep === '#step-6'" />
            <StepSeven v-if="currentStep === '#step-7'" />
            <StepEight v-if="currentStep === '#step-8'" />
            <StepNine v-if="currentStep === '#step-9'" />

            <p class="mt-2 text-[#E21717] text-xs md:text-sm">{{ errorMessage }}</p>

            <div class="flex items-center flex-col md:flex-row gap-3 md:gap-4 mt-4">
                <button 
                    @click.prevent="handleClickStep('back')"
                    v-if="currentStep !== '#step-1'"
                    class="md:order-1 order-2 rounded bg-white border border-[#B2B2B2] text-[#080808] py-3 px-6 text-center w-full font-semibold cursor-pointer"
                >
                    {{ locale === 'en' ? 'Back' : 'Sebelumnya' }}
                </button>
                <button
                    @click.prevent="handleClickStep('next')"
                    v-if="currentStep !== '#step-9'"
                    class="md:order-2 order-1 rounded bg-[#0433FF] border border-[#0433FF] text-white py-3 px-6 text-center w-full font-semibold cursor-pointer"
                >
                    {{ locale === 'en' ? 'Next' : 'Selanjutnya' }}
                </button>
                <button
                    @click.prevent="onSubmit"
                    v-if="currentStep === '#step-9'"
                    class="md:order-2 order-1 rounded bg-[#0433FF] border border-[#0433FF] text-white py-3 px-6 text-center w-full font-semibold cursor-pointer"
                >
                    Submit
                </button>

            </div>
        </div>
    </div>
</template>