<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="bg-gray-100 font-serif">
    <Navbar class="z-50"/>
    <main class="min-h-screen">
      <slot />
    </main>
  </div>
</template>

