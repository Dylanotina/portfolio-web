<template>
  <div class="menu">
      <div class="links">
      <router-link :to="{ name : 'about'}">About</router-link>
      <router-link :to="{ name : 'projects'}">Projects</router-link>
      <router-link :to="{ name : 'contact'}">Contact</router-link>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.menu{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
}
.menu > .links a {
  margin-left: 10px;
  margin-right: 10px;

  font-size: 20px;
  text-decoration: none;
  color :lightgray
}
.menu > .links a:hover {
  cursor: pointer;
}


</style>