<template>
  <nav>
    <ul>
      <li v-for="rota in rotas" :key="rota.title">
        <router-link :to="rota.path">
          {{ rota.title }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
      rotas: {
          type: Array,
          required: true
      }
  }
};
</script>
<style scoped></style>
