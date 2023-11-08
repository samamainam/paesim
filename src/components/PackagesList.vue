<template>
  <LogoHeader />
  <div class="d-flex justify-content-center">
    <div class="nav nav-tabs" id="nav-tab" role="tablist">
      <button
        class="nav-link active"
        id="nav-home-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-home"
        type="button"
        role="tab"
        aria-controls="nav-home"
        aria-selected="true"
      >
        Local eSIMs
      </button>
      <button
        class="nav-link"
        id="nav-profile-tab"
        data-bs-toggle="tab"
        data-bs-target="#nav-profile"
        type="button"
        role="tab"
        aria-controls="nav-profile"
        aria-selected="false"
      >
        Regional eSIMs
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
        Global eSIMs
      </button>
    </div>
  </div>
  <div class="tab-content d-flex justify-content-center" id="nav-tabContent">
    <div
      class="tab-pane fade show active"
      id="nav-home"
      role="tabpanel"
      aria-labelledby="nav-home-tab"
    >
      <PackagesCard :countryUrl="countryUrl" />
    </div>
    <div
      class="tab-pane fade"
      id="nav-profile"
      role="tabpanel"
      aria-labelledby="nav-profile-tab"
    >
      Regional eSIMs
    </div>
    <div
      class="tab-pane fade"
      id="nav-contact"
      role="tabpanel"
      aria-labelledby="nav-contact-tab"
    >
      Global eSIMs
    </div>
  </div>
</template>

<script>
import PackagesCard from "../components/PackagesCard.vue";
import LogoHeader from "./LogoHeader.vue";
export default {
  name: "PackagesList",
  components: {
    PackagesCard,
    LogoHeader,
  },
  data() {
    return {
      countryUrl: "",
    };
  },
  created() {
    this.countryUrl = this.$route.params.countryUrl;
  },
};
</script>

<style>
.tab-pane {
  width: 100% !important;
}
</style>
