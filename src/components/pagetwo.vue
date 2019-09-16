<template>
    <div id='div'>
                <h2 id='h2'>im page <span id='span2'>TWO</span></h2>
                <button>p2-btn</button>
    </div>
</template>
<script>
export default {
    name:'pagetwo'
}
</script>
<style>
 #div{
       text-align: center;
       vertical-align: middle;
       font-size: 20px;
       display: inline-block;
   }
#h2{
       margin: 10px;
       font-size: 20px;
}
#span2{
       color: rgb(180, 180, 14);
}
button{
     background:rgb(218, 216, 216);
     margin: 10px;
     border-radius: 5px;
   }
</style>