import{a as p}from"./jss-Bi_167ad.js";var v=Date.now(),a="fnValues"+v,u="fnStyle"+ ++v,s=function(){return{onCreateRule:function(r,t,e){if(typeof t!="function")return null;var n=p(r,{},e);return n[u]=t,n},onProcessStyle:function(r,t){if(a in t||u in t)return r;var e={};for(var n in r){var o=r[n];typeof o=="function"&&(delete r[n],e[n]=o)}return t[a]=e,r},onUpdate:function(r,t,e,n){var o=t,i=o[u];i&&(o.style=i(r)||{});var f=o[a];if(f)for(var l in f)o.prop(l,f[l](r),n)}}};export{s as f};