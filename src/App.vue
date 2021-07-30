<template>
  <div class="container"> 
    <Calculadora/>
  </div>
</template>

<script>
  import Calculadora from "./components/Calculadora.vue"
  export default {
    name: 'App',
    components: {
      Calculadora
    }
  }
</script>

<style lang="scss">

  .container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.3em;
  }

  @media(max-height:500px) and (min-width: 1200px) {

    .container {
      height: max-content;
    }
  }
</style>
