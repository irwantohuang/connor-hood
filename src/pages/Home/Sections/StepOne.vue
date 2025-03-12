<template>
    <section 
        id="pendahuluan"
        class="flex flex-col text-sm md:text-base gap-3 text-[#080808] bg-white border border-[#EDEDED] p-4 md:p-5 rounded-lg"
    >
        <div class="text-lg md:text-xl font-bold">{{ $t('form_page.step_content.introduction.title') }}</div>
        <div>{{ $t('form_page.step_content.introduction.subtitle') }}</div>

        <ol class="list-decimal list-outside pl-5 [&>li::marker]:font-bold">
            <li>
                <span class="font-bold">PT Manhattan Slice Indonesia</span> a
                {{ $t('form_page.step_content.introduction.party_first') }}
            </li>
            <li>
                <span class="font-bold">[Nama Vendor / Perusahaan Vendor]</span>
                {{ $t('form_page.step_content.introduction.party_second') }}
            </li>
        </ol>

        <div>{{ $t('form_page.step_content.introduction.collective_parties') }}</div>
        <div>
            <span class="font-bold">Para Pihak</span> 
            {{ $t('form_page.step_content.introduction.aggreement_statement') }}
        </div>
    </section>
</template>