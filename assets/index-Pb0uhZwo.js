import"./style-CgATJ9GZ.js";const g=document.getElementById("userList");g.addEventListener("click",t=>{let e=t.target;if(e.className==="deleteButton"){let i=e.parentNode;u(i)}});function u(t){t.style.display="none"}let l=document.getElementById("taskList"),s=document.getElementById("newTask");const m=document.getElementById("addTask");function d(t){if(t.trim()===""){alert("Будь ласка, введіть завдання!");return}let e=document.createElement("li");e.classList.add("taskListElement"),l.appendChild(e),e.innerHTML=`<label for="userTaskCheckbox" class="taskListLabel"> <input type="checkbox" id="userTaskCheckbox">${t}</label> <button type="button" class="remove-btn">Delete</button>`,s.value=""}function b(t){t.remove()}m.addEventListener("click",()=>d(s.value));document.addEventListener("keydown",t=>{t.code==="Enter"&&document.activeElement===s&&(t.preventDefault(),d(s.value))});l.addEventListener("click",t=>{let e=t.target;if(e.classList.contains("remove-btn")){let i=e.parentNode;b(i)}});l.addEventListener("change",t=>{if(t.target.type==="checkbox"){const e=t.target.closest("li");t.target.checked?e.classList.add("active-task"):e.classList.remove("active-task")}});const y=document.querySelector(".js-nav"),x=document.querySelectorAll(".btn");function v(t){t.classList.contains("active")?t.classList.remove("active"):(x.forEach(e=>{e.classList.remove("active")}),t.classList.add("active"))}y.addEventListener("click",t=>{let e=t.target;e.classList.contains("btn")&&v(e)});const h=document.querySelector(".js-gallery"),c=document.querySelector(".js-lightbox"),n=document.querySelector(".lightbox__image"),L=document.querySelector('[data-action="close-lightbox"]');let a=null;const o=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower",index:0},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight",index:1},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View",index:2},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms",index:3},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains",index:4},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing",index:5},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows",index:6},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape",index:7},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea",index:8}];o.forEach(t=>{let e=document.createElement("img");e.classList.add("gallery__image"),e.setAttribute("src",t.preview),e.setAttribute("alt",t.description),e.setAttribute("data-index",t.index),h.appendChild(e)});function k(t){a=t,c.classList.add("is-open");const{original:e,description:i}=o[t];n.setAttribute("src",e),n.setAttribute("alt",i)}function r(){c.classList.remove("is-open"),n.setAttribute("src",""),n.setAttribute("alt",""),a=null}function p(t){a+=t,a<0?a=o.length-1:a>=o.length&&(a=0);const{original:e,description:i}=o[a];n.setAttribute("src",e),n.setAttribute("alt",i)}h.addEventListener("click",t=>{let e=t.target;const i=Number(e.dataset.index);e.classList.contains("gallery__image")&&k(i)});document.addEventListener("keydown",t=>{if(c.classList.contains("is-open"))switch(t.key){case"Escape":r();break;case"ArrowRight":p(1);break;case"ArrowLeft":p(-1);break}});c.addEventListener("click",r);L.addEventListener("click",r);
