<script>
import Sidebar from '@/components/sidebar/Sidebar'
import { sidebarWidth } from '@/components/sidebar/state'
export default {
  components: { Sidebar },
  computed: {
    isNotLogin(){
      return this.$route.name !== 'Login'
    }
  },
  setup() {
    return { sidebarWidth }
  }
}
</script>
<template>
  <Sidebar v-if="isNotLogin" />
  <div :style="{ 'margin-left': isNotLogin ? sidebarWidth : 0 }">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
