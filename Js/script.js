//sticky header when scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".heading");
  const headerOffset = header.getBoundingClientRect().top;

  if (headerOffset <= 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});
//menubar 
document.addEventListener("DOMContentLoaded", function() {
  const menuBurger = document.querySelector(".menu-burger");
  menuBurger.addEventListener("click", function() {
      this.classList.toggle("open");
  });
});
//video on load 
function loop() {
  window.onload = function(){
    document.getElementsByClassName("video").play()
  }
}
//Dark mode features 
window.onload = function() {
  const darkModeToggle = document.getElementById('dn');
  const body = document.body;

  darkModeToggle.addEventListener('change', function() {
      if (darkModeToggle.checked) {
          body.classList.add('dark-mode');
      } else {
          body.classList.remove('dark-mode');
      }
  });
};
/* blog image grid */
// Function to create the image grid elements
function createImageGrid() {
  const gridContainer = document.getElementById('imageGrid');
  const images = [
    '/src/grid-img/cartsen.jpg',
    '/src/grid-img/corgi.jpg',
    '/src/grid-img/lupeng.jpg',
    '/src/grid-img/peri.jpg',
    '/src/img/milli-2l0CWTpcChI-unsplash.jpg',
    '/src/grid-img/alvan-nee-T-0EW-SEbsE-unsplash.jpg',
    '/src/grid-img/charlesdeluvio-K4mSJ7kc0As-unsplash.jpg',
    '/src/grid-img/charlesdeluvio-Mv9hjnEUHR4-unsplash.jpg',
    '/src/grid-img/cristian-castillo-73pyV0JJOmE-unsplash.jpg',
    '/src/grid-img/eric-ward-ISg37AI2A-s-unsplash.jpg',
    '/src/grid-img/fatty-corgi-1QsQRkxnU6I-unsplash.jpg',
    '/src/grid-img/justin-veenema-NH1d0xX6Ldk-unsplash.jpg',
    '/src/grid-img/manuel-meza-KvKop_a_EXw-unsplash.jpg',
    '/src/grid-img/oscar-sutton-yihlaRCCvd4-unsplash.jpg',
    '/src/grid-img/pauline-loroy-U3aF7hgUSrk-unsplash.jpg',
    '/src/grid-img/richard-brutyo-Sg3XwuEpybU-unsplash.jpg',
    '/src/grid-img/sam-mcnamara-lBdVjQcfSRQ-unsplash.jpg',
 
    // Add more image paths as needed
  ];

  
  // Clear existing content (in case this function is called multiple times)
  gridContainer.innerHTML = '';

  // Calculate the number of columns based on screen width
  const screenWidth = window.innerWidth;
  let columns = 4; // Default number of columns
  if (screenWidth <= 768) {
    columns = 2; // For smaller screens, use 2 columns
  }
  if (screenWidth <= 480) {
    columns = 1; // For even smaller screens, use 1 column
  }
  // Update the grid-template-columns property to adjust the number of columns
  gridContainer.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
  // Create and add image elements to the grid
  images.forEach(imagePath => {
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    imgElement.alt = 'Dog image';
    gridContainer.appendChild(imgElement);
  });
}
// Call the function when the page loads and when the window is resized
window.addEventListener('load', createImageGrid);
window.addEventListener('resize', createImageGrid);
// JavaScript to toggle the visibility of the navigation menu when burger menu is clicked
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.nav');
//for menuber 
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});

