import{_ as f,j as E,k as G,l as U,m as ee}from"./@babel-Ba3GPgTz.js";import{i as te}from"./is-in-browser-I-S1O4Zl.js";var re={}.constructor;function b(r){if(r==null||typeof r!="object")return r;if(Array.isArray(r))return r.map(b);if(r.constructor!==re)return r;var i={};for(var e in r)i[e]=b(r[e]);return i}function w(r,i,e){r===void 0&&(r="unnamed");var t=e.jss,n=b(i),s=t.plugins.onCreateRule(r,n,e);return s||(r[0],null)}var $=function(r,i){for(var e="",t=0;t<r.length&&r[t]!=="!important";t++)e&&(e+=i),e+=r[t];return e},v=function(r){if(!Array.isArray(r))return r;var i="";if(Array.isArray(r[0]))for(var e=0;e<r.length&&r[e]!=="!important";e++)i&&(i+=", "),i+=$(r[e]," ");else i=$(r,", ");return r[r.length-1]==="!important"&&(i+=" !important"),i};function g(r){return r&&r.format===!1?{linebreak:"",space:""}:{linebreak:`
`,space:" "}}function m(r,i){for(var e="",t=0;t<i;t++)e+="  ";return e+r}function R(r,i,e){e===void 0&&(e={});var t="";if(!i)return t;var n=e,s=n.indent,o=s===void 0?0:s,a=i.fallbacks;e.format===!1&&(o=-1/0);var u=g(e),h=u.linebreak,l=u.space;if(r&&o++,a)if(Array.isArray(a))for(var y=0;y<a.length;y++){var c=a[y];for(var d in c){var p=c[d];p!=null&&(t&&(t+=h),t+=m(d+":"+l+v(p)+";",o))}}else for(var S in a){var M=a[S];M!=null&&(t&&(t+=h),t+=m(S+":"+l+v(M)+";",o))}for(var P in i){var V=i[P];V!=null&&P!=="fallbacks"&&(t&&(t+=h),t+=m(P+":"+l+v(V)+";",o))}return!t&&!e.allowEmpty||!r?t:(o--,t&&(t=""+h+t+h),m(""+r+l+"{"+t,o)+m("}",o))}var ne=/([[\].#*$><+~=|^:(),"'`\s])/g,B=typeof CSS<"u"&&CSS.escape,C=function(r){return B?B(r):r.replace(ne,"\\$1")},J=function(){function r(e,t,n){this.type="style",this.isProcessed=!1;var s=n.sheet,o=n.Renderer;this.key=e,this.options=n,this.style=t,s?this.renderer=s.renderer:o&&(this.renderer=new o)}var i=r.prototype;return i.prop=function(e,t,n){if(t===void 0)return this.style[e];var s=n?n.force:!1;if(!s&&this.style[e]===t)return this;var o=t;(!n||n.process!==!1)&&(o=this.options.jss.plugins.onChangeValue(t,e,this));var a=o==null||o===!1,u=e in this.style;if(a&&!u&&!s)return this;var h=a&&u;if(h?delete this.style[e]:this.style[e]=o,this.renderable&&this.renderer)return h?this.renderer.removeProperty(this.renderable,e):this.renderer.setProperty(this.renderable,e,o),this;var l=this.options.sheet;return l&&l.attached,this},r}(),A=function(r){G(i,r);function i(t,n,s){var o;o=r.call(this,t,n,s)||this;var a=s.selector,u=s.scoped,h=s.sheet,l=s.generateId;return a?o.selectorText=a:u!==!1&&(o.id=l(U(U(o)),h),o.selectorText="."+C(o.id)),o}var e=i.prototype;return e.applyTo=function(t){var n=this.renderer;if(n){var s=this.toJSON();for(var o in s)n.setProperty(t,o,s[o])}return this},e.toJSON=function(){var t={};for(var n in this.style){var s=this.style[n];typeof s!="object"?t[n]=s:Array.isArray(s)&&(t[n]=v(s))}return t},e.toString=function(t){var n=this.options.sheet,s=n?n.options.link:!1,o=s?f({},t,{allowEmpty:!0}):t;return R(this.selectorText,this.style,o)},E(i,[{key:"selector",set:function(t){if(t!==this.selectorText){this.selectorText=t;var n=this.renderer,s=this.renderable;if(!(!s||!n)){var o=n.setSelector(s,t);o||n.replaceRule(s,this)}}},get:function(){return this.selectorText}}]),i}(J),ie={onCreateRule:function(r,i,e){return r[0]==="@"||e.parent&&e.parent.type==="keyframes"?null:new A(r,i,e)}},O={indent:1,children:!0},se=/@([\w-]+)/,oe=function(){function r(e,t,n){this.type="conditional",this.isProcessed=!1,this.key=e;var s=e.match(se);this.at=s?s[1]:"unknown",this.query=n.name||"@"+this.at,this.options=n,this.rules=new k(f({},n,{parent:this}));for(var o in t)this.rules.add(o,t[o]);this.rules.process()}var i=r.prototype;return i.getRule=function(e){return this.rules.get(e)},i.indexOf=function(e){return this.rules.indexOf(e)},i.addRule=function(e,t,n){var s=this.rules.add(e,t,n);return s?(this.options.jss.plugins.onProcessRule(s),s):null},i.replaceRule=function(e,t,n){var s=this.rules.replace(e,t,n);return s&&this.options.jss.plugins.onProcessRule(s),s},i.toString=function(e){e===void 0&&(e=O);var t=g(e),n=t.linebreak;if(e.indent==null&&(e.indent=O.indent),e.children==null&&(e.children=O.children),e.children===!1)return this.query+" {}";var s=this.rules.toString(e);return s?this.query+" {"+n+s+n+"}":""},r}(),ae=/@container|@media|@supports\s+/,ue={onCreateRule:function(r,i,e){return ae.test(r)?new oe(r,i,e):null}},j={indent:1,children:!0},he=/@keyframes\s+([\w-]+)/,I=function(){function r(e,t,n){this.type="keyframes",this.at="@keyframes",this.isProcessed=!1;var s=e.match(he);s&&s[1]?this.name=s[1]:this.name="noname",this.key=this.type+"-"+this.name,this.options=n;var o=n.scoped,a=n.sheet,u=n.generateId;this.id=o===!1?this.name:C(u(this,a)),this.rules=new k(f({},n,{parent:this}));for(var h in t)this.rules.add(h,t[h],f({},n,{parent:this}));this.rules.process()}var i=r.prototype;return i.toString=function(e){e===void 0&&(e=j);var t=g(e),n=t.linebreak;if(e.indent==null&&(e.indent=j.indent),e.children==null&&(e.children=j.children),e.children===!1)return this.at+" "+this.id+" {}";var s=this.rules.toString(e);return s&&(s=""+n+s+n),this.at+" "+this.id+" {"+s+"}"},r}(),le=/@keyframes\s+/,ce=/\$([\w-]+)/g,T=function(r,i){return typeof r=="string"?r.replace(ce,function(e,t){return t in i?i[t]:e}):r},_=function(r,i,e){var t=r[i],n=T(t,e);n!==t&&(r[i]=n)},de={onCreateRule:function(r,i,e){return typeof r=="string"&&le.test(r)?new I(r,i,e):null},onProcessStyle:function(r,i,e){return i.type!=="style"||!e||("animation-name"in r&&_(r,"animation-name",e.keyframes),"animation"in r&&_(r,"animation",e.keyframes)),r},onChangeValue:function(r,i,e){var t=e.options.sheet;if(!t)return r;switch(i){case"animation":return T(r,t.keyframes);case"animation-name":return T(r,t.keyframes);default:return r}}},fe=function(r){G(i,r);function i(){return r.apply(this,arguments)||this}var e=i.prototype;return e.toString=function(t){var n=this.options.sheet,s=n?n.options.link:!1,o=s?f({},t,{allowEmpty:!0}):t;return R(this.key,this.style,o)},i}(J),pe={onCreateRule:function(r,i,e){return e.parent&&e.parent.type==="keyframes"?new fe(r,i,e):null}},ye=function(){function r(e,t,n){this.type="font-face",this.at="@font-face",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}var i=r.prototype;return i.toString=function(e){var t=g(e),n=t.linebreak;if(Array.isArray(this.style)){for(var s="",o=0;o<this.style.length;o++)s+=R(this.at,this.style[o]),this.style[o+1]&&(s+=n);return s}return R(this.at,this.style,e)},r}(),ve=/@font-face/,ge={onCreateRule:function(r,i,e){return ve.test(r)?new ye(r,i,e):null}},me=function(){function r(e,t,n){this.type="viewport",this.at="@viewport",this.isProcessed=!1,this.key=e,this.style=t,this.options=n}var i=r.prototype;return i.toString=function(e){return R(this.key,this.style,e)},r}(),Re={onCreateRule:function(r,i,e){return r==="@viewport"||r==="@-ms-viewport"?new me(r,i,e):null}},xe=function(){function r(e,t,n){this.type="simple",this.isProcessed=!1,this.key=e,this.value=t,this.options=n}var i=r.prototype;return i.toString=function(e){if(Array.isArray(this.value)){for(var t="",n=0;n<this.value.length;n++)t+=this.key+" "+this.value[n]+";",this.value[n+1]&&(t+=`
`);return t}return this.key+" "+this.value+";"},r}(),Se={"@charset":!0,"@import":!0,"@namespace":!0},ke={onCreateRule:function(r,i,e){return r in Se?new xe(r,i,e):null}},F=[ie,ue,de,pe,ge,Re,ke],Pe={process:!0},K={force:!0,process:!0},k=function(){function r(e){this.map={},this.raw={},this.index=[],this.counter=0,this.options=e,this.classes=e.classes,this.keyframes=e.keyframes}var i=r.prototype;return i.add=function(e,t,n){var s=this.options,o=s.parent,a=s.sheet,u=s.jss,h=s.Renderer,l=s.generateId,y=s.scoped,c=f({classes:this.classes,parent:o,sheet:a,jss:u,Renderer:h,generateId:l,scoped:y,name:e,keyframes:this.keyframes,selector:void 0},n),d=e;e in this.raw&&(d=e+"-d"+this.counter++),this.raw[d]=t,d in this.classes&&(c.selector="."+C(this.classes[d]));var p=w(d,t,c);if(!p)return null;this.register(p);var S=c.index===void 0?this.index.length:c.index;return this.index.splice(S,0,p),p},i.replace=function(e,t,n){var s=this.get(e),o=this.index.indexOf(s);s&&this.remove(s);var a=n;return o!==-1&&(a=f({},n,{index:o})),this.add(e,t,a)},i.get=function(e){return this.map[e]},i.remove=function(e){this.unregister(e),delete this.raw[e.key],this.index.splice(this.index.indexOf(e),1)},i.indexOf=function(e){return this.index.indexOf(e)},i.process=function(){var e=this.options.jss.plugins;this.index.slice(0).forEach(e.onProcessRule,e)},i.register=function(e){this.map[e.key]=e,e instanceof A?(this.map[e.selector]=e,e.id&&(this.classes[e.key]=e.id)):e instanceof I&&this.keyframes&&(this.keyframes[e.name]=e.id)},i.unregister=function(e){delete this.map[e.key],e instanceof A?(delete this.map[e.selector],delete this.classes[e.key]):e instanceof I&&delete this.keyframes[e.name]},i.update=function(){var e,t,n;if(typeof(arguments.length<=0?void 0:arguments[0])=="string"?(e=arguments.length<=0?void 0:arguments[0],t=arguments.length<=1?void 0:arguments[1],n=arguments.length<=2?void 0:arguments[2]):(t=arguments.length<=0?void 0:arguments[0],n=arguments.length<=1?void 0:arguments[1],e=null),e)this.updateOne(this.get(e),t,n);else for(var s=0;s<this.index.length;s++)this.updateOne(this.index[s],t,n)},i.updateOne=function(e,t,n){n===void 0&&(n=Pe);var s=this.options,o=s.jss.plugins,a=s.sheet;if(e.rules instanceof r){e.rules.update(t,n);return}var u=e.style;if(o.onUpdate(t,e,a,n),n.process&&u&&u!==e.style){o.onProcessStyle(e.style,e,a);for(var h in e.style){var l=e.style[h],y=u[h];l!==y&&e.prop(h,l,K)}for(var c in u){var d=e.style[c],p=u[c];d==null&&d!==p&&e.prop(c,null,K)}}},i.toString=function(e){for(var t="",n=this.options.sheet,s=n?n.options.link:!1,o=g(e),a=o.linebreak,u=0;u<this.index.length;u++){var h=this.index[u],l=h.toString(e);!l&&!s||(t&&(t+=a),t+=l)}return t},r}(),z=function(){function r(e,t){this.attached=!1,this.deployed=!1,this.classes={},this.keyframes={},this.options=f({},t,{sheet:this,parent:this,classes:this.classes,keyframes:this.keyframes}),t.Renderer&&(this.renderer=new t.Renderer(this)),this.rules=new k(this.options);for(var n in e)this.rules.add(n,e[n]);this.rules.process()}var i=r.prototype;return i.attach=function(){return this.attached?this:(this.renderer&&this.renderer.attach(),this.attached=!0,this.deployed||this.deploy(),this)},i.detach=function(){return this.attached?(this.renderer&&this.renderer.detach(),this.attached=!1,this):this},i.addRule=function(e,t,n){var s=this.queue;this.attached&&!s&&(this.queue=[]);var o=this.rules.add(e,t,n);return o?(this.options.jss.plugins.onProcessRule(o),this.attached?(this.deployed&&(s?s.push(o):(this.insertRule(o),this.queue&&(this.queue.forEach(this.insertRule,this),this.queue=void 0))),o):(this.deployed=!1,o)):null},i.replaceRule=function(e,t,n){var s=this.rules.get(e);if(!s)return this.addRule(e,t,n);var o=this.rules.replace(e,t,n);return o&&this.options.jss.plugins.onProcessRule(o),this.attached?(this.deployed&&this.renderer&&(o?s.renderable&&this.renderer.replaceRule(s.renderable,o):this.renderer.deleteRule(s)),o):(this.deployed=!1,o)},i.insertRule=function(e){this.renderer&&this.renderer.insertRule(e)},i.addRules=function(e,t){var n=[];for(var s in e){var o=this.addRule(s,e[s],t);o&&n.push(o)}return n},i.getRule=function(e){return this.rules.get(e)},i.deleteRule=function(e){var t=typeof e=="object"?e:this.rules.get(e);return!t||this.attached&&!t.renderable?!1:(this.rules.remove(t),this.attached&&t.renderable&&this.renderer?this.renderer.deleteRule(t.renderable):!0)},i.indexOf=function(e){return this.rules.indexOf(e)},i.deploy=function(){return this.renderer&&this.renderer.deploy(),this.deployed=!0,this},i.update=function(){var e;return(e=this.rules).update.apply(e,arguments),this},i.updateOne=function(e,t,n){return this.rules.updateOne(e,t,n),this},i.toString=function(e){return this.rules.toString(e)},r}(),be=function(){function r(){this.plugins={internal:[],external:[]},this.registry={}}var i=r.prototype;return i.onCreateRule=function(e,t,n){for(var s=0;s<this.registry.onCreateRule.length;s++){var o=this.registry.onCreateRule[s](e,t,n);if(o)return o}return null},i.onProcessRule=function(e){if(!e.isProcessed){for(var t=e.options.sheet,n=0;n<this.registry.onProcessRule.length;n++)this.registry.onProcessRule[n](e,t);e.style&&this.onProcessStyle(e.style,e,t),e.isProcessed=!0}},i.onProcessStyle=function(e,t,n){for(var s=0;s<this.registry.onProcessStyle.length;s++)t.style=this.registry.onProcessStyle[s](t.style,t,n)},i.onProcessSheet=function(e){for(var t=0;t<this.registry.onProcessSheet.length;t++)this.registry.onProcessSheet[t](e)},i.onUpdate=function(e,t,n,s){for(var o=0;o<this.registry.onUpdate.length;o++)this.registry.onUpdate[o](e,t,n,s)},i.onChangeValue=function(e,t,n){for(var s=e,o=0;o<this.registry.onChangeValue.length;o++)s=this.registry.onChangeValue[o](s,t,n);return s},i.use=function(e,t){t===void 0&&(t={queue:"external"});var n=this.plugins[t.queue];n.indexOf(e)===-1&&(n.push(e),this.registry=[].concat(this.plugins.external,this.plugins.internal).reduce(function(s,o){for(var a in o)a in s&&s[a].push(o[a]);return s},{onCreateRule:[],onProcessRule:[],onProcessStyle:[],onProcessSheet:[],onChangeValue:[],onUpdate:[]}))},r}(),we=function(){function r(){this.registry=[]}var i=r.prototype;return i.add=function(e){var t=this.registry,n=e.options.index;if(t.indexOf(e)===-1){if(t.length===0||n>=this.index){t.push(e);return}for(var s=0;s<t.length;s++)if(t[s].options.index>n){t.splice(s,0,e);return}}},i.reset=function(){this.registry=[]},i.remove=function(e){var t=this.registry.indexOf(e);this.registry.splice(t,1)},i.toString=function(e){for(var t=e===void 0?{}:e,n=t.attached,s=ee(t,["attached"]),o=g(s),a=o.linebreak,u="",h=0;h<this.registry.length;h++){var l=this.registry[h];n!=null&&l.attached!==n||(u&&(u+=a),u+=l.toString(s))}return u},E(r,[{key:"index",get:function(){return this.registry.length===0?0:this.registry[this.registry.length-1].options.index}}]),r}(),x=new we,N=typeof globalThis<"u"?globalThis:typeof window<"u"&&window.Math===Math?window:typeof self<"u"&&self.Math===Math?self:Function("return this")(),q="2f1acc6c3a606b082e5eef5e54414ffb";N[q]==null&&(N[q]=0);var D=N[q]++,H=function(r){r===void 0&&(r={});var i=0,e=function(t,n){i+=1;var s="",o="";return n&&(n.options.classNamePrefix&&(o=n.options.classNamePrefix),n.options.jss.id!=null&&(s=String(n.options.jss.id))),r.minify?""+(o||"c")+D+s+i:o+t.key+"-"+D+(s?"-"+s:"")+"-"+i};return e},L=function(r){var i;return function(){return i||(i=r()),i}},Ce=function(r,i){try{return r.attributeStyleMap?r.attributeStyleMap.get(i):r.style.getPropertyValue(i)}catch{return""}},Ae=function(r,i,e){try{var t=e;if(Array.isArray(e)&&(t=v(e)),r.attributeStyleMap)r.attributeStyleMap.set(i,t);else{var n=t?t.indexOf("!important"):-1,s=n>-1?t.substr(0,n-1):t;r.style.setProperty(i,s,n>-1?"important":"")}}catch{return!1}return!0},Oe=function(r,i){try{r.attributeStyleMap?r.attributeStyleMap.delete(i):r.style.removeProperty(i)}catch{}},je=function(r,i){return r.selectorText=i,r.selectorText===i},Q=L(function(){return document.querySelector("head")});function Ie(r,i){for(var e=0;e<r.length;e++){var t=r[e];if(t.attached&&t.options.index>i.index&&t.options.insertionPoint===i.insertionPoint)return t}return null}function Te(r,i){for(var e=r.length-1;e>=0;e--){var t=r[e];if(t.attached&&t.options.insertionPoint===i.insertionPoint)return t}return null}function Ne(r){for(var i=Q(),e=0;e<i.childNodes.length;e++){var t=i.childNodes[e];if(t.nodeType===8&&t.nodeValue.trim()===r)return t}return null}function qe(r){var i=x.registry;if(i.length>0){var e=Ie(i,r);if(e&&e.renderer)return{parent:e.renderer.element.parentNode,node:e.renderer.element};if(e=Te(i,r),e&&e.renderer)return{parent:e.renderer.element.parentNode,node:e.renderer.element.nextSibling}}var t=r.insertionPoint;if(t&&typeof t=="string"){var n=Ne(t);if(n)return{parent:n.parentNode,node:n.nextSibling}}return!1}function Me(r,i){var e=i.insertionPoint,t=qe(i);if(t!==!1&&t.parent){t.parent.insertBefore(r,t.node);return}if(e&&typeof e.nodeType=="number"){var n=e,s=n.parentNode;s&&s.insertBefore(r,n.nextSibling);return}Q().appendChild(r)}var Ve=L(function(){var r=document.querySelector('meta[property="csp-nonce"]');return r?r.getAttribute("content"):null}),W=function(r,i,e){try{"insertRule"in r?r.insertRule(i,e):"appendRule"in r&&r.appendRule(i)}catch{return!1}return r.cssRules[e]},X=function(r,i){var e=r.cssRules.length;return i===void 0||i>e?e:i},Ee=function(){var r=document.createElement("style");return r.textContent=`
`,r},Ge=function(){function r(e){this.getPropertyValue=Ce,this.setProperty=Ae,this.removeProperty=Oe,this.setSelector=je,this.hasInsertedRules=!1,this.cssRules=[],e&&x.add(e),this.sheet=e;var t=this.sheet?this.sheet.options:{},n=t.media,s=t.meta,o=t.element;this.element=o||Ee(),this.element.setAttribute("data-jss",""),n&&this.element.setAttribute("media",n),s&&this.element.setAttribute("data-meta",s);var a=Ve();a&&this.element.setAttribute("nonce",a)}var i=r.prototype;return i.attach=function(){if(!(this.element.parentNode||!this.sheet)){Me(this.element,this.sheet.options);var e=!!(this.sheet&&this.sheet.deployed);this.hasInsertedRules&&e&&(this.hasInsertedRules=!1,this.deploy())}},i.detach=function(){if(this.sheet){var e=this.element.parentNode;e&&e.removeChild(this.element),this.sheet.options.link&&(this.cssRules=[],this.element.textContent=`
`)}},i.deploy=function(){var e=this.sheet;if(e){if(e.options.link){this.insertRules(e.rules);return}this.element.textContent=`
`+e.toString()+`
`}},i.insertRules=function(e,t){for(var n=0;n<e.index.length;n++)this.insertRule(e.index[n],n,t)},i.insertRule=function(e,t,n){if(n===void 0&&(n=this.element.sheet),e.rules){var s=e,o=n;if(e.type==="conditional"||e.type==="keyframes"){var a=X(n,t);if(o=W(n,s.toString({children:!1}),a),o===!1)return!1;this.refCssRule(e,a,o)}return this.insertRules(s.rules,o),o}var u=e.toString();if(!u)return!1;var h=X(n,t),l=W(n,u,h);return l===!1?!1:(this.hasInsertedRules=!0,this.refCssRule(e,h,l),l)},i.refCssRule=function(e,t,n){e.renderable=n,e.options.parent instanceof z&&this.cssRules.splice(t,0,n)},i.deleteRule=function(e){var t=this.element.sheet,n=this.indexOf(e);return n===-1?!1:(t.deleteRule(n),this.cssRules.splice(n,1),!0)},i.indexOf=function(e){return this.cssRules.indexOf(e)},i.replaceRule=function(e,t){var n=this.indexOf(e);return n===-1?!1:(this.element.sheet.deleteRule(n),this.cssRules.splice(n,1),this.insertRule(t,n))},i.getRules=function(){return this.element.sheet.cssRules},r}(),Ue=0,$e=function(){function r(e){this.id=Ue++,this.version="10.10.0",this.plugins=new be,this.options={id:{minify:!1},createGenerateId:H,Renderer:te?Ge:null,plugins:[]},this.generateId=H({minify:!1});for(var t=0;t<F.length;t++)this.plugins.use(F[t],{queue:"internal"});this.setup(e)}var i=r.prototype;return i.setup=function(e){return e===void 0&&(e={}),e.createGenerateId&&(this.options.createGenerateId=e.createGenerateId),e.id&&(this.options.id=f({},this.options.id,e.id)),(e.createGenerateId||e.id)&&(this.generateId=this.options.createGenerateId(this.options.id)),e.insertionPoint!=null&&(this.options.insertionPoint=e.insertionPoint),"Renderer"in e&&(this.options.Renderer=e.Renderer),e.plugins&&this.use.apply(this,e.plugins),this},i.createStyleSheet=function(e,t){t===void 0&&(t={});var n=t,s=n.index;typeof s!="number"&&(s=x.index===0?0:x.index+1);var o=new z(e,f({},t,{jss:this,generateId:t.generateId||this.generateId,insertionPoint:this.options.insertionPoint,Renderer:this.options.Renderer,index:s}));return this.plugins.onProcessSheet(o),o},i.removeStyleSheet=function(e){return e.detach(),x.remove(e),this},i.createRule=function(e,t,n){if(t===void 0&&(t={}),n===void 0&&(n={}),typeof e=="object")return this.createRule(void 0,e,t);var s=f({},n,{name:e,jss:this,Renderer:this.options.Renderer});s.generateId||(s.generateId=this.generateId),s.classes||(s.classes={}),s.keyframes||(s.keyframes={});var o=w(e,t,s);return o&&this.plugins.onProcessRule(o),o},i.use=function(){for(var e=this,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return n.forEach(function(o){e.plugins.use(o)}),this},r}(),Y=function(r){return new $e(r)},Be=typeof CSS=="object"&&CSS!=null&&"number"in CSS;function Z(r){var i=null;for(var e in r){var t=r[e],n=typeof t;if(n==="function")i||(i={}),i[e]=t;else if(n==="object"&&t!==null&&!Array.isArray(t)){var s=Z(t);s&&(i||(i={}),i[e]=s)}}return i}/**
* A better abstraction over CSS.
*
* @copyright Oleg Isonen (Slobodskoi) / Isonen 2014-present
* @website https://github.com/cssinjs/jss
* @license MIT
*/Y();export{k as R,w as a,Y as c,Z as g,Be as h,v as t};
