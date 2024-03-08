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
            <RouterLink to="/productManage" class="me-2 navlinks">訂單管理</RouterLink>
        </div>
        <div>
            <button class="loginBtn"><RouterLink to="/test" style="text-decoration:none;color:#8FB27A;">Login</RouterLink></button>
        </div>
    </div>
  </div>
</template>
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
