import Vue from "vue";

// define uma diretiva vue que registra o evento de double click
// no elemento do DOM
Vue.directive("meu-transform", {
  bind(el, binding, vnode) {
    let angulo = 0;
    el.addEventListener("dblclick", function() {
      // se não for passado o valor na diretiva, assume 90 como valor padrão
      let incr = binding.value || 90; 
      let efeito;
      
      // se não for passado argumentos para a diretiva, ou o argumento for
      // 'rotate', faz o efeito de rotação no elemento.
      if (!binding.arg || binding.arg == 'rotate'){
        if (binding.modifiers.reverse) angulo -= incr;
        else angulo += incr;
        efeito = `rotate(${ angulo }deg)`;
      }
      // se o argumento for 'scale', faz o efeito de zoom no elemento
      else if (binding.arg == 'scale'){
        efeito = `scale(${ incr })`;
      }

      el.style.transform = efeito;
      // se a diretiva tiver o modificador animate, adiciona um efeito de transição
      // suave ao efeito de rotação que dura meio segundo
      if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
    });
  }
});

// define uma diretiva vue que registra um evento quando o mouse passa
// por cima do elemento do DOM
Vue.directive("hover-zoom-image", {
  bind(el, binding, vnode) {
    // evento disparado quando o mouse "entra" no elemento
    el.addEventListener("mouseenter", function() {
      // se não for passado o valor na diretiva, assume 1.1 como valor padrão
      let incr = binding.value || 1.1;
      // dá um zoom na imagem com um efeito de transição animada que dura
      // meio segundo
      el.style.transform = `scale(${ incr })`;
      el.style.transition = 'transform 0.5s';
    });

    // evento disparado quando o mouse "sai" do elemento
    el.addEventListener("mouseleave", function() {
      // faz o elemento volta ao tamanho original com um efeito de transição
      // animada que dura meio segundo
      el.style.transform = `scale(1)`;
      el.style.transition = 'transform 0.5s';
    });
  }
});
