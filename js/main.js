(() => {
  'use strict';
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.getElementById('site-nav');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');
  const brand = document.querySelector('.brand');
  const mobile = matchMedia('(max-width: 900px)');
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const setMenu = (open, returnFocus = false) => {
    document.body.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    main.inert = open;
    footer.inert = open;
    brand.inert = open;
    if (open) nav.querySelector('a').focus();
    else if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => {
    if (event.target.closest('a') && mobile.matches) setMenu(false, true);
  });
  document.addEventListener('keydown', event => {
    if (toggle.getAttribute('aria-expanded') !== 'true') return;
    if (event.key === 'Escape') { event.preventDefault(); setMenu(false, true); }
    if (event.key === 'Tab') {
      const links = [...nav.querySelectorAll('a')];
      const first = toggle;
      const last = links[links.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  mobile.addEventListener('change', () => setMenu(false));
  document.documentElement.classList.add('nav-ready');
  if ('IntersectionObserver' in window && !reduceMotion.matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    document.documentElement.classList.add('motion-ready');
    const statement = document.querySelector('.word-reveal');
    if (statement) {
      const fragment = document.createDocumentFragment();
      statement.childNodes.forEach(node => {
        if (node.nodeType === Node.TEXT_NODE) {
          node.textContent.split(/(\s+)/).forEach(word => {
            if (!word.trim()) fragment.append(document.createTextNode(word));
            else { const span = document.createElement('span'); span.textContent = word; fragment.append(span); }
          });
        } else fragment.append(node.cloneNode(true));
      });
      statement.replaceChildren(fragment);
      statement.classList.add('is-ready');
      const words = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { entry.target.classList.add('is-seen'); words.unobserve(entry.target); }
        });
      }, { rootMargin: '0px 0px -20% 0px', threshold: 1 });
      statement.querySelectorAll('span').forEach(span => words.observe(span));
    }
  }
})();
