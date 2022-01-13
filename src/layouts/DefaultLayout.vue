<script setup>
import Navbar from "@/components/Navbar.vue";
</script>

<template>
  <div class="bg-gray-100 font-serif">
    <Navbar class="z-50"/>
    <main class="min-h-screen">
      <slot />
    </main>
    <div class="relative">
      <div class="absolute bottom-0 left-0 h-14 w-full bg-white flex justify-center items-center text-gray-400 text-xs">
        &copy; 2022 Belajar metode Iqra
      </div>
    </div>
  </div>
</template>

