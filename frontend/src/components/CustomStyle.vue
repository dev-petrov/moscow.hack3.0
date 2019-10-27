<template>
  <div></div>
</template>

<script>
export default {
    name: 'custom-style',
}
</script>

<style>
body {
  padding-top: 20px;
  background-image: url("../assets/back-morning.jpg");
  opacity: 0.9;
}

@font-face {
  font-family: "Harry Potter";
  src: url("../assets/HarryPotter.ttf");
  font-weight: normal;
  font-style: normal;
}

h1 {
  font-family: "Harry Potter";
  color: black !important;
  text-shadow: 1px 1px 2px black, 0 0 1em;
}

h2 {
  font-family: "Harry Potter";
  color: black;
}

h3,
h3.text-muted {
  font-family: "Harry Potter";
  color: black;
}

li {
  font-family: "Harry Potter";
  font-size: 20pt;
}
a {
  font-family: "Harry Potter";
  font-size: 20pt;
}

p {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 1em;
}

.btn,
.btn:hover,
.btn:active {
  font-family: "Harry Potter";
  font-size: 20pt;
  vertical-align: middle;
  align-content: center;
  color: yellow;
  width: 200pt;
  height: 60pt;
  background: url("../assets/fantasy_button2.png") no-repeat;
  background-size: 200pt;
  text-align: center;
  align-self: flex-start;
  border-width: 0pt;
}
</style>