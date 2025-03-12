<script setup lang="ts">
import BankInformation from '@/components/pages/home/form/BankInformation.vue';
import CompanyInformation from '@/components/pages/home/form/CompanyInformation.vue';
import PersonalInformation from '@/components/pages/home/form/PersonalInformation.vue';
import SignaturePad from '@/components/pages/home/form/SignaturePad.vue';
</script>

<template>
    <section id="form_persetujuan">
        <form class="flex flex-col text-sm md:text-base gap-6 md:gap-10 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg">
            <PersonalInformation />
            <CompanyInformation />
            <BankInformation />
            <SignaturePad />
        </form>
    </section>
</template>