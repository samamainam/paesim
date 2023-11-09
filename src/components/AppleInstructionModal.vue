<template>
  <div class="modal" v-if="isAppleInstallModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="modal-title">
            <i class="fa-brands fa-apple"></i> Apple Devices
          </p>
          <i
            class="fa-regular fa-circle-xmark close"
            @click="closeAppleInstallModal"
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
                    iOS 16
                  </button>
                  <button
                    class="btn brand-btn"
                    :class="{ active: activeButton === 'button2' }"
                    @click="showContent('button2')"
                  >
                    iOS 15 AND PREVIOUS VERSIONS
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
                              1. Go to <b>Settings</b> >
                              <b>Cellular/Mobile Data</b> > Add eSIM or Set up
                              Cellular/Mobile Service > Use QR Code on your
                              device. <br />
                              2. Scan the QR code, then tap
                              <b>“Continue”</b> twice and wait for a while. Your
                              eSIM will connect to the network, this may take a
                              few minutes, then tap “Done”. <br />
                              3. Choose a label for your new eSIM plan. <br />
                              4. Choose <b>“Primary” </b>for your default line,
                              then tap <b>“Continue”</b>.
                              <br />
                              5. Choose the <b>“Primary”</b> you want to use
                              with iMessage and FaceTime for your Apple ID, then
                              tap <b>“Continue”</b>.<br />
                              6. Choose your new eSIM plan for cellular/mobile
                              data, then tap <b>“Continue”</b>.
                            </p>
                          </div>
                        </div>
                        <div
                          class="row mt-3 d-flex justify-content-start text-start"
                        >
                          <div class="m-0">
                            <p>Step 2/2 - Access Data</p>
                          </div>
                          <div class="col-md-6">
                            <div class="step-1 my-3">
                              <div class="package-card p-2">
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> NETWORK </b>
                                    <br />
                                    02-UK
                                    <br />
                                    Three UK
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> APN </b>
                                    <br />
                                    internet
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> DATA ROAMING </b>
                                    <br />
                                    ON
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <p>
                              1. Go to <b>“Cellular/Mobile Data”</b>, then
                              select the recently downloaded eSIM on your
                              device. Enable the
                              <b>“Turn On This Line”</b> toggle, then select
                              your new eSIM plan for cellular/mobile data.
                              <br />
                              2. Tap <b>“Network Selection”</b>, disable the
                              <b>“Automatic”</b> toggle, then select the
                              supported network manually if your eSIM has
                              connected to the wrong network.<br />
                              3. Enable the <b>“Data Roaming”</b> toggle for
                              your new eSIM plan.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div v-if="activeButton === 'button2'">
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
                              <b>“Network & internet”</b>, then tap
                              <b>“(+)”</b> next to the SIMs section, if it’s not
                              available tap <b>“SIMs/Mobile network”</b> on your
                              device. <br />
                              2. Tap <b>“Download a SIM instead?”</b>, then tap
                              <b>“Next”</b>.
                              <br />
                              3. Tap <b>“Use a different network”</b> if you
                              need to confirm your network. <br />
                              4. Scan the QR code, then tap
                              <b>“Download/Activate”</b>.
                              <br />
                              5. Tap <b>“Settings/Done”</b> when you see the
                              Download Finished screen.
                            </p>
                          </div>
                        </div>
                        <div
                          class="row mt-3 d-flex justify-content-start text-start"
                        >
                          <div class="m-0">
                            <p>Step 2/2 - Access Data</p>
                          </div>
                          <div class="col-md-6">
                            <div class="step-1 my-3">
                              <div class="package-card p-2">
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> NETWORK </b>
                                    <br />
                                    02-UK
                                    <br />
                                    Three UK
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> APN </b>
                                    <br />
                                    internet
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> DATA ROAMING </b>
                                    <br />
                                    ON
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <p>
                              1. Go to <b>“SIMs”</b>, then select the recently
                              downloaded eSIM on your device. <br />
                              2. Enable the<b> “Use SIM”</b> toggle, then tap
                              <b>“Yes”</b>.
                              <br />
                              3. Enable the <b>“Mobile data”</b> toggle. <br />
                              4. Enable the <b>“Roaming”</b> toggle, then tap
                              <b>“OK”</b>.
                              <br />
                              5. Tap the<b> “Automatically select network”</b>
                              toggle then choose the supported network manually
                              if your eSIM has connected to the wrong network.
                              <br />
                              6. Tap <b>“Access Point Names”</b>, then tap
                              “(+)”.
                              <br />
                              7. Enter the APN by copying it into the Name and
                              APN fields. <br />
                              8. Tap the three dots on the right top of the
                              screen, tap <b>“Save”</b>, then select the APN you
                              have saved by clicking the radio button.
                            </p>
                          </div>
                        </div>
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
                    iOS 16
                  </button>
                  <button
                    class="btn brand-btn"
                    :class="{ active: activeButton === 'button2' }"
                    @click="showContent('button2')"
                  >
                    iOS 15 AND PREVIOUS VERSIONS
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
                              1. Go to <b>Settings</b> >
                              <b>Cellular/Mobile Data</b> > Add eSIM or Set up
                              Cellular/Mobile Service > Use QR Code on your
                              device. <br />
                              2. Scan the QR code, then tap
                              <b>“Continue”</b> twice and wait for a while. Your
                              eSIM will connect to the network, this may take a
                              few minutes, then tap “Done”. <br />
                              3. Choose a label for your new eSIM plan. <br />
                              4. Choose <b>“Primary” </b>for your default line,
                              then tap <b>“Continue”</b>.
                              <br />
                              5. Choose the <b>“Primary”</b> you want to use
                              with iMessage and FaceTime for your Apple ID, then
                              tap <b>“Continue”</b>.<br />
                              6. Choose your new eSIM plan for cellular/mobile
                              data, then tap <b>“Continue”</b>.
                            </p>
                          </div>
                        </div>
                        <div
                          class="row mt-3 d-flex justify-content-start text-start"
                        >
                          <div class="m-0">
                            <p>Step 2/2 - Access Data</p>
                          </div>
                          <div class="col-md-6">
                            <div class="step-1 my-3">
                              <div class="package-card p-2">
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> NETWORK </b>
                                    <br />
                                    02-UK
                                    <br />
                                    Three UK
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> APN </b>
                                    <br />
                                    internet
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> DATA ROAMING </b>
                                    <br />
                                    ON
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <p>
                              1. Go to <b>“Cellular/Mobile Data”</b>, then
                              select the recently downloaded eSIM on your
                              device. Enable the
                              <b>“Turn On This Line”</b> toggle, then select
                              your new eSIM plan for cellular/mobile data.
                              <br />
                              2. Tap <b>“Network Selection”</b>, disable the
                              <b>“Automatic”</b> toggle, then select the
                              supported network manually if your eSIM has
                              connected to the wrong network.<br />
                              3. Enable the <b>“Data Roaming”</b> toggle for
                              your new eSIM plan.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div v-if="activeButton === 'button2'">
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
                              <b>“Network & internet”</b>, then tap
                              <b>“(+)”</b> next to the SIMs section, if it’s not
                              available tap <b>“SIMs/Mobile network”</b> on your
                              device. <br />
                              2. Tap <b>“Download a SIM instead?”</b>, then tap
                              <b>“Next”</b>.
                              <br />
                              3. Tap <b>“Use a different network”</b> if you
                              need to confirm your network. <br />
                              4. Scan the QR code, then tap
                              <b>“Download/Activate”</b>.
                              <br />
                              5. Tap <b>“Settings/Done”</b> when you see the
                              Download Finished screen.
                            </p>
                          </div>
                        </div>
                        <div
                          class="row mt-3 d-flex justify-content-start text-start"
                        >
                          <div class="m-0">
                            <p>Step 2/2 - Access Data</p>
                          </div>
                          <div class="col-md-6">
                            <div class="step-1 my-3">
                              <div class="package-card p-2">
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> NETWORK </b>
                                    <br />
                                    02-UK
                                    <br />
                                    Three UK
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> APN </b>
                                    <br />
                                    internet
                                  </p>
                                  <hr />
                                </div>
                                <div
                                  class="txt-section pt-2 px-3 m-0 text-start"
                                >
                                  <p>
                                    <b> DATA ROAMING </b>
                                    <br />
                                    ON
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <p>
                              1. Go to <b>“SIMs”</b>, then select the recently
                              downloaded eSIM on your device. <br />
                              2. Enable the<b> “Use SIM”</b> toggle, then tap
                              <b>“Yes”</b>.
                              <br />
                              3. Enable the <b>“Mobile data”</b> toggle. <br />
                              4. Enable the <b>“Roaming”</b> toggle, then tap
                              <b>“OK”</b>.
                              <br />
                              5. Tap the<b> “Automatically select network”</b>
                              toggle then choose the supported network manually
                              if your eSIM has connected to the wrong network.
                              <br />
                              6. Tap <b>“Access Point Names”</b>, then tap
                              “(+)”.
                              <br />
                              7. Enter the APN by copying it into the Name and
                              APN fields. <br />
                              8. Tap the three dots on the right top of the
                              screen, tap <b>“Save”</b>, then select the APN you
                              have saved by clicking the radio button.
                            </p>
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
        <div class="modal-footer d-flex justify-content-center text-center">
          <div class="col-md-6">
            <button
              type="button"
              class="btn got-it-btn text-white"
              @click="closeAppleInstallModal"
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
  name: "AppleInstructionModal",
  data() {
    return {
      isAppleInstallModal: true,
      activeButton: "button1",
    };
  },
  methods: {
    closeAppleInstallModal() {
      this.isAppleInstallModal = false;
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
