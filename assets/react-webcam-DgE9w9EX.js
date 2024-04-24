import{r as C,c as _,g as E}from"./react-kxrMq5Cz.js";var b={exports:{}};(function(w,D){(function(U,g){w.exports=g(C)})(_,function(U){return function(g){var m={};function u(i){if(m[i])return m[i].exports;var a=m[i]={i,l:!1,exports:{}};return g[i].call(a.exports,a,a.exports,u),a.l=!0,a.exports}return u.m=g,u.c=m,u.d=function(i,a,v){u.o(i,a)||Object.defineProperty(i,a,{enumerable:!0,get:v})},u.r=function(i){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},u.t=function(i,a){if(a&1&&(i=u(i)),a&8||a&4&&typeof i=="object"&&i&&i.__esModule)return i;var v=Object.create(null);if(u.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:i}),a&2&&typeof i!="string")for(var S in i)u.d(v,S,(function(M){return i[M]}).bind(null,S));return v},u.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return u.d(a,"a",a),a},u.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},u.p="",u(u.s="./src/react-webcam.tsx")}({"./src/react-webcam.tsx":function(g,m,u){u.r(m);var i=u("react"),a=function(){var d=function(o,t){return d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var r in n)n.hasOwnProperty(r)&&(e[r]=n[r])},d(o,t)};return function(o,t){d(o,t);function e(){this.constructor=o}o.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),v=function(){return v=Object.assign||function(d){for(var o,t=1,e=arguments.length;t<e;t++){o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(d[n]=o[n])}return d},v.apply(this,arguments)},S=function(d,o){var t={};for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&o.indexOf(e)<0&&(t[e]=d[e]);if(d!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,e=Object.getOwnPropertySymbols(d);n<e.length;n++)o.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(d,e[n])&&(t[e[n]]=d[e[n]]);return t};(function(){typeof window>"u"||(navigator.mediaDevices===void 0&&(navigator.mediaDevices={}),navigator.mediaDevices.getUserMedia===void 0&&(navigator.mediaDevices.getUserMedia=function(d){var o=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia||navigator.msGetUserMedia;return o?new Promise(function(t,e){o.call(navigator,d,t,e)}):Promise.reject(new Error("getUserMedia is not implemented in this browser"))}))})();function M(){return!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia)}var O=function(d){a(o,d);function o(t){var e=d.call(this,t)||this;return e.canvas=null,e.ctx=null,e.requestUserMediaId=0,e.unmounted=!1,e.state={hasUserMedia:!1},e}return o.prototype.componentDidMount=function(){var t=this,e=t.state,n=t.props;if(this.unmounted=!1,!M()){n.onUserMediaError("getUserMedia not supported");return}e.hasUserMedia||this.requestUserMedia(),n.children&&typeof n.children!="function"&&console.warn("children must be a function")},o.prototype.componentDidUpdate=function(t){var e=this.props;if(!M()){e.onUserMediaError("getUserMedia not supported");return}var n=JSON.stringify(t.audioConstraints)!==JSON.stringify(e.audioConstraints),r=JSON.stringify(t.videoConstraints)!==JSON.stringify(e.videoConstraints),p=t.minScreenshotWidth!==e.minScreenshotWidth,h=t.minScreenshotHeight!==e.minScreenshotHeight;(r||p||h)&&(this.canvas=null,this.ctx=null),(n||r)&&(this.stopAndCleanup(),this.requestUserMedia())},o.prototype.componentWillUnmount=function(){this.unmounted=!0,this.stopAndCleanup()},o.stopMediaStream=function(t){t&&(t.getVideoTracks&&t.getAudioTracks?(t.getVideoTracks().map(function(e){t.removeTrack(e),e.stop()}),t.getAudioTracks().map(function(e){t.removeTrack(e),e.stop()})):t.stop())},o.prototype.stopAndCleanup=function(){var t=this.state;t.hasUserMedia&&(o.stopMediaStream(this.stream),t.src&&window.URL.revokeObjectURL(t.src))},o.prototype.getScreenshot=function(t){var e=this,n=e.state,r=e.props;if(!n.hasUserMedia)return null;var p=this.getCanvas(t);return p&&p.toDataURL(r.screenshotFormat,r.screenshotQuality)},o.prototype.getCanvas=function(t){var e=this,n=e.state,r=e.props;if(!this.video||!n.hasUserMedia||!this.video.videoHeight)return null;if(!this.ctx){var p=this.video.videoWidth,h=this.video.videoHeight;if(!this.props.forceScreenshotSourceSize){var c=p/h;p=r.minScreenshotWidth||this.video.clientWidth,h=p/c,r.minScreenshotHeight&&h<r.minScreenshotHeight&&(h=r.minScreenshotHeight,p=h*c)}this.canvas=document.createElement("canvas"),this.canvas.width=(t==null?void 0:t.width)||p,this.canvas.height=(t==null?void 0:t.height)||h,this.ctx=this.canvas.getContext("2d")}var f=this,l=f.ctx,s=f.canvas;return l&&s&&(s.width=(t==null?void 0:t.width)||s.width,s.height=(t==null?void 0:t.height)||s.height,r.mirrored&&(l.translate(s.width,0),l.scale(-1,1)),l.imageSmoothingEnabled=r.imageSmoothing,l.drawImage(this.video,0,0,(t==null?void 0:t.width)||s.width,(t==null?void 0:t.height)||s.height),r.mirrored&&(l.scale(-1,1),l.translate(-s.width,0))),s},o.prototype.requestUserMedia=function(){var t=this,e=this.props,n=function(h,c){var f={video:typeof c<"u"?c:!0};e.audio&&(f.audio=typeof h<"u"?h:!0),t.requestUserMediaId++;var l=t.requestUserMediaId;navigator.mediaDevices.getUserMedia(f).then(function(s){t.unmounted||l!==t.requestUserMediaId?o.stopMediaStream(s):t.handleUserMedia(null,s)}).catch(function(s){t.handleUserMedia(s)})};if("mediaDevices"in navigator)n(e.audioConstraints,e.videoConstraints);else{var r=function(h){return{optional:[{sourceId:h}]}},p=function(h){var c=h.deviceId;return typeof c=="string"?c:Array.isArray(c)&&c.length>0?c[0]:typeof c=="object"&&c.ideal?c.ideal:null};MediaStreamTrack.getSources(function(h){var c=null,f=null;h.forEach(function(y){y.kind==="audio"?c=y.id:y.kind==="video"&&(f=y.id)});var l=p(e.audioConstraints);l&&(c=l);var s=p(e.videoConstraints);s&&(f=s),n(r(c),r(f))})}},o.prototype.handleUserMedia=function(t,e){var n=this.props;if(t||!e){this.setState({hasUserMedia:!1}),n.onUserMediaError(t);return}this.stream=e;try{this.video&&(this.video.srcObject=e),this.setState({hasUserMedia:!0})}catch{this.setState({hasUserMedia:!0,src:window.URL.createObjectURL(e)})}n.onUserMedia(e)},o.prototype.render=function(){var t=this,e=this,n=e.state,r=e.props,p=r.audio;r.forceScreenshotSourceSize;var h=r.disablePictureInPicture;r.onUserMedia,r.onUserMediaError,r.screenshotFormat,r.screenshotQuality,r.minScreenshotWidth,r.minScreenshotHeight,r.audioConstraints,r.videoConstraints,r.imageSmoothing;var c=r.mirrored,f=r.style,l=f===void 0?{}:f,s=r.children,y=S(r,["audio","forceScreenshotSourceSize","disablePictureInPicture","onUserMedia","onUserMediaError","screenshotFormat","screenshotQuality","minScreenshotWidth","minScreenshotHeight","audioConstraints","videoConstraints","imageSmoothing","mirrored","style","children"]),P=c?v(v({},l),{transform:(l.transform||"")+" scaleX(-1)"}):l,j={getScreenshot:this.getScreenshot.bind(this)};return i.createElement(i.Fragment,null,i.createElement("video",v({autoPlay:!0,disablePictureInPicture:h,src:n.src,muted:!p,playsInline:!0,ref:function(x){t.video=x},style:P},y)),s&&s(j))},o.defaultProps={audio:!1,disablePictureInPicture:!1,forceScreenshotSourceSize:!1,imageSmoothing:!0,mirrored:!1,onUserMedia:function(){},onUserMediaError:function(){},screenshotFormat:"image/webp",screenshotQuality:.92},o}(i.Component);m.default=O},react:function(g,m){g.exports=U}}).default})})(b);var I=b.exports;const k=E(I);export{k as W};
