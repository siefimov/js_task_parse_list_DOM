function r(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=Array(t);e<t;e++)n[e]=r[e];return n}var t,e=document.querySelector("ul"),n=function(t){if(Array.isArray(t))return r(t)}(t=document.querySelectorAll("[data-salary]"))||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(t)||function(t,e){if(t){if("string"==typeof t)return r(t,void 0);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,void 0)}}(t)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}();function a(r){return r.dataset.salary.replace("$","").replace(",",".")}e.innerHTML="",function(r){r.sort(function(r,t){var e=Number(a(r));return Number(a(t))-e}).forEach(function(r){return e.appendChild(r)})}(n),n.map(function(r){return{name:r.dataset.name,position:r.dataset.position,salary:Number(a(r)),age:Number(r.dataset.age)}});
//# sourceMappingURL=index.77182836.js.map