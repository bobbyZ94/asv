<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let isMenuOpen = false;
  let isScrolled = false;

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navItems = [
    { href: '#hero', label: 'Start' },
    { href: '#about', label: 'Über uns' },
    { href: '#events', label: 'Termine' },
    { href: '#schonzeiten', label: 'Schonzeiten' },
    { href: '#mitgliedschaft', label: 'Mitgliedschaft' },
    { href: '#kontakt', label: 'Kontakt' }
  ];
</script>

<div class="site">
  <header class="header" class:scrolled={isScrolled}>
    <div class="header-container">
      <a href="/" class="logo">
        <span class="logo-text">ASV Rotauge e.V</span>
      </a>

      <button class="menu-toggle" on:click={() => isMenuOpen = !isMenuOpen} aria-label={isMenuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={isMenuOpen}>
        <span class="hamburger" class:open={isMenuOpen}>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>

      <nav class="nav" class:open={isMenuOpen}>
        <ul class="nav-list">
          {#each navItems as item}
            <li>
              <a href={item.href} class="nav-link" class:active={$page.url.pathname === item.href} on:click={() => isMenuOpen = false}>{item.label}</a>
            </li>
          {/each}
        </ul>
      </nav>
    </div>
  </header>

  <main class="main">
    <slot />
  </main>

  <footer class="footer">
    <div class="footer-container">
      <div class="footer-grid">
        <div class="footer-section">
          <h4 class="footer-title">Angelverein</h4>
          <p class="footer-text">Der einzig wahre Angelverein – im wunderschönen Nettetal.</p>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">Links</h4>
          <ul class="footer-links">
            <li><a href="/">Start</a></li>
            <li><a href="/about">Über uns</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/events">Termine</a></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4 class="footer-title">Kontakt</h4>
          <p class="footer-text">E-Mail: info@angelverein.de<br>Tel: 0123 / 456789</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Angelverein. Alle Rechte vorbehalten.</p>
      </div>
    </div>
  </footer>
</div>

<style>
  :global(:root) {
    --color-primary: #2d5a3d;
    --color-primary-dark: #1e3d29;
    --color-gray-50: #f8f9fa;
    --color-gray-100: #e9ecef;
    --color-gray-200: #dee2e6;
    --color-gray-700: #343a40;
    --color-gray-800: #212529;
    --color-white: #ffffff;
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    --radius: 0.5rem;
    --transition: all 0.3s ease;
  }

  :global(*) { box-sizing: border-box; margin: 0; padding: 0; }

  :global(html) { scroll-behavior: smooth; }
  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: var(--color-gray-700);
    background: var(--color-gray-50);
  }

  .site { min-height: 100vh; display: flex; flex-direction: column; }
  .main { flex: 1; }

  .header { position: fixed; top: 0; left: 0; right: 0; z-index: 1000; background: var(--color-white); transition: var(--transition); }
  .header.scrolled { box-shadow: var(--shadow-md); }
  .header-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem 2rem;
    position: relative;
  }

  .logo { display: flex; align-items: center; text-decoration: none; }
  .logo-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary);
  }

  @media (min-width: 768px) {
    .logo-text {
      font-size: 1.5rem;
    }
  }

  .menu-toggle { display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; background: none; border: none; cursor: pointer; padding: 0; z-index: 1001; }
  .hamburger { display: flex; flex-direction: column; gap: 5px; width: 24px; }
  .hamburger span { display: block; height: 2px; width: 100%; background: var(--color-primary); transition: var(--transition); transform-origin: center; }
  .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger.open span:nth-child(2) { opacity: 0; }
  .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

  .nav { position: fixed; top: 0; right: -100%; width: 80%; max-width: 300px; height: 100vh; background: var(--color-white); box-shadow: var(--shadow-md); transition: var(--transition); padding-top: 80px; }
  .nav.open { right: 0; }
  .nav-list { list-style: none; padding: 1rem; }
  .nav-list li { margin-bottom: 0.5rem; }
  .nav-link { display: block; padding: 0.75rem 1rem; color: var(--color-gray-700); font-weight: 500; text-decoration: none; border-radius: var(--radius); transition: var(--transition); white-space: nowrap; }
  .nav-link:hover, .nav-link.active { background: var(--color-gray-100); color: var(--color-primary); }
  .nav-separator { height: 1px; background: var(--color-gray-200); margin: 0.5rem 1rem; }
  @media (min-width: 768px) { .nav-separator { display: none; } }

  @media (min-width: 768px) {
    .menu-toggle { display: none; }
    .nav { position: static; width: auto; height: auto; background: none; box-shadow: none; padding-top: 0; }
    .nav-list { display: flex; gap: 0.5rem; padding: 0; }
    .nav-list li { margin-bottom: 0; }
    .nav-link { padding: 0.5rem 1rem; }
  }

  .footer { background: var(--color-gray-800); color: var(--color-gray-300); padding: 3rem 0 1.5rem; }
  .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
  .footer-grid { display: grid; gap: 2rem; margin-bottom: 2rem; }
  @media (min-width: 768px) { .footer-grid { grid-template-columns: repeat(3, 1fr); } }
  .footer-title { color: var(--color-white); font-size: 1.125rem; margin-bottom: 1rem; }
  .footer-text { line-height: 1.8; }
  .footer-links { list-style: none; }
  .footer-links li { margin-bottom: 0.5rem; }
  .footer-links a { color: var(--color-gray-300); }
  .footer-links a:hover { color: var(--color-white); }
  .footer-bottom { border-top: 1px solid var(--color-gray-700); padding-top: 1.5rem; text-align: center; font-size: 0.875rem; }
</style>
