<template>
  <div class="general-issues">
    <h1 class="general-issues__heading">
      Вопросы (с ответами) кандидату на должность frontend разработчика
    </h1>

    <GeneralIssues />

    <HTMLQuestios />

    <CSSQuestions />

    <JavaScriptQuestions />

    <DOMQustions />

    <JSONQuestions />

    <HTTPRequestMethods />

    <Promise />

    <ThirtyFiveQustions />
  </div>
</template>

<script>
import GeneralIssues from '@/components/questionsWithAnswers/GeneralIssues.vue'
import CSSQuestions from '@/components/questionsWithAnswers/CSSQuestions.vue'
import HTMLQuestios from '@/components/questionsWithAnswers/HTMLQuestios.vue'
import JavaScriptQuestions from '@/components/questionsWithAnswers/JavaScriptQuestions.vue'
import DOMQustions from '@/components/questionsWithAnswers/DOMQustions.vue'
import HTTPRequestMethods from '@/components/questionsWithAnswers/HTTPRequestMethods.vue'
import JSONQuestions from '@/components/questionsWithAnswers/JSONQuestions.vue'
import Promise from '@/components/questionsWithAnswers/Promise.vue'
import ThirtyFiveQustions from '@/components/questionsWithAnswers/ThirtyFiveQustions.vue'

export default {
  name: 'QuestionsWithAnswersPage',

  data() {
    return {
      isCSSQuestions: false,
      isJavascriptQuestions: false,
      isGeneralIssues: false,
      isNetworkingQuestions: false,
      isButton: false,
    }
  },
  components: {
    GeneralIssues,
    CSSQuestions,
    HTMLQuestios,
    JavaScriptQuestions,
    DOMQustions,
    HTTPRequestMethods,
    JSONQuestions,
    Promise,
    ThirtyFiveQustions,
  },
}
</script>

<style lang="scss" scoped>
.general-issues {
  width: calc(100% - 48px);
  max-width: 1024px;
  margin: 0 auto;
  margin-top: 76px;
  padding: 24px;

  @media screen and (min-width: 576px) {
    width: calc(100% - 56px);
    padding: 24px 28px;
  }

  &__heading {
    display: block;
    font-size: 2em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: black;
    margin-bottom: 24px;
  }

  &__subheading {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
  }

  &__button {
    display: block;
    margin-top: 48px;
    font-size: 18px;
    line-height: 24px;
    color: black;
    font-weight: 500;
    border: none;
    cursor: pointer;

    &:hover {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }

    // general-issues__button_active
    &_active {
      line-height: 22px;
      color: red;
      border: 1px red solid;
      border-radius: 24px;
      box-sizing: border-box;
    }
  }

  &__description {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #978d8d;
    font-weight: 500;
    margin-bottom: 36px;
  }

  &__link {
    display: block;
    font-size: 18px;
    line-height: 24px;
    color: black;
    font-weight: 500;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }

  &__text {
    display: block;
    font-size: 16px;
    line-height: 24px;
    color: #978d8d;
    font-weight: 500;
  }

  // general-issues__span
  &__span {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: black;
  }

  // general-issues__span-bold
  &__span-bold {
    font-size: inherit;
    line-height: inherit;
    font-weight: 900;
    color: black;
  }

  // general-issues__span-red
  &__span-red {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #ff3b0e;
    cursor: pointer;
  }

  // general-issues__span-green
  &__span-green {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: green;
  }

  // general-issues__span-purple
  &__span-purple {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #9b13bd;
  }
}
</style>
