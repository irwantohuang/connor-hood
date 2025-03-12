<script setup lang="ts">
import Footer from '@/components/layouts/Footer.vue';
import Header from '@/components/layouts/Header.vue';

</script>

<template>
    <div class="flex flex-col h-screen">
        <Header />
        <slot />
        <Footer />
    </div>
</template>