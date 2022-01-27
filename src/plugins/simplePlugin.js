import ScrollHandlerMixin from "../mixins/scrollHandler";

export default {
  install(Vue) {
    //   миксин передали в плагин
    Vue.mixin(ScrollHandlerMixin);

    Vue.prototype.$log = function() {
      console.log("simplePlugin work");
    };
  }
};
