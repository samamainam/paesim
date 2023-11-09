<template>
  <div class="container">
    <LogoHeader />
    <div class="row d-flex justify-content-around">
      <div class="col-md-6 package-detail p-3 d-flex align-items-center">
        <div class="col-4 p-3">
          <p>
            <b>
              {{ orderPackage.operators.title }}
            </b>
          </p>
          <div class="card-img-pkg">
            <img
              :src="orderPackage.operators.image.url"
              :alt="orderPackage.operators.title"
            />
          </div>
        </div>
        <div class="col-8 p-3">
          <div class="row pt-3">
            <div class="col-5 d-flex align-items-center">
              <i class="fa-solid fa-globe me-2"></i>
              <p class="m-0">COVERAGE:</p>
            </div>
            <div class="col-7 d-flex justify-content-end text-end">
              <p class="m-0">
                {{ orderPackage.operators.countries[0].title }}
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
                {{ orderPackage.packages.data }}
              </p>
            </div>
          </div>
          <div class="row pt-3">
            <div class="col-5 d-flex align-items-center">
              <i class="fa-solid fa-calendar-days me-2"></i>
              <p class="m-0">VALIDITY:</p>
            </div>
            <div class="col-7 d-flex justify-content-end text-end">
              <p class="m-0">{{ orderPackage.packages.day }} days</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-5 right-section p-4">
        <div class="col">
          <b>
            Price: $<span class="price">{{ orderPackage.packages.price }}</span>
          </b>
        </div>
        <div class="col">
          <div class="input-group mb-3">
            <select class="form-select" id="countryCode" style="width: 20%">
              <option selected>+1</option>
              <option value="+91">+91</option>
              <option value="+44">+44</option>
              <!-- Add more country codes as needed -->
            </select>
            <input
              type="text"
              class="form-control"
              placeholder="Phone Number*"
              aria-label="Phone number"
              aria-describedby="basic-addon1"
              style="width: 80%"
            />
          </div>
        </div>
        <div>
          <div class="col d-flex align-items-baseline">
            <input
              class="me-2"
              type="checkbox"
              id="myCheckbox"
              name="myCheckbox"
              value="checked"
            />
            <label for="myCheckbox"
              >Agree to our Terms & Conditions and Privacy Policy.</label
            >
          </div>
        </div>
        <div>
          <div class="col d-flex align-items-baseline">
            <input
              class="me-1"
              type="checkbox"
              id="deviceCheckbox"
              name="deviceCheckbox"
              v-model="isDeviceChecked"
              @click="handleCheckboxClick"
            />
            <label for="deviceCheckbox"
              >Confirm your device is eSIM compatible and
              network-unlocked.</label
            >
          </div>
        </div>
        <div class="row d-flex justify-content-center text-center">
          <div class="col-md-6 my-2 d-flex justify-content-center text-center">
            <a href="/order-details">
              <button type="button" class="btn btn-sm text-white">
                Complete Order
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col m-4">
        <p>
          <b> Recommended Top-up Packages </b>
        </p>
      </div>
    </div>
    <div class="row m-2">
      <div class="col-md-4" v-for="packages in filteredPackages">
        <div class="border-rec my-3">
          <div class="package-card-rec">
            <div class="lower-section px-3 m-0">
              <div class="row pt-3 text-center">
                <div class="col">
                  <p>
                    <b> {{ packages.title }}</b>
                  </p>
                </div>
              </div>
              <div class="row pt-2">
                <div class="col-5 d-flex align-items-center">
                  <i class="fa-solid fa-globe me-2"></i>
                  <p class="m-0">COVERAGE:</p>
                </div>
                <div class="col-7 d-flex justify-content-end text-end">
                  <p class="m-0">
                    {{ orderPackage.operators.countries[0].title }}
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
                    {{ packages.data }}
                  </p>
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
                <div class="col">
                  <p>
                    <i class="fa-solid fa-tag fa-flip-horizontal"></i>
                    <b> Price: ${{ packages.price }}</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DeviceCheckModal
    v-if="isModalVisible"
    @close="isModalVisible = false"
    @accept="handleAcceptModal"
  />
</template>

<script>
import LogoHeader from "./LogoHeader.vue";
import DeviceCheckModal from "./DeviceCheckModal.vue";

export default {
  data() {
    return {
      isTermsChecked: false,
      isDeviceChecked: false,
      isModalVisible: false,
    };
  },

  created() {
    // Retrieve the orderPackage from local storage
    const storedPackage = localStorage.getItem("orderPackage");
    if (storedPackage) {
      this.orderPackage = JSON.parse(storedPackage);
      console.log(this.orderPackage);
    } else {
      // Handle the case when the orderPackage is not found in local storage
      console.error("No orderPackage found in local storage");
    }
  },
  // Filtering packages to show in recomended packages
  computed: {
    filteredPackages() {
      const excludedId = this.orderPackage.packages.id;
      return this.orderPackage.operators.packages.filter(
        (pkg) => pkg.id !== excludedId
      );
    },
  },
  methods: {
    // HAndle click event on compatible devices checkbox
    handleCheckboxClick(event) {
      if (!this.isDeviceChecked) {
        event.preventDefault();
        this.isModalVisible = true;
        document.getElementById("modal__1").style.display = "block";
        console.log("Checkbox clicked");
      } else {
        this.isDeviceChecked = false;
      }
    },
    // HAndle accept event on compatible devices modal
    handleAcceptModal() {
      this.isDeviceChecked = true;
      this.isModalVisible = false;
      console.log("Modal Accept Clicked");
    },
  },
  components: { LogoHeader, DeviceCheckModal },
};
</script>

<style>
.package-detail {
  color: #fff;
  background-color: #38b6ff;
  border-radius: 5px;
}
.right-section {
  background-color: #fff;
  border-radius: 5px;
}

.card-img-pkg > img {
  width: 100%;
}

.price {
  font-size: 30px;
}
.package-card-rec .lower-section {
  border-radius: 5px;

  color: #fff;
  background-color: #38b6ff;
}
</style>
