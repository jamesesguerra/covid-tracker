<template>
  
  <main v-if="!loading" class="mb-10">
    <DataTitle :text="title" :dataDate="dataDate" />
    <DataBoxes :stats="stats" />
    <CountrySelect :countries="countries" @get-country="getCountryData" />
    <button @click="clearCountry" v-if="stats.Country" 
    class="bg-zinc-800 text-white rounded p-3 mt-5 mx-auto block focus:outline-none hover:bg-zinc-600">
      Clear Country
    </button>
  </main>

  <main class="flex flex-col align-center justify-center text-center" v-else>
    <div class="text-gray-500 text-3xl mt-10 mb-6">
      Fetching data...
    </div>
    <img :src="loadingImage" class="w-16 m-auto"/>
  </main>
  

</template>

<script>
import DataTitle from '../components/DataTitle.vue';
import DataBoxes from '../components/DataBoxes.vue';
import CountrySelect from '../components/CountrySelect.vue';

export default {
  name: 'HomeView',
  components: { DataTitle, DataBoxes, CountrySelect },
  data() {
    return {
      loading: true,
      title: 'Global',
      dataData: null,
      stats: null,
      countries: [],
      loadingImage: require('../assets/loading.gif')
    }
  }
  ,
  methods: {
    async fetchData() {
      const res = await fetch('https://api.covid19api.com/summary');
      const data = await res.json();
      return data;
    },
    getCountryData(country) {
      this.stats = country;
      this.title = country.Country;
    },
    async clearCountry() {
      this.loading = true;
      const data = await this.fetchData();
      this.title = 'Global';
      this.stats = data.Global;
      this.loading = false;
    }
  },
  async created() {
    const data = await this.fetchData();
    this.dataDate = data.Date;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false
  },
}
</script>

