<template>
  <div id="array-methods-task">
    <button
      class="array-methods__button"
      @click="isAnagramsCheck = !isAnagramsCheck"
      :class="{ 'array-methods__button_active': isAnagramsCheck }"
    >
      Напишите функцию, которая найдет все анаграммы слова из списка. Вам будет даны слово и массив
      со словами. Вы должны вернуть массив всех анаграмм или пустой массив, если их нет.
    </button>

    <p class="array-methods__description">
      <br />
      <span class="array-methods__span"> anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> ['aabb', 'bbaa']</span> <br />

      <span class="array-methods__span"
        >anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
      </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> ['carer', 'racer'] </span> <br />

      <span class="array-methods__span">anagrams('laser', ['lazing', 'lazy', 'lacer']) </span>
      <span class="array-methods__span-purple"> => </span>
      <span class="array-methods__span-green"> []</span> <br />
    </p>

    <div v-if="isAnagramsCheck">
      <p class="array-methods__text">
        <span class="array-methods__span-red">1-ый способ</span> <br />
        имеем <span class="array-methods__span"> ( {{ word1 }}, {{ anagrams1 }} )</span> <br />
        <br />

        computed: { <br />
        <span class="array-methods__span-purple">
          checkAnagrams1() { <br />
          return this.anagrams(this.word1, this.anagrams1) <br />
          }</span
        >
        } <br />
        methods: { <br />
        <span class="array-methods__span-purple"
          >anagrams(word, words) { <br />
          return words.filter(function(item){ <br />
          return item.split('').sort().join('') === word.split('').sort().join(''); <br />
          }); }</span
        >
        } <br />
        получаем:
        <span class="array-methods__span-green">{{ checkAnagrams1 }} </span> <br />
        <br />

        <span class="array-methods__span-red">2-ый способ</span> <br />
        имеем <span class="array-methods__span">( {{ word2 }}, {{ anagrams2 }} )</span> <br />
        <br />
        computed: { <br />
        <span class="array-methods__span-purple"
          >checkAnagrams2() { <br />
          return this.anagramsFunc2(this.word2, this.anagrams2) <br />
          }</span
        >

        } <br />
        methods: { <br />
        <span class="array-methods__span-purple"
          >anagramsFunc2(word, words) { <br />
          const sort = word => <br />
          word.split('').sort().join('') <br />
          let token = sort(word) <br />
          let total = [] <br />
          for (let i = 0; i &lt; words.length; i++) { <br />
          if (sort(words[i]) === token) { <br />
          total.push(words[i]) } } <br />
          return total <br />
          }</span
        >
        } <br />
        получаем:
        <span class="array-methods__span-green">{{ checkAnagrams2 }} </span> <br />
        <br />

        <span class="array-methods__span-red">3-ый способ</span> <br />
        имеем <span class="array-methods__span">( {{ word3 }}, {{ anagrams3 }} )</span> <br />
        <br />
        computed: { <br />
        <span class="array-methods__span-purple"></span> <br />
        } <br />
        methods: { <br />
        <span class="array-methods__span-purple"></span> } <br />
        получаем:
        <span class="array-methods__span-green"></span> <br />
        <br />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnagramsCheck',

  data() {
    return {
      isAnagramsCheck: false,
      anagrams1: ['aabb', 'abcd', 'bbaa', 'dada'],
      word1: 'abba',
      anagrams2: ['crazer', 'carer', 'racar', 'caers', 'racer'],
      word2: 'racer',
      anagrams3: ['lazing', 'lazy', 'lacer'],
      word3: 'laser',
    }
  },
  computed: {
    checkAnagrams1() {
      return this.anagramsFunc1(this.word1, this.anagrams1)
    },
    checkAnagrams2() {
      return this.anagramsFunc2(this.word2, this.anagrams2)
    },
  },

  methods: {
    anagramsFunc1(word, words) {
      return words.filter(function(item) {
        return (
          item
            .split('')
            .sort()
            .join('') ===
          word
            .split('')
            .sort()
            .join('')
        )
      })
    },
    anagramsFunc2(word, words) {
      const sort = word =>
        word
          .split('')
          .sort()
          .join('')
      let token = sort(word)
      let total = []

      for (let i = 0; i < words.length; i++) {
        if (sort(words[i]) === token) {
          total.push(words[i])
        }
      }

      return total
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
    color: #c328c3;
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

  // array-methods__span-bold
  &__span-bold {
    font-size: inherit;
    line-height: inherit;
    font-weight: 900;
    color: black;
  }

  // array-methods__span-red
  &__span-red {
    font-size: inherit;
    line-height: inherit;
    font-weight: inherit;
    color: #ff3b0e;
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
