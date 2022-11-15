(()=>{"use strict";var n={713:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,".form {\r\n  flex: 0.4;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.form h2 {\r\n  font-size: 2rem;\r\n  margin: 15px 0;\r\n}\r\n\r\n.form label {\r\n  opacity: 0;\r\n}\r\n\r\n.form input {\r\n  padding: 10px;\r\n  border: 2px solid black;\r\n  outline: none;\r\n}\r\n\r\n.form input::placeholder {\r\n  color: black;\r\n}\r\n\r\n.btn-container {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  margin-top: 15px;\r\n}\r\n",""]);const s=i},2:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: sans-serif;\r\n}\r\n\r\n#main {\r\n  width: 100vw;\r\n  height: 100vh;\r\n  max-width: 1200px;\r\n  margin: 0 auto;\r\n}\r\n\r\n#main > h1 {\r\n  font-size: 3.5rem;\r\n  padding: 30px 10px;\r\n}\r\n\r\n#page {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: flex-start;\r\n}\r\n\r\n.container { /* for form and score element */\r\n  flex: 0.5;\r\n  margin: 30px;\r\n}\r\n\r\n.btn {\r\n  border: 2px solid black;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 5px 15px;\r\n  background-color: transparent;\r\n  font-size: 18px;\r\n  box-shadow: 4px 4px 2px black;\r\n}\r\n",""]);const s=i},775:(n,r,e)=>{e.d(r,{Z:()=>s});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,".score-headline {\r\n  display: flex;\r\n  margin: 15px 0;\r\n}\r\n\r\n.score-headline h2 {\r\n  flex: 1;\r\n  font-size: 2rem;\r\n}\r\n\r\n.score-list {\r\n  list-style-type: none;\r\n  border: 2px solid black;\r\n}\r\n\r\n.score-list li {\r\n  padding: 5px 10px;\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.even {\r\n  background-color: whitesmoke;\r\n}\r\n\r\n.odd {\r\n  background-color: lightblue;\r\n}\r\n",""]);const s=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=e(p),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var m=o(f,t);t.byIndex=s,r.splice(s,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=e(a[i]);r[s].references--}for(var l=t(n,o),c=0;c<a.length;c++){var d=e(a[c]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=l}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),s=e(565),l=e.n(s),c=e(216),d=e.n(c),p=e(589),u=e.n(p),f=e(2),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),r()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;var v=e(713),h={};h.styleTagTransform=u(),h.setAttributes=l(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),r()(v.Z,h),v.Z&&v.Z.locals&&v.Z.locals;var b=e(775),x={};x.styleTagTransform=u(),x.setAttributes=l(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),r()(b.Z,x),b.Z&&b.Z.locals&&b.Z.locals;(()=>{const n=document.getElementById("page");n.insertAdjacentHTML("beforeend",'\n<div class="scores container">\n  <div class="score-headline">\n    <h2>Recent Scores</h2>\n    <button class="btn">Refresh</button>\n  </div>\n\n  <ul class="score-list">\n    <li class="even">Name: 100</li>\n    <li class="odd">Name: 90</li>\n    <li class="even">Name: 80</li>\n    <li class="odd">Name: 70</li>\n    <li class="even">Name: 60</li>\n    <li class="odd">Name: 50</li>\n    <li class="even">Name: 50</li>\n  </ul>\n</div>\n'),n.insertAdjacentHTML("beforeend",'\n<form class="form container">\n  <h2>Add Your Score</h2>\n\n  <label for="name">Name</label>\n  <input id="name" type="text" name="name" placeholder="Your Name" />\n\n  <label for="score">Score</label>\n  <input id="score" type="text" name="score" placeholder="Your Score"/>\n\n  <div class="btn-container">\n    <button type="submit" class="btn">Submit</button>\n  </div>\n</form>\n')})()})()})();