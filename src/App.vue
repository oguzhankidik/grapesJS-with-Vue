<template>
  <div id="app">
    <grapes-component/>
  </div>
</template>

<script>


import GrapesComponent from "@/components/grapes-component";
export default {
  name: 'App',
  components: {
    GrapesComponent

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 5px;
}
</style>
