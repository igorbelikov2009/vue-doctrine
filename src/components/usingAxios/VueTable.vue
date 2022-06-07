<template>
  <div class="table">
    <h3 class="table__heading">components^VueTable.vue</h3>

    <div class="table__header">
      <p @click="sortByIdBack" class="table__row">
        index
        <i class="material-icons">
          swipe_vertical
        </i>
      </p>

      <p @click="sortById" class="table__row">
        id
        <i class="material-icons">
          swipe_vertical
        </i>
      </p>

      <p @click="sortByTitle" class="table__row">
        title
        <i class="material-icons">
          swipe_vertical
        </i>
      </p>

      <p @click="sortByBody" class="table__row">
        body
        <i class="material-icons">
          swipe_vertical
        </i>
      </p>
    </div>

    <!-- <i class="material-icons">
          swipe_vertical
        </i>
         это иконки с сайта https://fonts.google.com/icons?selected=Material+Icons -->

    <div>
      <TableRow
        v-for="(row, index) in paginatedUsers"
        :key="row.id"
        :rowData="row"
        :indexRow="index + indexComputed"
      />
    </div>

    <div class="table__pagination">
      <div
        class="table__page"
        v-for="page in pages"
        :key="page"
        :class="{ table__page_selected: page === pageNumber }"
        @click="pageClick(page)"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import TableRow from '@/components/usingAxios/TableRow.vue'

export default {
  name: 'VueTable',

  props: {
    userData: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
  data() {
    return {
      usersPerPage: 10,
      pageNumber: 1,
      indexComputed: 0,
    }
  },
  computed: {
    pages() {
      // console.log(Math.ceil(this.userData.length / 10))
      return Math.ceil(this.userData.length / 10)
    },
    paginatedUsers() {
      let from = (this.pageNumber - 1) * this.usersPerPage
      let to = from + this.usersPerPage
      return this.userData.slice(from, to)
    },
  },

  methods: {
    pageClick(page) {
      this.pageNumber = page
      this.indexComputed = (page - 1) * 10
      console.log(page, this.indexComputed)
    },
    sortByIdBack() {
      this.userData.sort((a, b) => a.id - b.id)
    },
    sortById() {
      this.userData.sort((a, b) => b.id - a.id)
    },
    sortByTitle() {
      this.userData.sort((a, b) => a.title.localeCompare(b.title))
    },
    sortByBody() {
      this.userData.sort((a, b) => a.body.localeCompare(b.body))
    },
  },
  components: {
    TableRow,
  },
}
</script>

<style lang="scss" scoped>
.table {
  max-width: 900px;
  margin: 0 auto;

  &__heading {
    text-align: center;
  }

  &__header {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid #e7e7e7;
  }

  &__row {
    padding: 8px 16px;
    text-align: left;
    display: flex;
    align-items: center;

    &:nth-of-type(1) {
      flex-basis: 10%;
    }

    &:nth-of-type(2) {
      flex-basis: 10%;
    }

    &:nth-of-type(3) {
      flex-basis: 20%;
    }

    &:nth-of-type(4) {
      flex-basis: 70%;
    }
  }

  &__pagination {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
  }

  &__page {
    padding: 8px;
    border: solid 1px #e7e7e7;
    margin-right: 10px;

    &:hover {
      background-color: #aeaeae;
      cursor: pointer;
      color: #ffffff;
    }

    // table__page_selected
    &_selected {
      background-color: #aeaeae;
      // cursor: pointer;
      color: #ffffff;
    }
  }
}

.material-icons {
  margin-left: 6px;
}
</style>
