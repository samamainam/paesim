<template>
  <div v-if="selectedPackage">
    <transition name="modal">
      <!-- <div class="modal"> -->
      <!-- <div class="modal-dialog" role="document"> -->
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <div class="container">
                <div class="row flex-nowrap">
                  <div class="col-md-6 d-flex justify-content-start text-start">
                    <p>
                      {{ selectedPackage.operators.title }}
                    </p>
                  </div>
                  <div class="col-md-6 d-flex justify-content-end text-end">
                    <i
                      class="fa-regular fa-circle-xmark close"
                      @click="closeModal"
                    ></i>
                  </div>
                </div>
                <div class="row d-flex align-items-top">
                  <div class="col-md-5 d-flex justify-content-start text-start">
                    <div class="card-img-top">
                      <img
                        :src="selectedPackage.operators.image.url"
                        :alt="selectedPackage.operators.title"
                      />
                    </div>
                  </div>
                  <div class="col-md-7">
                    <div class="row">
                      <div class="col-5 d-flex align-items-center">
                        <i class="fa-solid fa-globe me-2"></i>
                        <p class="m-0">COVERAGE:</p>
                      </div>
                      <div class="col-7 d-flex justify-content-end text-end">
                        <p class="m-0">
                          {{ selectedPackage.operators.countries[0].title }}
                        </p>
                      </div>
                    </div>
                    <div class="row pt-3">
                      <div class="col-5 d-flex align-items-center">
                        <i class="fa-solid fa-tower-broadcast me-2"></i>
                        <p class="m-0">DATA:</p>
                      </div>
                      <div class="col-7 d-flex justify-content-end text-end">
                        <p class="m-0">
                          {{ selectedPackage.packages.data }}
                        </p>
                      </div>
                    </div>
                    <div class="row pt-3">
                      <div class="col-5 d-flex align-items-center">
                        <i class="fa-solid fa-calendar-days me-2"></i>
                        <p class="m-0">VALIDITY:</p>
                      </div>
                      <div class="col-7 d-flex justify-content-end text-end">
                        <p class="m-0">
                          {{ selectedPackage.packages.day }} days
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-body modal-dialog-scrollable">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <b> <p>Supported Countries</p></b>
                    <div class="border">
                      <div class="container mt-1 mb-0 p-2">
                        <div class="row">
                          <div class="col-9 d-flex align-items-top">
                            <p>
                              <b>
                                {{
                                  selectedPackage.operators.countries[0].title
                                }}
                              </b>
                            </p>
                          </div>
                          <div
                            class="col-3 sup-country-image d-flex justify-content-end text-end"
                          >
                            <img
                              :src="
                                selectedPackage.operators.countries[0].image.url
                              "
                              :alt="
                                selectedPackage.operators.countries[0].title
                              "
                            />
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <b> <p>Additional Information</p></b>
                    <div class="border">
                      <div class="container mt-1 mb-0 p-2">
                        <div class="row">
                          <div class="col d-flex align-items-top">
                            <span>
                              <i class="fa-solid fa-tower-broadcast me-2"></i>
                            </span>
                            <span class="mb-3">
                              <p class="m-0"><b> NETWORK </b></p>
                              <div
                                v-for="networks in selectedPackage.operators
                                  .coverages[0].networks"
                              >
                                <p class="m-0">
                                  {{ networks.name }}
                                </p>
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="container mt-1 mb-0 p-2">
                        <div class="row">
                          <div class="col d-flex align-items-top">
                            <span>
                              <i class="fa-solid fa-tower-broadcast me-2"></i>
                            </span>
                            <span>
                              <p class="m-0"><b> PLAN TYPE </b></p>
                              <p>
                                {{ selectedPackage.operators.plan_type }}
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="container mt-1 mb-0 p-2">
                        <div class="row me-0">
                          <div class="col d-flex align-items-top">
                            <span>
                              <i class="fa-solid fa-tower-broadcast me-2"></i>
                            </span>
                            <span>
                              <p class="m-0"><b> ACTIVATION POLICY </b></p>
                              <p>
                                The validity period starts when the eSIM
                                connects to any supported network/s.
                              </p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="container mt-1 mb-0 p-2">
                        <div class="row">
                          <div class="col d-flex align-items-top">
                            <span>
                              <i class="fa-solid fa-tower-broadcast me-2"></i>
                            </span>
                            <span>
                              <p class="m-0">
                                <b> eKYC (IDENTITY VERIFICATION) </b>
                              </p>
                              <p
                                v-if="
                                  selectedPackage.operators.is_kyc_verify ===
                                  false
                                "
                              >
                                Not Required
                              </p>
                              <p v-else>Required</p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                      <div class="container mt-1 mb-0 p-2">
                        <div class="row">
                          <div class="col d-flex align-items-top">
                            <span>
                              <i class="fa-solid fa-tower-broadcast me-2"></i>
                            </span>
                            <span>
                              <p class="m-0">
                                <b> TOP-UP OPTION </b>
                              </p>
                              <p
                                v-if="
                                  selectedPackage.operators.rechargeability ===
                                  false
                                "
                              >
                                Not Available
                              </p>
                              <p v-else>Available</p>
                            </span>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer d-flex justify-content-center text-center">
              <div class="col-6">
                <!-- <a href="/complete-order"> -->
                <button
                  type="button"
                  class="btn btn-sm text-white"
                  @click="navigateToOrderPage"
                >
                  Buy Now
                </button>
                <!-- </a> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
      <!-- </div> -->
    </transition>
  </div>
</template>

<script>
export default {
  name: "PackageDetailModal",
  props: {
    selectedPackage: {
      type: Object,
      required: true,
    },
  },
  methods: {
    navigateToOrderPage() {
      // Save selectedPackage to local storage
      localStorage.setItem(
        "orderPackage",
        JSON.stringify(this.selectedPackage)
      );

      // Redirect to OrderPage
      this.$router.push({ name: "OrderPage" });
    },
    // buyNow() {
    //   this.$store.dispatch("setOrderPackage", this.selectedPackage);
    //   this.$router.push({ name: "OrderPage" });
    // },
    closeModal() {
      // Clear selectedPackage from local storage when the modal is closed
      localStorage.removeItem("orderPackage");
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.5s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  /* padding: 20px 30px; */
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}

.modal-header {
  color: #fff;
  background-color: #38b6ff;
  /* display: flex;
  justify-content: space-between;*/
  align-items: center;
}

.modal-body {
  padding: 20px;
}
.modal-dialog-scrollable {
  max-height: 50vh; /* Set the desired max height for the scrollable area */
  overflow-y: auto; /* Enable vertical scrolling */
}
.modal-footer {
  display: flex;
  /* justify-content: center;
  text-align: center; */
  margin-top: 30px;
}

.close {
  cursor: pointer;
}

.card-img-top > img {
  width: 100%;
  margin-bottom: 25px;
}
.border {
  height: 100%;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.sup-country-image > img {
  height: 25px;
  width: 25px;
  border: solid 0px;
  border-radius: 100%;
}
hr {
  margin-top: -15px;
}
</style>
