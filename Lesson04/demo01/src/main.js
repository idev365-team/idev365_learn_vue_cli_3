import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function test(){

  try{
    new Promise(function(resolve){
      resolve("ok");
    }).then(value=>{
      alert(value)
    })
  }catch(ex){
    alert(ex)
  }
}

test()

new Vue({
  render: h => h(App),
}).$mount('#app')
