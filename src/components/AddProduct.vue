<template>
    <div>
      <h3 class="mb-4" v-if="apitype.type === 'add'">新增產品</h3>
      <h3 class="mb-4" v-if="apitype.type === 'edit'">編輯產品</h3>
      <form class="row g-3" >
          <div class="col-md-6">
              <label for="inputName" class="form-label">品名</label>
              <input type="text" class="form-control" id="inputName" v-model="datato.data.title" />
          </div>
          <div class="col-md-6">
              <label for="inputCategory" class="form-label">分類</label>
              <input  type="text" class="form-control" id="inputCategory" v-model="datato.data.category">
          </div>
          <div class="col-6">
              <label for="inputOriginPrice" class="form-label">原價</label>
              <input type="number" class="form-control" id="inputOriginPrice" v-model="datato.data.origin_price">
          </div>
              <div class="col-6">
              <label for="inputPrice" class="form-label">價格</label>
              <input type="number" class="form-control" id="inputPrice" v-model="datato.data.price">
          </div>
          <div class="col-12">
              <label for="inputDescription" class="form-label">描述</label>
              <input type="text" class="form-control" id="inputDescription" v-model="datato.data.description">
          </div>
          <div class="col-12">
              <label for="inputContent" class="form-label">內容規格</label>
              <input type="text" class="form-control" id="inputContent" v-model="datato.data.content">
          </div>
          <div class="col-6">
              <label for="inputImageUrl" class="form-label">主圖片</label>
              <input type="text" class="form-control" id="inputImageUrl" v-model="datato.data.imgUrl">
          </div>
          <div class="col-6">
             <label for="" style="opacity:0">啟用</label>
              <div class="form-check">
              <input class="form-check-input" type="checkbox" id="gridCheck" v-model="datato.data.is_enabled" :checked="datato.data.is_enabled" >
              <label class="form-check-label" for="gridCheck">
                  啟用打勾
              </label>
              </div>
          </div>
          <div class="col-6">
              <img src="" style="height:100%"/>
          </div>
          <div class="col-12">
              <button type="submit" class="btn btn-primary" @click="Addapi(apitype)">確認</button>
          </div>
      </form>
      {{apitype}}
      <div>{{datato.data}}</div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  props: ['apitype'],
  emits: ['redenerstatus'],

  data () {
    return {
      datato: {
        data:
        {
          title: '',
          content: '',
          category: '',
          imagesUrl: [
            '圖片網址一',
            '圖片網址二',
            '圖片網址三'
          ],
          is_enabled: false,
          price: 0,
          origin_price: 0,
          unit: '本',
          description: '',
          imageUrl: ''
        }
      },
      redenerstatus: false

    }
  },

  methods: {
    Addapi (type) {
      console.log('Add', type)
      if (type.type === 'add') {
        console.log('in add api')
        const api = 'https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/product'
        axios.post(api, this.datato)
          .then((response) => {
            console.log('add api response', response)
            alert(response.data.message)
            this.redenerstatus = true
            this.emit()
            this.datato.data = {
              data:
                {
                  title: '',
                  content: '',
                  category: '',
                  imagesUrl: [
                    '',
                    '',
                    ''
                  ],
                  is_enabled: false,
                  price: 0,
                  origin_price: 0,
                  unit: '本',
                  description: '',
                  imageUrl: ''
                }
            }
          })
          .catch((error) => {
            console.log('error', error)
            this.redenerstatus = false
          })
      } else if (type.type === 'edit') {
        console.log('in edit api')
        const editapi = `https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/product/${type.id}`
        console.log('editapi', editapi)
        axios.put(editapi, this.datato)
          .then((response) => {
            console.log('editapi res', response)
            alert(response.data.message)
            this.redenerstatus = true
            this.emit()
          })
          .catch((error) => {
            console.log('error', error)
            this.redenerstatus = false
          })
      }
    },

    emit () {
      console.log('emit')
      this.$emit('redenerstatus', this.redenerstatus)
    },

    passapiresult () {
      console.log('passapiresult')
      this.$emit('api-response', 'go')
    }
  },

  mounted () {
    console.log('mounted apitype')
  },

  watch: {
    apitype: {
      handler (newValue) {
        console.log('apitype change', this.apitype.item)
        this.datato.data = this.apitype.item
      },
      deep: true
    }
  }

}
</script>
<style scoped>
*{
outline:0px solid;}
</style>
