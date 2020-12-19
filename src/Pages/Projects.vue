<template>
  <div>
    <h1>My Projects</h1>
      <section class="card-list" >
        <p v-if="items.length == 0" class="Loading">Loading...</p>
        <article v-for="item in items" :key="item.key" class="card">
          <header class="card-header">
            <p>Created the {{item.created_at}}</p>
            <a :href="item.html_url"><h2>{{item.name}}</h2></a>
          </header>

          <div class="card-author">
            <p>Updated  {{item.updated_at}}</p>
            <p>{{item.description}}</p>
            <a :href="item.homepage">{{item.homepage}}</a>
          </div>

          <div class="tags">
          <a href="#">{{item.language}}</a>
        </div>
        </article>
      </section>
  </div>
</template>

<script>
import axios from 'axios';
import moment from "moment";
export default {
  name: 'Projects',
data() {
  return{
  items : [
  ]
  }
},

methods :{
  

},
async created(){
  try {
    const response = await axios.get('http://localhost:3002/api/projects')
    this.items =  await response.data;
    this.items.forEach(item => {
      item.created_at = moment(item.created_at).format('MMMM Do YYYY');
      item.updated_at = moment(item.updated_at, 'YYYYMMDD').local(true).fromNow()
    });
    this.items.sort((a,b) => a.updated_at > b.updated_at)
  } catch (error) {
    this.error =error
  }
    
},

}
</script>

<style scoped>
h1{
  padding: 25px 0px;
  text-align: center;
}
.card-list{
  display: flex;
  padding: 3rem;
}

.card{
  display: flex;
  position: relative;
  flex-direction: column;
  height: 350px;
  width: 400px;
  min-width: 250px;
  padding: 1.5rem;
  border-radius: 16px;
  background: #17141d;
  box-shadow: -1rem 0 3rem #000;
  transition: .2s;
  margin: 0;
}

.card:hover{
  transform: translateY(-1rem);
}

.card:hover~.card{
  transform: translateX(130px);
}
.card:not(:first-child){
  margin-left: -130px;
}
.card-header p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
}

.card-header h2 {
    font-size: 20px;
    margin: .25rem 0 auto;
    text-decoration: none;
    color: lightgray;
    border: 0;
    display: inline-block;
    cursor: pointer;
}

.tags {
    margin: 1rem 0 2rem;
    padding: .5rem 0 1rem;
    line-height: 2;
    margin-bottom: 0;
}

.tags a {
    font-style: normal;
    font-weight: 700;
    font-size: .5rem;
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: .66rem;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: .2rem .85rem .25rem;
    position: relative;
}
.tags a:hover {
    background: linear-gradient(90deg,#ff8a00,#e52e71);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    background-clip: text;
    border-color: white;
}


.card-author{
  
  color: #7a7a8c;
  font-weight: 700;
}

.card-author a{
  text-decoration: none;
  font-weight: 500;
  color: lightgray;
}

.card-author a:hover{
  color: white;
}

.Loading{
  font-size: 25px;
  font-weight: 500;
}
</style>