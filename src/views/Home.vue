<template>
  <div class="hero">
    <div class="max-w-7xl px-4 py-12 mx-auto sm:px-6 lg:py-16 lg:px-8">
      <div class="flex flex-col-reverse lg:flex-row lg:items-center justify-center mb-5 md:mb-10 ">
        <div class="w-full lg:w-1/2 pb-10 lg:order-1 lg:ps-5">
          <img src="@/assets/hero1.svg" alt="logo" class="w-auto mb-5">
        </div>
        <div class="flex-1 w-full max-w-lg mx-auto lg:mx-0 lg:w-1/2 pb-10">
          <div class="text-center lg:text-left tracking-wide leading-loose">
            <h2 class="mb-5 text-3xl sm:text-4xl font-black">Belajar Kimia Organik</h2>
            <p class="mb-5">Rasakan kemudahan belajar Kimia Organik menggunakan <b>Metode Iqra</b> yang cepat, mudah dan singkat.</p>
            <button type="button" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section class="container mx-auto max-w-7xl px-4 sm:px-10 flex flex-col text-gray-800 ">
    <div class="flex flex-col-reverse lg:flex-row lg:items-center justify-center lg:justify-between mb-5 md:mb-10 ">
      <div class="w-full lg:w-1/2 pb-10 lg:pe-5">
        <img src="@/assets/keuntungan.svg" class="w-full h-[500px] object-contain">
      </div>
      <div class="flex-1 w-full max-w-lg mx-auto lg:mx-0 lg:w-1/2 pb-10 ix % 2 == 0 ? 'lg:order-2 lg:ms-auto ' : 'lg:me-auto '">
        <div class="text-center lg:text-left tracking-wide leading-loose">
            <h2 class="mb-5 text-3xl sm:text-4xl font-black">Apa itu Metode Iqra?</h2>
            <p>Metode yang digunakan untuk membaca, seperti membaca gambar, membaca struktur rumus bangun, membaca rumus molekul, membaca rumus empiris dan membaca gugus fungsi.</p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white py-12">
    <div class="pt-2 md:pt-0 md:px-12 lg:px-16 px-6 lg:w-4/5 lg:mx-auto leading-normal tracking-normal text-black">
      <div class="lg:text-center">
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              Keungglan
          </h3>
          <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
              Metode Iqra memiliki keunggulan yang belum belum diketahui oleh orang-orang. 
          </p>
      </div>
      <div class="mt-10">
        <ul class="md:grid md:grid-cols-3 md:gap-x-4">
          <li v-for="keunggulan in dataKeunggulan" :key="keunggulan.title">
            <div class="flex mt-5 md:mt-0 bg-white px-4 py-6 rounded shadow-md flex-grow-0">
              <div class="flex-shrink-0">
                <span :class="[keunggulan.iconBackground, keunggulan.iconForeground, 'rounded-lg inline-flex p-3']">
                  <component :is="keunggulan.icon" class="h-6 w-6" aria-hidden="true" />
                </span>
              </div>
              <div class="ml-4">
                <h4 class="text-lg font-bold text-gray-900">
                  {{keunggulan.title}}
                </h4>
                <p class="mt-2 text-sm text-gray-700">
                  {{keunggulan.deskripsi}}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="bg-gray-100">
    <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
      <div class="lg:text-center">
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Kelebihan
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
            Metode Iqra memiliki kelebihan dibandingkan dengan metode-metode yang sering diajarkan pada dunia pendidikan 
        </p>
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4 py-8">
        <div class="flex p-6 bg-blue-100 rounded-lg gap-x-2" v-for="kelebihan in dataKelebihan" :key="kelebihan.title">
          <div class="mb-5">
            <div class="inline-flex items-center p-2 border border-transparent rounded-full shadow-sm bg-blue-500">
              <span class="text-xl font-bold text-white px-2">{{kelebihan.no}}</span>
            </div>
          </div>
          <div class="flex flex-col">
            <h3 class="text-lg font-bold mb-2">
              {{kelebihan.title}}
            </h3>
            <p class="text-sm leading-6 text-gray-600">
              {{kelebihan.deskripsi}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import {
  LightningBoltIcon,
  SparklesIcon,
  ClockIcon
} from '@heroicons/vue/solid'
const dataKeunggulan = [
  {
    title: 'Mudah.',
    deskripsi: 'Siapa saja akan lebih mudah memahami kimia organik.',
    icon: SparklesIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: 'Cepat.',
    deskripsi: 'Memahami Kimia Organik dengan cepat.',
    icon: LightningBoltIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
  {
    title: 'Singkat.',
    deskripsi: 'Tidak perlu waktu lama untuk memahami Kimia Organik.',
    icon: ClockIcon,
    iconForeground: 'text-green-700',
    iconBackground: 'bg-green-50',
  },
]
const dataKelebihan = [
  {
    no: 1,
    title: 'Belajar Kimia Murni Dengan Singkat',
    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
    icon: SparklesIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    no: 2,
    title: 'Membantu menyelesaikan masalah pembelajaran kimia organik',
    deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis et sed nam sem tellus erat.',
    icon: LightningBoltIcon,
    iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
  },
]

export default {
  setup() {
    return {
      dataKeunggulan, dataKelebihan
    }
  },
}
</script>
<style>
.hero {
  display: block;
  box-sizing: border-box;
  height: 568px;
  @apply bg-blue-100;
  clip-path: ellipse(99% 100% at 50% 0%);
}
</style>
