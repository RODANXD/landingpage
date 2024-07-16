const slider = document.querySelector('.slider_image');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function slideNext() {
    currentIndex = (currentIndex + 1) % slides.length;
    slider.scrollTo({
        left: slides[currentIndex].offsetLeft,
        behavior: 'smooth'
    });
    updateDots();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

setInterval(slideNext, 3000); // Change slide every 3 seconds





// script.js
document.addEventListener('scroll', () => {
    const movingDot = document.querySelector('.moving-dot');
    const staticDots = document.querySelectorAll('.static-dot');
    
    // Calculate scroll position and set the threshold for each dot
    const scrollPosition = window.scrollX; // Get horizontal scroll position
    const scrollContainerWidth = document.querySelector('.slider_image').offsetWidth;
    const threshold1 = scrollContainerWidth / 2;
    const threshold2 = (2 * scrollContainerWidth) / 2;

    if (scrollPosition < threshold1) {
        movingDot.style.transform = 'translateX(0)';
    } else if (scrollPosition >= threshold1 && scrollPosition < threshold2) {
        movingDot.style.transform = `translateX(${staticDots[0].offsetLeft - movingDot.offsetLeft}px)`;
    } else {
        movingDot.style.transform = `translateX(${staticDots[1].offsetLeft - movingDot.offsetLeft}px)`;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const projectSection = document.getElementById('projectSection');
    if (!projectSection) {
        console.error('Project section not found');
        return;
    }

    const projectImage = projectSection.querySelector('.pro_img img');
    const proContents = projectSection.querySelectorAll('.pro_content');

    if (!projectImage || proContents.length === 0) {
        console.error('Required elements not found');
        return;
    }

    proContents.forEach((content, index) => {
        content.addEventListener('click', function() {
            const imagePath = this.getAttribute('data-image');
            if (imagePath) {
                projectImage.src = imagePath;
                projectImage.alt = `Project Image ${index + 1}`;
            } else {
                console.error('No image path specified for this content');
            }
            
            proContents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set the first content as active by default
    if (proContents.length > 0) {
        proContents[0].classList.add('active');
    }

    console.log('JavaScript initialized successfully');
});


document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contactButton');
    const imageSide = document.getElementById('imageSide');
    const formSide = document.getElementById('formSide');

    contactButton.addEventListener('click', function() {
        imageSide.style.opacity = '0';
        setTimeout(() => {
            imageSide.style.display = 'none';
            formSide.style.display = 'block';
            setTimeout(() => {
                formSide.style.opacity = '1';
            }, 50);
        }, 300);
    });
});