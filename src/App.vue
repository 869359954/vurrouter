
<template>
  <div id="app">
    <img @click='clickimg' alt="Vue logo" src="./assets/logo.png">
    <HelloWorld :hellomsg="hellodata" program='vue'/>
    <div>
        <router-link @click.native='clickfunc' id='router' to='./pageone'>P1</router-link>
        <router-link @click.native='clickfunc' id='router' to='./pagetwo'>P2</router-link>
        <router-link @click.native='clickfunc' id='router' to='./pagethree'>P3</router-link>
        <router-link @click.native='clickfunc' id='router' to='./pagefour'>P4</router-link>
        <router-view id='view'></router-view>
    </div>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
  },
  data:function(){
    return{
      hellodata: 0
    }
  },
  methods:{
    clickimg:function(){
      this.hellodata += 1
    },
    clickfunc:function(){
      // eslint-disable-next-line
      console.log(location.href)
    }
  }
}
</script>

<style>
#view{
   height: 120px;
   border: 1px solid  grey;
}
#router{
  font-size: 15px;
  display: inline-block;
  width: 50px;
  border-radius: 5px;
  background: rgb(218, 216, 216);
  margin-right: 20px;
  margin-bottom: 5px;
  text-decoration: none;
}
img{
  height:100px;
  width:100px;
  margin: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
