<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="country in countries">
        <a :href="`/packages/${country.slug}`">
          <div class="card" :key="country.id" style="width: auto">
            <div class="row">
              <div class="col-2">
                <span class="card-img">
                  <img :src="country.image.url" :alt="country.title" />
                </span>
              </div>
              <div class="col-10">
                <span class="card-title">
                  {{ country.title }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div class="row justify-content-center text-center my-100">
      <div class="col">
        <button type="button" class="btn show-more-button">
          Show 200+ Countries
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { countries } from "../../Router/Countries";
export default {
  name: "CountriesCard",
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.fetchCountryData();
  },
  methods: {
    fetchCountryData() {
      fetch("../JSON/CountriesNew.json")
        .then((response) => response.json())
        .then((data) => {
          this.countries = data.countries;
          // Sending countries data to countries.js
          countries.splice(0, countries.length, ...data.countries);
        })
        .catch((error) => {
          console.error("Error fetching country data:", error);
        });
    },
  },
};
</script>

<style>
.card {
  display: flex;
  padding: 10px 20px;
  margin: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.card-img > img {
  width: 35px;
  border: solid 0px;
  border-radius: 100%;
}

.card-title {
  font-size: 16px;
}

a {
  text-decoration: none !important;
  color: black;
}
</style>
