<template>
  <div class="nav">
    <div class="logo">
        <img src="/SampleLogo.png" style="height:100%"/>
    </div>
    <div class="flexset">
        <div><RouterLink to="/productlist">商品一覽</RouterLink></div>
        <div>
            <button><RouterLink to="/test">Login</RouterLink></button>
        </div>
    </div>
  </div>
</template>
<style scoped>

.nav{
    height:50px;
    padding-left:3rem;
    padding-right:3rem;
    padding-top:1rem;
    display:flex;
    background:#8FB27A;
}
.logo{
    height:25px;
    margin-right:1rem;
}
.flexset{
display:flex;
justify-content:space-between;
width:90%;
}

</style>
