<template>
  <div class="modal" v-if="isOpenIstallModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Installation Instructions</h5>
          <i
            class="fa-regular fa-circle-xmark close"
            @click="closeIstallModal"
          ></i>
        </div>
        <div class="modal-body modal-dialog-scrollable">
          <p>
            Follow these instructions carefully for a successful installation:
          </p>
          <p>Step 1: Prepare your device and make sure it's fully charged.</p>
          <p>
            Step 2: Locate the eSIM settings in your device's settings menu.
          </p>
          <p>Step 3: Enter the required information for the installation.</p>
          <p>
            Step 4: Confirm the installation and wait for the process to
            complete.
          </p>
        </div>
        <div class="modal-footer d-flex justify-content-center text-center">
          <div class="col-md-6">
            <button
              type="button"
              class="btn got-it-btn text-white"
              @click="closeIstallModal"
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
  name: "InstallInstructionModal",
  data() {
    return {
      isOpenIstallModal: true,
    };
  },
  methods: {
    closeIstallModal() {
      this.isOpenIstallModal = false;
      this.$emit("close");
    },
  },
};
</script>

<style>
/* Your modal styles */
</style>
