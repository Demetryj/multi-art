(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');

  menuBtnRef.addEventListener('click', () => {
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });

  window.addEventListener('resize', () => {
    const screenWidth =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    if (screenWidth >= 768) {
      menuBtnRef.classList.remove('is-open');
      menuBtnRef.setAttribute('aria-expanded', !expanded);

      mobileMenuRef.classList.remove('is-open');
    }
  });
})();
