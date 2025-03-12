import { defineStore } from "pinia";
import { ref } from "vue";

type LanguageType = 'id' | 'en'

export const useLanguageStore = defineStore('language', () => {
    const locale = localStorage.getItem("language") as LanguageType

    const language = ref<LanguageType>(locale
        ? locale
        : navigator.language.startsWith('id') ? 'id' : 'en'
    )

    const setLanguage = (lang: LanguageType) => {
        language.value = lang;
        localStorage.setItem("language", lang);
    }

    return {
        language,
        setLanguage
    }
})