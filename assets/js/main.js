// main script
(function () {
  "use strict";

  // Dropdown Menu Toggler For Mobile
  // ----------------------------------------
  const dropdownMenuToggler = document.querySelectorAll(
    ".nav-dropdown > .nav-link",
  );

  dropdownMenuToggler.forEach((toggler) => {
    toggler?.addEventListener("click", (e) => {
      e.target.closest(".nav-item").classList.toggle("active");
    });
  });

  // Testimonial Slider
  // ----------------------------------------
  new Swiper(".testimonial-slider", {
    spaceBetween: 24,
    loop: true,
    pagination: {
      el: ".testimonial-slider-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  // Figma Prototype Blocking
  // ----------------------------------------
  const iframePlaceholders = document.querySelectorAll(".iframe-placeholder");

  iframePlaceholders.forEach(placeholder => {
    placeholder.addEventListener("click", () => {
      const iframe = placeholder.nextElementSibling;
      placeholder.classList.add("hidden");
      iframe.classList.remove("hidden");
    });
  });

  // Reveal animation on scroll
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.1
  });

  revealElements.forEach(elem => {
    observer.observe(elem);
  });

  // Scroll Down Button functionality
  const scrollDownButton = document.querySelector(".scroll-down-button");
  if (scrollDownButton) {
    scrollDownButton.addEventListener("click", () => {
      const timelineStart = document.getElementById("timeline-start");
      if (timelineStart) {
        timelineStart.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }

  // Slideshow functionality
  document.querySelectorAll('.slideshow-container').forEach(container => {
    let slideIndex = 1;
    const slides = container.querySelectorAll('.mySlides');
    const dots = document.querySelectorAll('.dot[data-slideshow-id="' + container.id + '"]');
    const prev = container.querySelector('.prev[data-slideshow-id="' + container.id + '"]');
    const next = container.querySelector('.next[data-slideshow-id="' + container.id + '"]');

    function showSlides(n) {
      if (n > slides.length) { slideIndex = 1; }
      if (n < 1) { slideIndex = slides.length; }
      slides.forEach(slide => slide.style.display = "none");
      dots.forEach(dot => dot.className = dot.className.replace(" active", ""));
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }

    if (prev) {
      prev.addEventListener('click', () => showSlides(slideIndex -= 1));
    }
    if (next) {
      next.addEventListener('click', () => showSlides(slideIndex += 1));
    }
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlides(slideIndex = index + 1));
    });

    showSlides(slideIndex);
  });
})();
