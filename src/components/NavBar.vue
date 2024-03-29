<template>
  <div class="navstyle">
    <div class="logo">
        <img src="/SampleLogo.png" style="height:100%"/>
    </div>
    <div class="flexset">
        <div style="color:#ddd">
            <RouterLink to="/" class="me-2 navlinks">首頁</RouterLink>|
            <RouterLink to="/productlist" class="me-2 navlinks">商品一覽</RouterLink>|
            <RouterLink to="/about" class="me-2 navlinks">About</RouterLink>
            <RouterLink to="/productManage" class="me-2 navlinks">產品管理</RouterLink>
            <RouterLink to="/ordersmanage" class="me-2 navlinks">訂單管理</RouterLink>
            <RouterLink to="/couponmanage" class="me-2 navlinks">優惠卷管理</RouterLink>
        </div>
        <div>
            <button class="loginBtn" v-if="loginstatus == false"><RouterLink to="/test" style="text-decoration:none;color:#8FB27A;">Login</RouterLink></button>
            <button @click="logout" v-if="loginstatus == true">登出</button>
        </div>
    </div>
    {{loginstatus}}
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      showAddProduct: false,
      loginstatus: true
    }
  },

  methods: {
    logout () {
      console.log('logout')
      const logoutapi = 'https://ec-course-api.hexschool.io/v2/logout'
      axios.post(logoutapi)
        .then((response) => {
          console.log('登出成功')
          this.loginstatus = false
          document.cookie = 'hexToken=; expires=; path=/'
        })
    }
  },

  mounted () {
    console.log('vvvv')
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    const api = 'https://ec-course-api.hexschool.io/v2/api/user/check'
    axios.post(api)
      .then((response) => {
        console.log('success', response)
        if (response.status === 200) {
          console.log('200')
          this.loginstatus = true
        } else {
          console.log('!200')
          this.loginstatus = false
        }
      })
      .catch((error) => {
        console.log('error', error)
        this.loginstatus = false
      })
  }
}
</script>
<style scoped>
*{
    outline:0px solid;
}

.navstyle{
    padding-left:3rem;
    padding-right:3rem;
    padding-top:1rem;
    padding-bottom:1rem;
    display:flex;
    background:#8FB27A;
}
.navlinks{
  text-decoration:none;
     color:#fff;
}
.navlinks:hover{
  text-decoration:underline;
  color:#fff;
}
.logo{
    margin-right:1rem;
    height: 30px;
}
.flexset{
    display:flex;
    justify-content:space-between;
    width:90%;
}
.loginBtn{
    background:#fff;
    border:1px solid transparent;
    text-decoration:none;
    color:#8FB27A;
    padding:0.1rem 1rem;
    border-radius:12px;
}

</style>
