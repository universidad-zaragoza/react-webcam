import{j as e,r as m,R as c}from"./react-CKke45KU.js";import{c as d}from"./react-dom-pilMMtGk.js";import{B as p}from"./react-router-dom-CACIwR-w.js";import{m as u,G as a,B as f,I as h,d as g}from"./@material-ui-Bej2ggXo.js";import{a as x,b as j}from"./react-router-CZbieFmI.js";import"./@babel-Ba3GPgTz.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DyVe-HVL.js";import"./react-is-8JwjhRSi.js";import"./hoist-non-react-statics-DI-fTQTX.js";import"./react-transition-group-QA-8U2vJ.js";import"./jss-Bi_167ad.js";import"./is-in-browser-I-S1O4Zl.js";import"./jss-plugin-rule-value-function-bFEU8xJ1.js";import"./jss-plugin-global-BqvoQkS7.js";import"./jss-plugin-nested-CXPdbwL8.js";import"./jss-plugin-camel-case-B3itHn0h.js";import"./hyphenate-style-name-HOLnhz8K.js";import"./jss-plugin-default-unit-D75BTSLc.js";import"./jss-plugin-vendor-prefixer-Vj8mjMcK.js";import"./css-vendor-CFjdynGb.js";import"./jss-plugin-props-sort-D2CdvUsV.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=i(r);fetch(r.href,t)}})();const y=()=>{const o=i=>{const n=i.target.files;console.log(n)};return e.jsx("input",{accept:"image/*",id:"icon-button-file",type:"file",capture:"environment",onChange:o})},w=u(o=>({root:{height:"100%",textAlign:"center"},imgBox:{maxWidth:"80%",maxHeight:"80%",margin:"10px"},img:{height:"inherit",maxWidth:"inherit"},input:{display:"none"}}));function v(){const o=w(),[i,n]=m.useState(""),r=t=>{if(t.files&&t.files.length!==0){const s=t.files[0],l=URL.createObjectURL(s);n(l)}};return e.jsxs("div",{className:o.root,children:[e.jsx(y,{}),e.jsx(a,{container:!0,children:e.jsxs(a,{item:!0,xs:12,children:[e.jsx("h5",{children:"Capture your image"}),i&&e.jsx(f,{display:"flex",justifyContent:"center",border:1,className:o.imgBox,children:e.jsx("img",{src:i,alt:"snap",className:o.img})}),e.jsx("input",{accept:"image/*",className:o.input,id:"icon-button-file",type:"file",capture:"environment",onChange:t=>r(t.target)}),e.jsx("label",{htmlFor:"icon-button-file",children:e.jsx(h,{color:"primary","aria-label":"upload picture",component:"span",children:e.jsx(g,{fontSize:"large",color:"primary"})})})]})})]})}var b={};const L=!!(window.location.hostname==="localhost"||window.location.hostname==="[::1]"||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(){"serviceWorker"in navigator&&(window.location.protocol==="https:"||L)&&window.addEventListener("load",()=>{const o=`${b.PUBLIC_URL}/service-worker.js`;navigator.serviceWorker.register(o).then(i=>{console.log("Service worker registered:",i)}).catch(i=>{console.error("Error during service worker registration:",i)})})}function B(){return e.jsx(c.StrictMode,{children:e.jsx(p,{basename:"/react-webcam",children:e.jsx(x,{children:e.jsx(j,{path:"/",element:e.jsx(v,{})})})})})}k(),d.createRoot(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(B,{})}));