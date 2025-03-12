<script setup lang="ts">
import { computed, ref } from 'vue';


interface DropdownProps {
    options: string[]
}

const props = defineProps<DropdownProps>();
const emits = defineEmits(['select'])

const searchQuery = ref('');
const filteredOptions = computed(() =>
    props.options.filter(option =>
        option.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
)

const selectItem = (item: string) => {
    emits('select', item)
}

</script>


<template>
    <div
        class="absolute dropdown-menu top-[calc(100%+8px)] left-0 pt-4 px-4 w-full border border-[#EDEDED] rounded overflow-hidden bg-white z-20 shadow-lg">
        <div class="relative mb-2">
            <svg class="absolute top-1/2 -translate-y-1/2 left-3 size-4 text-[#989898]" fill="none" stroke-width="1.5"
                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"></path>
            </svg>
            <input v-model="searchQuery" type="text" placeholder="Search"
                class="w-full text-sm block rounded border border-[#D6D6D6] outline-none pl-9 pr-3 py-2 bg-white placeholder:text-[#989898]">
        </div>
        <div class="-mx-4 max-h-[216px] overflow-y-auto">
            <div v-for="(option, index) in filteredOptions" :key="index" @click="selectItem(option)"
                class="dropdown-item py-2 px-4 cursor-pointer text-sm text-[#080808] hover:bg-gray-100">
                {{ option }}
            </div>
        </div>
    </div>
</template>