<template>
  <div class="row">
    <div class="col-4">
      <profile-side-bar :tab="2"></profile-side-bar>
    </div>
    <div class="col-8 rounded-right el">
      <div class="row justify-content-center my-4">
        Сезонный дизайн
        <label class="switch ml-2" style="margin-top: 7px;">
          <input type="checkbox" v-model="custom" @click="changeStyle"/>
          <span class="slider round"></span>
        </label>
      </div>
      <div class="row justify-content-center my-4">Выбор темы</div>
      <div class="row justify-content-center my-4">
        <img class="img-thumbnail w-25 m-1" src="../assets/hara.jpg" alt="hara" />
        <img class="img-thumbnail w-25 m-1" src="../assets/mult.jpg" alt="mult" />
        <img class="img-thumbnail w-25 m-1" src="../assets/lol.jpg" alt="lol" />
      </div>
      <div class="row justify-content-end mr-3 mb-3">
        <button class="btn btn-success" type="button">Сохранить</button>
      </div>
    </div>
    <custom-style v-if='custom'></custom-style>
  </div>
</template>

<script>
import ProfileSideBar from "./ProfileSideBar";
import CustomStyle from './CustomStyle'

export default {
  name: "profile-personalization",
  components: {
    ProfileSideBar,
    CustomStyle
  },
  data: function(){
    return {
      custom: this.convertBoolean(this.$cookie.get('custom', false))
    }
  },
  methods:{
    changeStyle: function(){
      this.$cookie.set('custom', !this.custom)
    },
    convertBoolean: function(str){
      if (str === 'true'){
        return true
      } else {
        return false
      }
    }
  }
};
</script>

<style>
</style>