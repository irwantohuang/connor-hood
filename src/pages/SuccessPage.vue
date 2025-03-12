<template>
    <div class="flex-grow pt-4 pb-12 md:py-8 px-4">
        <div
            class="rounded-lg pt-5 md:pt-6 pb-7 md:pb-8 px-4 md:px-5 bg-white border border-[#EDEDED] max-w-[690px] mx-auto">
            <div class="size-16 md:size-[72px] flex items-center justify-center mb-5 mx-auto">
                <img class="size-[52px] md:size-[60px]" src="/img/svg/check-green.svg" alt="Check green">
            </div>
            <div class="text-center">
                <div class="text-[#080808] font-bold text-xl md:text-2xl mb-3">{{ $t('success_page.title') }}</div>
                <div class="text-[#525252] text-sm md:text-base">{{ $t('success_page.description') }}</div>
            </div>
        </div>
    </div>
</template>