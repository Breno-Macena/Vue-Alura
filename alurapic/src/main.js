import Vue from "vue";
import App from "./App.vue";
// módulo para acesso à api rest
import VueResource from "vue-resource"; 
// mnódulo para gerenciamento de rotas
import VueRouter from "vue-router"; 
// definição das rotas da aplicação
import { routes } from "./routes";
// diretivas
import './directives/Transform';
// módulo para validação de formulários
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate';

Vue.use(VueResource); // registra o módulo para acesso à api
Vue.http.options.root = 'http://localhost:3000'; // define a url base da api

Vue.use(VueRouter); // registra o módulo de gerenciamento de rotas
const router = new VueRouter({ 
  routes, // adiciona as rotas
  mode: 'history' // tira a necessidade de ter um # na URL
});

// registra o componente provedor de validações
Vue.component('ValidationProvider', ValidationProvider); 
// registra o componente observador de erros
Vue.component('ValidationObserver', ValidationObserver);
// configura a validação para campos obrigatórios
extend('required', {
  validate (value) {
    return {
      required: true,
      valid: ['', null, undefined].indexOf(value) === -1
    };
  },
  computesRequired: true,
  message: 'Este campo é obrigatório!'
});
// configura a validação de tamanho de campo
extend('minmax', {
  validate(value, { min, max }) {
    return value.length >= min && value.length <= max;
  },
  params: ['min', 'max'],
  message:'O campo {_field_} deve possuir no mínimo {min} e no máximo {max} caracteres.'
});

new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
