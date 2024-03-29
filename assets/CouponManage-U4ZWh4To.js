import{_ as v,a as h,c as n,b as e,F as m,j as g,n as b,f,t as p,i as u,v as _,l as k,k as y,o as c,p as x,g as C}from"./index-aRQ9i-Q4.js";const D={data(){return{displayitem:[],pages:{},additem:{data:{title:"",is_enabled:0,percent:80,due_date:1,code:""}},modeltype:""}},methods:{displayData(s=1){console.log("displayData"),s==="prev"?s=this.current_page-1:s==="next"&&(s=this.current_page+1);const t=`https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupons?page=${s}`;h.get(t).then(l=>{console.log("response",l.data),this.displayitem=l.data.coupons,this.pages=l.data.pagination}).catch(l=>{console.log("error",l)})},add(){this.modeltype="add",this.additem.data={title:"",is_enabled:0,percent:80,due_date:1,code:""}},addcoupon(){this.additem.data.due_date*=1e3*60*60*24,this.additem.data.is_enabled===!1?this.additem.data.is_enabled=0:this.additem.data.is_enabled=1,h.post("https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupon",this.additem).then(t=>{alert(t.data.message),this.displayData(),this.additem.data={title:"",is_enabled:0,percent:80,due_date:1,code:""},this.modeltype=""}).catch(t=>{console.log("error",t)})},deletecoupon(s){const t=`https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupon/${s}`;h.delete(t).then(l=>{alert(l.data.message),this.displayData()}).catch(l=>{console.log("error",l)})},editcoupon(s,t){this.additem.data=t,this.additem.data.due_date=Math.floor(this.additem.data.due_date*1/(1e3*60*60*24)),this.modeltype="edit"},comfirmedit(){console.log("comfirmedit"),this.additem.data.is_enabled===!1||this.additem.data.is_enabled===0?this.additem.data.is_enabled=0:(this.additem.data.is_enabled===!0||this.additem.data.is_enabled===1)&&(this.additem.data.is_enabled=1),this.additem.data.due_date*=1e3*60*60*24;const s=`https://ec-course-api.hexschool.io/v2/api/tsurusroute/admin/coupon/${this.additem.data.id}`;h.put(s,this.additem).then(t=>{console.log("response",t),alert(t.data.message),this.displayData(),this.additem.data={title:"",is_enabled:0,percent:80,due_date:1,code:""},this.modeltype=""}).catch(t=>{console.log("error",t)})}},mounted(){console.log("mounted"),this.displayData()}},i=s=>(x("data-v-0cc2c22b"),s=s(),C(),s),V=i(()=>e("h1",null,"This is Coupon page.",-1)),U={class:"text-end"},M={class:"table mt-4"},I=i(()=>e("thead",null,[e("tr",null,[e("th",{width:"200"}," 標題 "),e("th",{width:"200"},"優惠卷碼"),e("th",null," 優惠折數 "),e("th",{width:"120"}," 啟用狀態 "),e("th",{width:"120"}," 數量 "),e("th",null," 到期日 "),e("th",null," 更多 ")])],-1)),N=["onUpdate:modelValue","checked"],S=i(()=>e("label",{for:"enabled"}," 啟用",-1)),B={class:"btn-group"},T=["onClick"],w=["onClick"],F={"aria-label":"Page navigation example"},P={class:"pagination"},j=i(()=>e("span",{class:"page-link","aria-label":"Previous"},[e("span",{"aria-hidden":"true"},"«")],-1)),z=[j],E=["onClick"],L=i(()=>e("span",{class:"page-link","aria-label":"Next"},[e("span",{"aria-hidden":"true"},"»")],-1)),q=[L],A=i(()=>e("h3",null,"新增優惠卷",-1)),G=i(()=>e("label",{for:"title"},"名稱",-1)),H=i(()=>e("label",{for:"code"},"折扣碼",-1)),J=i(()=>e("label",{for:"percent"},"折扣數",-1)),K=i(()=>e("label",{for:"isenabled"},"啟用打勾",-1)),O=["checked"],Q=i(()=>e("label",{for:"days"},"期間天數",-1));function R(s,t,l,W,a,o){return c(),n(m,null,[V,e("div",U,[e("button",{onClick:t[0]||(t[0]=d=>o.add()),class:"btn btn-outline-primary btn-sm"},"新增")]),e("table",M,[I,e("tbody",null,[(c(!0),n(m,null,g(a.displayitem,d=>(c(),n("tr",{key:d.id},[e("td",null,p(d.title),1),e("td",null,p(d.code),1),e("td",null,p(d.percent),1),e("td",null,[u(e("input",{type:"checkbox","onUpdate:modelValue":r=>d.is_enabled=r,checked:d.is_enabled,id:"enabled"},null,8,N),[[k,d.is_enabled]]),S]),e("td",null,p(d.num),1),e("td",null,p(Math.floor(d.due_date*1/(1e3*60*60*24))),1),e("td",null,[e("div",B,[e("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:r=>o.editcoupon(d.id,d)},"編輯",8,T),e("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:r=>o.deletecoupon(d.id)}," 刪除 ",8,w)])])]))),128))])]),e("nav",F,[e("ul",P,[e("li",{class:b(["page-item",{disabled:a.pages.has_pre===!1}]),onClick:t[1]||(t[1]=d=>o.displayData("prev"))},z,2),(c(!0),n(m,null,g(a.pages.total_pages,(d,r)=>(c(),n("li",{class:b(["page-item",{active:d===a.pages.current_page}]),key:r},[e("span",{class:"page-link",onClick:X=>o.displayData(d)},p(d),9,E)],2))),128)),e("li",{class:b(["page-item",{disabled:a.pages.has_next===!1}]),onClick:t[2]||(t[2]=d=>o.displayData("next"))},q,2)])]),f(" "+p(a.pages)+" ",1),e("div",null,[a.modeltype.length!=""?(c(),n(m,{key:0},[A,G,u(e("input",{type:"text",id:"title","onUpdate:modelValue":t[3]||(t[3]=d=>a.additem.data.title=d)},null,512),[[_,a.additem.data.title]]),H,u(e("input",{type:"text",id:"code","onUpdate:modelValue":t[4]||(t[4]=d=>a.additem.data.code=d)},null,512),[[_,a.additem.data.code]]),J,u(e("input",{type:"number",id:"percent","onUpdate:modelValue":t[5]||(t[5]=d=>a.additem.data.percent=d)},null,512),[[_,a.additem.data.percent]]),K,u(e("input",{type:"checkbox",id:"isenabled","onUpdate:modelValue":t[6]||(t[6]=d=>a.additem.data.is_enabled=d),checked:a.additem.data.is_enabled},null,8,O),[[k,a.additem.data.is_enabled]]),Q,u(e("input",{type:"number",id:"days","onUpdate:modelValue":t[7]||(t[7]=d=>a.additem.data.due_date=d)},null,512),[[_,a.additem.data.due_date]]),e("div",null,[a.modeltype==="add"?(c(),n("button",{key:0,onClick:t[8]||(t[8]=d=>o.addcoupon())},"確定")):y("",!0),a.modeltype==="edit"?(c(),n("button",{key:1,onClick:t[9]||(t[9]=d=>o.comfirmedit())},"確定編輯")):y("",!0)])],64)):y("",!0)])],64)}const Z=v(D,[["render",R],["__scopeId","data-v-0cc2c22b"]]);export{Z as default};