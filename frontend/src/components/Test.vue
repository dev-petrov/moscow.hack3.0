<template>
  <div>
    <bar-chart ref='bar' class="bg-dark text-center" :values="values"></bar-chart>
    <div v-if="questions && !result">
      <timer class='alert-danger text-center' v-if="timer" :max="90" :timeIsOver="checkAnswers"></timer>
      <div class='alert-warning border-radius h1'>Вопрос {{ind + 1}} из {{ questions.length }}</div>
      <div v-if="questions[ind].type == 'drag'">
        <test-card-drag :data="questions[ind]"></test-card-drag>
      </div>
      <div v-if="questions[ind].type == 'input'">
        <test-card-input :data="questions[ind]"></test-card-input>
      </div>
      <div v-if="questions[ind].type == 'choices'">
        <test-card-choices :data="questions[ind]"></test-card-choices>
      </div>

      <button
        v-if="!last"
        v-on:click="nextQuestion"
        class="btn btn-success btn-block mt-2"
      >Следующий вопрос</button>
      <button
        v-if="last"
        v-on:click="checkAnswers"
        class="btn btn-success btn-block mt-2"
      >Проверить ответы</button>
      <button
        v-if="ind - 1 != -1"
        v-on:click="prevQuestion"
        class="btn btn-warning btn-block mt-2"
      >Предыдущий вопрос</button>
    </div>
    <div v-if=" questions && result">
      <div>
        <h1 class='alert-success'>Вопросов решено верно {{questions.length - incorrect}} из {{ questions.length }}</h1>
        <!--div v-for="(answer, index) in questions" :key="index">
          <div v-if="answer.type == 'drag'">
            <test-card-drag :data="answer"></test-card-drag>
          </div>
          <div v-if="answer.type == 'input'">
            <test-card-input :data="answer" :result="true" :result_class="answer.class"></test-card-input>
          </div>
          <div v-if="answer.type == 'choices'">
            <test-card-choices :data="answer" :result_class="answer.classes"></test-card-choices>
          </div>
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import TestCardDrag from "./TestCardDrag";
import TestCardInput from "./TestCardInput";
import TestCardChoices from "./TestCardChoices";
import Timer from "./Timer";
import axios from "axios";
import BarChart from "./Bar";

export default {
  name: "test",
  components: {
    TestCardDrag,
    TestCardInput,
    TestCardChoices,
    Timer,
    BarChart
  },
  data: function() {
    return {
      ind: 0,
      last: false,
      timer: true,
      result: false,
      incorrect: 0,
      questions: null,
      values: [
        {
          label: "5А",
          backgroundColor: "#FF0000",
          borderColor: "#FF0000",
          borderWidth: 1,
          data: [3]
        },
        {
          label: "5Б",
          backgroundColor: "#FFBE00",
          borderColor: "FFBE00",
          borderWidth: 1,
          data: [4]
        },
        {
          label: "5В",
          backgroundColor: "#2DD700",
          borderColor: "#2DD700",
          borderWidth: 1,
          data: [1]
        },
        {
          label: "5Г",
          backgroundColor: "#133AAC",
          borderColor: "#133AAC",
          borderWidth: 1,
          data: [2]
        }
      ]
    };
  },
  beforeMount: function() {
    var t = this;
    axios.get("/tests.json").then(function(res) {
      
      t.questions = res.data[t.$route.params.id - 1];
    });
  },
  mounted: function(){
    var vm = this
    let interval = setInterval(function(){
      vm.randomizeData()
      if (!vm.timer){
        clearInterval(interval)
      }
    }, 3000)
  },
  methods: {
    checkAnswers: function() {
      this.timer = false;
      this.result = true;
      for (var d of this.questions) {
        if (d.type === "drag") {
          for (var i = 0; i < d.answers.length; i++) {
            if (d.answers[i].id != i + 1) {
              d.answers[i].class = "bg-danger";
              this.incorrect += 1;
            }
            d.answers[i].fixed = true;
          }
        } else if (d.type === "input") {
          if (d.answer != d.correct_answer) {
            this.incorrect += 1;
            d.class = "bg-danger";
          } else {
            d.class = "";
          }
        } else if (d.type === "choices") {
          d.classes = Array(d.answers.length);
          d.classes.map(function() {
            return "";
          });
          if (d.answer != d.correct_answer) {
            d.classes[d.answer] = "bg-danger";
          }
          d.classes[d.correct_answer] = "bg-success";
        }
      }
    },
    nextQuestion: function() {
      if (this.ind + 2 < this.questions.length) {
        this.ind += 1;
        this.last = false;
      } else {
        this.ind += 1;
        this.last = true;
      }
      this.randomizeData()
    },
    prevQuestion: function() {
      if (this.ind - 1 != -1) {
        this.ind -= 1;
        this.last = false;
      }
    },
    randomizeData: function() {
      this.$refs.bar.rerender()
    }
  }
};
</script>

<style>
</style>