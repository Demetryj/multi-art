(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const navLinkRef1 = document.querySelector('[ data-link-1]');
  const navLinkRef2 = document.querySelector('[ data-link-2]');
  const navLinkRef3 = document.querySelector('[ data-link-3]');

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

  navLinkRef1.addEventListener('click', () => {
    if (mobileMenuRef.classList.contains('is-open')) {
      menuBtnRef.classList.remove('is-open');

      mobileMenuRef.classList.remove('is-open');
    } else {
      return;
    }
  });

  navLinkRef2.addEventListener('click', () => {
    if (mobileMenuRef.classList.contains('is-open')) {
      menuBtnRef.classList.remove('is-open');

      mobileMenuRef.classList.remove('is-open');
    } else {
      return;
    }
  });

  navLinkRef3.addEventListener('click', () => {
    if (mobileMenuRef.classList.contains('is-open')) {
      menuBtnRef.classList.remove('is-open');

      mobileMenuRef.classList.remove('is-open');
    } else {
      return;
    }
  });
})();
