import{r as o,j as e,a as p}from"./react-BkjPoRIh.js";import{c as S}from"./react-dom-DWN0RgAt.js";import{B as I}from"./react-router-dom-CyiGHeXB.js";import{a as g}from"./axios-Cm0UX6qg.js";import{J as U}from"./jszip-C_GpTb5M.js";import{F as k}from"./file-saver-B00IKLHc.js";import{u as w,a as M,b as h}from"./react-router-D3GXQn_V.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dql683DL.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();const f=o.createContext({messages:[],addMessage:()=>{}}),z=({children:s})=>{const[l,i]=o.useState([]),r=t=>{console.log("+++ Inside MessageProvider => "+t),i(n=>[...n,t])};return e.jsx(f.Provider,{value:{messages:l,addMessage:r},children:s})},j=()=>o.useContext(f),O=()=>{const[s,l]=o.useState([]),[i,r]=o.useState(!1),t=o.useRef(null),n=o.useRef(null),[u,b]=o.useState(0),x=w(),{addMessage:m}=j(),y=async()=>{try{const a=await g.get("http://192.168.1.110:8080/photo.jpg",{responseType:"blob"});if(k.saveAs(a.data,"captura.jpg"),n.current){const c=URL.createObjectURL(a.data);n.current.src=c}}catch(a){console.error("Error al capturar la imagen:",a),m("Error al capturar la imagen:"+a)}};o.useEffect(()=>(i?t.current=setInterval(v,1e3):clearInterval(t.current),()=>{t.current&&clearInterval(t.current)}),[i]);const v=async()=>{try{const a=await g.get("http://192.168.1.110:8080/photo.jpg",{responseType:"blob"});if(l(c=>[...c,a.data]),n.current){const c=URL.createObjectURL(a.data);n.current.src=c}}catch(a){console.error("Error al capturar la imagen:",a)}},N=()=>{r(!0)},C=()=>{r(!1),E()},E=()=>{const a=new U;s.forEach((c,d)=>{a.file(`captured_frame_${d}.jpg`,c)}),a.generateAsync({type:"blob"}).then(c=>{const d=document.createElement("a");d.href=URL.createObjectURL(c),d.download="captured_frames.zip",d.click()})},L=()=>{x("/debug")},R=()=>{b(u+1)};return e.jsxs("div",{children:[e.jsx("img",{ref:n,src:"http://192.168.1.110:8080/video",alt:"Video Stream",width:"529",height:"297",onError:a=>{m("Error al capturar la imagen:"+a)}},u),e.jsxs("h2",{children:["Contador: ",u]}),e.jsx("button",{onClick:y,children:"Capturar una imagen"}),e.jsx("button",{onClick:N,children:"Comenzar capturaci\xF3n"}),e.jsx("button",{onClick:C,children:"Parar capturaci\xF3n"}),e.jsx("button",{onClick:L,children:"Debug"}),e.jsx("button",{onClick:R,children:"Refresh"})]})},P=()=>{const{messages:s}=j();return e.jsx(e.Fragment,{children:e.jsx("div",{className:"debug-container",children:e.jsxs("div",{className:"debug-container-grid",children:[e.jsx("div",{className:"debug-container-grid-item-traza",children:e.jsx("ul",{children:s.map((l,i)=>l&&e.jsx("li",{children:l},i))})}),e.jsx("div",{className:"debug-container-grid-item-input-btns",children:e.jsx("div",{className:"debug-container-grid-item-input-field",children:e.jsxs("div",{className:"input-group mb-3",children:[e.jsx("div",{className:"input-group-prepend",children:e.jsx("span",{className:"input-group-text",id:"inputGroup-sizing-default",children:"UID"})}),e.jsx("input",{type:"number",name:"uid",placeholder:"UID del usuario que ha realizado test usabilidad",pattern:"^[0-9]+$",title:"Solo se permiten n\xFAmeros",className:"form-control","aria-label":"Default","aria-describedby":"inputGroup-sizing-default",required:!0})]})})})]})})})};function A(){return e.jsx(p.StrictMode,{children:e.jsx(z,{children:e.jsx(I,{basename:"/react-webcam",children:e.jsxs(M,{children:[e.jsx(h,{path:"/",element:e.jsx(O,{})}),e.jsx(h,{path:"/debug",element:e.jsx(P,{})})]})})})})}S.createRoot(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(A,{})}));
