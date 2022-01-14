<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="bg-gray-50 font-serif">
    <Navbar class="z-50"/>
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
  </div>
</template>

