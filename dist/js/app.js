!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(1);n(3),i.EmailsForm({originalNode:document.querySelector("#example01")});var a=i.EmailsForm({originalNode:document.querySelector("#example02")});a.setEmails(["ivan@mail.ru","diego@mail.es","thomas@mail.de"]);var r=document.querySelector("#example02Input");document.querySelector("#example02Button").addEventListener("click",(function(){var e=r,t=e.value.replace(/\s/g,"").split(",");a.setEmails(t),e.value=""})),i.EmailsForm({originalNode:document.querySelector("#example03")})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t.EmailsForm=function(e){var t=e.originalNode,n=e.title,a=void 0===n?"Share <strong>Board name</strong> with others":n,r=e.baseClass,o=void 0===r?"emails-form":r;t.innerHTML='\n    <div class="'+o+'">\n      <div class="'+o+'-content">\n        <div class="'+o+'-title">'+a+'</div>\n        <div class="emails-input-container"></div>\n      </div>\n      <div class="'+o+'-controls">\n        <button class="'+o+"-button "+o+'-button__add-email">Add email</button>\n        <button class="'+o+"-button "+o+'-button__emails-count">Get emails count</button>\n      </div>\n    </div>\n  ';var l=i.EmailsInput({originalNode:t});return document.querySelector("#"+t.id+" ."+o+"-button__emails-count").addEventListener("click",(function(){alert("Detected "+l.getValidEmailsCount()+" valid emails.")})),document.querySelector("#"+t.id+" ."+o+"-button__add-email").addEventListener("click",(function(){return l.addEmail(Math.random().toString(36).substring(2,11)+"@sample.com")})),{setEmails:l.setEmails}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.generateId=function(){return Math.random().toString(36).substring(2)+performance.now().toString(36)},t.validateEmail=function(e){if(!e)return!1;return/[A-Z0-9._%+-]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}/gi.test(e)},t.EmailsInput=function(e){var n=e.originalNode,i=e.baseClass,a=void 0===i?"emails-input":i,r=e.placeholder,o=void 0===r?"add more people...":r,l=[];document.querySelector("#"+n.id+" ."+a+"-container").innerHTML='\n    <div class="'+a+'-box">\n      <div class="'+a+'-list"></div>\n      <input class="'+a+'" type="email" name="email" placeholder="'+o+'" autocomplete="no"></input>\n    </div>\n  ';var u=document.querySelector("#"+n.id+' [name="email"]'),c=document.querySelector("#"+n.id+" ."+a+"-list"),d=function(e){if(e&&e.length>0){var i=t.generateId(),r=t.validateEmail(e);l.push({id:i,value:e,isValid:r});var o=document.createElement("div");o.className="email-block "+(r?"":"is-invalid"),o.setAttribute("data-key",i),o.innerHTML='\n          <div class="email-block-text">'+e+' <span class="email-block-icon">&#10005;</span></div>\n      ',c.appendChild(o),document.querySelector("#"+n.id+" ."+a+'-list .email-block[data-key="'+i+'"] .email-block-icon').addEventListener("click",(function(){var e=document.querySelector("#"+n.id+" ."+a+'-list .email-block[data-key="'+i+'"]');e.parentNode.removeChild(e);var t=l.findIndex((function(e){return e.id===i}));t>-1&&l.splice(t,1)}))}},s=function(e){if(e.preventDefault(),e.stopPropagation(),e instanceof FocusEvent||e instanceof KeyboardEvent&&("Enter"===e.key||","===e.key)){var t=e.target,n=t.value.replace(",","");d(n),t.value=""}else if(e instanceof ClipboardEvent){(e.clipboardData||window.clipboardData).getData("text/plain").replace(/\s/g,"").split(",").forEach((function(e){e&&e.length>0&&d(e)}))}};return u.addEventListener("keyup",s),u.addEventListener("blur",s),u.addEventListener("paste",s),{addEmail:function(e){return d(e)},getEmails:function(){return l},getValidEmailsCount:function(){return l.filter((function(e){return e.isValid})).length},setEmails:function(e){c.innerHTML="",l=[],e.forEach((function(e){e&&e.length>0&&d(e)}))}}}},function(e,t,n){}]);