<template>
  <div class="container">
    <div class="row">
      <div class="col mb-4">
        <span class="main-logo d-flex align-items-end">
          <a href="http://127.0.0.1:5173/countries">
            <img src="/main-logo1.png" alt="Pay Analog" />
          </a>
          <h4>
            <b> World <span class="color-change">e</span>SIM </b>
          </h4>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LogoHeader",
};
</script>

<style>
.color-change {
  color: #38b6ff;
}
.main-logo > h4 {
  color: #053f74;
  margin-left: 20px;
}
.main-logo > a > img {
  width: 100px;
}
</style>
