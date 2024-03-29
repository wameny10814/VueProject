<template>
  <h1>This is product page.</h1>
  <RouterLink to="/">Home</RouterLink> |
  <RouterLink to="/about">About</RouterLink>

  <div class="d-flex justify-content-between">
    <div>分類選項
      <button>分類一</button>
      <button>分類二</button>
      <button>分類二</button>
    </div>
    <div>
      search
      <input type="text"><button>搜尋</button>
    </div>
  </div>
  <div>
    <div class="row">
      <div class="productcard col-4" v-for="(item) in displayitem" :key="item.id">
        <div >
            <img src="/bookbanner.jpg" style="height:100%;width:100%"/>
        </div>
        <h4 style="font-weight: 600;" class="text-center">{{item.title}}</h4>
        <p class="text-center">{{item.description}}</p>
      </div>
    </div>
  </div>

  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item" :class="{'disabled': pages.has_pre === false}" @click="displayData('prev')">
        <span class="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </span>
      </li>
      <li class="page-item" v-for="(page, index) in pages.total_pages" :key="index" :class="{'active': page === pages.current_page}">
        <span class="page-link"  @click="displayData(page)">
          {{page}}
        </span>
      </li>
      <li class="page-item" :class="{'disabled': pages.has_next === false}" @click="displayData('next')">
        <span class="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </span>
      </li>
    </ul>
  </nav>
  <div>{{displaydata}}</div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      displayitem: [],
      pages: {}
    }
  },

  methods: {

    displayData (nowpage = 1) {
      console.log('displayData', nowpage)
      if (nowpage === 'prev') {
        nowpage = this.current_page - 1
      } else if (nowpage === 'next') {
        nowpage = this.current_page + 1
      }

      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/products?page=${nowpage}`
      axios.get(api)
        .then((response) => {
          console.log('response', response.data.products)
          this.displayitem = response.data.products
          this.pages = response.data.pagination
        })
        .catch((error) => {
          console.log('error', error)
        })
    }
  },

  mounted () {
    console.log('mounted')
    this.displayData()
  }

}
</script>

<style scoped>
.productcard{
  border:1px solid #ddd;
}
</style>
