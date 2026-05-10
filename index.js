import{a as y,S as d,i as s}from"./assets/vendor-C3hA4BqS.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(o){return y("https://pixabay.com/api/",{params:{key:"55787535-61c82cd2300b887fd2ca60733",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(r=>r.data.hits).catch(r=>{})}function p(o){const r=o.map(({webformatURL:e,largeImageURL:t,tags:a,likes:c,views:u,comments:m,downloads:f})=>`<li class='gallery-item'>
        <a  href="${t}">
        <img  src="${e}" alt="${a}"/></a>
        <ul class="gallery-text-list">
        <li class='gallery-item-text'><h2>Likes</h2>
        <p> ${c}</p></li>
        <li class='gallery-item-text'>
        <h2>Views</h2>
        <p>${u}</p></li>
        <li class='gallery-item-text'>
        <h2>Comments</h2>
        <p>${m}</p></li>
        <li class='gallery-item-text'>
        <h2>Downloads</h2>
        <p>${f}</p></li></ul>
            </li > `).join(""),i=document.querySelector(".gallery");i.innerHTML=r;let l=null;l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){const o=document.querySelector(".gallery");o.innerHTML=""}const n=document.querySelector(".loader");function L(){n.classList.add("visible")}function b(){n.classList.remove("visible")}const S=document.querySelector(".form");document.querySelector(".gallery");S.addEventListener("submit",x);function x(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(g(),!r){s.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(),h(r).then(i=>{if(i.length==0){s.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(i)}).catch(i=>{}).finally(()=>{b(),o.target.reset()})}
//# sourceMappingURL=index.js.map
