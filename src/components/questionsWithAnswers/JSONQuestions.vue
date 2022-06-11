<template>
  <div>
    <button
      class="general-issues__button"
      @click="isJSONQuestions = !isJSONQuestions"
      :class="{ 'general-issues__button_active': isJSONQuestions }"
    >
      Вопросы по JSON
    </button>

    <div v-if="isJSONQuestions">
      <div>
        <button
          class="general-issues__question"
          @click="isQuestion01 = !isQuestion01"
          :class="{ 'general-issues__question_active': isQuestion01 }"
        >
          Что такое JSON
        </button>

        <div class="general-issues__answer" v-if="isQuestion01">
          JSON (JavaScriptObjectNotation) - способ записи объектов в JavaScript, строковое
          представление объекта. JSON используется (в основном) для передачи данных между сервером и
          клиентом. <br />

          JSON имеет структуру ключ-значение { <br />
          "ключ1": "значение1", <br />
          "ключ2": "значение2", <br />
          "ключ3": "значение3", <br />
          } <br />

          <span class="general-issues__span-red">ключи</span> должны быть строками, в ковычках ""
          <br />

          Доступные типы для значений: <br />
          - массив простых или не простых значений <br />
          - объект <br />
          - число <br />
          - строка <br />
          - логическое значение <br />
          - null <br />

          Объект JSON
          <span class="general-issues__span-red">заключён в фигурные скобки {} </span> <br />

          <span class="general-issues__span-red"></span> <br />

          <span class="general-issues__span-red"></span> <br />
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion02 = !isQuestion02"
          :class="{ 'general-issues__question_active': isQuestion02 }"
        >
          Метод JSON.stringify()
        </button>

        <div class="general-issues__answer" v-if="isQuestion02">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify"
          >
            Метод JSON.stringify()</a
          >

          переводит переданный объект или значение JavaScript в строку JSON. <br />
          <span class="general-issues__span-purple">
            let obj = { <br />
            prop1: 'строка1', <br />
            id: 123, <br />
            check: false, <br />
            } <br />
          </span>

          <span class="general-issues__span-green"
            >console.log(JSON.stringify(obj)) {"prop1":"строка1","id":123,"check":false}</span
          >
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion04 = !isQuestion04"
          :class="{ 'general-issues__question_active': isQuestion04 }"
        >
          Правила маппинга в JSON.stringify
        </button>

        <div class="general-issues__answer" v-if="isQuestion04">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://chernobrovov.ru/articles/big-data-mapping-chto-takoe-mappirovanie-bolshih-dannyh.html"
            >Правило маппинга</a
          >
          проверяет если ключ (наименование свойства) <br />
          <span class="general-issues__span"> пример 1</span> <br />

          <span class="general-issues__span-purple">
            let obj1 = { <br />
            property1: 'строка1', <br />
            property2: { <br />
            property6: false, <br />
            }, <br />
            property5: [1, 2, 3, 4], <br />
            } <br />

            let JSONstr = JSON.stringify(obj1, ['property5'])
          </span>
          <br />

          <span class="general-issues__span-green">
            console.log(JSONstr) {"property5":[1,2,3,4]}</span
          >
          <br />

          <span class="general-issues__span"> пример 2 </span> <br />

          <span class="general-issues__span-purple">
            let obj1 = { <br />
            property1: 'строка1', <br />
            property2: { <br />
            property6: false, <br />
            }, <br />
            property5: [1, 2, 3, 4], <br />
            } <br />

            let JSONstr = JSON.stringify(obj1, function replacer(key, value) { <br />
            console.log(`key = ${key} value = ${value}`) <br />
            if (key !== 'property5') { <br />
            return value <br />
            } <br />
            }) <br />
            console.log(JSONstr)
          </span>
          <br />
          получаем <br />
          <span class="general-issues__span-green">
            key = value = [object Object] <br />
            key = property1 value = строка1 <br />
            key = property2 value = [object Object] <br />
            key = property6 value = false <br />
            key = property5 value = 1,2,3,4 <br />
            {"property1":"строка1","property2":{"property6":false}}
          </span>
        </div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion03 = !isQuestion03"
          :class="{ 'general-issues__question_active': isQuestion03 }"
        >
          Метод JSON.parse()
        </button>

        <div class="general-issues__answer" v-if="isQuestion03">
          <a
            class="general-issues__link"
            target="_blank"
            href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse"
            >Метод JSON.parse()</a
          >

          разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и
          возвращает разобранное значение. <br />

          <br />

          <span class="general-issues__span-purple">
            JSONstr = {"property1":"строка1","property2":{"property6":false},"property5":[1,2,3,4]}
            <br />

            console.log(JSON.parse(JSONstr)) <br />
          </span>

          <span class="general-issues__span-green">
            { <br />
            property1: 'строка1', <br />
            property2: { property6: false }, <br />
            property5: [ 1, 2, 3, 4 ] <br />
            }
          </span>
          <br />
          Ограничения метода <br />
          - свойства должны быть обёрнуты в ковычки <br />
          - запрещено использование одинарных ковычек <br />
          - запрещено использование ключевого слова New <br />
          - в JSON не может быть комментариев <br />
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

        <div class="general-issues__answer" v-if="isQuestion05">xxx</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion06 = !isQuestion06"
          :class="{ 'general-issues__question_active': isQuestion06 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion06">xxxx</div>
      </div>

      <span class="general-issues__span-red"></span>

      <span class="general-issues__span-purple"></span>

      <span class="general-issues__span-green"></span>

      <a class="general-issues__link" target="_blank" href=""></a>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion07 = !isQuestion07"
          :class="{ 'general-issues__question_active': isQuestion07 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion07">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion08 = !isQuestion08"
          :class="{ 'general-issues__question_active': isQuestion08 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion08">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion09 = !isQuestion09"
          :class="{ 'general-issues__question_active': isQuestion09 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion09">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion10 = !isQuestion10"
          :class="{ 'general-issues__question_active': isQuestion10 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion10">XXX</div>
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
          XXX
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

        <div class="general-issues__answer" v-if="isQuestion12">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion13 = !isQuestion13"
          :class="{ 'general-issues__question_active': isQuestion13 }"
        >
          Xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion13">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion14 = !isQuestion14"
          :class="{ 'general-issues__question_active': isQuestion14 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion14">xxxx</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion15 = !isQuestion15"
          :class="{ 'general-issues__question_active': isQuestion15 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion15">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion16 = !isQuestion16"
          :class="{ 'general-issues__question_active': isQuestion16 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion16">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion17 = !isQuestion17"
          :class="{ 'general-issues__question_active': isQuestion17 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion17">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion18 = !isQuestion18"
          :class="{ 'general-issues__question_active': isQuestion18 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion18">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion19 = !isQuestion19"
          :class="{ 'general-issues__question_active': isQuestion19 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion19">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion20 = !isQuestion20"
          :class="{ 'general-issues__question_active': isQuestion20 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion20">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion21 = !isQuestion21"
          :class="{ 'general-issues__question_active': isQuestion21 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion21">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestionisQuestion22 = !isQuestion22"
          :class="{ 'general-issues__question_active': isQuestion22 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion22">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion23 = !isQuestion23"
          :class="{ 'general-issues__question_active': isQuestion23 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion23">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion24 = !isQuestion24"
          :class="{ 'general-issues__question_active': isQuestion24 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion24">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion25 = !isQuestion25"
          :class="{ 'general-issues__question_active': isQuestion25 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion25">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion26 = !isQuestion26"
          :class="{ 'general-issues__question_active': isQuestion26 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion26">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion27 = !isQuestion27"
          :class="{ 'general-issues__question_active': isQuestion27 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion27">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion28 = !isQuestion28"
          :class="{ 'general-issues__question_active': isQuestion28 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion28">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion29 = !isQuestion29"
          :class="{ 'general-issues__question_active': isQuestion29 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion29">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion30 = !isQuestion30"
          :class="{ 'general-issues__question_active': isQuestion30 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion30">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion31 = !isQuestion31"
          :class="{ 'general-issues__question_active': isQuestion31 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion31">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion32 = !isQuestion32"
          :class="{ 'general-issues__question_active': isQuestion32 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion32">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion33 = !isQuestion33"
          :class="{ 'general-issues__question_active': isQuestion33 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion33">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion34 = !isQuestion34"
          :class="{ 'general-issues__question_active': isQuestion34 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion34">XXX</div>
      </div>

      <div>
        <button
          class="general-issues__question"
          @click="isQuestion35 = !isQuestion35"
          :class="{ 'general-issues__question_active': isQuestion35 }"
        >
          xxx
        </button>

        <div class="general-issues__answer" v-if="isQuestion35">XXX</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JSONQuestions',

  data() {
    return {
      isJSONQuestions: false,

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
}
</style>
