<template>
  <div class="text-editor">
    <h1>Урок 7.3 фильтры, установка "marked"</h1>
    <a
      class="text-editor__link"
      target="_blank"
      href="https://tech-wiki.online/ru/vue-vscode.html#google_vignette"
      >Настройка VS Code для разработки Vue</a
    >
    <a class="text-editor__link" target="_blank" href="https://getemoji.com/">Иконки - смайлики</a>
    <a class="text-editor__link" target="_blank" href="https://github.com/markedjs/marked"
      >marked</a
    >

    <a
      class="text-editor__link"
      target="_blank"
      href="https://htmlacademy.ru/blog/boost/tools/efficient-vs-code-plugins"
      >8 расширений VS Code для продуктивной работы</a
    >
    <textarea v-model="text"></textarea>

    <div class="output-text" :inner-html.prop="text | upperCase | emoji"></div>
    <!-- <div class="output-text" :inner-html.prop="text | marked"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
    }
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase()
    },
    emoji(value) {
      return value.replace(':)', ' 😇 ')
    },
  },
}
</script>

<style lang="scss" scoped>
.text-editor {
  width: 100%;
  max-width: 1160px;
  margin: 0 auto;
  margin-top: 72px;
  display: flex;
  flex-direction: column;

  &__link {
    display: block;
    text-decoration: none;
    margin-top: 12px;
    margin-left: 12px;
  }
}
textarea {
  width: 500px;
  height: 200px;
}
</style>
