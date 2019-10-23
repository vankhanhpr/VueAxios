<template>
  <div id="app">
    <img src="../../assets/logo.png">
    <button class="test-class" v-on:click="insertUser">Click </button>
  </div>
</template>

<script>
import responsitoryfactory from '../../service/factory/responsitoryfactory.js'
const userreponsitory = responsitoryfactory.get('user')
export default {
  name: 'App',
  data () {
    return {
      user: []
    }
  },
  created () {
    this.fetch()
  },
  methods: {
    async fetch () {
      const {data} = await userreponsitory.getById(0)
      this.user =data;
    },
    insertUser(){
      //insert for json
      // var user= {
      //   'usid':1,
      //   'username':'khanhnguyenit'
      // }
      
      //insert for formdata
      var user = new FormData();
      user.append('usid',1);
      user.append('username','khanhnguyenit');
      userreponsitory.create(user)
    }
  },
  components:{
  }
}
</script>
<style scoped>
/* @import url(./css/app.css); */
</style>
