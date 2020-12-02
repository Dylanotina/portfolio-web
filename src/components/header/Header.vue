<template>
  <div class="header">
      <div class="container">
          <router-link :to="{ name : 'home'}">My portfolio</router-link>
          <HeaderMenu></HeaderMenu>
      </div>
  </div>
</template>

<script>
import HeaderMenu from './HeaderMenu'
export default {
    name: "Header",
    components:{
        HeaderMenu
    }

}
</script>

<style scoped>
.header{
    display: flex;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 80px;
    z-index: 9999;
    color: lightgray;
    text-align: center;
    background-color: #2c2c2c;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
}

.header .container {
  max-width: 1920px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
a {
  font-size: 20px;
  text-decoration: none;
  color :lightgray
}
</style>