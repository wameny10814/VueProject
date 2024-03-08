<template>
  <div class="home">
    <div class="banner">
      <div class="bannerctn">
          <div style="width:150px" class="m-auto">
            <img src="/SampleLogo.png" style="height:100%;width:100%"/>
          </div>
          <div  class="text-center mt-4"><span>textetxtxtettx</span></div>
          <div class="text-center mt-4"><button class="primary_btn"><RouterLink to="/cart" class="me-2 navlinks">Cart</RouterLink></button></div>
      </div>
      <div class="sologan text-center mt-4"><p>The largest community of photo enthusiasts</p></div>
    </div>
    <hr class="m-0">
    <div class="allyouwant">
      <h2 class="mb-4">All you want is here.</h2>
      <div class="row cards_content">
        <div class="col-6  mb-4">
          <h4 class="mb-4 typeStyle">分類一</h4>
          <div>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          </div>
          <div>
            <button class="secondery_btn">Learn more</button>
          </div>
        </div>
        <div class="col-6 mb-4">
          <h4 class="mb-4 typeStyle">分類一</h4>
          <div  class="mb-4">
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          </div>
          <div>
            <button class="secondery_btn">Learn more</button>
          </div>
        </div>
        <div class="col-6 mb-4">
          <h4  class="mb-4 typeStyle">分類一</h4>
          <div  class="mb-4">
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          </div>
          <div>
            <button class="secondery_btn">Learn more</button>
          </div>
        </div>
        <div class="col-6">
          <h4  class="mb-4 typeStyle">分類一</h4>
          <div  class="mb-4">
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p>
          </div>
          <div>
            <button class="secondery_btn">Learn more</button>
          </div>
        </div>
      </div>
    </div>
    <hr class="m-0">
    <div class="learnmore d-flex ">
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
    </div>
    <div>
      <button class="primary_btn">learnMore</button>
    </div>
    </div>
  </div>
</template>
<style scoped>
*{
outline:0px solid}
.banner{
height:100vh;
width:100vw;
background-image: url("/bookbanner.jpg");
background-size:100% 100vh;
padding-top:10%
}
.bannerctn{
width:50vw;
height:50vh;
background:rgba(117, 117, 117, 0.5);
margin: auto;
padding-top:4rem;
color:#fff;

}
.sologan{
color:#fff;
font-size:40px;
}
.allyouwant{
padding-top:3rem;
padding-bottom:3rem;
}
.cards_content{
justify-content: space-between;
}
.learnmore{
background:#f5f5f5;
justify-content: space-between;
padding-top:3rem;
padding-bottom:3rem;
}
.typeStyle{
font-weight:600;
}
.navlinks{
  text-decoration:none;
     color:#fff;
}
.navlinks:hover{
  text-decoration:underline;
  color:#fff;
}

</style>
