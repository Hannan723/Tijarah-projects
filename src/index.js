
// When you click “All Category”
const ctgContainer = document.querySelector('.ctg-container');
const toggleLink = ctgContainer.querySelector('.ctg-toggle');
const dropdown = ctgContainer.querySelector('.ctg-drop');

toggleLink.addEventListener('click', function (e) {
  e.preventDefault();                 // don’t jump
  dropdown.classList.toggle('active');
});
document.addEventListener('click', function (e) {
  if (!ctgContainer.contains(e.target)) {
    dropdown.classList.remove('active');
  }
});
const pagesToggle = document.querySelector('.pages-toggle');
const pagesDropdown = document.querySelector('.pages-dropdown');

pagesToggle.addEventListener('click', function (e) {
  e.preventDefault();
  pagesDropdown.classList.toggle('active');
});

// Click outside to close
document.addEventListener('click', function (e) {
  if (!pagesDropdown.contains(e.target) && !pagesToggle.contains(e.target)) {
    pagesDropdown.classList.remove('active');
  }
});

// when click on recently viewed 
const recentlyviewed = document.querySelectorAll("#Recentlyview"); // Select all items with id 'Recentlyview'
const rvsect = document.querySelector('.recently-dropdown-sec'); // Select the first dropdown section

// Function to show dropdown
function showDropdown() {
  rvsect.style.display = 'block';
}

// Function to hide dropdown
function hideDropdown() {
  rvsect.style.display = 'none';
}

// Add event listener to each #Recentlyview element
recentlyviewed.forEach(item => {
  // Show dropdown when mouse enters the #Recentlyview element
  item.addEventListener('mouseenter', showDropdown);

  // Keep the dropdown visible if the mouse is over the dropdown or #Recentlyview
  item.addEventListener('mouseleave', function (e) {
    setTimeout(() => {
      if (!rvsect.matches(':hover') && !item.matches(':hover')) {
        hideDropdown(); // Hide dropdown if the mouse leaves both the #Recentlyview and the dropdown
      }
    }, 100);
  });
});

// Add event listener to dropdown to prevent hiding when mouse is over it
rvsect.addEventListener('mouseenter', function () {
  rvsect.style.display = 'block'; // Ensure dropdown stays visible when hovering over it
});

// Hide the dropdown when mouse leaves the dropdown
rvsect.addEventListener('mouseleave', hideDropdown);
// landing page slider section 
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  slides[i].classList.add("active");
  dots[i].classList.add("active");
  index = i;
}

// Auto Slide
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

// Dot click
dots.forEach(dot => {
  dot.addEventListener("click", () => {
    showSlide(parseInt(dot.dataset.slide));
  });
});
//  to rotate the product card 
const background = document.querySelector("#background-of-image");
const productImgs = document.querySelectorAll(".productimg");

productImgs.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    background.style.transform = "rotatey(180deg)";
  });

  img.addEventListener("mouseleave", () => {
    background.style.transform = "rotatey(0deg)";
  });
});
//  to rotate the product card  2
const background2 = document.querySelector("#background-of-image2");
const productImgs2 = document.querySelectorAll(".productimg2");

productImgs2.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    background2.style.transform = "rotatey(180deg)";
  });

  img.addEventListener("mouseleave", () => {
    background2.style.transform = "rotatey(0deg)";
  });
});
//  to rotate the product card 3
const background3 = document.querySelector("#background-of-image3");
const productImgs3 = document.querySelectorAll(".productimg3");

productImgs3.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    background3.style.transform = "rotatey(180deg)";
  });

  img.addEventListener("mouseleave", () => {
    background3.style.transform = "rotatey(0deg)";
  });
});
//  to rotate the product card 4
const background4 = document.querySelector("#background-of-image4");
const productImgs4 = document.querySelectorAll(".productimg4");

productImgs4.forEach((img) => {
  img.addEventListener("mouseenter", () => {
    background4.style.transform = "rotatey(180deg)";
  });

  img.addEventListener("mouseleave", () => {
    background4.style.transform = "rotatey(0deg)";
  });
});

  const imageBox = document.getElementById('flash-deal-product-one');
  const iconsBox = document.getElementById('flash-card-1-properties');
  const card = document.getElementById('flash-deal-card');

  card.addEventListener('mouseenter', () => {
    iconsBox.style.display = 'flex';
  });

  card.addEventListener('mouseleave', () => {
    iconsBox.style.display = 'none';
  });

//  work for the  sticky navbar 
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("myNavbar");
  if (window.scrollY >= 500) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// add animation in my website 
// Add this script before closing </body>
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(animateOnScroll, {
    threshold: 0.1
  });

  // Select all sections you want to animate
  document.querySelectorAll('.fvt-brand-sec, .flash-deal-sec-container, .social-post-sec').forEach(section => {
    section.classList.add('will-animate');
    observer.observe(section);
  });
});
// for responsive 
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  hamburger.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
    });
  });
});






