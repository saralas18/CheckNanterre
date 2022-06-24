<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/téléchargement.png" />
    <HelloWorld msg="check point Nanterre" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { auth } from '../states/auth'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created(){
    if(auth.loggedIn === false){
      this.$router.push('login');
    }
  }
}
</script>
