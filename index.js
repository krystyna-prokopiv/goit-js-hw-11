import{a as d,S as h,i as n}from"./assets/vendor-C3hA4BqS.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function y(r){return d("https://pixabay.com/api/",{params:{key:"55787535-61c82cd2300b887fd2ca60733",q:r,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data.hits)}let c=null;function p(r){const o=r.map(({webformatURL:a,largeImageURL:e,tags:t,likes:s,views:u,comments:f,downloads:m})=>`<li class='gallery-item'>
        <a  href="${e}">
        <img  src="${a}" alt="${t}"/></a>
        <ul class="gallery-text-list">
        <li class='gallery-item-text'><h2>Likes</h2>
        <p> ${s}</p></li>
        <li class='gallery-item-text'>
        <h2>Views</h2>
        <p>${u}</p></li>
        <li class='gallery-item-text'>
        <h2>Comments</h2>
        <p>${f}</p></li>
        <li class='gallery-item-text'>
        <h2>Downloads</h2>
        <p>${m}</p></li></ul>
            </li > `).join(""),i=document.querySelector(".gallery");i&&(i.innerHTML=o,c?c.refresh():c=new h(".gallery a",{captionsData:"alt",captionDelay:250}))}function g(){const r=document.querySelector(".gallery");r&&(r.innerHTML="")}const l=document.querySelector(".loader");function L(){l&&l.classList.add("visible")}function b(){l&&l.classList.remove("visible")}const x=document.querySelector(".form");x.addEventListener("submit",S);function S(r){r.preventDefault();const o=r.target.elements["search-text"].value.trim();if(g(),!o){n.show({color:"red",position:"topRight",message:"Please enter your request!"});return}L(),y(o).then(i=>{if(i.length==0){n.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}p(i)}).catch(i=>{n.show({color:"red",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{b(),r.target.reset()})}
//# sourceMappingURL=index.js.map
