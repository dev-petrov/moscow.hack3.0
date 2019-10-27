<template>
  <div>
    <div class="card mt-3" >
      <div class="card-body">
        <h2 class="card-title rounded">{{subject}}</h2>
        <hr>
        <p class="text-black">
            {{description}}
        </p>
        <p>
          <router-link v-if='testLink' :to="testLink" class="rounded text-danger">Тест</router-link>
        </p>
        <p>
          <router-link v-for='book in bookLinks' :key="book" :to="book.link" class="rounded">{{book.title}}</router-link>
        </p>

      </div>
      <div class="card-footer"><h3>{{date}}</h3></div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'task-card',
    props:{
        subject: String,
        date: String,
        bookLinks: Array,
        description: String,
        testLink: String, 
    }

}
</script>

<style>

</style>