<template>
  <div class="card mt-2">
    <div class="card-header">
      <h2>{{data.title}}</h2>
    </div>
    <div class="card-body">
      <h5 class="card-title">{{data.question}}</h5>
      <div class="row">
        <div class="col-12">
          <draggable
            class="list-group"
            tag="ul"
            v-model="data.answers"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
          >
            <transition-group type="transition" :name="!drag ? 'flip-list' : null">
              <li class="list-group-item" v-for="element in data.answers" :key="element.id" :class="[element.class ? element.class : '']">
                {{ element.name }}
              </li>
            </transition-group>
          </draggable>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "test-card-drag",
  components: {
    draggable
  },
  props: {
    data: Object,
  },
  data: function() {
    return {
      drag: false
    };
  },
  methods: {
      
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost"
      };
    }
  }
};
</script>

<style>
</style>