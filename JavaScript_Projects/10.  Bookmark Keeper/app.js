// HTML Elements
const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

// Global Variables
let bookmarks = [];

// Show Modal, Focus on Input
function showModal() {
  modal.classList.add('show-modal');
  websiteNameEl.focus();
}

// Build bookmarks DOM
function buildBookmarks() {
  // Remove all bookmark elements before appending
  bookmarksContainer.textContent = '';

  // Build items
  bookmarks.forEach((bookmark) => {
    const { name, url } = bookmark;
    // Item
    const item = document.createElement('div');
    item.classList.add('item');
    // Close Icon
    const closeIcon = document.createElement('i');
    closeIcon.classList.add('fa', 'fa-times');
    closeIcon.setAttribute('title', 'Delete Bookmark');
    closeIcon.setAttribute('onclick', `deleteBookmark('${url}')`);
    // Favicon / Link Container
    const linkInfo = document.createElement('div');
    linkInfo.classList.add('name');
    // Favicon
    const favicon = document.createElement('img');
    favicon.setAttribute(
      'src',
      `https://s2.googleusercontent.com/s2/favicons?domain=${url}`
    );
    favicon.setAttribute('alt', 'Favicon');
    // Link
    const link = document.createElement('a');
    link.setAttribute('href', `${url}`);
    link.setAttribute('target', '_blank');
    link.textContent = name;

    // Append to bookmarks container
    linkInfo.append(favicon, link);
    item.append(closeIcon, linkInfo);
    bookmarksContainer.appendChild(item);
  });
}

// Fetch bookmarks
function fetchBookmarks() {
  // Get bookmarks from localStorage if available
  if (localStorage.getItem('bookmarks')) {
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  } else {
    // Create a bookmarks array in localStorage
    bookmarks = [
      {
        name: 'Devon-Git',
        url: 'https://github.com/DevonGifford',
      },
      {
        name: 'Devon-LinkedIn',
        url: 'https://www.linkedin.com/in/dbgifford/',
      },
      {
        name: 'Devon-Portfolio',
        url: 'https://www.devongifford.com',
      },
      {
      name: 'MDN Web Docs',
      url: 'https://developer.mozilla.org/en-US/',
      },
      {
      name: 'Stack Overflow',
      url: 'https://stackoverflow.com/',
      },
      {
      name: 'CSS-Tricks',
      url: 'https://css-tricks.com/',
      },
      {
      name: 'Smashing Magazine',
      url: 'https://www.smashingmagazine.com/',
      },
      {
      name: 'CodePen',
      url: 'https://codepen.io/',
      },
      {
      name: 'GitHub',
      url: 'https://github.com/',
      },
      {
      name: 'Frontend Masters',
      url: 'https://frontendmasters.com/',
      },
      {
      name: 'Dev.to',
      url: 'https://dev.to/',
      },
      {
      name: 'Can I use',
      url: 'https://caniuse.com/',
      },
      {
      name: 'CSS Grid Generator',
      url: 'https://cssgrid-generator.netlify.app/',
      },
      {
      name: 'W3Schools',
      url: 'https://www.w3schools.com/',
      },
      {
      name: 'A List Apart',
      url: 'https://alistapart.com/',
      },
      {
      name: 'CSS Zen Garden',
      url: 'http://www.csszengarden.com/',
      },
      {
      name: 'Front-end Developer Handbook',
      url: 'https://frontendmasters.com/books/front-end-handbook/2019/',
      },
      {
      name: 'Codrops',
      url: 'https://tympanus.net/codrops/',
      },
      {
      name: 'Google Developers',
      url: 'https://developers.google.com/',
      },
      {
      name: 'Scotch.io',
      url: 'https://scotch.io/',
      },
      {
      name: 'UI Design Daily',
      url: 'https://uidesigndaily.com/',
      },
      {
      name: 'FreeCodeCamp',
      url: 'https://www.freecodecamp.org/',
      },
      {
      name: 'The Net Ninja',
      url: 'https://www.thenetninja.co.uk/',
      },
    ];
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    fetchBookmarks();
  }
  buildBookmarks();
}

// Delete a bookmark
function deleteBookmark(url) {
  bookmarks.forEach((bookmark, index) => {
    if (bookmark.url === url) {
      bookmarks.splice(index, 1);
    } else {
      console.log('None Found');
    }
    if (bookmark === null) {
      bookmarks.splice(index, 1);
    }
  });
  // Update bookmarks array in localStorage, re-populate DOM
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
}

// Handle Data from form
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes('http://', 'https://')) {
    urlValue = `https://${urlValue}`;
  }
  if (!validate(nameValue, urlValue)) {
    return false;
  }
  const bookmark = {
    name: nameValue,
    url: urlValue,
  };
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  buildBookmarks();
  bookmarkForm.reset();
  websiteNameEl.focus();
}

// Validate form
function validate(nameVal, urlVal) {
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameVal || !urlVal) {
    alert('Please submit values for both fields.');
    return false;
  }
  if (!urlVal.match(regex)) {
    alert('Please provide a valid web address.');
    return false;
  }

  // Bookmark is Valid
  return true;
}

// Modal Event listeners
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
window.addEventListener('click', (e) => {
  e.target === modal ? modal.classList.remove('show-modal') : false;
});

// General Event Listners
bookmarkForm.addEventListener('submit', storeBookmark);

// Onload
fetchBookmarks();
