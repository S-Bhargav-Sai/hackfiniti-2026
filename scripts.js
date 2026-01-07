document.addEventListener('DOMContentLoaded', function () {
  initMobileMenu();
  initPageTransitions();
  initScrollAnimations();
  initFAQAccordion();
  initParallax();
  setActiveNavLink();
  initCountdown();
  initCarousel();
});

function initCarousel() {
  const track = document.querySelector('.carousel-track');
  if (!track) return;

  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  const carouselContainer = document.querySelector('.carousel-container');

  if (slides.length === 0) return;

  let currentIndex = 2; // Start with the 3rd image as center
  let autoSlideInterval;

  function updateSlides() {
    slides.forEach((slide, index) => {
      // Clear all positional classes but keep base class
      slide.className = 'carousel-slide';

      // Calculate wrapped difference
      // diff = 0 -> current
      // diff = 1 -> next
      // diff = -1 (or length-1) -> prev
      let diff = (index - currentIndex + slides.length) % slides.length;

      if (diff === 0) {
        slide.classList.add('active');
        // Ensure active slide is click-through if needed, or just visual
      } else if (diff === 1) {
        slide.classList.add('next');
      } else if (diff === slides.length - 1) {
        slide.classList.add('prev');
      } else if (diff > 1 && diff < slides.length / 2) {
        slide.classList.add('hidden-right');
      } else {
        slide.classList.add('hidden-left');
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlides();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlides();
  }

  function startAutoSlide() {
    // Clear any existing interval to prevent duplicates
    if (autoSlideInterval) clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 3000); // 3 seconds
  }

  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }

  // Event Listeners
  if (nextButton) {
    nextButton.addEventListener('click', () => {
      stopAutoSlide();
      nextSlide();
      startAutoSlide();
    });
  }

  if (prevButton) {
    prevButton.addEventListener('click', () => {
      stopAutoSlide();
      prevSlide();
      startAutoSlide();
    });
  }

  // Mouse interaction
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopAutoSlide);
    carouselContainer.addEventListener('mouseleave', startAutoSlide);

    // Touch support (basic swipe)
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      stopAutoSlide();
    }, { passive: true });

    carouselContainer.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
      startAutoSlide();
    }, { passive: true });

    function handleSwipe() {
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
    }
  }

  // Initialize
  updateSlides();
  startAutoSlide();
}

function initCountdown() {
  const countdownContainer = document.querySelector('.hero-countdown');
  if (!countdownContainer) return;

  const targetDate = new Date('March 2, 2026 09:00:00').getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      countdownContainer.innerHTML = '<h3>Event Started!</h3>';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('cd-days').innerText = String(days).padStart(2, '0');
    document.getElementById('cd-hours').innerText = String(hours).padStart(2, '0');
    document.getElementById('cd-minutes').innerText = String(minutes).padStart(2, '0');
    document.getElementById('cd-seconds').innerText = String(seconds).padStart(2, '0');
  }

  // Initial call to avoid delay
  updateTimer();
  setInterval(updateTimer, 1000);
}

function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

function initPageTransitions() {
  const pageContent = document.querySelector('.page-content');
  if (pageContent) {
    pageContent.style.opacity = '0';
    pageContent.style.transform = 'translateY(20px)';

    setTimeout(() => {
      pageContent.style.transition = 'all 0.6s ease';
      pageContent.style.opacity = '1';
      pageContent.style.transform = 'translateY(0)';
    }, 100);
  }
}

function initScrollAnimations() {
  const reveals = document.querySelectorAll('.reveal');

  if (!reveals.length) return;

  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  reveals.forEach(reveal => observer.observe(reveal));
}

function initFAQAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(i => {
          i.classList.remove('active');
        });

        if (!isActive) {
          item.classList.add('active');
        }
      });
    }
  });
}

function initParallax() {
  const blobs = document.querySelectorAll('.floating-blob');

  if (!blobs.length) return;

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
      const speed = (index + 1) * 20;
      const xMove = (x - 0.5) * speed;
      const yMove = (y - 0.5) * speed;

      blob.style.transform = `translate(calc(-50% + ${xMove}px), calc(-50% + ${yMove}px))`;
    });
  });
}

function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(start);
    }
  }, 16);
}
