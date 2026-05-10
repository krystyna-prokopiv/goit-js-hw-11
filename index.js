import{a as d,S as y,i as c}from"./assets/vendor-C3hA4BqS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(r){return d("https://pixabay.com/api/",{params:{key:"55787535-61c82cd2300b887fd2ca60733",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data.hits)}let n=null;function h(r){const o=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:l,views:u,comments:f,downloads:m})=>`<li class='gallery-item'>
        <a  href="${e}">
        <img  src="${s}" alt="${t}"/></a>
        <ul class="gallery-text-list">
        <li class='gallery-item-text'><h2>Likes</h2>
        <p> ${l}</p></li>
        <li class='gallery-item-text'>
        <h2>Views</h2>
        <p>${u}</p></li>
        <li class='gallery-item-text'>
        <h2>Comments</h2>
        <p>${f}</p></li>
        <li class='gallery-item-text'>
        <h2>Downloads</h2>
        <p>${m}</p></li></ul>
            </li > `).join(""),i=document.querySelector(".gallery");i.innerHTML=o,n?n.refresh():n=new y(".gallery a",{captionsData:"alt",captionDelay:250})}function g(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}const a=document.querySelector(".loader");function L(){a&&a.classList.add("visible")}function b(){a&&a.classList.remove("visible")}const x=document.querySelector(".form");document.querySelector(".gallery");x.addEventListener("submit",S);function S(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(g(),!o){c.show({color:"red",position:"topRight",message:"Please enter your request!"});return}L(),p(o).then(i=>{if(i.length==0){c.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}h(i)}).catch(i=>{}).finally(()=>{b(),r.target.reset()})}
//# sourceMappingURL=index.js.map
