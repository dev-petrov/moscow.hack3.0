<template>
<div class="row">
    <div class="col-4">
        <profile-side-bar></profile-side-bar>
    </div>
  <div class="col-8 rounded-right el">
    <div class="row justify-content-center my-4">
      Вы состоите в группе
      <b style="margin-left: 5px;">Астероид</b>
    </div>

    <div class="container-fluid">
      <div class="d-flex flex-row">
        <div
          class="col-1 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >№</div>
        <div
          class="col-5 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >Название команды</div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >Учебная деятельность</div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >Внеучебная деятельность</div>
      </div>
      <div class="d-flex flex-row">
        <div
          class="col-1 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >1</div>
        <div
          class="col-5 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >Полёт</div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              style="width: 78%"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              style="width: 55%"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div
          class="col-1 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >2</div>
        <div
          class="col-5 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >Астероид</div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              style="width: 35%"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              style="width: 60%"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
      <div class="d-flex flex-row">
        <div
          class="col-1 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >3</div>
        <div
          class="col-5 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >Вертолётики</div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              style="width: 40%"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
        <div
          class="col-3 py-1"
          style="border-right: lightblue solid;border-bottom: lightblue solid;"
        >
          <div class="progress">
            <div
              class="progress-bar bg-primary"
              style="width: 25%"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="row justify-content-center my-4">
      <img class="w-75" src="../assets/map.jpg" alt />
    </div>
  </div>
</div>
</template>

<script>
import ProfileSideBar from './ProfileSideBar'

export default {
    name: 'profile-community-achievement',
    components:{
        ProfileSideBar
    }
};
</script>

<style>
</style>