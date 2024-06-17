<script setup>
import Head from './components/HeadSection.vue';
import LogoTitle from './components/LogoTitle.vue';
import Navbar from './components/NavBar.vue';
import Footer from './components/FooBar.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <main class="app">
    <Head />
    <LogoTitle />
    <Navbar />
    <RouterView />
    <Footer />
  </main>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
