<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
import PortfolioMain from './pages/PortfolioMain.vue'

</script>

<template>

  <header>

    <Header />

  </header>

  <main>

    <RouterView />

  </main>


</template>

<style scoped>

 header {
  width: 100%;
  line-height: 60px;
 }

  main {
   width: 100%;
  }

</style>
