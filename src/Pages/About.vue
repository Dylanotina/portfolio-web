<template>
<div>
  <h1>About me</h1>
  <div class="about_container">
    <div class="about_image">
      <img src="@/assets/me.jpg" alt="" />
    </div>
    <div class="about_text">
      <p>
        As a newly graduated student from my Bachelor of Science in Computer
        Science, I seek to gain employment where I can use my skills in computer
        programming and web design. Besides developing new technology, utilizing
        my expertise in information technology as well as pursuing web
        development, I seek long-term. By the way, check out my awesome work.
      </p>
      <p>
        My educational background entails object-oriented programming and web
        programming, both of which enable me to develop my skills in programming
        languages like JavaScript, PHP, HTML, CSS. Moreover, I have much
        exposure to web frameworks like React and VueJS throughout multiple
        personal projects. I am also adept in computer language use such as
        Java, Python. Furthermore, my internship at the end of my technical
        degree allowed me to put theory into practice.
      </p>
      <p>
        I am a dependent collaborator who works well in teams, and I quickly and
        easily adapt to the technological work environment, Therefore, I am
        enthused about using my skills at this position so that I can have an
        impact in the field of computer science.
      </p>
    </div>
  </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.about_container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  padding: 0px 50px;
}

.about_text {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 70%;
}
.about_image {
  width: 25%;
}

img {
  border-radius: 200px;
  box-shadow: 5px 10px 20px;
}

h1{
  padding: 50px 0px;
  text-align: center;
}

</style>
