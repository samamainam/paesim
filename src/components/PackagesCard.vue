<template>
  <div v-if="matchingCountries.length > 0">
    <div v-for="country in matchingCountries">
      <div class="container">
        <div v-for="operators in country.operators">
          <div class="row">
            <div class="col-md-4" v-for="packages in operators.packages">
              <div>
                <div class="border my-3">
                  <div class="package-card">
                    <div class="upper-section text-white pt-2 px-3 m-0">
                      <div class="row">
                        <div class="col-md-6">
                          <span class="card-icons">
                            <i class="fa-solid fa-star me-1"></i>
                            <i class="fa-solid fa-circle-info"></i>
                          </span>
                          <p>{{ operators.title }}</p>
                        </div>
                        <div
                          class="col-md-6 d-flex justify-content-end text-end"
                        >
                          <div class="card-img-top">
                            <img
                              :src="operators.image.url"
                              :alt="operators.title"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="lower-section px-3 m-0">
                      <div class="row pt-3">
                        <div class="col-5 d-flex align-items-center">
                          <i class="fa-solid fa-globe me-2"></i>
                          <p class="m-0">COVERAGE:</p>
                        </div>
                        <div class="col-7 d-flex justify-content-end text-end">
                          <p class="m-0">{{ operators.countries[0].title }}</p>
                        </div>
                      </div>
                      <div class="row pt-3">
                        <div class="col-5 d-flex align-items-center">
                          <i class="fa-solid fa-tower-broadcast me-2"></i>
                          <p class="m-0">DATA:</p>
                        </div>
                        <div class="col-7 d-flex justify-content-end text-end">
                          <p class="m-0">{{ packages.data }}</p>
                        </div>
                      </div>
                      <div class="row pt-3">
                        <div class="col-5 d-flex align-items-center">
                          <i class="fa-solid fa-calendar-days me-2"></i>
                          <p class="m-0">VALIDITY:</p>
                        </div>
                        <div class="col-7 d-flex justify-content-end text-end">
                          <p class="m-0">{{ packages.day }} days</p>
                        </div>
                      </div>
                      <div class="row pt-4 text-center">
                        <h5>
                          <b>${{ packages.price }}</b>
                        </h5>
                      </div>
                      <div
                        class="row d-flex justify-content-center text-center pb-3"
                      >
                        <div class="col-8">
                          <button
                            type="button"
                            class="btn btn-sm text-white"
                            @click="showModal(operators, packages)"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    v-else-if="matchingCountries.length === 0"
    class="row d-flex justify-content-center text-center my-2"
  >
    <h1>Loading......</h1>
  </div>
  <div v-else class="row d-flex justify-content-center text-center my-2">
    <h1>No Matching Packages</h1>
  </div>
  <div class="row justify-content-center text-center my-100">
    <div class="col">
      <button type="button" class="btn show-more-button">
        Show 200+ Countries
      </button>
    </div>
  </div>
  <PackageDetailModal
    v-if="isModalVisible"
    :selectedPackage="selectedPackage"
    @close="closeModal"
  />
</template>

<script>
import PackageDetailModal from "./PackageDetailModal.vue";
export default {
  name: "PackagesCard",
  components: {
    PackageDetailModal,
  },

  props: {
    countryUrl: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      packages: [],
      isModalVisible: false,
      selectedPackage: null,
    };
  },

  created() {
    console.log("Received countryUrl in PackagesCard:", this.countryUrl);
    // You can now use the countryUrl value as needed
  },
  computed: {
    matchingCountries() {
      return this.packages.filter((pkg) => pkg.slug === this.countryUrl);
    },
  },
  mounted() {
    this.fetchPackages();
  },
  methods: {
    fetchPackages() {
      fetch("../JSON/Packages.json")
        .then((response) => response.json())
        .then((data) => {
          this.packages = data.packages;
          console.log(this.packages);
        })
        .catch((error) => {
          console.error("Error fetching packages:", error);
        });
    },
    showModal(operators, packages) {
      console.log("Operators details:", operators);
      console.log("Packages details:", packages);
      if (!operators || !packages) {
        console.error("Operators or packages data not found!");
      } else {
        this.selectedPackage = { operators, packages };
        this.isModalVisible = true;
      }
    },
    closeModal() {
      this.isModalVisible = false;
      this.selectedPackage = null;
    },
    handleBuyNow(selectedPackage) {
      this.$router.push({ name: "OrderPage", params: { selectedPackage } });
      console.log(selectedPackage);
    },
  },
};
</script>

<style>
.card-img-top > img {
  width: 100%;
  margin-bottom: 25px;
}
.upper-section {
  background-color: #38b6ff;
}
.lower-section {
  background-color: #fff;
}
.country-info > img {
  margin-right: 10px;
  height: 25px;
  border: solid 0px;
  border-radius: 100%;
}
.border {
  width: 100%;
}
.container {
  width: 100% !important;
}
.btn-sm {
  background-color: #38b6ff;
  width: 100%;
}
</style>
