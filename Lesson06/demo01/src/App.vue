<template>
  <div id="app">
    <div class="title">课06.CLI中如何处理CSS相关内容</div>
    <button class="btn-enter">进入课程</button>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title{
  color:$primary-color;
  font-size: $normal-size;
}
.btn-enter{
   color:$primary-color;
}
</style>
