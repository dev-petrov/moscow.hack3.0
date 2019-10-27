<template>
  <div class="row">
    <div class="col-4">
      <profile-side-bar :tab="1"></profile-side-bar>
    </div>
    <div class="col-8 rounded-right el">
      <div class="row justify-content-center my-4">
        <img class="img-thumbnail rounded-circle w-25" src="../assets/harry.jpg" alt="Фотка" />
      </div>
      <div class="row justify-content-center my-4">Гарри Поттер</div>
      <div class="row justify-content-center my-4">Класс 5А</div>
      <div class="row">
        <div class="col-2"></div>
        <line-chart class="col-8"></line-chart>
        <div class="col-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSideBar from "./ProfileSideBar";
import LineChart from "./Chart";
export default {
  name: "profile",
  components: {
    ProfileSideBar,
    LineChart
  }
};
</script>

<style>
</style>