(()=>{"use strict";var n={365:(n,e,t)=>{t.d(e,{A:()=>c});var o=t(601),r=t.n(o),a=t(314),i=t.n(a)()(r());i.push([n.id,"ul {\n    list-style-type: none;\n    padding: 0;\n    display: flex;\n}\n\nli {\n    margin-right: 10px; \n}\n\nli:last-child {\n    margin-right: 0;\n}\n\n\nbody {\n    margin: 0;\n    font-family: Arial, sans-serif;\n    font-size: 16px; \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\nheader {\n    width: 100%;\n    background-color: #333;\n    color: white;\n    text-align: center;\n    padding: 1em 0;\n}\n\nnav {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\nnav button {\n    background-color: #444;\n    color: white;\n    border: none;\n    padding: 15px 30px;\n    cursor: pointer;\n    font-size: 18px; \n}\n\nnav button:hover {\n    background-color: #555;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    margin-top: 100px;\n    width: 90%;\n    max-width: 600px;\n}\n\n.content-section {\n    text-align: center;\n    margin: 20px 0;\n}\n\n.content-section img {\n    max-width: 100%;\n    height: auto;\n    margin-bottom: 20px;\n}\n\n.content-section h1, .content-section p {\n    margin-bottom: 20px;\n    line-height: 1.6;\n}\n\n.content-section p {\n    max-width: 500px; \n    text-align: left;\n}\n",""]);const c=i},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);o&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=o.base?s[0]+o.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:u,updater:f,references:1})}i.push(u)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=o(n,r),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0;var o=t(72),r=t.n(o),a=t(825),i=t.n(a),c=t(659),s=t.n(c),d=t(56),l=t.n(d),u=t(540),p=t.n(u),m=t(113),f=t.n(m),h=t(365),v={};v.styleTagTransform=f(),v.setAttributes=l(),v.insert=s().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),r()(h.A,v),h.A&&h.A.locals&&h.A.locals;const g=function(){const n=document.getElementById("content"),e=document.createElement("h1");e.textContent="Welcome to Our Restaurant";const t=document.createElement("img");t.src="../img/main_img.png",t.alt="restaurant_img";const o=document.createElement("p");o.textContent="We offer the best food in town. Come visit!",n.appendChild(e),n.appendChild(t),n.appendChild(o)};!function(){const n=document.getElementById("homeBtn"),e=document.getElementById("menuBtn"),t=document.getElementById("contactBtn"),o=document.getElementById("content");function r(){o.innerHTML=""}g(),n.addEventListener("click",(()=>{r(),g()})),e.addEventListener("click",(()=>{r(),function(){const n=document.getElementById("content"),e=document.createElement("h1");e.textContent="Our Menu";const t=document.createElement("div");t.classList.add("menu-item"),t.innerHTML="\n        <h2>Roast Suckling Pig $34.99</h2>\n        <p>Tender suckling pig slow-roasted to perfection, boasting crispy skin and succulent meat infused with aromatic herbs and spices. Served with a side of seasonal vegetables and a rich jus.</p>\n    ";const o=document.createElement("div");o.classList.add("menu-item"),o.innerHTML="\n        <h2>Veal Cutlet Breaded w/Potatoes $29.99</h2>\n        <p>A delicately breaded veal cutlet served alongside golden, thinly sliced potatoes, pan-fried to a crisp perfection. Accompanied by a fresh arugula salad dressed in lemon vinaigrette, offering a balanced blend of textures and flavors.</p>\n    ";const r=document.createElement("div");r.classList.add("menu-item"),r.innerHTML="\n        <h2>Rioja Style Salad $15.99</h2>\n        <p>A vibrant salad inspired by the flavors of Spain's Rioja region, featuring mixed greens tossed with marinated artichokes, sun-dried tomatoes, Spanish olives, and crumbled Manchego cheese. Finished with a drizzle of sherry vinegar and extra virgin olive oil.</p>\n    ",n.innerHTML="",n.appendChild(e),n.appendChild(t),n.appendChild(o),n.appendChild(r)}()})),t.addEventListener("click",(()=>{r(),function(){const n=document.getElementById("content"),e=document.createElement("h1");e.textContent="Contact Us";const t=document.createElement("p");t.textContent="1062 N Scottsdale Rd, Scottsdale AZ 85251";const o=document.createElement("p");o.textContent="Phone: (602) 501 6349";const r=document.createElement("p");r.textContent="Email: contact@rocinanterestaurant.com",n.innerHTML="",n.appendChild(e),n.appendChild(t),n.appendChild(o),n.appendChild(r)}()}))}()})();