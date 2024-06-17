import { ref, watch } from 'vue';
import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null);

  const isAuthenticated = ref(false);

  let logoutTimer;

  const startLogoutTimer = () => {
    logoutTimer = setTimeout(() => {
      logout();
      console.log('User logged out due to inactivity');
    }, 30 * 60 * 1000);
  };

  const resetLogoutTimer = () => {
    clearTimeout(logoutTimer);
    startLogoutTimer();
  };

  watch(isAuthenticated, (newValue) => {
    if (newValue) {
      resetLogoutTimer();
    } else {
      clearTimeout(logoutTimer);
    }
  });

  const login = (userData) => {
    isAuthenticated.value = true;
    user.value = userData;
    resetLogoutTimer();
  };

  const logout = () => {
    isAuthenticated.value = false;
    user.value = null;
    clearTimeout(logoutTimer);
    console.log('User logged out');
  };

  const getUserData = () => {
    return user.value;
  };

  return { isAuthenticated, login, logout, getUserData };
});
