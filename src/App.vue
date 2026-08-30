<script setup>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
</script>

<template>
  <!--
    First focusable element: lets a keyboard user skip the header and land on
    the listings. The target id is on <main> inside Main.vue.
  -->
  <a class="skip-link" href="#main-content">Przejdź do treści</a>
  <Header />
  <Main />
  <footer class="site-footer">
    <p>
      Rent App — projekt demonstracyjny. Autor:
      <a href="https://dawidolko.pl" rel="noopener noreferrer" target="_blank">Dawid Olko</a>.
    </p>
  </footer>
</template>

<style>
/* -------------------------------------------------------------------------
   Accessibility (WCAG 2.1 AA)
   ------------------------------------------------------------------------- */

/* Skip link: hidden until keyboard focus, then pinned to the top. */
.skip-link {
  position: absolute;
  top: -100px;
  left: 16px;
  z-index: 2000;
  padding: 12px 20px;
  border-radius: 0 0 8px 8px;
  background-color: #14261d;
  color: #7fd1a8;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid #7fd1a8;
  transition: top 0.2s ease-in-out;
}

.skip-link:focus,
.skip-link:focus-visible {
  top: 0;
  outline: 3px solid #7fd1a8;
  outline-offset: 2px;
}

/* Available to assistive technology and to crawlers, but not shown. */
.visually-hidden {
  position: absolute !important;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

/* Target of the skip link, not a tab stop of its own. */
#main-content:focus {
  outline: none;
}

.site-footer {
  padding: 2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #7fd1a8;
  outline-offset: 3px;
  border-radius: 4px;
}

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
