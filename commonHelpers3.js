import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as u}from"./assets/vendor-651d7991.js";const a=document.querySelector(".form");a.addEventListener("submit",c);function c(e){e.preventDefault();const{delay:t,step:s,amount:n}=e.currentTarget;let r=Number(t.value);for(let o=1;o<=Number(n.value);o+=1)l(o,r).then(({position:i,delay:m})=>{u.success({position:"topRight",message:`✅ Fulfilled promise ${i} in ${m}ms`})}).catch(({position:i,delay:m})=>{u.error({position:"topRight",message:`❌ Rejected promise ${i} in ${m}ms`})}),r+=Number(s.value)}function l(e,t){const s=Math.random()>.3;return new Promise((r,o)=>{setTimeout(()=>{s?r({position:e,delay:t}):o({position:e,delay:t})},t)})}
//# sourceMappingURL=commonHelpers3.js.map