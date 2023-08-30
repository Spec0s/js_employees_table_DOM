parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o=document.querySelector("table"),c=document.querySelector("thead"),l=document.querySelector("tbody"),u=e(l.rows),s=["default","default","default","default","default"],d="",m=!0;function v(e){return+e.replace(/[$,]/g,"")}function f(e){for(var t=e.split(""),n=[],r=0,a=t.length-1;a>=0;a--)r%3==0&&0!==r&&n.push(","),n.push(t[a]),r++;return"$".concat(n.reverse().join(""))}function p(e,t){switch(e){case"Name":case"Position":case"Office":"asc"!==s[t]?u.sort(function(e,n){return n.children[t].innerHTML.localeCompare(e.children[t].innerHTML)}):u.sort(function(e,n){return e.children[t].innerHTML.localeCompare(n.children[t].innerHTML)});break;case"Age":case"Salary":"asc"!==s[t]?u.sort(function(e,n){return v(n.children[t].innerHTML)-v(e.children[t].innerHTML)}):u.sort(function(e,n){return v(e.children[t].innerHTML)-v(n.children[t].innerHTML)})}}c.addEventListener("click",function(t){u=e(l.rows);var n=t.target.cellIndex;if("TH"===t.target.tagName){for(var r in"asc"!==s[n]?s[n]="asc":s[n]="dsc",s)+r!==n&&(s[r]="default");p(t.target.innerHTML,t.target.cellIndex),u.forEach(function(e){l.append(e)})}}),document.addEventListener("click",function(e){var t=e.target.parentNode,n=l.querySelector(".active");"TD"===e.target.tagName?(n&&n.classList.remove("active"),t.classList.add("active")):n&&n.classList.remove("active")});var g=function(){for(var e=document.createElement("form"),t=document.createElement("button"),n=["Name: ","Position: ","Office: ","Age: ","Salary: "],r=["Tokyo","Singapore","London","New York","Edinburgh","San Francisco"],a=0;a<=4;a++){var i=a<=2?"name":"number",c=n[a].replace(": ","").toLowerCase(),l=document.createElement("label");if(2===a)!function(){var e=document.createElement("select");r.forEach(function(t){var n=document.createElement("option");n.setAttribute("value",t),n.innerHTML=t,e.append(n)}),e.setAttribute("name",c),l.innerHTML=n[a],l.append(e)}();else{var u=document.createElement("input");l.innerHTML=n[a],u.setAttribute("name",c),u.setAttribute("type",i),u.setAttribute("data-qa",c),l.append(u)}e.append(l)}t.innerHTML="Save to table",e.append(t),e.classList.add("new-employee-form"),o.after(e)};function y(){var e=document.createElement("tr");Array.prototype.slice.call(arguments).forEach(function(t){var n=document.createElement("td");n.innerHTML=t,e.append(n)}),l.append(e)}function L(e,t,n,r,a){t.innerHTML=r,n.innerHTML=a,e.classList.add(r.toLowerCase())}function b(e,t){var n=document.createElement("div"),r=document.createElement("h2"),a=document.createElement("p");n.classList.add("notification"),r.classList.add("notification.title"),L(n,r,a,e,t),n.setAttribute("data-qa","notification"),n.append(r),n.append(a),h.after(n),setTimeout(function(){n.remove()},2e3)}g();var h=document.querySelector("form"),T=h.querySelector('[name="name"]'),E=h.querySelector('[name="position"]'),H=h.querySelector('[name="office"]'),M=h.querySelector('[name="age"]'),S=h.querySelector('[name="salary"]');function A(e,t,n,r){return d="something wrong",m=!0,e.split("").every(function(e){return e.toLowerCase()!==e.toUpperCase()||" "===e})?e.trim().length<4?(m=!1,d="Name minimum length 4"):0===t.trim().length?(m=!1,d="Position can't be empty"):n<18||n>90?(m=!1,d="Age can't be more than 90 or less than 18"):r<=0||!r?(m=!1,d="Salary can't be empty or negative"):void 0:(m=!1,d="Only alphabetic characters allowed")}h.addEventListener("submit",function(e){e.preventDefault(),A(T.value,E.value,M.value,S.value);try{var t=f(S.value),n=T.value;if(m)return y(T.value.trim(),E.value.trim(),H.value,M.value,t),T.value="",E.value="",H.value="Tokyo",M.value="",S.value="",b("Success","".concat(n," added"))}catch(r){return b("Error",r.message)}return b("Warning",d)}),l.addEventListener("dblclick",function(t){if("TD"===t.target.tagName){var n=e(h.querySelectorAll("label"))[t.target.cellIndex].lastChild.cloneNode(!0),r=t.target.innerHTML;n.value=t.target.innerHTML,t.target.innerHTML="",t.target.append(n),n.focus();var a=function(){switch(n.name){case"name":if(!n.value.split("").every(function(e){return e.toLowerCase()!==e.toUpperCase()||" "===e})||n.value.trim().length<4)return t.target.innerHTML=r,void b("Warning","Name length > 4 and only letters");break;case"age":if(n.value<18||n.value>90)return t.target.innerHTML=r,void b("Warning","Age can't be < 18 and > 90");break;case"salary":return n.value<=0?(t.target.innerHTML=r,void b("Warning","Salary can't be negative")):void(t.target.innerHTML=n.value.trim()?f(n.value):r)}n.remove(),t.target.innerHTML=n.value.trim()?n.value:r};n.addEventListener("blur",a),n.addEventListener("keypress",function(e){"Enter"===e.key&&(n.removeEventListener("blur",a),a())})}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.cd1e1e8d.js.map