import Home from "./components/home/Home.vue";
import Cadastro from "./components/cadastro/Cadastro.vue";

export const routes = [
  { path: "", component: Home, title: 'Home' },
  { path: "/cadastro", component: Cadastro, title: 'Cadastro' }
];
