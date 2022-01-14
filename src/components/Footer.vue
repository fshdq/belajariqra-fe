<template>
  <footer class="bg-blue-900 border-t border-gray-400 border-opacity-20" aria-labelledby="footerHeading">
    <div class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between">
        <div class="flex justify-center gap-x-4 sm:space-x-6 md:order-2">
          <router-link to="" class="text-sm text-gray-400 hover:text-gray-300"> Home </router-link>
          <router-link to="/kursus" class="text-sm text-gray-400 hover:text-gray-300"> Kursus </router-link>
          <router-link to="/blog" class="text-sm text-gray-400 hover:text-gray-300"> Blog </router-link>
          <router-link to="/hubungi-kami" class="text-sm text-gray-400 hover:text-gray-300"> Hubungi Kami </router-link>
        </div>
        <div class="items-center">
          <p class="mt-8 text-sm text-white md:mt-0 md:order-1"> © 2022. All rights reserved. </p>
        </div>
      </div>
    </div>
  </footer>
</template>