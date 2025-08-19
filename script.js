    document.getElementById('year').textContent = new Date().getFullYear();

    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      })
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));

    const navLinks = document.querySelectorAll('#navContent .nav-link');
    const navCollapse = document.getElementById('navContent');
    navLinks.forEach(link => link.addEventListener('click', () => {
      const isShown = navCollapse.classList.contains('show');
      if (isShown) new bootstrap.Collapse(navCollapse).hide();
    }));