import { reactive, computed } from 'vue'

export const auth = reactive({
  loggedIn: computed(() => parseInt(localStorage.getItem("logged-in")) === 1),
  markLoggedIn: () => localStorage.setItem("logged-in", 1),
  markLoggedOut: () => localStorage.setItem("logged-in", 0),
  firstName: '',
  lastName: '',
  email: ''
})
