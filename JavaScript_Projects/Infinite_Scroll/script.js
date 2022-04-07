const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];


//mine 87Hbvc-ivardWNGzJm7HfIU5j3RWIV8cc249VGc8AzU
//others  xRF2L0bh5b3lJxL8LNav1jEpXWBaSxmB5fGhs9IMe2I   dtkyZAV5zRvH10hIQ0tZ89CEuQeXWfFaQpLXEkEUYko

// Unsplash API
const count = 5;
const topic = 'programmer'
const apiKey = '87Hbvc-ivardWNGzJm7HfIU5j3RWIV8cc249VGc8AzU';  
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const apiUrlTest = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=${topic}`

// Check if all images were loaded
function imageLoaded() {
  // console.log('image loaded');
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    // console.log('ready =', ready)
    loader.hidden = true;
    count = 30;
  }
}

// Creating a helper function - Set Attributes on DOM Elements (keeping things dry)
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Create Elements For Links & Photos, Add to DOM
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  // console.log ('total images:', totalImages)
  // Run function for each object in photosArray
  photosArray.forEach((photo) => {
    // Create <a> to link to Unsplash - full photo
    const item = document.createElement('a');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank',

    });
    // Create <img> for photo
    const img = document.createElement('img');
    setAttributes( img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    //Event Listener, to check when each image is finished loading 
    img.addEventListener('load', imageLoaded());
    //Put <img> inside <a>, then put both inside imageContainer Element
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}


// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrlTest);
    photosArray = await response.json();
    displayPhotos();
  } catch (error) {
    // Create a catch Error Here 
  }
}

// Check to see if scrolling near bottom of page, then load more photos
window.addEventListener('scroll', () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
    ready = false;
    getPhotos();
  }
});

// On Load
getPhotos();
