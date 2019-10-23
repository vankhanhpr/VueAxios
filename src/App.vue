<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button v-on:click="getAll">Click </button>
    <router-view/>
  </div>
</template>

<script>
import ResponsitoryFactory from './components/ResponsitoryFactory.js'
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
        const {data} = await UserReponsitory.get()
        this.user =data;
    }
  },
  components:{
    
  }
}
</script>
