<template>
  <div class="modal" v-if="isAppleTipsModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Apple Important Tips</h5>
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
              @click="closeAppleTipsModal"
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
  name: "AppleTips",
  data() {
    return {
      isAppleTipsModal: true,
      activeButton: "button1",
    };
  },
  methods: {
    closeAppleTipsModal() {
      this.isAppleTipsModal = false;
      this.$emit("close");
    },
    showContent(button) {
      this.activeButton = button;
    },
    closeModalIcon() {
      this.isAppleTipsModal = false;
    },
  },
};
</script>

<style>
/* Your existing styles */
</style>
