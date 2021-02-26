<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto of fotos">
        <img :src="foto.url" :alt="foto.titulo" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "Alurapic",
      fotos: [
        {
          url:
            "https://labyes.com/wp-content/uploads/2020/05/11May_LabyesNotaWeb-1024x684.png",
          titulo: "gato"
        },
        {
          url:
            "https://labyes.com/wp-content/uploads/2020/05/11May_LabyesNotaWeb-1024x684.png",
          titulo: "gatão"
        }
      ]
    };
  }
};
</script>

<style></style>
