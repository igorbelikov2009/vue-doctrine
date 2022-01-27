export default {
  methods: {
    // после события onScroll необходимо переопределить функцию в нашем
    // компоненте
    onScrollEnd() {
      console.warn("You must override onScrollEnd method");
    },
    onScroll(event) {
      const container = event.target;
      // не забудь поменять modalBody на container
      if (container.clientHeight + container.scrollTop >= container.scrollHeight) {
        //  отсюда берём метод для компонента
        this.onScrollEnd();
        // this.isRulesReaded = false;
      }
    }
  }
};
