<template>
  <div class="modal" v-if="isOpen">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Android Important Tips</h5>
          <i
            class="fa-regular fa-circle-xmark close"
            @click="closeModalIcon"
          ></i>
        </div>
        <div class="modal-body modal-dialog-scrollable">
          <p><b>Maintain Access to a Stable Internet Connection </b></p>
          <p>
            Make sure your device has a stable internet connection before
            installing your eSIM. This will help avoid installation errors.
          </p>
          <p><b>Do Not Interrupt the eSIM Installation Process </b></p>
          <p>
            Once you start installing your eSIM, do not interrupt the
            installation. You may run into an installation error and your eSIM
            may not be retrievable.
          </p>
          <p><b>Do Not Remove Your eSIM Plan</b></p>
          <p>
            Most eSIMs can only be installed once. If you remove the eSIM from
            your device, you cannot install it again. If you no longer have a
            use for the eSIM, you can remove it from your device.
          </p>
          <p><b>Complete All Steps Carefully</b></p>
          <p>
            Make sure you complete all the steps carefully to guarantee your
            eSIM works successfully.
          </p>
        </div>
        <div class="modal-footer d-flex justify-content-center text-center">
          <div class="col-md-6">
            <button
              type="button"
              class="btn got-it-btn text-white"
              @click="closeModal"
            >
              OK, Got It
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AndroidTips",
  data() {
    return {
      isOpen: true,
    };
  },
  methods: {
    closeModal() {
      this.isOpen = false;
      this.$emit("close");
    },
    closeModalIcon() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
.modal {
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
}
.modal-conta .got-it-btn {
  color: #fff;
  background-color: #0071bc;
}
</style>
