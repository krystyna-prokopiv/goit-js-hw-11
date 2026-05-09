


function createGallery(images) {
    return images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `<li class='gallery-item'>
        <a  href="${largeImageURL}">
        <img  src="${webformatURL}" alt="${tags}"/></a>
        <ul class="gallery-text-list">
        <li class='gallery-item-text'><h2>Likes</h2>
        <p> ${likes}</p></li>
        <li class='gallery-item-text'>
        <h2>Views</h2>
        <p>${views}</p></li>
        <li class='gallery-item-text'>
        <h2>Comments</h2>
        <p>${comments}</p></li>
        <li class='gallery-item-text'>
        <h2>Downloads</h2>
        <p>${downloads}</p></li></ul>
            </li > `
    ).join("");

}


function clearGallery() {
    const gallery = document.querySelector(".gallery")
    gallery.innerHTML = ""
}

const loader = document.querySelector(".loader")
   

function showLoader() {
     loader.classList.add("visible")
        
}

function hideLoader() {
    loader.classList.remove("visible")
    
}

export { createGallery, clearGallery, showLoader, hideLoader}