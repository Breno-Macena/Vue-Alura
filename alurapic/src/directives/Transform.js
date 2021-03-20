import Vue from "vue";

Vue.directive("meu-transform", {
  bind(el, binding, vnode) {
    let angulo = 0;
    el.addEventListener("dblclick", function() {
      let incr = binding.value || 90;
      let efeito;

      if (!binding.arg || binding.arg == 'rotate'){
        if (binding.modifiers.reverse) angulo -= incr;
        else angulo += incr;

        efeito = `rotate(${ angulo }deg)`;
      }
      else if (binding.arg == 'scale'){
        efeito = `scale(${ incr })`;
      }

      el.style.transform = efeito;
      if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
    });
  }
});

Vue.directive("hover-zoom-image", {
  bind(el, binding, vnode) {
    el.addEventListener("mouseenter", function() {
      let incr = binding.value || 1.1;
      el.style.transform = `scale(${ incr })`;
      el.style.transition = 'transform 0.5s';
    });

    el.addEventListener("mouseleave", function() {
      el.style.transform = `scale(1)`;
      el.style.transition = 'transform 0.5s';
    });
  }
});
