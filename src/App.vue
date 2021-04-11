<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
  </div>
</template>

<script>
 import Header from './components/header/Header'
 import Main from '@/components/Main'
export default {
  name: 'App',
  components: {
   Header,
   Main
  }
}
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
  
}
body {
  margin: 0;
}

@media only screen and (max-width: 700px) {
html,
body,
#app {
  height: 100%;
  height: auto !important;
  width: 100%;
}
}




</style>
