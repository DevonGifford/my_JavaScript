const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;

//Array on Images
let photosArray = [];


// Unsplash API
const count = 5;
const topic = 'programmer'  //choose the topic of photos you want to scroll through
const apiKey = config.API_KEY;  //Insert your API key here

//const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
const apiURL = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}&query=${topic}`

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
    const response = await fetch(apiURL);
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
