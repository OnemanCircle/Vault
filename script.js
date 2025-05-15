const galleryContainer = document.getElementById('galleryContainer');
let currentIndex = 0;

// --- IMPORTANT: Add your image URLs here! ---
const images = [
  https://pin.it/37x903IU5
  https://pin.it/3bg6kazJH
  https://pin.it/2Dpaf6YEb
    // Add as many image URLs as you want here for "infinite" scrolling
    // For a true "infinite" feel with a large number of images,
    // you might eventually consider dynamic loading/unloading of images
    // not currently in view, but for a reasonable number, this approach is fine.
];

function loadImages() {
    galleryContainer.innerHTML = ''; // Clear existing images to prevent duplication if called again
    images.forEach(imageUrl => {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Gallery Image"; // Add alt text for accessibility
        img.loading = 'lazy'; // Improves performance for many images

        galleryItem.appendChild(img);
        galleryContainer.appendChild(galleryItem);
    });
    updateGalleryPosition();
}

function updateGalleryPosition() {
    galleryContainer.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

function nextSlide() {
    if (currentIndex < images.length - 1) {
        currentIndex++;
    } else {
        // Optional: Loop back to the first image for a continuous feel
        // currentIndex = 0;
    }
    updateGalleryPosition();
}

function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        // Optional: Loop back to the last image
        // currentIndex = images.length - 1;
    }
    updateGalleryPosition();
}

// Initial load of images when the script runs
loadImages();

// Optional: Basic keyboard navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        prevSlide();
    } else if (event.key === 'ArrowRight') {
        nextSlide();
    }
});
