<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <!-- Replace with your content -->
    <div class="space-y-6">
      <div class="bg-white shadow px-4 py-5 sm:rounded-lg sm:p-6">
        <div class="md:grid md:grid-cols-3 md:gap-6">
          <div class="md:col-span-1">
            <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
            <p class="mt-1 text-sm text-gray-500">
              Use a permanent address where you can receive mail.
            </p>
          </div>
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form @submit.prevent="submitForm">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first-name" id="first-name" autocomplete="given-name" v-model="firstName"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last-name" id="last-name" autocomplete="family-name" v-model="lastName"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" id="email-address" autocomplete="email" v-model="email"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="no_telp" class="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="text" name="no_telp" id="no_telp" autocomplete="email" v-model="phoneNumber"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="paket" class="block text-sm font-medium text-gray-700">Paket</label>
                  <select id="paket" name="paket" autocomplete="paket" v-model="paket"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="Paket A">Paket A</option>
                    <option value="Paket B">Paket B</option>
                    <option value="Paket C">Paket C</option>
                  </select>
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="job" class="block text-sm font-medium text-gray-700">Pekerjaan</label>
                  <select id="job" name="job" autocomplete="job" v-model="job"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="Pelajar">Pelajar</option>
                    <option value="Mahasiswa">Mahasiswa</option>
                    <option value="Umum">Umum</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                  <textarea type="text" name="street-address" id="street-address" autocomplete="street-address" v-model="address"
                    class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div class="flex justify-end">
        <button type="button"
          class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Cancel
        </button>
        <button type="submit" @click="publishForm"
          class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Simpan
        </button>
      </div>
    </div>
    <!-- /End replace -->
  </div>
</template>
<script>
export default {
  name: "Daftar",
  data(){
    return {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      paket: null,
      job: null,
      address: null,
      formPending: null
    }
  },

  methods: {
    publishForm() {
      this.formPending = true;
    },
  }
}
</script>