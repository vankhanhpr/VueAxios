<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button class="test-class" v-on:click="insertUser">Click </button>
    <router-view/>
  </div>
</template>

<script>
import ResponsitoryFactory from './service/factory/ResponsitoryFactory.js'
const UserReponsitory = ResponsitoryFactory.get('user')
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
      const {data} = await UserReponsitory.getById(0)
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
      UserReponsitory.create(user)
    }
  },
  components:{
  }
}
</script>
<style scoped>
/* @import url(./css/app.css); */
</style>
