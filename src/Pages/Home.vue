<template>
  <div class="main_container">
      <div class="main_acceuil">
        <h1>Dylan Otina</h1>
        <p>Bienvenue sur mon site</p>
        <button @click="$router.push('projects')" class="btn">See my projects</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .main_container{
  display: flex;
  width: 100%;
  height: 100%;
  background-image: url('../assets/homePageTreated.jpg');
  background-position: -100px -100px;
  align-content: center;
  justify-content: center;
  align-items: center;
  }

  .main_acceuil{
    color: lightgray;
    text-align: center;
  }

  .btn{
  margin: 20px;
  width: 75%;
  padding: 10px;
  transition: 0.25s ease;
  border-radius: 24px;

  }

  .btn:hover{
  background: rgb(196,196,196);
  cursor: pointer;
  transform: scale(1.15);

  }

</style>