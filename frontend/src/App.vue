<template>
  <div id="app">
    <top-bar></top-bar>
    <div class="container mt-5">
      <router-view></router-view>
    </div>
    <!--custom-style v-if='custom'></custom-style-->
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import TopBar from "./components/TopBar";
//import CustomStyle from './components/CustomStyle'
export default {
  name: "app",
  components: {
    TopBar,
    //CustomStyle
  },
  computed: {
    custom: function (){
      return this.convertBoolean(this.$cookie.get('custom', true))
    }
  },
  methods: {
    convertBoolean: function(str){
      window.console.log(this.$cookie.get('custom', true))
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

.el {
  background-color: black;
  color: white;
  border: 1px white solid;
}


.ach {
  height: 3em;
  background-color: rgb(236, 235, 235);
  border: solid gray 1px;
  border-radius: 3px;
  padding: 2px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 17px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 13px;
  width: 13px;
  left: 2px;
  bottom: 2px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(13px);
  -ms-transform: translateX(13px);
  transform: translateX(13px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 17px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
