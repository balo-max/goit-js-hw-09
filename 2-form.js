import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const a=document.querySelector(".feedback-form");let o={email:"",message:""};const s=()=>{try{if(localStorage.length===0)return;const e=JSON.parse(localStorage.getItem("feedback-form-state"));o=e;for(const t in e)a.elements[t].value=e[t]}catch(e){console.log(e)}};s();const m=e=>{const{target:t}=e,l=t.value,r=t.name;o[r]=l,localStorage.setItem("feedback-form-state",JSON.stringify(o))},n=e=>{e.preventDefault();const{currentTarget:t}=e;if(!t.elements.email.value||!t.elements.message.value){alert("Fill please all fields");return}console.log(o),t.reset(),localStorage.removeItem("feedback-form-state")};a.addEventListener("input",m);a.addEventListener("submit",n);
//# sourceMappingURL=2-form.js.map
