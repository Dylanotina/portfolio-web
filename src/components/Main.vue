<template>
  <div class="main">
      <div class="container">
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.main{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}

.main .container {
  max-width: 1920px;
  padding-top: 64px;
  width: 100%;
  height:calc(100%-64px);
  overflow-y: hidden;
}
.container{
    background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(232,232,232,1) 59%, rgba(196,196,196,1) 100%); }

</style>