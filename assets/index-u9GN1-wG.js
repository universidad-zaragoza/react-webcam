import{j as e,a as d}from"./react-s7AnpVDj.js";import{c as m}from"./react-dom-qSV6yrof.js";import{B as f}from"./react-router-dom-3E8xtqpE.js";import{W as p}from"./react-webcam-C3O0DNTI.js";import{C as u,R as c,a as l,F as s}from"./react-bootstrap-Cx7QuNvw.js";import{a as j,b as x}from"./react-router-CoNGXDhO.js";import"./classnames-BK5ccKcQ.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-DyVe-HVL.js";import"./prop-types-CGJacfSb.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=a(r);fetch(r.href,t)}})();const h=()=>e.jsx(e.Fragment,{children:e.jsx("div",{className:"App",children:e.jsxs(u,{children:[e.jsx(c,{children:e.jsx(l,{children:e.jsx(p,{})})}),e.jsx(c,{children:e.jsx(l,{children:e.jsxs(s.Group,{controlId:"formFile",className:"mb-3",children:[e.jsx(s.Label,{children:"Default file input example"}),e.jsx(s.Control,{type:"file"})]})})})]})})});function y(){return e.jsx(f,{basename:"/react-webcam",children:e.jsx(j,{children:e.jsx(x,{path:"/",element:e.jsx(h,{})})})})}m.createRoot(document.getElementById("root")).render(e.jsx(d.StrictMode,{children:e.jsx(y,{})}));