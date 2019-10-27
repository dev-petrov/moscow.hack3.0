<template>
  <nav class="navbar navbar-expand-lg navbar-dark top-bar-black">
    <router-link class="navbar-brand" to="/"><img src='../assets/Lomonosov-21.svg' height="50"/></router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <router-link class="nav-link h1" to="/">
            Главная
          </router-link>
        </li>
        <!--li class="nav-item">
          <router-link class="nav-link active h1" to="/subjects">Занятия</router-link>
        </li-->
        <li class="nav-item">
          <router-link class="nav-link active h1" to="/profile">Личный кабинет</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'top-bar',
};
</script>

<style scoped>

.top-bar-black {
    background: black;
}

</style>>

