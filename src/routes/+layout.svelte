<script>
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let isMenuOpen = false;
  let isScrolled = false;
  let currentYear = new Date().getFullYear();

  const navItems = [
    { href: '/#about', label: 'Über uns' },
    { href: '/#events', label: 'Termine' },
    { href: '/#schonzeiten', label: 'Schonzeiten' },
    { href: '/#mitgliedschaft', label: 'Mitgliedschaft' },
    { href: '/#kontakt', label: 'Kontakt' },
    { href: '/galerie', label: 'Galerie' }
  ];

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 50;
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
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
              <a href={item.href} class="nav-link" on:click={() => isMenuOpen = false}>{item.label}</a>
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
      <div class="footer-bottom">
        <div class="footer-links">
          <a href="/impressum" class="footer-link">Impressum</a>
          <span class="footer-separator">|</span>
          <a href="/datenschutz" class="footer-link">Datenschutz</a>
        </div>
        <img src="/logo.png" alt="ASV Rotauge e.V." class="footer-logo" />
        <p>&copy; {currentYear} ASV Rotauge e.V. <br>Alle Rechte vorbehalten.</p>
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
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --transition: all 0.3s ease;
  }

  :global(html) {
    scroll-padding-top: 72px;
    scroll-behavior: smooth;
  }

  :global(*) { box-sizing: border-box; margin: 0; padding: 0; }

  :global(body) {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, sans-serif;
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

  .nav { position: fixed; top: 72px; right: -100%; width: 100%; height: calc(100vh - 72px); background: var(--color-white); box-shadow: var(--shadow-md); transition: var(--transition); display: flex; flex-direction: column; align-items: center; justify-content: center; }
  .nav.open { right: 0; }
  .nav-list { list-style: none; padding: 0; text-align: center; }
  .nav-list li { margin-bottom: 1rem; }
  .nav-link { display: inline-block; padding: 1rem 2rem; color: var(--color-gray-700); font-weight: 500; text-decoration: none; border-radius: var(--radius); transition: var(--transition); white-space: nowrap; font-size: 1.25rem; }
  .nav-link:hover { background: var(--color-gray-100); color: var(--color-primary); }

  @media (min-width: 768px) {
    .menu-toggle { display: none; }
    .nav { position: static; width: auto; height: auto; background: none; box-shadow: none; padding-top: 0; }
    .nav-list { display: flex; gap: 0.5rem; padding: 0; }
    .nav-list li { margin-bottom: 0; }
    .nav-link { padding: 0.5rem 1rem; font-size: 1.05rem; }
  }

  .footer { background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%); color: var(--color-white); padding: 3rem 0; }
  .footer-container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
  .footer-bottom { display: flex; flex-direction: column; align-items: center; gap: 2rem; text-align: center; }
  .footer-links { display: flex; align-items: center; gap: 0.75rem; }
  .footer-link { color: var(--color-white); text-decoration: none; transition: var(--transition); }
  .footer-link:hover { color: var(--color-white); text-decoration: underline; }
  .footer-separator { color: rgba(255, 255, 255, 0.5); }
  .footer-logo { height: 120px; width: auto; }
</style>
