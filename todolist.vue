<template>
  <div id="todolist">
    <img src="./assets/logo.png">

    <detailsText> </detailsText>
  </div>

</template>
<script>
  import DetailsText from './components/todo'
  export default{
    name: 'todo',
    components: {
      DetailsText
    }
  }
</script>
<style>

   #todolist {
     font-family: 'Avenir', Helvetica, Arial, sans-serif;
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
     text-align: center;
     color: #2c3e50;
     margin-top: 60px;
   }
</style>
