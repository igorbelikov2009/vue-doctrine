<template>
  <div>
    <button
      class="general-issues__button"
      @click="isHTMLQustions = !isHTMLQustions"
      :class="{ 'general-issues__button_active': isHTMLQustions }"
    >
      Вопросы по HTML
    </button>

    <div v-if="isHTMLQustions">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          Какая разница между элементами &lt;span&gt; и &lt;div&gt;?
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          <p class="general-issues__paragraph">
            <strong> &lt;span&gt; </strong> — это строчный (inline) элемент. <br />
            <strong> &lt;div&gt; </strong> — это блочный (block) элемент.
          </p>

          <p class="general-issues__paragraph">
            Элементы &lt;div&gt;нужно использовать для оформления разделов документа. А элементы
            &lt;span&gt; — в роли контейнеров для небольших объёмов текста, для изображений и других
            подобных элементов страниц.
          </p>

          <p class="general-issues__paragraph">
            Надо отметить, что нельзя помещать блочные элементы в строчные.
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Что такое мета-теги?
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          <p class="general-issues__paragraph">
            Мета-теги — это теги, находящиеся в теге страницы &lt;head&gt; и описывающие содержимое
            страницы. Мета-теги не выводятся на странице. Они имеются лишь в её коде.
          </p>

          <p class="general-issues__paragraph">
            Их основная задача заключается в том, чтобы кратко описывать содержимое страниц
            поисковым системам. Вот пример:
          </p>

          <p class="general-issues__paragraph">
            <span class="general-issues__span-purple">
              &lt;head&gt; <br />
              &lt;meta charset="UTF-8"&gt; <br />
              &lt;meta name="description" content="Description search engines use"&gt; <br />
              &lt;meta name="keywords" content="Keywords, of, your, page"&gt; <br />
              &lt;meta name="author" content="Me"&gt; <br />
              &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; <br />
              &lt;/head&gt;
            </span>
          </p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion05 = !isQuestion05"
          :class="{ 'general-issues__question_active': isQuestion05 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion05">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion10 = !isQuestion10"
          :class="{ 'general-issues__question_active': isQuestion10 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion11 = !isQuestion11"
          :class="{ 'general-issues__question_active': isQuestion11 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion11">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
          <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion12 = !isQuestion12"
          :class="{ 'general-issues__question_active': isQuestion12 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion12">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion17 = !isQuestion17"
          :class="{ 'general-issues__question_active': isQuestion17 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion17">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion20 = !isQuestion20"
          :class="{ 'general-issues__question_active': isQuestion20 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion20">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion21 = !isQuestion21"
          :class="{ 'general-issues__question_active': isQuestion21 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion21">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestionisQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion23 = !isQuestion23"
          :class="{ 'general-issues__question_active': isQuestion23 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion23">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion24 = !isQuestion24"
          :class="{ 'general-issues__question_active': isQuestion24 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion24">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion25 = !isQuestion25"
          :class="{ 'general-issues__question_active': isQuestion25 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion25">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion26 = !isQuestion26"
          :class="{ 'general-issues__question_active': isQuestion26 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion26">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion27 = !isQuestion27"
          :class="{ 'general-issues__question_active': isQuestion27 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion27">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion28 = !isQuestion28"
          :class="{ 'general-issues__question_active': isQuestion28 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion28">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion29 = !isQuestion29"
          :class="{ 'general-issues__question_active': isQuestion29 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion29">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion30 = !isQuestion30"
          :class="{ 'general-issues__question_active': isQuestion30 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion30">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion31 = !isQuestion31"
          :class="{ 'general-issues__question_active': isQuestion31 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion31">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion32 = !isQuestion32"
          :class="{ 'general-issues__question_active': isQuestion32 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion32">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion33 = !isQuestion33"
          :class="{ 'general-issues__question_active': isQuestion33 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion33">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion34 = !isQuestion34"
          :class="{ 'general-issues__question_active': isQuestion34 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion34">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion35 = !isQuestion35"
          :class="{ 'general-issues__question_active': isQuestion35 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion35">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HTMLQuestios',

  data() {
    return {
      isHTMLQustions: false,

      isQuestion01: false,
      isQuestion02: false,
      isQuestion03: false,
      isQuestion04: false,
      isQuestion05: false,
      isQuestion06: false,
      isQuestion07: false,
      isQuestion08: false,
      isQuestion09: false,
      isQuestion10: false,
      isQuestion11: false,
      isQuestion12: false,
      isQuestion13: false,
      isQuestion14: false,
      isQuestion15: false,
      isQuestion16: false,
      isQuestion17: false,
      isQuestion18: false,
      isQuestion19: false,
      isQuestion20: false,
      isQuestion21: false,
      isQuestion22: false,
      isQuestion23: false,
      isQuestion24: false,
      isQuestion25: false,
      isQuestion26: false,
      isQuestion27: false,
      isQuestion28: false,
      isQuestion29: false,
      isQuestion30: false,
      isQuestion31: false,
      isQuestion32: false,
      isQuestion33: false,
      isQuestion34: false,
      isQuestion35: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.general-issues {
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

  &__question {
    display: block;
    margin-top: 12px;
    margin-bottom: 12px;
    font-size: 14px;
    line-height: 24px;
    color: black;
    color: blue;
    border: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }

    // general-issues__question_active
    &_active {
      color: blue;
    }
  }

  &__answer {
    font-size: 19px;
    line-height: 24px;
    margin-left: 24px;
  }

  // general-issues__span
  &__span {
    color: black;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__span-red
  &__span-red {
    color: red;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__span-green
  &__span-green {
    color: green;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__span-purple
  &__span-purple {
    color: purple;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__span-grey
  &__span-grey {
    color: #605858;
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
  }

  // general-issues__link
  &__link {
    display: block;
    font-size: 19px;
    line-height: 1.5em;
    color: #2a5885;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: blue;
    }
  }

  &__paragraph {
    display: block;
    font-size: 19px;
    color: rgba(0, 0, 0, 0.86);
    line-height: 1.5em;
    margin-top: 24px;
  }
}
</style>
