const carousel = document.getElementById('carousel');
    const dots = document.getElementById('dots');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    // Images and captions - limited to 5
    const items = [
      { src: "assets/images/services-images/web-development.png", caption: "Web Development" },
      { src: "assets/images/services-images/Mobile-App.png", caption: "Mobile App Development" },
      { src: "assets/images/services-images/data-base-managemente.png", caption: "Database Management" },
      { src: "assets/images/services-images/customsoftwaredev.png", caption: "Custom Software Solutions" }
    ];
    
    let current = 0;
    
    // Create carousel items and dots
    items.forEach((item, index) => {
      // Create carousel item
      const slide = document.createElement('div');
      slide.className = 'carousel-item';
      
      const img = document.createElement('img');
      img.src = item.src;
      img.className = 'carousel-image';
      img.alt = item.caption;
      
      const caption = document.createElement('div');
      caption.className = 'carousel-caption';
      caption.textContent = item.caption;
      
      slide.appendChild(img);
      slide.appendChild(caption);
      carousel.appendChild(slide);
      
      // Create dot
      const dot = document.createElement('div');
      dot.className = 'carousel-dot';
      if (index === 0) dot.classList.add('active');
      dot.onclick = () => goTo(index);
      dots.appendChild(dot);
    });
    
    // Navigation functions
    function update() {
      carousel.style.transform = `translateX(-${current * 100}%)`;
      
      // Update active dot
      document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === current);
      });
    }
    
    function goTo(index) {
      current = index;
      update();
    }
    
    function goNext() {
      current = (current + 1) % items.length;
      update();
    }
    
    function goPrev() {
      current = (current - 1 + items.length) % items.length;
      update();
    }
    
    // Event listeners
    next.onclick = goNext;
    prev.onclick = goPrev;
    
    // Auto advance every 5 seconds
    setInterval(goNext, 5000);


const fadeInElements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Optional: animate once
          }
      });
  }, {
      threshold: 0.1
  });

  fadeInElements.forEach(el => observer.observe(el));
