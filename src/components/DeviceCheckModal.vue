<template>
  <div class="modal" id="modal__1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Device Compatibility</h5>
          <i class="fa-regular fa-circle-xmark close" @click="closeModal"></i>
        </div>
        <div class="modal-body">
          <p><b>Check if your devices support eSIM? </b></p>
          <p>
            The list below is constantly expanding as more eSIM-compatible
            devices get released into the market. To use an eSIM, your device
            must be carrier-unlocked and eSIM-compatible. Please reference the
            list below to see if your device supports eSIM technology. (Note
            that country and carrier-specific restrictions may apply.)* As of
            October 2023, the eSIM-compatible devices are as follows:
          </p>
          <div class="row">
            <div class="col-md-6">
              <p>
                <b>Brand</b>
              </p>
              <select class="form-select" v-model="selectedBrand">
                <option
                  v-for="brands in uniqueBrands"
                  :value="brands"
                  :key="brands"
                >
                  {{ brands }}
                </option>
              </select>
            </div>
            <!-- {{ filteredModels }} -->
            <div class="col-md-6">
              <p>
                <b>Model</b>
              </p>
              <select class="form-select" v-model="selectedModel">
                <option
                  v-for="model in filteredModels"
                  :key="model"
                  :value="model"
                >
                  {{ model }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer d-flex justify-content-center">
          <div class="col-md-6">
            <button
              type="button"
              class="btn btn-sm text-white"
              :disabled="!isAcceptButtonActive"
              @click="handleAcceptModal"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// console.log(uniqueBrands);
export default {
  name: "DeviceCheckModal",
  data() {
    return {
      devices: [],
      selectedBrand: "",
      selectedModel: "",
    };
  },
  created() {
    this.fetchDevices();
  },
  methods: {
    fetchDevices() {
      fetch("../JSON/Devices.json")
        .then((response) => response.json())
        .then((data) => {
          this.devices = data.devices;
          console.log(this.devices);
        })
        .catch((error) => {
          console.error("Error fetching devices:", error);
        });
    },
    closeModal() {
      this.$emit("close");
    },
    handleAcceptModal() {
      this.$emit("accept");
    },
  },
  computed: {
    uniqueBrands() {
      const brandSet = new Set();
      return this.devices
        .filter((device) => {
          const lowercaseBrand = device.brand.toLowerCase();
          if (!brandSet.has(lowercaseBrand)) {
            brandSet.add(lowercaseBrand);
            return true;
          }
          return false;
        })
        .map((device) => device.brand);
    },
    filteredModels() {
      const filteredDevices = this.devices.filter(
        (device) =>
          device.brand.toLowerCase() === this.selectedBrand.toLowerCase()
      );
      const modelSet = new Set();
      return filteredDevices
        .filter((device) => {
          const lowercaseModel = device.model.toLowerCase();
          if (!modelSet.has(lowercaseModel)) {
            modelSet.add(lowercaseModel);
            return true;
          }
          return false;
        })
        .map((device) => device.model);
    },
    // make button active after selecting models
    isAcceptButtonActive() {
      return this.selectedBrand !== "" && this.selectedModel !== "";
    },
  },
};
</script>

<style>
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
  background-color: #fff;
  align-items: center;
}

.modal-body {
  padding: 20px;
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
</style>
