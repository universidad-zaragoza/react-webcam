var e=/[A-Z]/g,o=/^ms-/,n={};function a(r){return"-"+r.toLowerCase()}function u(r){if(n.hasOwnProperty(r))return n[r];var t=r.replace(e,a);return n[r]=o.test(t)?"-"+t:t}export{u as h};
