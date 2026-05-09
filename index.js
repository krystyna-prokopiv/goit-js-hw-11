import{a as m,i as n,S as f}from"./assets/vendor-DN3jbcTS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function d(r){return m("https://pixabay.com/api/",{params:{key:"55787535-61c82cd2300b887fd2ca60733",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}})}function h(r){return r.map(({webformatURL:o,largeImageURL:i,tags:s,likes:e,views:t,comments:l,downloads:u})=>`<li class='gallery-item'>
        <a  href="${i}">
        <img  src="${o}" alt="${s}"/></a>
        <ul class="gallery-text-list">
        <li class='gallery-item-text'><h2>Likes</h2>
        <p> ${e}</p></li>
        <li class='gallery-item-text'>
        <h2>Views</h2>
        <p>${t}</p></li>
        <li class='gallery-item-text'>
        <h2>Comments</h2>
        <p>${l}</p></li>
        <li class='gallery-item-text'>
        <h2>Downloads</h2>
        <p>${u}</p></li></ul>
            </li > `).join("")}function p(){const r=document.querySelector(".gallery");r.innerHTML=""}const c=document.querySelector(".loader");function y(){c.classList.add("visible")}function g(){c.classList.remove("visible")}const L=document.querySelector(".form"),b=document.querySelector(".gallery");L.addEventListener("submit",x);let a=null;function x(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();p(),y(),d(o).then(({data:i})=>{if(i.hits.length==0){n.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}b.innerHTML=h(i.hits),a?a.refresh():a=new f(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(i=>{n.show({color:"red",position:"topRight",message:"Please try again!"})}).finally(()=>{g(),r.target.reset()})}
//# sourceMappingURL=index.js.map
