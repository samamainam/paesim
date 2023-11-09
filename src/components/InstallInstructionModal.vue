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
          <div class="d-flex justify-content-center text-center">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="false"
              >
                QR Code
              </button>
              <button
                class="nav-link"
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-contact"
                type="button"
                role="tab"
                aria-controls="nav-contact"
                aria-selected="false"
              >
                Manual
              </button>
            </div>
          </div>
          <div
            class="tab-content d-flex justify-content-center text-center"
            id="nav-tabContent"
          >
            <div
              class="tab-pane fade show active"
              id="nav-profile"
              role="tabpanel"
              aria-labelledby="nav-profile-tab"
            >
              <div class="alert alert-danger mt-3" role="alert">
                WARNING! Most eSIMs can only be installed once. If you remove
                the eSIM from your device, you cannot install it again.
              </div>
              <div class="justify-content-start text-start">
                <p>
                  <b> Select Device Brand </b>
                  <br />
                  Select your device brand to see the available eSIM
                  installation instructions for the selected brand.
                </p>
                <div class="">
                  <button
                    class="btn brand-btn me-2"
                    :class="{ active: activeButton === 'button1' }"
                    @click="showContent('button1')"
                  >
                    Samsung
                  </button>
                  <button
                    class="btn brand-btn"
                    :class="{ active: activeButton === 'button2' }"
                    @click="showContent('button2')"
                  >
                    Google Pixel
                  </button>

                  <div class="row mt-2">
                    <div class="col-md-12">
                      <div v-if="activeButton === 'button1'">
                        <div
                          class="row mt-3 d-flex justify-content-start text-start"
                        >
                          <div class="m-0">
                            <p>Step 1/2 - Install eSIM</p>
                          </div>
                          <div class="col-md-6">
                            <div class="step-1 my-3">
                              <div class="package-card">
                                <div
                                  class="qr-section p-3 m-0 d-flex justify-content-center text-center"
                                >
                                  <img src="/qr.png" alt="" width="100px" />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 d-flex justify-content-center text-center"
                                >
                                  <p>
                                    Scan the QR code by printing out or
                                    displaying the code on another device to
                                    install your eSIM.<br />
                                    *Make sure your device has a stable internet
                                    connection before installing.
                                  </p>
                                </div>
                                <div
                                  class="btn-section p-2 m-0 d-flex justify-content-center text-center"
                                >
                                  <button class="btn btn-sm share-btn">
                                    SHARE QR CODE
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <p>
                              1. Go to <b>“Settings”</b>, tap
                              <b>“Connections”</b>
                              , then tap <b> “SIM card manager”</b> on your
                              device.
                              <br />
                              2. Tap <b> “Add mobile plan”</b> , then tap
                              <b> “Scan carrier QR code”</b> . <br />
                              3. Scan the QR code, then tap <b> “Confirm”</b> .
                            </p>
                          </div>
                        </div>
                      </div>
                      <div v-if="activeButton === 'button2'">
                        <h3>Content for Button 2</h3>
                        <p>This is the content related to Button 2.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="nav-contact"
              role="tabpanel"
              aria-labelledby="nav-contact-tab"
            >
              <div class="alert alert-danger mt-3" role="alert">
                WARNING! Most eSIMs can only be installed once. If you remove
                the eSIM from your device, you cannot install it again.
              </div>
            </div>
          </div>
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
      activeButton: "button1",
    };
  },
  methods: {
    closeIstallModal() {
      this.isOpenIstallModal = false;
      this.$emit("close");
    },
    showContent(button) {
      this.activeButton = button;
    },
  },
};
</script>

<style>
.modal-dialog {
  max-width: 60%;
}

.brand-btn {
  background-color: white;
  color: black;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.brand-btn.active {
  background-color: #0071bc;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.qr-section {
  background-color: white;
}
.step-1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
.share-btn {
  background-color: white;
  color: black;
  border: solid 1px;
}
</style>
