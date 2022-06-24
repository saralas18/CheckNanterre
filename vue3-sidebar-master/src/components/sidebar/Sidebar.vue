<script>
import SidebarLink from './SidebarLink'
import { collapsed, toggleSidebar, sidebarWidth } from './state'
import {auth} from '@/states/auth'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth, auth }
  }
}
</script>

<template>
  <div class="sidebar" :style="{ width: sidebarWidth }">
  
    <h1>
      <span v-if="collapsed">
        <div>N</div>
        <div>C</div>
      </span>

      <span v-else>Nanterre check</span>
    </h1>
   <i class="fa-light fa-building-columns"></i>
      
    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/dashboard" icon="fas fa-users">utilisateurs</SidebarLink>
    <SidebarLink to="/analytics" icon="fas fa-graduation-cap">promotion</SidebarLink>
    <SidebarLink to="/friends" icon="fas fa-school">seance</SidebarLink>
    <SidebarLink to="/image" icon="fas fa-clock">absence</SidebarLink>

    <div v-if="auth.loggedIn">
      <button @click="auth.markLoggedOut">Logout</button>
    </div>

    <span
      class="collapse-icon"
      :class="{ 'rotate-180': collapsed }"
      @click="toggleSidebar"
    >
      <i class="fas fa-angle-double-left" />
    </span>
  </div>
</template>

<style>
:root {
  --sidebar-bg-color: #ad1111;
  --sidebar-item-hover: #d04a4a;
  --sidebar-item-active: #e64a4a;
}
</style>

<style scoped>
.sidebar {
  color: white;
  background-color: var(--sidebar-bg-color);

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1 {
  height: 2.5em;
}

.collapse-icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  color: rgba(255, 255, 255, 0.7);

  transition: 0.2s linear;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
</style>
