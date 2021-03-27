import Home from "./components/home/Home.vue";
// Carregamento preguiçoso (lazy loading) do módulo para evitar sobrecarga
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue').then(m => m.default);

import NotFound from "./components/notfound/NotFound.vue"

// define as rotas da aplicação
export const routes = [
  { path: "/", name: 'home', component: Home, title: 'Home', menu: true },
  { path: "/cadastro", name: 'cadastro', component: Cadastro, title: 'Cadastro', menu: true },
  { path: "/cadastro/:id", name: 'altera', component: Cadastro, title: 'Cadastro', menu: false },
  { path: '*', component: NotFound, menu: false }
];
