import{r,R as F}from"./react-kxrMq5Cz.js";import"./react-dom-D94D8k72.js";import{R}from"./react-router-o3Nn-63v.js";import{c as p}from"./@remix-run-Dql683DL.js";/**
* React Router DOM v6.22.3
*
* Copyright (c) Remix Software Inc.
*
* This source code is licensed under the MIT license found in the
* LICENSE.md file in the root directory of this source tree.
*
* @license MIT
*/const U="6";try{window.__reactRouterVersion=U}catch{}const b="startTransition",l=F[b];function v(e){let{basename:h,children:S,future:i,window:w}=e,o=r.useRef();o.current==null&&(o.current=p({window:w,v5Compat:!0}));let t=o.current,[s,n]=r.useState({action:t.action,location:t.location}),{v7_startTransition:a}=i||{},c=r.useCallback(u=>{a&&l?l(()=>n(u)):n(u)},[n,a]);return r.useLayoutEffect(()=>t.listen(c),[t,c]),r.createElement(R,{basename:h,children:S,location:s.location,navigationType:s.action,navigator:t,future:i})}var m;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(m||(m={}));var f;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(f||(f={}));export{v as B};
