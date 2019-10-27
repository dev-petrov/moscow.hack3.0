<template>
  <div class="card m-auto">
    <div class="card-header">
      <h2>{{data.title}}</h2>
    </div>
    <div class="card-body">
      <p class="card-title mb-4 text-black">{{data.question}}</p>
      <div class="container-fluid text-center">
        <div
          @click="confirmAnswer(index)"
          class="row justify-content-center p-3 m-2 rounded text-center border"
          v-for="(answer, index) in data.answers"
          :key="index"
          :class="[clas[index]]"
        >{{answer}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test-card-choices",
  props: {
    data: Object,
    result_class: Array,
  },
  data: function() {
    return {
      classes: []
    };
  },
  computed:{
    clas: function () {
      if (this.result_class){
        return this.result_class
      }
      return this.classes
      
    }
  },
  methods: {
    confirmAnswer: function(index) {
      if (this.result_class){
        return
      }
      this.data.answer = index;
      this.classes = this.classes.map(function() {
        return "";
      });
      this.classes[index] = 'bg-success'
      window.console.log(this.classes[index])
    }
  },
  mounted: function() {
    this.classes.length = this.data.answers.length;
    this.classes = this.classes.map(function() {
      return "";
    });
  }
};
</script>

<style>
</style>