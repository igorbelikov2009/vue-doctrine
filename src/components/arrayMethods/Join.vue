<template>
  <div id="array-methods-Join">
    <button
      class="array-methods__button"
      @click="isJoin = !isJoin"
      :class="{ 'array-methods__button_active': isJoin }"
    >
      array.join([separator])
    </button>

    <p class="array-methods__description">
      Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
    </p>

    <div v-if="isJoin">
      <a
        target="_blank"
        href="https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Array/join"
        >join()</a
      >

      <p class="array-methods__text">
        <span class="array-methods__span"> separator (необязательный) </span> Определяет строку,
        разделяющую элементы массива. В случае необходимости тип разделителя приводится к типу
        <span class="array-methods__span">String.</span>
        Если он не задан, элементы массива разделяются запятой ','. Если разделитель - пустая
        строка, элементы массива ничем не разделяются в возвращаемой строке. <br />
        Преобразует все элементы массива в строки и объединяет их в одну большую строку. Элемент
        массива с типом undefined или null преобразуется в пустую строку.
      </p>

      <p class="array-methods__text">
        Возвращаемое значение <span class="array-methods__span">Строка</span>, содержащая все
        элементы массива. Если arr.length == 0, то будет возвращена пустая строка.
      </p>

      <p class="array-methods__text">
        В примере массив arrayToString с тремя элементами, объединяем (преобразуем) в строку: с
        использованием разделителя по умолчанию, запятой с пробелом, плюса, окружённого пробелами, и
        пустой строки.
      </p>

      <p class="array-methods__text">имеем - arrayToString: {{ arrayToString }}</p>

      <p class="array-methods__text">
        <span class="array-methods__span">(по умолчанию) </span>
        <br />
        <span class="array-methods__span-purple">
          arrayJoinDefault() { <br />
          return this.arrayToString.join() <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green"> arrayJoinDefault: {{ arrayJoinDefault }}</span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">(запятая с пробелом) </span> <br />
        <span class="array-methods__span-purple"
          >arrayJoinCommaWithSpace() { <br />
          return this.arrayToString.join(', ') <br />
          }
        </span>
        получаем -
        <span class="array-methods__span-green">
          arrayJoinCommaWithSpace: {{ arrayJoinCommaWithSpace }}</span
        >
      </p>
      <p class="array-methods__text">
        <span class="array-methods__span">(плюс с пробелами) </span> <br />
        <span class="array-methods__span-purple"
          >arrayJoinPlusWithSpaces() { <br />
          return this.arrayToString.join(' + ') <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green"
          >arrayJoinPlusWithSpaces: {{ arrayJoinPlusWithSpaces }}</span
        >
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">(пробел)</span> <br />
        <span class="array-methods__span-purple">
          arrayJoinWithSpace(){ <br />
          return this.arrayToString.join(' ') <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green">arrayJoinWithSpace: {{ arrayJoinWithSpace }} </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">(без пробела)</span> <br />
        <span class="array-methods__span-purple"
          >arrayJoinWithoutSpace(){ <br />
          return this.arrayToString.join('') <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green"
          >arrayJoinWithoutSpace: {{ arrayJoinWithoutSpace }}
        </span>
      </p>

      <p class="array-methods__text">
        <span class="array-methods__span">( вставляем строку (', мы от тебя устали. '))</span>
        <br />
        <span class="array-methods__span-purple"
          >arrayJoinWithString(){ <br />
          return this.arrayToString.join(', мы от тебя устали. ') <br />
          }</span
        >
        получаем -
        <span class="array-methods__span-green"
          >arrayJoinWithString: {{ arrayJoinWithString }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Join',

  data() {
    return {
      isJoin: false,
      arrayToString: ['Ветер', 'Дождь', 'Огонь'],
    }
  },
  computed: {
    arrayJoinDefault() {
      return this.arrayToString.join()
    },
    arrayJoinCommaWithSpace() {
      return this.arrayToString.join(', ')
    },
    arrayJoinPlusWithSpaces() {
      return this.arrayToString.join(' + ')
    },
    arrayJoinWithSpace() {
      return this.arrayToString.join(' ')
    },
    arrayJoinWithoutSpace() {
      return this.arrayToString.join('')
    },
    arrayJoinWithString() {
      return this.arrayToString.join(', мы от тебя устали. ')
    },
  },
}
</script>

<style lang="scss" scoped>
.array-methods {
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

    // array-methods__button_active
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

  // array-methods__span
  &__span {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: black;
  }

  // array-methods__span-green
  &__span-green {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: green;
  }

  // array-methods__span-purple
  &__span-purple {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #9b13bd;
  }
}
</style>
