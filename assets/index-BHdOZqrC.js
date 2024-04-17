import{r as s,j as e,a as p}from"./react-BkjPoRIh.js";import{c as U}from"./react-dom-DWN0RgAt.js";import{B as I}from"./react-router-dom-CyiGHeXB.js";import{a as h}from"./axios-Cm0UX6qg.js";import{J as P}from"./jszip-C_GpTb5M.js";import{F as z}from"./file-saver-B00IKLHc.js";import{u as f,a as A,b as j}from"./react-router-D3GXQn_V.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-Dql683DL.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();const b=s.createContext({messages:[],addMessage:()=>{}}),F=({children:o})=>{const[l,c]=s.useState([]),r=t=>{const n=JSON.stringify(t);console.log("+++ Inside MessageProvider => "+n),c(d=>[...d,n])};return e.jsx(b.Provider,{value:{messages:l,addMessage:r},children:o})},x=()=>s.useContext(b),_=()=>{const[o,l]=s.useState([]),[c,r]=s.useState(!1),t=s.useRef(null),n=s.useRef(null),[d,y]=s.useState(0),[v,m]=s.useState(!0),L=f(),{addMessage:g}=x(),C=async()=>{try{const a=await h.get("http://192.168.1.110:8080/photo.jpg",{responseType:"blob"});if(z.saveAs(a.data,"captura.jpg"),n.current){const i=URL.createObjectURL(a.data);n.current.src=i}}catch(a){console.error("Error al capturar la imagen:",a),g("Error al capturar la imagen:"+a)}};s.useEffect(()=>(c?t.current=setInterval(E,1e3):clearInterval(t.current),()=>{t.current&&clearInterval(t.current)}),[c]);const E=async()=>{try{const a=await h.get("http://192.168.1.110:8080/photo.jpg",{responseType:"blob"});if(l(i=>[...i,a.data]),n.current){const i=URL.createObjectURL(a.data);n.current.src=i}}catch(a){console.error("Error al capturar la imagen:",a)}},R=()=>{r(!0)},k=()=>{r(!1),N()},N=()=>{const a=new P;o.forEach((i,u)=>{a.file(`captured_frame_${u}.jpg`,i)}),a.generateAsync({type:"blob"}).then(i=>{const u=document.createElement("a");u.href=URL.createObjectURL(i),u.download="captured_frames.zip",u.click()})},S=()=>{L("/debug")},w=()=>{y(d+1),O()},M=()=>{console.log("La imagen se ha cargado correctamente."),g("La imagen se ha cargado correctamente.")},O=async()=>{try{const a=await fetch("http://192.168.1.110:8080/video");a.ok?m(!0):(m(!1),console.error("Error al obtener la imagen. C\xF3digo de estado:",a.status))}catch(a){m(!1),console.error("Error al obtener la imagen:",a)}};return e.jsxs("div",{children:[v?e.jsxs(e.Fragment,{children:[e.jsx("img",{ref:n,src:"http://192.168.1.110:8080/video",alt:"Video Stream",width:"529",height:"297",onLoad:M,onError:a=>{g("Error al capturar la imagen:"+a.message)}},d),e.jsxs("h2",{children:["Contador: ",d]}),e.jsx("button",{onClick:C,children:"Capturar una imagen"}),e.jsx("button",{onClick:R,children:"Comenzar capturaci\xF3n"}),e.jsx("button",{onClick:k,children:"Parar capturaci\xF3n"}),e.jsx("button",{onClick:S,children:"Debug"})]}):e.jsx("p",{children:"La URL no es v\xE1lida o hay un problema de conexi\xF3n."}),e.jsx("button",{onClick:w,children:"Refresh"})]})},B=()=>{const{messages:o}=x(),l=f(),c=()=>{l("/")};return e.jsx(e.Fragment,{children:e.jsx("div",{className:"debug-container",children:e.jsxs("div",{className:"debug-container-grid",children:[e.jsx("div",{className:"debug-container-grid-item-traza",children:e.jsx("ul",{children:o.map((r,t)=>r&&e.jsx("li",{children:r},t))})}),e.jsx("div",{className:"debug-container-grid-item-input-btns",children:e.jsx("div",{className:"debug-container-grid-item-input-field",children:e.jsx("div",{className:"input-group mb-3",children:e.jsx("button",{onClick:c,children:"Volver"})})})})]})})})};function V(){return e.jsx(p.StrictMode,{children:e.jsx(F,{children:e.jsx(I,{basename:"/react-webcam",children:e.jsxs(A,{children:[e.jsx(j,{path:"/",element:e.jsx(_,{})}),e.jsx(j,{path:"/debug",element:e.jsx(B,{})})]})})})})}U.createRoot(document.getElementById("root")).render(e.jsx(p.StrictMode,{children:e.jsx(V,{})}));
