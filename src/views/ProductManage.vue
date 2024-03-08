<template>
  <h1>訂單管理</h1>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addMmodelComponent" @click="openaddmodel">
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
      <tr>
          <td>category</td>
          <td>title</td>
          <td>origin_price</td>
          <td>price</td>
          <td>
          <span class="text-success">啟用</span>
          <span>未啟用</span>
          </td>
          <td>
          <div class="btn-group">

              <button type="button" class="btn btn-outline-primary btn-sm" @click="openmodel('editMmodelComponent',item)">編輯</button>
              <button type="button" class="btn btn-outline-danger btn-sm" @click="showdeleteAlert(item)" >
                  刪除
              </button>
          </div>
          </td>
      </tr>
      </tbody>
  </table>

   <AddProduct  ref="AddProduct"/>
</template>

<script>
import AddProduct from '@/components/AddProduct.vue'

export default {
  components: {
    AddProduct
  },

  data () {
    return {
      test: 'data'
    }
  },

  methods: {
    openaddmodel () {
      console.log('123')
      const addComponent = this.$refs.AddProduct
      addComponent.openModal()
    }
  }
}
</script>

<style scoped>
</style>
