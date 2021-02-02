<template>
  <div class="contact-container">
      <h1>Contact me</h1>
      <div class="form-container">
        <form action="">
        <label for="Name">Full name: </label>
        <input type="text" name="Name" id="name" v-model="email.name">

        <label for="email">Email: </label>
        <input type="email" name="email" id="email" v-model="email.mailAdress" >

        <label for="subject">Subject:</label>
        <input type="text" name="subject" id="subject" v-model="email.subject">
        
        <label for="message">Message: </label>
        <textarea  name="message" placeholder="Write your message..." style="height:100px" v-model="email.message"></textarea>
        <button type="submit" class="btn" @click.prevent="sendMail()">Submit</button>
      </form>
      </div>
      
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      email : {
        name : undefined,
        mailAdress : '',
        subject : '',
        message : ''

      },
      
    }

  }, 
  methods: {
    sendMail(){
      axios.post("http://dylanotina.website/api/contact",this.email).catch(err => console.log(err));
      for (var prop in this.email) this.email[prop] = '';
      

    }
  }

}
</script>

<style scoped>
h1{
  padding: 25px 0px;
  text-align: center;
}

input[type=text], input[type=email], textarea {
  width: 100%; /* Full width */
  padding: 12px; /* Some padding */ 
  border: 1px solid #ccc; /* Gray border */
  border-radius: 4px; /* Rounded borders */
  box-sizing: border-box; /* Make sure that padding and width stays in place */
  margin-top: 6px; /* Add a top margin */
  margin-bottom: 16px; /* Bottom margin */
  resize: vertical /* Allow the user to vertically resize the textarea (not horizontally) */
}
.form-container{
  padding: 0 3rem;
}

input:focus, textarea:focus{
  border : 3px solid #ccc
}

.btn{
  margin: 20px;
  width: 15%;
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