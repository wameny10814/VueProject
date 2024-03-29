<template>
    <h1>This is Coupon page.</h1>
    <div class="text-end"><button @click="add()" class="btn btn-outline-primary btn-sm">新增</button></div>
    <table class="table mt-4">
      <thead>
      <tr>
          <th width="200">
          標題
          </th>
          <th width="200">優惠卷碼</th>
          <th >
          優惠折數
          </th>
          <th width="120">
          啟用狀態
          </th>
          <th width="120">
          數量
          </th>
          <th>
          到期日
          </th>
          <th>
          更多
          </th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="(item) in displayitem" :key="item.id">
            <td>{{item.title}}</td>
            <td>{{item.code}}</td>
            <td>{{item.percent}}
            </td>
            <td><input type="checkbox" v-model="item.is_enabled" :checked="item.is_enabled" id="enabled"><label for="enabled"> 啟用</label></td>
            <td>{{item.num}}</td>
            <td>{{Math.floor(item.due_date*1/ (1000 * 60 * 60 * 24))}}</td>
            <td>
              <div class="btn-group">
                <button type="button" class="btn btn-outline-primary btn-sm" @click="editcoupon(item.id,item)">編輯</button>
                <button type="button" class="btn btn-outline-danger btn-sm" @click="deletecoupon(item.id)" >
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
  {{pages}}
  <div>
    <template v-if="modeltype.length !=''">
        <h3>新增優惠卷</h3>
        <label for="title">名稱</label>
        <input type="text" id="title" v-model="additem.data.title">
        <label for="code">折扣碼</label>
        <input type="text" id="code" v-model="additem.data.code">
        <label for="percent">折扣數</label>
        <input type="number" id="percent" v-model="additem.data.percent">
        <label for="isenabled">啟用打勾</label>
        <input type="checkbox" id="isenabled" v-model="additem.data.is_enabled" :checked="additem.data.is_enabled">
        <label for="days">期間天數</label>
        <input type="number" id="days" v-model="additem.data.due_date">
        <div>
            <button @click="addcoupon()" v-if="modeltype === 'add'">確定</button>
            <button @click="comfirmedit()" v-if="modeltype === 'edit'">確定編輯</button>
        </div>
    </template>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      displayitem: [],
      pages: {},
      additem: {
        data: {
          title: '',
          is_enabled: 0,
          percent: 80,
          due_date: 1,
          code: ''
        }
      },
      modeltype: ''
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
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupons?page=${nowpage}`
      axios.get(api)
        .then((response) => {
          console.log('response', response.data)
          this.displayitem = response.data.coupons
          this.pages = response.data.pagination
        })
        .catch((error) => {
          console.log('error', error)
        })
    },

    add () {
      this.modeltype = 'add'
      this.additem.data = {
        title: '',
        is_enabled: 0,
        percent: 80,
        due_date: 1,
        code: ''
      }
    },

    addcoupon () {
      this.additem.data.due_date *= 1000 * 60 * 60 * 24
      this.additem.data.is_enabled === false ? this.additem.data.is_enabled = 0 : this.additem.data.is_enabled = 1
      const api = 'https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupon'
      axios.post(api, this.additem)
        .then((response) => {
          alert(response.data.message)
          this.displayData()
          this.additem.data = {
            title: '',
            is_enabled: 0,
            percent: 80,
            due_date: 1,
            code: ''
          }
          this.modeltype = ''
        })
        .catch((error) => {
          console.log('error', error)
        })
    },

    deletecoupon (id) {
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupon/${id}`
      axios.delete(api)
        .then((response) => {
          alert(response.data.message)
          this.displayData()
        })
        .catch((error) => {
          console.log('error', error)
        })
    },

    editcoupon (id, item) {
      this.additem.data = item
      this.additem.data.due_date = Math.floor(this.additem.data.due_date * 1 / (1000 * 60 * 60 * 24))
      this.modeltype = 'edit'
    },

    comfirmedit () {
      console.log('comfirmedit')
      if (this.additem.data.is_enabled === false || this.additem.data.is_enabled === 0) {
        this.additem.data.is_enabled = 0
      } else if (this.additem.data.is_enabled === true || this.additem.data.is_enabled === 1) {
        this.additem.data.is_enabled = 1
      }
      this.additem.data.due_date *= 1000 * 60 * 60 * 24
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupon/${this.additem.data.id}`
      axios.put(api, this.additem)
        .then((response) => {
          console.log('response', response)
          alert(response.data.message)
          this.displayData()
          this.additem.data = {
            title: '',
            is_enabled: 0,
            percent: 80,
            due_date: 1,
            code: ''
          }
          this.modeltype = ''
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
*{
    outline: 0px solid;
}
</style>
