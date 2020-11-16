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
  width: 100%;
  height: 100%;
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
</style>
