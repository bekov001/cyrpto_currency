(function(t){function e(e){for(var n,o,s=e[0],a=e[1],l=e[2],b=0,u=[];b<s.length;b++)o=s[b],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&u.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);p&&p(e);while(u.length)u.shift()();return i.push.apply(i,l||[]),c()}function c(){for(var t,e=0;e<i.length;e++){for(var c=i[e],n=!0,s=1;s<c.length;s++){var a=c[s];0!==r[a]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=c[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var c=n[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,o),c.l=!0,c.exports}o.m=t,o.c=n,o.d=function(t,e,c){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(o.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(c,n,function(e){return t[e]}.bind(null,n));return c},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/crypto_currency/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var p=a;i.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"4c19":function(t,e,c){"use strict";c("7c29")},"56d7":function(t,e,c){"use strict";c.r(e);var n=c("7a23");const r={class:"order"},i=Object(n["e"])("strong",null,"Баланс: ",-1),o=Object(n["e"])("p",null,"Заполнить по кол-ву",-1),s=Object(n["e"])("div",{style:{display:"flex","flex-direction":"row"}},[Object(n["e"])("input",{style:{width:"100%"},type:"number"}),Object(n["e"])("p",{style:{"margin-left":"10px"}},"BTC")],-1),a=Object(n["e"])("h1",{style:{margin:"15px"}},"Позиции",-1),l={key:0,style:{margin:"15px",color:"red"}};function p(t,e,c,p,b,u){const h=Object(n["l"])("position-list");return Object(n["h"])(),Object(n["d"])(n["a"],null,[Object(n["e"])("div",r,[Object(n["e"])("p",null,[i,Object(n["f"])(" "+Object(n["m"])(this.balance)+"$",1)]),o,s,Object(n["e"])("button",{class:"btn btn-success",id:"long",onClick:e[0]||(e[0]=(...t)=>u.createLong&&u.createLong(...t))},"Long"),Object(n["e"])("button",{class:"btn btn-danger",id:"short",onClick:e[1]||(e[1]=(...t)=>u.createShort&&u.createShort(...t))},"Short")]),a,0==b.positions.length?(Object(n["h"])(),Object(n["d"])("h4",l,"у вас нет позиций")):Object(n["c"])("",!0),Object(n["g"])(h,{positions:b.positions,onClose:u.closePos},null,8,["positions","onClose"])],64)}c("14d9");const b=t=>(Object(n["j"])("data-v-23d41f20"),t=t(),Object(n["i"])(),t),u={class:"position"},h=b(()=>Object(n["e"])("p",null,"Кросс 100x",-1)),d={key:0},f={key:1},j={style:{display:"flex","flex-direction":"row","justify-content":"space-between"}},O={style:{"margin-right":"15px"}},y=["onClick"];function g(t,e,c,r,i,o){const s=Object(n["l"])("P");return Object(n["h"])(!0),Object(n["d"])(n["a"],null,Object(n["k"])(c.positions,e=>(Object(n["h"])(),Object(n["d"])("div",{class:"positions",key:e},[Object(n["e"])("div",u,[Object(n["e"])("p",null,"BTCUSDT ("+Object(n["m"])(e.type_of_pos)+")",1),h,"long"===e.type_of_pos?(Object(n["h"])(),Object(n["d"])("p",d,"Нереализованный pnl "+Object(n["m"])(((this.price-e.start_price)/e.start_price*100*e.balance).toFixed(2))+"$",1)):(Object(n["h"])(),Object(n["d"])("p",f,"Нереализованный pnl "+Object(n["m"])(((e.start_price-this.price)/this.price*100*e.balance).toFixed(2))+"$",1)),Object(n["e"])("div",j,[Object(n["e"])("p",O,"Цена входа: "+Object(n["m"])(e.start_price),1),Object(n["g"])(s,{style:{"margin-right":"15px"}},{default:Object(n["n"])(()=>[Object(n["f"])("Маржа: "+Object(n["m"])(e.balance)+"$",1)]),_:2},1024),Object(n["g"])(s,{style:{"margin-right":"15px"}},{default:Object(n["n"])(()=>[Object(n["f"])("Рыночная цена: "+Object(n["m"])(this.price),1)]),_:1})]),Object(n["e"])("button",{class:"btn btn-secondary",style:{width:"100%"},onClick:c=>t.$emit("close",e)},"Закрыть",8,y)])]))),128)}var m=c("cee4"),v={data(){return{price:"28000"}},props:{positions:{type:Array,required:!0}},methods:{async fetchPrice(){try{const t=await m["a"].get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");this.price=t.data.price.slice(0,8)}catch(t){alert("error")}}},mounted(){this.fetchPrice(),this.timer=setInterval(this.fetchPrice,1e3)}},_=(c("6b21"),c("6b0d")),x=c.n(_);const w=x()(v,[["render",g],["__scopeId","data-v-23d41f20"]]);var P=w,k={components:{PositionList:P},data(){return{balance:100,positions:[],price:"28000"}},methods:{createLong(){this.balance>0?(this.positions.push({id:Date.now(),start_price:this.price,balance:this.balance,type_of_pos:"long"}),this.balance=0):alert("Недостаточно средств")},createShort(){this.balance>0?(this.positions.push({id:Date.now(),start_price:this.price,balance:this.balance,type_of_pos:"short"}),this.balance=0):alert("Недостаточно средств")},closePos(t){var e=((t.start_price-this.price)/this.price*100*t.balance).toFixed(2);"long"==t.type_of_pos&&(e=((this.price-t.start_price)/t.start_price*100*t.balance).toFixed(2)),this.balance=(parseFloat(t.balance)+parseFloat(e)).toFixed(2),this.positions=this.positions.filter(e=>e.id!=t.id)},async fetchPrice(){try{const t=await m["a"].get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT");this.price=t.data.price.slice(0,8)}catch(t){alert("error")}}},mounted(){this.fetchPrice(),this.timer=setInterval(this.fetchPrice,1e3)}};c("4c19");const S=x()(k,[["render",p]]);var C=S;c("0deb");Object(n["b"])(C).mount("#app")},"6b21":function(t,e,c){"use strict";c("8895")},"7c29":function(t,e,c){},8895:function(t,e,c){}});
//# sourceMappingURL=app.de129f06.js.map