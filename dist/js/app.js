!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);n(3),i.EmailsForm({originalNode:document.querySelector("#example01")});var a=i.EmailsForm({originalNode:document.querySelector("#example02")});a.setEmails(["ivan@mail.ru","diego@mail.es","thomas@mail.de"]);var o=document.querySelector("#example02Input");document.querySelector("#example02Button").addEventListener("click",(function(){var e=o,t=e.value.replace(/\s/g,"").split(",");a.setEmails(t),e.value=""})),i.EmailsForm({originalNode:document.querySelector("#example03")})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t.EmailsForm=function(e){var t=e.originalNode,n=e.title,a=void 0===n?"Share <strong>Board name</strong> with others":n,o=e.baseClass,r=void 0===o?"emails-form":o;t.innerHTML='\n    <div class="'+r+'">\n      <div class="'+r+'-content">\n        <div class="'+r+'-title">'+a+'</div>\n        <div class="emails-input-container"></div>\n      </div>\n      <div class="'+r+'-controls">\n        <button class="'+r+"-button "+r+'-button__add-email">Add email</button>\n        <button class="'+r+"-button "+r+'-button__emails-count">Get emails count</button>\n      </div>\n    </div>\n  ';var l=i.EmailsInput({originalNode:t});return document.querySelector("#"+t.id+" ."+r+"-button__emails-count").addEventListener("click",(function(){alert("Detected "+l.getValidEmailsCount()+" valid emails.")})),document.querySelector("#"+t.id+" ."+r+"-button__add-email").addEventListener("click",(function(){return l.addEmail(Math.random().toString(36).substring(2,11)+"@sample.com")})),{setEmails:l.setEmails}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateId=function(){return Math.random().toString(36).substring(2)+performance.now().toString(36)},t.validateEmail=function(e){if(!e)return!1;return/[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}/gi.test(e)},t.dispatchEventAgnostic=function(e,t,n){var i;"function"==typeof window.CustomEvent?i=new CustomEvent(t,{detail:n}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,{detail:n}),e.dispatchEvent(i)},t.EmailsInput=function(e){var n=e.originalNode,i=e.baseClass,a=void 0===i?"emails-input":i,o=e.placeholder,r=void 0===o?"add more people...":o,l=e.subscribeEventName,u=void 0===l?"emailsListUpdate":l,c=[];document.querySelector("#"+n.id+" ."+a+"-container").innerHTML='\n    <div class="'+a+'-box">\n      <div class="'+a+'-list"></div>\n      <input class="'+a+'" type="email" name="email" placeholder="'+r+'" autocomplete="no"></input>\n    </div>\n  ';var d=document.querySelector("#"+n.id+' [name="email"]'),s=document.querySelector("#"+n.id+" ."+a+"-list"),m=function(e){if(e&&e.length>0){var i=t.generateId(),o=t.validateEmail(e);c.push({id:i,value:e,isValid:o});var r=document.createElement("div");r.className="email-block "+(o?"":"is-invalid"),r.setAttribute("data-key",i),r.innerHTML='\n          <div class="email-block-text">'+e+' <span class="email-block-icon">&#10005;</span></div>\n      ',s.appendChild(r),document.querySelector("#"+n.id+" ."+a+'-list .email-block[data-key="'+i+'"] .email-block-icon').addEventListener("click",(function(){var e=document.querySelector("#"+n.id+" ."+a+'-list .email-block[data-key="'+i+'"]');e.parentNode.removeChild(e);var t=c.findIndex((function(e){return e.id===i}));t>-1&&(c.splice(t,1),f())})),f()}},v=function(e){if(e.preventDefault(),e.stopPropagation(),e instanceof FocusEvent||e instanceof KeyboardEvent&&("Enter"===e.key||","===e.key)){var t=e.target,n=t.value.replace(",","");m(n),t.value=""}else if(e instanceof ClipboardEvent){(e.clipboardData||window.clipboardData).getData("text/plain").replace(/\s/g,"").split(",").forEach((function(e){e&&e.length>0&&m(e)}))}},f=function(){t.dispatchEventAgnostic(s,u,c)};return d.addEventListener("keyup",v),d.addEventListener("blur",v),d.addEventListener("paste",v),{addEmail:function(e){return m(e)},getEmails:function(){return c},getValidEmailsCount:function(){return c.filter((function(e){return e.isValid})).length},setEmails:function(e){s.innerHTML="",c=[],e.forEach((function(e){e&&e.length>0&&m(e)}))},subscribe:function(e,t){e.addEventListener(u,t)},unsubscribe:function(e,t){e.removeEventListener(u,t)}}}},function(e,t,n){}]);