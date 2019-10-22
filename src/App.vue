<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import ResponsitoryFactory from './components/ResponsitoryFactory' 
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
	  this.user = await UserReponsitory.get()
    }
  }
}
</script>
