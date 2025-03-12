<script setup lang="ts">
import { useLanguageStore } from '@/stores/languageStores';
import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale } = useI18n();
const languageStore = useLanguageStore()
const language = computed(() => languageStore.language);

onMounted(() => {
    const storage = localStorage.getItem("language");
    if (storage) {
        locale.value = storage
    } else {
        localStorage.setItem("language", language.value)
    }
})

const handleClickLanguage = (lang: "id" | "en") => {
    languageStore.setLanguage(lang);
    locale.value = lang;
}
</script>

<template>
    <header class="w-full border-b border-[#EDEDED] bg-white">
        <div class="flex items-center justify-between mx-auto max-w-7xl py-4 px-4 lg:px-16">
            <router-link :to="{ name: 'Home' }">
                <img class="size-10 md:size-12" src="/img/logo.svg" alt="ButterPOS Logo">
            </router-link>
            <div class="inline-flex items-center gap-0.5 p-1 cursor-pointer rounded-md bg-[#EDEDED]">
                <button 
                    @click.prevent="handleClickLanguage('id')"
                    class="group p-2 rounded flex items-center gap-1.5"
                    :class="language === 'id' ? 'bg-white' : 'bg-[#EDEDED]'"
                >
                    <img class="size-4 object-contain" src="/img/id-flag.svg" alt="Indonesia lang flag">
                    <div class="text-[#080808] group-peer-checked:text-[#989898] text-sm font-semibold">ID</div>    
                </button>
                <button 
                    @click.prevent="handleClickLanguage('en')"
                    class="group p-2 rounded bg-[#EDEDED] peer-checked:bg-white flex items-center gap-1.5"
                    :class="language === 'en' ? 'bg-white' : 'bg-[#EDEDED]'"
                >
                    <img class="size-4 object-contain" src="/img/en-flag.svg" alt="English lang flag">
                    <div class="text-[#989898] group-peer-checked:text-[#080808] text-sm font-semibold">EN</div>
                </button>
            </div>
        </div>
    </header>
</template>