<template>
    <h1>訂單管理</h1>
    <table class="table mt-4">
      <thead>
      <tr>
          <th width="120">
          訂單編號
          </th>
          <th width="300">顧客名稱</th>
          <th width="300">
          訂單詳細
          </th>
          <th width="120">
          總金額
          </th>
          <th width="120">
          付款狀態
          </th>
          <th>
          備註
          </th>
          <th>
          更多
          </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in displayitem" :key="item.id">
            <td>{{item.create_at}}</td>
            <td>
              <ul class="list-unstyled">
                <li>名稱：{{item.user.name}}</li>
                <li>Email：{{item.user.email}}</li>
                <li>Tel：{{item.user.tel}}</li>
                <li>住址:{{item.user.address}}</li>
              </ul>
            </td>
            <td>
                <ul class="list-unstyled">
                  <li v-for="product in item.products" :key="product.id">
                    產品名稱: {{product.product.title}} 數量：{{ product.qty }} 金額：{{product.total}}
                  </li>
                </ul>
            </td>
            <td>{{item.total}}</td>
            <td><input type="checkbox" v-model="item.is_paid" :checked="item.is_paid" id="ispaid" @change="updatepayment(item)"><label for="ispaid">{{item.is_paid}}</label> </td>
            <td>{{item.message}}</td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="showedit(item.id,item)">編輯</button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="showdeleteAlert(item.id)" >
                    刪除
                </button>
              </div>
            </td>
        </tr>
      </tbody>
  </table>
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
  <div v-if="editdata.data.id">
    <input type="checkbox" id="paystatus" v-model="editdata.data.is_paid">
    <label for="paystatus">付款狀態</label>
    <label for="name">名稱</label>
    <input type="text" id="name" v-model="editdata.data.user.name">
    <label for="address">住址</label>
    <input type="text" id="address" v-model="editdata.data.user.address">
    <label for="email">電子信箱</label>
    <input type="text" id="email" v-model="editdata.data.user.email">
    <label for="tel">電話</label>
    <input type="text" id="tel" v-model="editdata.data.user.tel">
    <button @click="showeditAlert(editdata.data.id)">更新</button>
    {{editdata}}
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      displayitem: {},
      pages: {},
      editdata: {
        data: {}
      }
    }
  },

  methods: {

    displayData (nowpage = 1) {
      console.log('displayData')
      if (nowpage === 'prev') {
        nowpage = this.current_page - 1
      } else if (nowpage === 'next') {
        nowpage = this.current_page + 1
      }
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/orders?page=${nowpage}`
      axios.get(api)
        .then((response) => {
          console.log('response', response.data)
          this.displayitem = {}
          this.displayitem = response.data.orders
          this.pages = response.data.pagination
        })
        .catch((error) => {
          console.log('error', error)
        })
    },

    showdeleteAlert (id) {
      console.log('showdeleteAlert', id)
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/order/${id}`
      axios.delete(api)
        .then((response) => {
          alert(response.data.message)
          this.displayData()
        })
        .catch((error) => {
          console.log('error del', error)
        })
    },

    showedit (id, item) {
      this.editdata.data = item
    },

    showeditAlert (id) {
      console.log('showdeleteAlert id', id)
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/order/${id}`
      axios.put(api, this.editdata)
        .then((response) => {
          this.displayData()
        })
        .catch((error) => {
          console.log('error del', error)
        })
    },

    updatepayment (item) {
      console.log('updatepayment', item)
      this.editdata.data = item
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/order/${item.id}`
      axios.put(api, this.editdata)
        .then((response) => {
          console.log('updatepayment res', response)
          this.displayData()
        })
        .catch((error) => {
          console.log('error del', error)
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
</style>
