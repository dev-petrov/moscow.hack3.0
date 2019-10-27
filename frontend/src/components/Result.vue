<template>
  <div>
    <div>
      <div class>Вопросов решено верно {{correct}} из {{ data.length }}</div>
      <div v-for="(answer, index) in data" :key="index">
        <div v-if="answer.type == 'drag'">
          <test-card-drag :data="answer"></test-card-drag>
        </div>
        <div v-if="answer.type == 'input'">
          <test-card-input :data="answer" :result="true" :result_class="answer.class"></test-card-input>
        </div>
        <div v-if="answer.type == 'choices'">
          <test-card-choices :data="answer" :result_class="answer.classes"></test-card-choices>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "result",
  props: {
    data: Object
  },
  data:function(){
      return {
          incorrect: 0,
      }
  },
  mounted: function() {
      window.console.log(this.data)
    for (var d of this.data) {
        if (d.type === 'drag'){
            for (var i; i < d.length; i++){
                if (d[i].id != i + 1){
                    d[i].class = 'bg-danger';
                    this.incorrect += 1;
                }
                d[i].fixed = true
            }
        } else if (d.type === 'input'){
            if (d.answer != d.correct_answer){
                this.incorrect += 1;
                d.class = 'bg-danger'
            } else {
                d.class = ''
            }
        } else if (d.type === 'choices'){
            d.classes = Array(d.answers.length)
                d.classes.map(function(){
                    return ""
                })
            if (d.answer != d.correct_answer){
                d.classes[d.answer] = 'bg-danger';

            } 
            d.classes[d.correct_answer] = 'bg-success';
        }

    }
  }
};
</script>

<style>
</style>