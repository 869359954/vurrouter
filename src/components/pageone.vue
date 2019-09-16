<template>
    <div id='div'>
        <h2 id='h1'>im page <span id='span1'> ONE</span> </h2>
        <button>p1-btn</button>
    </div>
</template>
<script>
export default {
    name:'pageone'
}
</script>
<style>
   *{
       
   }
   button{
     background:rgb(218, 216, 216);
     margin: 10px;
     border-radius: 5px;
   }
   #div{
       text-align: center;
       vertical-align: middle;
       display: inline-block;
       height: 120px;
   }
   #h1{
       margin: 10px;
       font-size: 20px;
   }
   #span1{
       color: rgb(207, 123, 123);

   }
</style>