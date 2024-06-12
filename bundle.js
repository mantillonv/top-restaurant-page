(()=>{"use strict";var e={365:(e,n,t)=>{t.d(n,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([e.id,"ul {\n    list-style-type: none;\n    padding: 0;\n    display: flex; /* Use flexbox */\n}\n\nli {\n    margin-right: 10px; /* Add spacing between items */\n}\n\n/* Optionally, to remove margin from the last item */\nli:last-child {\n    margin-right: 0;\n}\n\n\nbody {\n    margin: 0;\n    font-family: Arial, sans-serif;\n    font-size: 16px; /* Increase overall font size */\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    width: 100%;\n    background-color: #333;\n    color: white;\n    text-align: center;\n    padding: 1em 0;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 20px; /* Add space between buttons */\n}\n\nnav button {\n    background-color: #444;\n    color: white;\n    border: none;\n    padding: 15px 30px; /* Increase button padding for larger size */\n    cursor: pointer;\n    font-size: 18px; /* Increase font size for buttons */\n}\n\nnav button:hover {\n    background-color: #555;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 100px;\n    width: 90%;\n    max-width: 600px;\n}\n\n.content-section {\n    text-align: center;\n    margin: 20px 0;\n}\n\n.content-section img {\n    max-width: 100%;\n    height: auto;\n    margin-bottom: 20px;\n}\n\n.content-section h1, .content-section p {\n    margin-bottom: 20px;\n    line-height: 1.6; /* Improve readability */\n}\n\n.content-section p {\n    max-width: 500px; /* Limit width for better readability */\n    text-align: left; /* Align text to the left for paragraphs */\n}\n",""]);const c=i},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),n.push(l))}},n}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)n[p].references++,n[p].updater(m);else{var f=r(m,o);o.byIndex=c,n.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=o(e,r),d=0;d<a.length;d++){var l=t(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},659:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var a=n[o]={id:o,exports:{}};return e[o](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),m=t(113),f=t.n(m),h=t(365),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=s().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=p(),r()(h.A,g),h.A&&h.A.locals&&h.A.locals;const v=function(){const e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Welcome to Our Restaurant";const t=document.createElement("img");t.src="../img/main_img.png",t.alt="restaurant_img";const o=document.createElement("p");o.textContent="We offer the best food in town. Come visit!",e.appendChild(n),e.appendChild(t),e.appendChild(o)};!function(){const e=document.getElementById("homeBtn"),n=document.getElementById("menuBtn"),t=document.getElementById("contactBtn"),o=document.getElementById("content");function r(){o.innerHTML=""}v(),e.addEventListener("click",(()=>{r(),v()})),n.addEventListener("click",(()=>{r(),function(){const e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Our Menu";const t=document.createElement("div");t.classList.add("menu-item"),t.innerHTML="\n        <h2>Roast Suckling Pig $34.99</h2>\n        <p>Tender suckling pig slow-roasted to perfection, boasting crispy skin and succulent meat infused with aromatic herbs and spices. Served with a side of seasonal vegetables and a rich jus.</p>\n    ";const o=document.createElement("div");o.classList.add("menu-item"),o.innerHTML="\n        <h2>Veal Cutlet Breaded w/Potatoes $29.99</h2>\n        <p>A delicately breaded veal cutlet served alongside golden, thinly sliced potatoes, pan-fried to a crisp perfection. Accompanied by a fresh arugula salad dressed in lemon vinaigrette, offering a balanced blend of textures and flavors.</p>\n    ";const r=document.createElement("div");r.classList.add("menu-item"),r.innerHTML="\n        <h2>Rioja Style Salad $15.99</h2>\n        <p>A vibrant salad inspired by the flavors of Spain's Rioja region, featuring mixed greens tossed with marinated artichokes, sun-dried tomatoes, Spanish olives, and crumbled Manchego cheese. Finished with a drizzle of sherry vinegar and extra virgin olive oil.</p>\n    ",e.innerHTML="",e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r)}()})),t.addEventListener("click",(()=>{r(),function(){const e=document.getElementById("content"),n=document.createElement("h1");n.textContent="Contact Us";const t=document.createElement("p");t.textContent="1062 N Scottsdale Rd, Scottsdale AZ 85251";const o=document.createElement("p");o.textContent="Phone: (602) 501 6349";const r=document.createElement("p");r.textContent="Email: contact@rocinanterestaurant.com",e.innerHTML="",e.appendChild(n),e.appendChild(t),e.appendChild(o),e.appendChild(r)}()}))}()})();