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
            <router-link to="/daftar" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              Daftar Sekarang
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- apa itu? -->
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

  <!-- keunggulan -->
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

  <!-- Kelebihan -->
  <section class="bg-white py-12">
    <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
      <div class="lg:text-center">
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Kelebihan
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
            Metode Iqra memiliki kelebihan dibandingkan dengan metode-metode yang sering diajarkan pada dunia pendidikan 
        </p>
      </div>
      <div class="flex flex-col gap-y-4 md:flex-row md:gap-x-4 py-4">
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

  <!-- PRICING -->
  <section class="bg-gray-50 py-12">
    <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
      <div class="lg:text-center">
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Daftar Harga
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
            Tidak perlu biaya mahal untuk dapat memahami Kimia Organik dengan cepat
        </p>
      </div>
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
        <div class="bg-white border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200" v-for="paket in dataHarga" :key="paket.no">
            <div class="p-6">
                <h2 class="text-lg leading-6 font-medium text-gray-900">{{paket.nama}}</h2>
                <p class="text-4xl font-extrabold text-gray-900 py-4">{{paket.harga}}</p>
            </div>
            <div class="pt-6 pb-8 px-6">
                <h3 class="text-xs font-medium text-gray-900 tracking-wide uppercase">Detail</h3>
                <ul role="list" class="mt-6 space-y-4">
                    <li class="flex space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" class="flex-shrink-0 h-5 w-5 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg><span class="text-sm text-gray-500"> {{paket.jam}} </span></li>
                    <li class="flex space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" class="flex-shrink-0 h-5 w-5 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg><span class="text-sm text-gray-500">{{paket.hari}}</span></li>
                    <li class="flex space-x-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor" class="flex-shrink-0 h-5 w-5 text-green-500">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg><span class="text-sm text-gray-500">{{paket.pertemuan}}</span></li>
                </ul>
            </div>
            <div class="py-4 px-6">
              <router-link to="/daftar" class="block w-full bg-gray-800 border border-gray-800 rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-gray-900">Daftar</router-link>
            </div>
        </div>
    </div>
    </div>
  </section>

  <!-- IMAGE GALERY -->
  <section class="bg-white py-12">
    <div class="container xl:max-w-7xl mx-auto p-4 lg:p-8">
      <div class="lg:text-center">
        <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
          Kegiatan Kami
        </h3>
        <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-700 lg:mx-auto">
          Kegiatan belajar mengajar yang sudah dilaksanakan
        </p>
      </div>
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0">
        <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          <li v-for="foto in info" :key="foto.id" class="relative">
            <div class="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              <img :src="foto.urls.regular" alt="" class="object-cover pointer-events-none group-hover:opacity-75" />
            </div>
            <!-- <p class="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{{ file.title }}</p>
            <p class="block text-sm font-medium text-gray-500 pointer-events-none">{{ file.size }}</p> -->
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- LAST CTA -->
  <section class="bg-white py-16 sm:py-24">
    <div class="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
      <div class="relative rounded-2xl px-6 py-10 bg-blue-700 overflow-hidden shadow-xl sm:px-12 sm:py-20">
        <div aria-hidden="true" class="absolute inset-0 -mt-72 sm:-mt-32 md:mt-0 opacity-25">
          <svg class="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
              <g mask="url(&quot;#SvgjsMask1042&quot;)" fill="none">
                  <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
                  <path d="M 0,210 C 144,181.2 432,78 720,66 C 1008,54 1296,133.2 1440,150L1440 560L0 560z" fill="#184a7e"></path>
                  <path d="M 0,348 C 96,377.6 288,490.4 480,496 C 672,501.6 768,387.8 960,376 C 1152,364.2 1344,424.8 1440,437L1440 560L0 560z" fill="#2264ab"></path>
              </g>
              <defs>
                  <mask id="SvgjsMask1042">
                      <rect width="1440" height="560" fill="#ffffff"></rect>
                  </mask>
              </defs>
          </svg>
        </div>
        <div class="relative">
          <div class="sm:text-center">
            <h2 class="text-3xl font-extrabold text-white tracking-tight sm:text-4xl"> Ingin belajar Kimia Organik? </h2>
            <p class="mt-6 mx-auto max-w-2xl text-lg text-blue-200"> Saatnya mencoba belajar dengan menggunakan Metode Iqra </p>
          </div>
          <div class="mt-12 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center">
            <div class="mt-4 sm:mt-0">
              <router-link to="/daftar" class="block text-center rounded-md border border-transparent px-5 py-3 text-blue-600 bg-white hover:bg-blue-50 text-base font-medium shadow focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"> Daftar Sekarang</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- TESTIMONIAL -->
</template>
<script>
import {
  LightningBoltIcon,
  SparklesIcon,
  ClockIcon
} from '@heroicons/vue/solid'
import axios from 'axios'
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
const dataHarga = [
  {
    no: 1,
    nama: 'Paket A',
    harga: 'Rp. 1.250.000',
    jam: 'Mulai Pukul 10.00-12.00',
    hari: 'Senin dan Rabu',
    pertemuan: '14x pertemuan',
  },
  {
    no: 1,
    nama: 'Paket B',
    harga: 'Rp. 1.250.000',
    jam: 'Mulai Pukul 10.00-12.00',
    hari: 'Senin dan Rabu',
    pertemuan: '14x pertemuan',
  },
  {
    no: 1,
    nama: 'Paket C',
    harga: 'Rp. 1.250.000',
    jam: 'Mulai Pukul 10.00-12.00',
    hari: 'Senin dan Rabu',
    pertemuan: '14x pertemuan',
  },
]

export default {
  setup() {
    return {
      dataKeunggulan, dataKelebihan, dataHarga,
    }
  },
  data(){
    return {
      info: null,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('https://api.unsplash.com/photos/?client_id=StBpGJo1jfD1JOPRv3gUhJs0iAAffMEHDlxGqQyk3uo&query=school&page=1&per_page=8')
      .then(response => {
        this.info = response.data
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
  }
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
