<template>
  <div>
    <h1 class="centralizado">Cadastro</h1>
    <h2 class="centralizado">{{ foto.titulo }}</h2>

    <h3 v-if="foto._id" class="centralizado">Alterar</h3>
    <h3 v-else class="centralizado">Cadastrar</h3>

    <h4 class="centralizado" v-show="mensagem">{{ mensagem }}</h4>

    <form @submit.prevent="grava()">
      <div class="controle">
        <label for="titulo">TÍTULO</label>
        <input id="titulo" autocomplete="off" v-model.lazy="foto.titulo" />
      </div>

      <div class="controle">
        <label for="url">URL</label>
        <input id="url" autocomplete="off" v-model.lazy="foto.url" />
        <imagem-responsiva v-show="foto.url" :url="foto.url" :titulo="foto.titulo" />
      </div>

      <div class="controle">
        <label for="descricao">DESCRIÇÃO</label>
        <textarea
          id="descricao"
          autocomplete="off"
          v-model="foto.descricao"
        ></textarea>
      </div>

      <div class="centralizado">
        <meu-botao rotulo="GRAVAR" tipo="submit" />
        <router-link :to="{ name: 'home' }"
          ><meu-botao rotulo="VOLTAR" tipo="button"
        /></router-link>
      </div>
    </form>
  </div>
</template>

<script>
import ImagemResponsiva from "../shared/painel/imagem-responsiva/ImagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import Foto from "../../domain/foto/Foto";
import FotoService from "../../domain/foto/FotoService";

export default {
  components: {
    "imagem-responsiva": ImagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      foto: new Foto(),
      id: this.$route.params.id,
      mensagem: ''
    };
  },

  methods: {
    grava() {
      this.service.cadastra(this.foto)
        .then(
          () =>  {
            if(this.id) this.$router.push({ name: 'home' });
            else {
              this.foto = new Foto();
              this.mensagem = 'Foto cadastrada com sucesso!';
            }
          },
          err => { 
            console.log(err);
            this.mensagem = this.id ? 'Erro ao alterar foto!' : 'Erro ao cadastrar foto!';
          }
        );
    }
  },

  created () {
    this.service = new FotoService(this.$resource);
    if (this.id) {
      this.service.busca(this.id)
        .then(foto => this.foto = foto);
    }
  }
};
</script>
<style scoped>
.centralizado {
  text-align: center;
}
.controle {
  font-size: 1.2em;
  margin-bottom: 20px;
}
.controle label {
  display: block;
  font-weight: bold;
}

.controle label + input,
.controle textarea {
  width: 100%;
  font-size: inherit;
  border-radius: 5px;
}

.centralizado {
  text-align: center;
}
</style>
