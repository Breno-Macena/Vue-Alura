<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>
    <input
      type="search"
      class="filtro"
      @input="filtro = $event.target.value"
      placeholder="Filtre pelo título"
    />
    <ul class="lista-fotos">
      <li
        class="lista-fotos-item"
        v-for="foto of fotosComFiltro"
        :key="foto.url"
      >
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:rotate.animate.reverse="45"
            v-hover-zoom-image="1.5"
            :url="foto.url"
            :titulo="foto.titulo"
          />
          <meu-botao
            tipo="button"
            rotulo="Remover"
            :confirmacao="true"
            estilo="perigo"
            @botaoAtivado="remove(foto)"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import ImagemResponsiva from "../shared/painel/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";

export default {
  // componentes que esse componente usa
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },
  // dados que esse componente usa
  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: ""
    };
  },
  // propriedade computadas (funções com retorno) que esse componente usa
  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
  // métodos que esse componente usa
  methods: {
    remove(foto) {
      alert(`Foto removida! ${foto.titulo}`);
    }
  },
  // função executada quando o componente é criado (vue lifecycle)
  created() {
    this.$http
      .get("http://localhost:3000/v1/fotos")
      .then(res => res.json())
      .then(
        fotos => (this.fotos = fotos),
        err => console.log(err)
      );
  }
};
</script>

<style>
.centralizado {
  text-align: center;
}

.lista-fotos {
  list-style: none;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 100%;
}
</style>
