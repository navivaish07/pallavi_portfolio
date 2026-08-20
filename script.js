// ==========================================================================
// PALLAVI SABADE — CIVIL ENGINEERING PORTFOLIO INTERACTIVE SCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {

  // 1. Live CAD Cursor Coordinates Tracker
  const cadX = document.getElementById('cadX');
  const cadY = document.getElementById('cadY');

  window.addEventListener('mousemove', (e) => {
    // Translate client coordinates to blueprint drafting scale display
    const xVal = (e.clientX * 0.05).toFixed(2);
    const yVal = ((window.innerHeight - e.clientY) * -0.05).toFixed(2);
    if (cadX && cadY) {
      cadX.textContent = xVal;
      cadY.textContent = yVal;
    }
  });

  // 2. Mobile Nav Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navLinks = document.getElementById('navLinks');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-xmark');
      }
    });
  }

  // Close mobile nav on link click
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.add('fa-bars');
          icon.classList.remove('fa-xmark');
        }
      }
    });
  });

  // 3. Project Filter Buttons
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || filter === category) {
          card.style.display = 'flex';
          card.style.opacity = '1';
        } else {
          card.style.display = 'none';
          card.style.opacity = '0';
        }
      });
    });
  });

  // 4. Contact Form Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      alert(`Thank you, ${name}! Your blueprint project proposal has been received. Pallavi Sabade will respond shortly.`);
      contactForm.reset();
    });
  }

  // 5. Scroll Reveal Observer for Navbar Active State
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href') === `#${current}`) {
        item.classList.add('active');
      }
    });
  });
});

// 6. Certificate Modal Functions (Global Scope)
function openCertModal(filePath, type) {
  const modal = document.getElementById('certModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');

  if (!modal || !modalBody) return;

  modalTitle.textContent = `DOCUMENT VIEW // ${filePath.toUpperCase()}`;

  if (type === 'image') {
    modalBody.innerHTML = `<img src="${filePath}" alt="Certificate Preview">`;
  } else if (type === 'pdf') {
    modalBody.innerHTML = `
      <iframe src="${filePath}" width="100%" height="550px" style="border:none;">
        <p>Your browser does not support inline PDFs. <a href="${filePath}" target="_blank" style="color:var(--blueprint-cyan);">Click here to open ${filePath} directly.</a></p>
      </iframe>
    `;
  }

  modal.classList.add('active');
}

function closeCertModal() {
  const modal = document.getElementById('certModal');
  const modalBody = document.getElementById('modalBody');
  if (modal) modal.classList.remove('active');
  if (modalBody) modalBody.innerHTML = '';
}

// Close modal on click outside
window.addEventListener('click', (e) => {
  const modal = document.getElementById('certModal');
  if (e.target === modal) {
    closeCertModal();
  }
});
