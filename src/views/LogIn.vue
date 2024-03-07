<template>
<div>
    <h2>Welcome back</h2>
    <div class="card">
        <div class="title">
            <h3>Login</h3>
        </div>
        <div>
            <div>
                <div>
                  <input type="text" placeholder="帳號" class="account">
                </div>
                <div>
                  <input type="text" placeholder="密碼" class="psd">
                </div>
            </div>
            <div style="text-align:end">
               <button class="login" type="button">Login</button>
            </div>
        </div>

    </div>
</div>
</template>

<script>

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
