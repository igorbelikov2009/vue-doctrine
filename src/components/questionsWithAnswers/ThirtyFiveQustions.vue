<template>
  <div>
    <button
      class="general-issues__button"
      @click="isThirtyFiveQustions = !isThirtyFiveQustions"
      :class="{ 'general-issues__button_active': isThirtyFiveQustions }"
    >
      Тридцать пять вопросов
    </button>

    <div v-if="isThirtyFiveQustions">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>

          <p class="general-issues__paragraph">xxx</p>
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

      <!--  -->
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion61 = !isQuestion61"
          :class="{ 'general-issues__question_active': isQuestion61 }"
        >
          xx
        </button>

        <div class="general-issues__answer" v-if="isQuestion61">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion62 = !isQuestion62"
          :class="{ 'general-issues__question_active': isQuestion62 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion62">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion63 = !isQuestion63"
          :class="{ 'general-issues__question_active': isQuestion63 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion63">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion64 = !isQuestion64"
          :class="{ 'general-issues__question_active': isQuestion64 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion64">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion65 = !isQuestion65"
          :class="{ 'general-issues__question_active': isQuestion65 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion65">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion66 = !isQuestion66"
          :class="{ 'general-issues__question_active': isQuestion66 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion66">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion61isQuestion67 = !isQuestion67"
          :class="{ 'general-issues__question_active': isQuestion67 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion67">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion68 = !isQuestion68"
          :class="{ 'general-issues__question_active': isQuestion68 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion68">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion69 = !isQuestion69"
          :class="{ 'general-issues__question_active': isQuestion69 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion69">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion70 = !isQuestion70"
          :class="{ 'general-issues__question_active': isQuestion70 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion70">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <!--  -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion71 = !isQuestion71"
          :class="{ 'general-issues__question_active': isQuestion71 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion71">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion72 = !isQuestion72"
          :class="{ 'general-issues__question_active': isQuestion72 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion72">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion73 = !isQuestion73"
          :class="{ 'general-issues__question_active': isQuestion73 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion73">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion74 = !isQuestion74"
          :class="{ 'general-issues__question_active': isQuestion74 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion74">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion75 = !isQuestion75"
          :class="{ 'general-issues__question_active': isQuestion75 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion75">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion76 = !isQuestion76"
          :class="{ 'general-issues__question_active': isQuestion76 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion76">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion77 = !isQuestion77"
          :class="{ 'general-issues__question_active': isQuestion77 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion77">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion78 = !isQuestion78"
          :class="{ 'general-issues__question_active': isQuestion78 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion78">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion79 = !isQuestion79"
          :class="{ 'general-issues__question_active': isQuestion79 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion79">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion80 = !isQuestion80"
          :class="{ 'general-issues__question_active': isQuestion80 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion80">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <!--  -->

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion81 = !isQuestion81"
          :class="{ 'general-issues__question_active': isQuestion81 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion81">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion82 = !isQuestion82"
          :class="{ 'general-issues__question_active': isQuestion82 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion82">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion83 = !isQuestion83"
          :class="{ 'general-issues__question_active': isQuestion83 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion83">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion84 = !isQuestion84"
          :class="{ 'general-issues__question_active': isQuestion84 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion84">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion85 = !isQuestion85"
          :class="{ 'general-issues__question_active': isQuestion85 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion85">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion86 = !isQuestion86"
          :class="{ 'general-issues__question_active': isQuestion86 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion86">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion87 = !isQuestion87"
          :class="{ 'general-issues__question_active': isQuestion87 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion87">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion88 = !isQuestion88"
          :class="{ 'general-issues__question_active': isQuestion88 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion88">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion89 = !isQuestion89"
          :class="{ 'general-issues__question_active': isQuestion89 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion89">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion90 = !isQuestion90"
          :class="{ 'general-issues__question_active': isQuestion90 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion90">
          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>

          <p class="general-issues__paragraph"></p>
          <strong></strong>
          <span class="general-issues__span-purple"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThirtyFiveQustions',

  data() {
    return {
      isThirtyFiveQustions: false,

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
      isQuestion61: false,
      isQuestion62: false,
      isQuestion63: false,
      isQuestion64: false,
      isQuestion65: false,
      isQuestion66: false,
      isQuestion67: false,
      isQuestion68: false,
      isQuestion69: false,
      isQuestion70: false,
      isQuestion71: false,
      isQuestion72: false,
      isQuestion73: false,
      isQuestion74: false,
      isQuestion75: false,
      isQuestion76: false,
      isQuestion77: false,
      isQuestion78: false,
      isQuestion79: false,
      isQuestion80: false,
      isQuestion81: false,
      isQuestion82: false,
      isQuestion83: false,
      isQuestion84: false,
      isQuestion85: false,
      isQuestion86: false,
      isQuestion87: false,
      isQuestion88: false,
      isQuestion89: false,
      isQuestion90: false,
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
