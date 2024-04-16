var s=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function u(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var i={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var f={}.hasOwnProperty;function n(){for(var r="",e=0;e<arguments.length;e++){var t=arguments[e];t&&(r=a(r,l(t)))}return r}function l(r){if(typeof r=="string"||typeof r=="number")return r;if(typeof r!="object")return"";if(Array.isArray(r))return n.apply(null,r);if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]"))return r.toString();var e="";for(var t in r)f.call(r,t)&&r[t]&&(e=a(e,t));return e}function a(r,e){return e?r?r+" "+e:r+e:r}o.exports?(n.default=n,o.exports=n):window.classNames=n})()})(i);var p=i.exports;const c=u(p);export{s as a,c,u as g};
