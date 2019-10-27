<template>
  <div class="card mt-2">
    <div class="card-header">
      <h2>{{data.title}}</h2>
    </div>
    <div class="card-body">
      <p
        class="card-title text-black"
      >{{data.question}}</p>
      <div class="container-fluid text-center">
        <h3 :class="[result_class ? result : '']" v-if='result'>{{data.answer}}</h3>
        <input
          v-if="!result"
          v-model="data.answer"
          class="form-control text-center col-4 m-auto"
          type="text"
          placeholder="Введи свой ответ"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'test-card-input',
    props:{
        data:Object,
        result_class: String,
        result: Boolean,
    },


};
</script>

<style>
</style>