<template>
  <LogoHeader />
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>
          <b> Order Approved </b>
        </h3>
        <p>
          Date: 15/02/2020 <br />
          Time: 15:25:06 <br />
          Business Name: On the road<br />
          Business ID : 5321 <br />
          Address: Herzel 3, Tel-Aviv <br />
          Client Phone: 0543095860<br />
          ORDER ID: #20231020-14186311
        </p>
        <h5>
          <b> World eSIM Details </b>
        </h5>
        <div class="alert alert-danger" role="alert">
          WARNING! Most eSIMs can only be installed once. If you remove the eSIM
          from your device, you cannot install it again.
        </div>
        <h5>
          <b> eSIM Installation </b>
        </h5>
        <div class="row">
          <div class="col">
            <button type="button" class="btn btn-devices me-3">
              <i class="fa-brands fa-android"></i> Android Device
            </button>
            <button type="button" class="btn btn-devices">
              <i class="fa-brands fa-android"></i> Apple Device
            </button>
          </div>
        </div>
      </div>
    </div>
    <hr />
  </div>
  <div class="container">
    <div class="row d-flex align-items-center">
      <div class="col-md-10">
        <h5>
          <b> Order Number 1234 </b>
        </h5>
      </div>
      <div class="col-md-2 d-flex justify-content-end">
        <i class="fa-solid fa-print"></i>
      </div>
    </div>
    <div class="container bg-white p-3">
      <div class="row">
        <div class="col-md-4">Product</div>
        <div class="col-md-4">Quantity</div>
        <div class="col-md-4">Price</div>
      </div>
      <hr />
      <div class="row">
        <div class="col-md-4">World eSIM - United kingdom2 GB - 7 Days</div>
        <div class="col-md-4">1</div>
        <div class="col-md-4">25 ₪</div>
      </div>
      <hr />

      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="col d-flex align-items-center">
            <div class="col-6">VAT</div>
            <div class="col-6 d-flex justify-content-end">0.00 ₪</div>
          </div>
          <div class="col d-flex align-items-center">
            <div class="col-6">Total with VAT</div>
            <div class="col-6 d-flex justify-content-end">
              <b> 25 ₪ </b>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-center text-center g-0">
      <div class="col-5">
        <button type="button" class="btn show-more-button">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
import LogoHeader from "./LogoHeader.vue";
export default {
  name: "OrderApproved",
  components: { LogoHeader },
};
</script>

<style>
.fa-brands {
  padding: 5px;
  color: #fff;
  background-color: #b2bbc2;
  border-radius: 100%;
}
.btn-devices {
  color: black;
  background-color: #fff;
}
</style>
