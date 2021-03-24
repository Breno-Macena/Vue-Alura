<template>
  <div class="corpo">
    
    <meu-menu :rotas="routes" />

    <transition name="fade" mode="out-in">
      <router-view />
    </transition>

  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from './components/shared/menu/Menu.vue';

export default {
  components: {
    'meu-menu': Menu
  },
  data() {
    return {
      routes : routes.filter(route => route.menu)
    };
  }
};
</script>

<style>
.corpo {
  font-family: Helvetica;
  width: 96%;
  margin: 0 auto;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
} 
</style>
