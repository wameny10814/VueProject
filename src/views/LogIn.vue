<template>
    <h2>Welcome back</h2>
    <div class="card">
        <div class="title">
            <h3>Login</h3>
        </div>
        <div>
            <div>
                <div>
                  <input type="text" placeholder="帳號" class="account" v-model="data.username"/>
                </div>
                <div>
                  <input type="password" placeholder="密碼" class="psd" v-model="data.password"/>
                </div>
            </div>
            <div style="text-align:end">
               <button type="submit" class="login"  @click="login()" >
                Login
               </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      data: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    login () {
      console.log('login')
      const api = 'https://ec-course-api.hexschool.io/v2/admin/signin'
      axios.post(api, this.data)
        .then((response) => {
          const { token, expired } = response.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)}; path=/`
          this.$router.push({ name: 'Home' })
        })
        .catch((error) => {
          console.log('error', error)
          this.loginstatus = false
          alert('登入失敗')
        })
    }
  }

}

</script>

<style scoped>
*{
outline:0px solid}

.title{
    text-align:start;
}
.account{
width:100%;
margin-bottom:1rem;
padding-left:10px;
}
.psd{
width:100%;
margin-bottom:3rem;
padding-left:10px;
}
.card{
    width:50vw;
    background:#8FB27A;

}
.login:hover{
border:1px solid transparent;
font-weight:600;
}

</style>
