<template>
  <div class="bg-gray-100 font-serif">
    <Navbar class="z-50"/>
    <main class="my-12 min-h-screen">
      <slot />
    </main>
    <div class="relative">
      <div class="absolute bottom-0 left-0 h-14 w-full bg-white flex justify-center items-center text-gray-400 text-xs">
        &copy; 2022 Belajar metode Iqra
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";

export default defineComponent({
    name: "LayoutDefault",
    components: {
        Navbar,
    },
})
</script>
