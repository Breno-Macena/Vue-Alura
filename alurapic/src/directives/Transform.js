import Vue from "vue";

Vue.directive("meu-transform", {
  bind(el, binding, vnode) {
    let angulo = 0;
    el.addEventListener("dblclick", function() {
      let rotation = binding.value || 90;

      if (binding.modifiers.reverse) angulo -= rotation;
      else angulo += rotation;

      el.style.transform = `rotate(${ angulo }deg)`;
      if(binding.modifiers.animate) el.style.transition = 'transform 0.5s';
    });
  }
});
