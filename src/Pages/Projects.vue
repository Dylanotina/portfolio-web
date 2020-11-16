<template>
  <div>
    <h1>My Projects</h1>
      <section class="card-list" >
        <article v-for="item in items" :key="item.key" class="card">
          <header class="card-header">
            <p>Created the {{item.created_at}}</p>
            <a :href="item.html_url"><h2>{{item.name}}</h2></a>
          </header>
          <div class="card-author">
            <p>Updated at {{item.updated_at}}</p>
            <p>{{item.description}}</p>
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
export default {
  name: 'Projects',
data() {
  return{
  items : [
    { name : 'Ceci est test1', key:1},
    { name : 'Ceci est test2',key:2},
    { name : 'Ceci est test3',key:3},
    { name : 'Ceci est test4',key:4},
    { name : 'Ceci est test5',key:5},
    { name : 'Ceci est test6',key:6},
    { name : 'Ceci est test7',key:7}
  ]
  }
},

methods :{
  

},
async created(){
  try {
    const response = await axios.get('http://localhost:5000/api/projects')
    console.log(response.data)
    this.items =  await response.data;
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

</style>