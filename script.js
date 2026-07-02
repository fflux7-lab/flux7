/* =========================================================
   FLUX7 — Site interactions
   1. Mobile menu toggle
   2. Category filtering
   3. Add-to-cart counter
   4. Newsletter form (front-end only, no server)
   5. Footer year
   ========================================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- 1. Mobile menu toggle ---- */
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  menuToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close the mobile menu after a link is clicked
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- 2. Category filtering ---- */
  const filterButtons = document.querySelectorAll('.cat-pill');
  const productCards = document.querySelectorAll('.product-card');

  function applyFilter(filter) {
    productCards.forEach(card => {
      const matches = filter === 'all' || card.dataset.category === filter;
      card.classList.toggle('is-visible', matches);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });

  applyFilter('all'); // show every product on first load

  /* ---- 3. Add-to-cart counter ---- */
  const cartCount = document.getElementById('cartCount');
  let cartTotal = 0;

  document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
      cartTotal += 1;
      cartCount.textContent = cartTotal;

      const originalLabel = button.textContent;
      button.textContent = 'Added ✓';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = originalLabel;
        button.disabled = false;
      }, 1200);
    });
  });

  /* ---- 4. Newsletter form ---- */
  const newsletterForm = document.getElementById('newsletterForm');
  const formNote = document.getElementById('formNote');

  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('newsletterEmail').value.trim();

    if (email) {
      // NOTE: this is a front-end-only demo. To actually collect emails,
      // connect this form to a service like Mailchimp, Formspree, or your
      // own backend endpoint — see the guide for details.
      formNote.textContent = `Thanks — ${email} is on the list.`;
      newsletterForm.reset();
    }
  });

  /* ---- 5. Footer year ---- */
  document.getElementById('year').textContent = new Date().getFullYear();

});
