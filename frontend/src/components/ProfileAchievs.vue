<template>
  <div class="row">
    <div class="col-4">
      <profile-side-bar :tab="3"></profile-side-bar>
    </div>
    <div class="col-8 rounded-right el">
      <radar-chart></radar-chart>
      <img src='../assets/hhdY6zdgTqg.jpg' class="w-100">
      <div class="row justify-content-center my-4">
        <h3>Ачивки</h3>
      </div>
      <div class="row justify-content-center my-4">
        <img src="../assets/running.svg" title="Speedrunner" alt="ss" class="ach mx-2" />
        <img src="../assets/crown.svg" title="The King!" alt="ss" class="ach mx-2" />
        <img src="../assets/cap.svg" title="Perfect" alt="ss" class="ach mx-2" />
      </div>
    </div>
  </div>
</template>

<script>
import ProfileSideBar from "./ProfileSideBar";
import RadarChart from './Radar'

export default {
  name: "profile-achievs",
  components: {
    ProfileSideBar,
    RadarChart,
  }
};
</script>

<style>
</style>