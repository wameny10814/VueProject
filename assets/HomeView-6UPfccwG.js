import{_ as n,a as s,c as u,b as t,d as c,w as l,e as r,r as v,o as m,f as p,p as h,g as _,h as b}from"./index-aRQ9i-Q4.js";const q={data(){return{showAddProduct:!1,loginstatus:!0}},mounted(){console.log("vvvv");const d=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");s.defaults.headers.common.Authorization=d,s.post("https://ec-course-api.hexschool.io/v2/api/user/check").then(e=>{console.log("success",e),e.status===200?(console.log("200"),this.loginstatus=!0):(console.log("!200"),this.loginstatus=!1)}).catch(e=>{console.log("error",e),this.loginstatus=!1})}},a=d=>(h("data-v-92d4dd1e"),d=d(),_(),d),g={class:"home"},f={class:"banner"},y={class:"bannerctn"},x=a(()=>t("div",{style:{width:"150px"},class:"m-auto"},[t("img",{src:b,style:{height:"100%",width:"100%"}})],-1)),N=a(()=>t("div",{class:"text-center mt-4"},[t("span",null,"textetxtxtettx")],-1)),w={class:"text-center mt-4"},k={class:"primary_btn"},S=a(()=>t("div",{class:"sologan text-center mt-4"},[t("p",null,"The largest community of photo enthusiasts")],-1)),L=r('<hr class="m-0" data-v-92d4dd1e><div class="allyouwant" data-v-92d4dd1e><h2 class="mb-4" data-v-92d4dd1e>All you want is here.</h2><div class="row cards_content" data-v-92d4dd1e><div class="col-6 mb-4" data-v-92d4dd1e><h4 class="mb-4 typeStyle" data-v-92d4dd1e>分類一</h4><div data-v-92d4dd1e><p data-v-92d4dd1e>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p></div><div data-v-92d4dd1e><button class="secondery_btn" data-v-92d4dd1e>Learn more</button></div></div><div class="col-6 mb-4" data-v-92d4dd1e><h4 class="mb-4 typeStyle" data-v-92d4dd1e>分類一</h4><div class="mb-4" data-v-92d4dd1e><p data-v-92d4dd1e>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p></div><div data-v-92d4dd1e><button class="secondery_btn" data-v-92d4dd1e>Learn more</button></div></div><div class="col-6 mb-4" data-v-92d4dd1e><h4 class="mb-4 typeStyle" data-v-92d4dd1e>分類一</h4><div class="mb-4" data-v-92d4dd1e><p data-v-92d4dd1e>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p></div><div data-v-92d4dd1e><button class="secondery_btn" data-v-92d4dd1e>Learn more</button></div></div><div class="col-6" data-v-92d4dd1e><h4 class="mb-4 typeStyle" data-v-92d4dd1e>分類一</h4><div class="mb-4" data-v-92d4dd1e><p data-v-92d4dd1e>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est.</p></div><div data-v-92d4dd1e><button class="secondery_btn" data-v-92d4dd1e>Learn more</button></div></div></div></div><hr class="m-0" data-v-92d4dd1e><div class="learnmore d-flex" data-v-92d4dd1e><div data-v-92d4dd1e><p data-v-92d4dd1e>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p></div><div data-v-92d4dd1e><button class="primary_btn" data-v-92d4dd1e>learnMore</button></div></div>',4);function $(d,o,e,V,I,A){const i=v("RouterLink");return m(),u("div",g,[t("div",f,[t("div",y,[x,N,t("div",w,[t("button",k,[c(i,{to:"/cart",class:"me-2 navlinks"},{default:l(()=>[p("Cart")]),_:1})])])]),S]),L])}const C=n(q,[["render",$],["__scopeId","data-v-92d4dd1e"]]);export{C as default};