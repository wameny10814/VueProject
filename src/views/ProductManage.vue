<template>
  <h1>產品管理</h1>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMmodelComponent" @click="openaddmodel('add','','')">
          新增產品
      </button>
  </div>
  <table class="table mt-4">
      <thead>
      <tr>
          <th width="120">
          分類
          </th>
          <th>產品名稱</th>
          <th width="120">
          原價
          </th>
          <th width="120">
          售價
          </th>
          <th width="100">
          是否啟用
          </th>
          <th width="120">
          編輯
          </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(item) in displayitem" :key="item.id">
          <td>{{item.category}}</td>
          <td>{{item.title}}</td>
          <td>{{item.origin_price}}</td>
          <td>{{item.price}}</td>
          <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span v-else>未啟用</span>
          </td>
          <td>
          <div class="btn-group">

              <button type="button" class="btn btn-outline-primary btn-sm" @click="openaddmodel('edit',item.id,item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="showdeleteAlert(item)" >
                  刪除
              </button>
          </div>
          </td>
      </tr>
      </tbody>
  </table>

  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>

   <AddProduct v-if="showAddProduct" :apitype="modeltype" />
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'
import axios from 'axios'

export default {
  components: {
    AddProduct
  },

  data () {
    return {
      showAddProduct: true,
      loginstatus: true,
      displayitem: {},
      editTemp: {
        data: {}
      },
      modeltype: {
        type: '',
        id: '',
        item: {}
      }
    }
  },

  methods: {
    openaddmodel (type, id, item) {
      // this.showAddProduct = !this.showAddProduct
      this.modeltype.type = type
      this.modeltype.id = id
      this.modeltype.item = item
    },

    displayData () {
      console.log('displayData')
      // to do ...............................分頁功能
      const api = 'https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/products?page=1'
      axios.get(api)
        .then((response) => {
          console.log('response', response.data.products)
          this.displayitem = response.data.products
        })
        .catch((error) => {
          console.log('error', error)
        })
    },

    editData (id) {
      console.log('editData', id)
      // to do ...............................分頁功能
      const api = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/product/${id}`
      axios.put(api, this.editTemp)
        .then((response) => {
          console.log('response', response.data.products)
          this.displayitem = response.data.products
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
</style>
