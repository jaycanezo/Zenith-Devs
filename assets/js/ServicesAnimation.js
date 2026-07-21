const carousel = document.getElementById('carousel');
    const dots = document.getElementById('dots');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    
    // Images and captions - limited to 5
    const items = [
      { src: "https://www.pocketdevs.ph/_next/image?url=%2Fimages%2Fcase_studies%2Fbooqed%2Fcover.png&w=3840&q=90", caption: "Web Development" },
      { src: "https://images.tmcnet.com/tmc/misc/articles/image/2023-dec/1438732310-AdobeStock_543542506_cloud_computing_service_security_edge_SSE_abstract_supersize_1200x630.jpeg", caption: "Cloud Services" },
      { src: "https://cdn.dribbble.com/users/3665248/screenshots/17655985/mockup_4x.jpg", caption: "Mobile Development" },
      { src: "https://www.ramco.com/hubfs/Data-Safety-with-Payroll-outsourcing.jpg#keepProtocol", caption: "CyberSecurity" },
      { src: "https://nixstech.com/wp-content/uploads/2023/10/676%D1%85400-1-1.png", caption: "Custom Software Solutions" }
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
