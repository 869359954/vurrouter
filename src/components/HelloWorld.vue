<template>
  <div class="hello">
     <div>
          click btn:
          <span>{{msg}}</span>
     </div>
     <div>
          program : {{program}}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          click img :
          <span>{{hellomsg}}</span>
     </div>
     <button v-on:click='msg += 1'>click btn</button>
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    program: String,
    hellomsg: Number
  },
  data: function(){
    return {
      msg: 1
    }
  },

}
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  font-size: 15px;
  margin:5px;
}
button{
  height: 20px;
  width: 100px;
  background:rgb(218, 216, 216);
  border-radius: 20px;
  line-height: 20px;
  font-size: 10px;
}
.hello{
  border: 1px solid gray;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
