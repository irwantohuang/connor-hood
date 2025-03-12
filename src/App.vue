<script setup lang="ts">
import Layout from './layouts/Layout.vue';

</script>

<template>
  <Layout>
    <main class="flex-grow pt-4 pb-12 md:py-10 px-4">
      <RouterView />
    </main>
  </Layout>
</template>