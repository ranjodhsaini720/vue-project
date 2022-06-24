<script setup>
import { RouterView } from "vue-router";
import Navbar from "./navbar.vue";
import Footer from "./footer.vue";
</script>

<template>
  <header>
    <Navbar />
  </header>

  <RouterView />

  <footer>
    <Footer />
  </footer>
</template>

<style></style>