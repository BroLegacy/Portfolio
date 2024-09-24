<script setup>
import Footer from './components/Footer.vue'
import Pointer from "./components/Pointer.vue";
</script>

<template>
  <Pointer/>
  <div id="app">
    <router-view />
  </div>
  <Footer/>
</template>