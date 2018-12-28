<template>
  <div id="app">
    <MyButton></MyButton>
  </div>
</template>

<script>
import MyButton from './components/my-button.vue'

export default {
  name: 'app',
  components: {
    MyButton
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
