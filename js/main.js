/* Rodrigo Silva LP — interações */
(function () {
  'use strict';

  /* ---- Header glass ao rolar ---- */
  var topbar = document.getElementById('topbar');
  function onScroll() {
    if (window.scrollY > 24) topbar.classList.add('scrolled');
    else topbar.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  var burger = document.getElementById('burger');
  var mobileMenu = document.getElementById('mobileMenu');
  function closeNav() { document.body.classList.remove('nav-open'); }
  if (burger) {
    burger.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeNav);
    });
  }

  /* ---- Smooth scroll (âncoras + botões data-scroll) ---- */
  function scrollTo(target) {
    var el = document.querySelector(target);
    if (!el) return;
    var y = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  document.querySelectorAll('[data-scroll]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      closeNav();
      scrollTo(btn.getAttribute('data-scroll'));
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        closeNav();
        scrollTo(href);
      }
    });
  });

  /* ---- Scroll reveal ---- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---- Formulário (validação — PLACEHOLDER, sem envio real) ---- */
  var form = document.getElementById('leadForm');
  var success = document.getElementById('formSuccess');

  function setError(field, on) {
    field.closest('.field').classList.toggle('error', on);
  }
  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function digits(v) { return (v.match(/\d/g) || []).length; }

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ok = true;
      var nome = form.nome, whats = form.whatsapp, email = form.email, empresa = form.empresa;

      if (!nome.value.trim()) { setError(nome, true); ok = false; } else setError(nome, false);
      if (digits(whats.value) < 10) { setError(whats, true); ok = false; } else setError(whats, false);
      if (!isEmail(email.value.trim())) { setError(email, true); ok = false; } else setError(email, false);
      if (!empresa.value.trim()) { setError(empresa, true); ok = false; } else setError(empresa, false);

      if (!ok) {
        var firstErr = form.querySelector('.field.error input');
        if (firstErr) firstErr.focus();
        return;
      }

      /* >>> PLACEHOLDER: nenhum envio real configurado. <<<
         Para conectar: envie os dados para seu endpoint/CRM aqui,
         ex: fetch('SUA_URL', { method:'POST', body: new FormData(form) }) */
      var data = {
        nome: nome.value.trim(),
        whatsapp: whats.value.trim(),
        email: email.value.trim(),
        empresa: empresa.value.trim(),
        mensagem: form.mensagem.value.trim()
      };
      console.log('[LEAD — placeholder, não enviado]', data);

      form.style.display = 'none';
      if (success) success.classList.add('show');
    });

    /* limpa erro ao digitar */
    form.querySelectorAll('input,textarea').forEach(function (inp) {
      inp.addEventListener('input', function () { setError(inp, false); });
    });
  }

  /* ---- ano dinâmico no rodapé (se algum dia precisar) ---- */
})();
