<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto">
      <div>
        <div class="flow-root mt-6">
          <ul role="list" class="-my-5 divide-y divide-gray-200">
              <li v-for="data in kursuses" :key="data.id" class="py-5">
              <div class="relative focus-within:ring-2 focus-within:ring-indigo-500">
                  <h3 class="text-sm font-semibold text-gray-800">
                  <a href="#" class="hover:underline focus:outline-none">
                      <!-- Extend touch target to entire panel -->
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ data.nama_paket }}
                  </a>
                  </h3>
                  <p class="mt-1 text-sm text-gray-600 line-clamp-2">
                  {{ data.harga }}
                  </p>
              </div>
              </li>
          </ul>
        </div>
        <div class="mt-6">
          <a href="#" class="w-full flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              View all
          </a>
        </div>
    </div>
    </div>
  </div>
</template>

<script>

</script>