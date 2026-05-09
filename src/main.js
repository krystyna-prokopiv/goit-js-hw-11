

import iziToast from "izitoast";

import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";


import getImagesByQuery from "./js/pixabay-api";

import { createGallery, clearGallery, showLoader, hideLoader} from "./js/render-functions"
const form = document.querySelector(".form")
const gallery = document.querySelector(".gallery")

form.addEventListener('submit', handleSubmit)

let lightbox = null

function handleSubmit(event) {
    event.preventDefault()
    
    const formValue = event.target.elements['search-text'].value.trim()
    clearGallery()
    showLoader()

    getImagesByQuery(formValue)
        
        .then(({ data }) => {
            if (data.hits.length == 0) {
                iziToast.show({
                    color: 'red',
                    position: "topRight",
                    message: 'Sorry, there are no images matching your search query. Please try again!'
                });
                return
            }
            gallery.innerHTML = createGallery(data.hits)
             if (!lightbox) {
        lightbox = new SimpleLightbox('.gallery a', {
          captionsData: 'alt',
          captionDelay: 250,
        });
      } else {
        lightbox.refresh();
      }

        })
        .catch(error => {
        iziToast.show({
        color: 'red',
        position: "topRight",
        message: 'Please try again!',
      });
        })
        .finally(() => {
            hideLoader()
        event.target.reset()
    })
    
}



