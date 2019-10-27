<template>
  <div class="row rounded-left">
    <div class="col el nav-pills">
      <div class="my-4 nav flex-column nav-pills h1">
        <router-link
          to="/profile"
          class="nav-link h1"
          :class="['active' ? tab == 1 : '']"
        >Профиль</router-link>

        <router-link
          to="/profile/personalization"
          class="nav-link h1"
          :class="['active' ? tab == 2 : '']"
        >Персонализация</router-link>

        <router-link
          to="/profile/achievements"
          class="nav-link h1"
          :class="['active' ? tab == 3 : '']"
        >Достижения</router-link>

         <router-link
          to="/profile/community"
          class="nav-link h1"
          :class="['active' ? tab == 4 : '']"
        >Общие достижения</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "profile-side-bar",
  props: {
    tab: Number
  },
  mounted: function(){
    window.console.log(this.tab)
  }
};
</script>

<style scoped>
.router-link-exact-active {
  background: yellow;
  color: black !important;
}
a {
  color:white;
}
</style>