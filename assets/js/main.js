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
      const snapSections = document.querySelectorAll(".snap-section");
      let nextSection = null;

      // Find the currently visible snap section
      for (let i = 0; i < snapSections.length; i++) {
        const rect = snapSections[i].getBoundingClientRect();
        // Check if the section is mostly in view
        if (rect.top >= 0 && rect.top < window.innerHeight * 0.5) {
          if (i + 1 < snapSections.length) {
            nextSection = snapSections[i + 1];
            break;
          }
        }
      }

      // If no section is mostly in view, or it's the last one, go to the first section
      if (!nextSection && snapSections.length > 0) {
        nextSection = snapSections[0];
      }

      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }
})();
