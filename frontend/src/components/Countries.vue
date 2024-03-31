<template>
  <div class="countries-container">
    <h2>Countries and Capitals</h2>
    <ul v-if="countries.length">
      <li v-for="(country, index) in countries" :key="index" class="country-item">
        The capital of <span class="country-name">{{ country.name }}</span> is <span class="country-capital">{{ country.capital }}</span>.
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const countries = ref([]);

const fetchCountries = () => {
  axios.get('knative-magic-endpoint/countries')
    .then(response => {
      countries.value = response.data;
    })
    .catch(error => {
      console.error("There was an error fetching the countries data:", error);
    });
};

onMounted(() => {
  fetchCountries();
});
</script>


<style scoped>
.countries-container {
  width: 600px;
  margin: 0px, auto;
  padding: 20px;;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.country-item {
  padding: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #eee;
  list-style-type: none;
}

.country-name {
  font-weight: bold;
  color: #333;
}

.country-capital {
  font-weight: bold;
  color: #007BFF;
}
</style>
