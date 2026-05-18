<script lang="ts">
  import { marked } from 'marked';
  import start from '../content/sections/start.json';
  import about from '../content/sections/about.json';
  import events from '../content/sections/events.json';
  import schonzeiten from '../content/sections/schonzeiten.json';
  import membership from '../content/sections/membership.json';
  import membershipErwachsene from '../content/sections/membership_erwachsene.json';
  import membershipKinder from '../content/sections/membership_kinder.json';
  import membershipFamilie from '../content/sections/membership_familie.json';

  import contact from '../content/sections/contact.json';

  const membershipCategories = [
    { title: 'Erwachsene', entries: membershipErwachsene.entries },
    { title: 'Kinder', entries: membershipKinder.entries },
    { title: 'Familie', entries: membershipFamilie.entries }
  ];

  marked.setOptions({ breaks: false, gfm: true });
  const md = (s: string) => marked.parse(s || '') as string;

  const MONTHS_DE = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];

  function parseDate(s: string): Date {
    if (!s) return new Date(0);
    const datePart = s.includes('T') ? s.split('T')[0] : s;
    if (datePart.includes('-')) {
      const [y, m, d] = datePart.split('-').map(Number);
      return new Date(y, m - 1, d);
    }
    const [d, m, y] = datePart.split('.').map(Number);
    return new Date(y, m - 1, d);
  }

  let sortedEvents = $derived([...events.events].sort(
    (a, b) => parseDate(a.date).getTime() - parseDate(b.date).getTime()
  ));

  const PAGE_SIZE = 4;
  let visibleCount = $state(PAGE_SIZE);
  let visibleEvents = $derived(sortedEvents.slice(0, visibleCount));
  let hasMore = $derived(visibleCount < sortedEvents.length);
</script>

<svelte:head>
  <title>{start.title} - ASV Rotauge e.V.</title>
  <meta name="description" content={start.subtitle} />
</svelte:head>

<!-- Hero Section -->
<section id="hero" class="hero">
  <div class="hero-container">
    <img src="/logo.png" alt="ASV Rotauge e.V." class="hero-logo" />
    <h1 class="hero-title">{start.title}</h1>
    <p class="hero-subtitle">{start.subtitle}</p>
    <div class="hero-buttons">
      {#if start.button1_label}
        <a href="/#about" class="btn btn-white">{start.button1_label}</a>
      {/if}
      {#if start.button2_label}
        <a href="/#events" class="btn btn-secondary-white">{start.button2_label}</a>
      {/if}
    </div>
  </div>
</section>

<!-- Über uns Section -->
<section id="about" class="section">
  <div class="container">
    <span class="section-label">{about.section_label}</span>
    <h2 class="section-title">{about.title}</h2>
    <div class="content-grid">
      <div class="content-main markdown-body">
        {@html md(about.body)}
      </div>
      <div class="content-sidebar">
        {#each about.stats as stat}
          <div class="stat-card">
            <span class="stat-number">{stat.number}</span>
            <span class="stat-label">{stat.label}</span>
          </div>
        {/each}
      </div>
    </div>
    <div class="map-container">
      <h3 class="map-title">Unsere Gewässer</h3>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3208.6877617221794!2d8.548115254881463!3d49.905807518889695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd776156d76485%3A0xb9dcf0055cd5e666!2sFischteich!5e1!3m2!1sde!2snl!4v1777189216918!5m2!1sde!2snl"
        class="gmap"
        title="Google Map showing Gewässer location"
        style="border:0;"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</section>

<!-- Termine Section -->
<section id="events" class="section section-gray">
  <div class="container">
    <span class="section-label">{events.section_label}</span>
    <h2 class="section-title">{events.title}</h2>
    <div class="events-list">
      {#each visibleEvents as event}
        {@const date = parseDate(event.date)}
        <article class="event-card">
          <div class="event-date">
            <span class="event-day">{String(date.getDate()).padStart(2, '0')}</span>
            <span class="event-month">{MONTHS_DE[date.getMonth()]}</span>
            <span class="event-year">{date.getFullYear()}</span>
          </div>
          <div class="event-content">
            <span class="event-type">{event.type}</span>
            <h3 class="event-title">{event.title}</h3>
            <div class="event-meta">
              {#if event.location}<span class="event-location">📍 {event.location}</span>{/if}
              {#if event.time}<span class="event-time">🕘 {event.time}</span>{/if}
            </div>
            {#if event.description}
              <div class="event-description markdown-body">{@html md(event.description)}</div>
            {/if}
          </div>
        </article>
      {/each}
    </div>
    {#if hasMore}
      <div class="events-more">
        <button class="events-more-btn" onclick={() => visibleCount += PAGE_SIZE}>
          Weitere Termine anzeigen ({sortedEvents.length - visibleCount})
        </button>
      </div>
    {/if}
  </div>
</section>

<!-- Schonzeiten Section -->
<section id="schonzeiten" class="section">
  <div class="container">
    <span class="section-label">{schonzeiten.section_label}</span>
    <h2 class="section-title">{schonzeiten.title}</h2>
    <div class="markdown-body section-text">{@html md(schonzeiten.intro)}</div>
    <div class="schonzeiten-table">
      <table>
        <thead>
          <tr>
            <th>Fischart</th>
            <th>Schonzeit</th>
            <th>Mindestmaß</th>
          </tr>
        </thead>
        <tbody>
          {#each schonzeiten.fish as f}
            <tr>
              <td>{f.species}</td>
              <td>{f.season}</td>
              <td>{f.min_size}</td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Mitgliedschaft Section -->
<section id="mitgliedschaft" class="section section-gray">
  <div class="container">
    <span class="section-label">{membership.section_label}</span>
    <h2 class="section-title">{membership.title}</h2>
    <div class="markdown-body section-text">{@html md(membership.intro)}</div>
    <div class="membership-categories">
      {#each membershipCategories as category}
        <div class="membership-category">
          <h3 class="membership-category-title">{category.title}</h3>
          <ul class="membership-entry-list">
            {#each category.entries as entry}
              <li class="membership-entry">
                <span class="membership-entry-label">{entry.label}</span>
                <span class="membership-entry-price">{entry.price}<span class="membership-entry-period">/Jahr</span></span>
              </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>
    {#if membership.disclaimer}
      <div class="membership-disclaimer">
        <p>{membership.disclaimer}</p>
        {#if membership.disclaimer_file}
          <a href={membership.disclaimer_file} target="_blank" rel="noopener noreferrer" class="membership-disclaimer-btn">Gebührenordnung</a>
        {/if}
      </div>
    {/if}
  </div>
</section>

<!-- Kontakt Section -->
<section id="kontakt" class="section">
  <div class="container">
    <span class="section-label">{contact.section_label}</span>
    <h2 class="section-title">{contact.title}</h2>
    <div class="contact-icon-grid">
      <div class="contact-icon-card">
        <span class="card-icon">📍</span>
        <div class="card-content">
          <h4 class="card-label">Adresse</h4>
          <div class="card-text markdown-body">{@html md(contact.address)}</div>
        </div>
      </div>
      <a class="contact-icon-card" href={`mailto:${contact.email}`}>
        <span class="card-icon">📧</span>
        <div class="card-content">
          <h4 class="card-label">E-Mail</h4>
          <p class="card-text">{contact.email}</p>
        </div>
      </a>
      <a class="contact-icon-card" href={`tel:${contact.phone.replace(/\s+/g, '')}`}>
        <span class="card-icon">📞</span>
        <div class="card-content">
          <h4 class="card-label">Telefon</h4>
          <p class="card-text">{contact.phone}</p>
        </div>
      </a>
    </div>
  </div>
</section>

<style>
  /* Hero Section */
  .hero {
    min-height: 100vh;
    background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6rem 1rem 4rem;
    color: var(--color-white);
  }

  .hero-container {
    max-width: 1000px;
  }

  .hero-logo {
    width: 200px;
    height: auto;
    margin-bottom: 2rem;
    border-radius: 1rem;
  }

  @media (min-width: 768px) {
    .hero-logo {
      width: 300px;
    }
  }

  .hero-title {
    font-size: clamp(2rem, 6vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.1;
    color: var(--color-white);
  }

  .hero-subtitle {
    font-size: clamp(1.125rem, 3vw, 1.5rem);
    opacity: 0.9;
    margin-bottom: 1rem;
  }

  .hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }

  /* Buttons */
  .btn {
    display: inline-flex;
    align-items: center;
    padding: 0.875rem 1.75rem;
    font-size: 0.875rem;
    font-weight: 600;
    border-radius: var(--radius);
    text-decoration: none;
    transition: var(--transition);
    border: 2px solid transparent;
  }

  .btn-white {
    background: var(--color-white);
    color: var(--color-primary);
    border-color: var(--color-white);
  }

  .btn-white:hover {
    background: var(--color-gray-100);
    color: var(--color-primary-dark);
  }

  .btn-secondary-white {
    background: transparent;
    color: var(--color-white);
    border-color: var(--color-white);
  }

  .btn-secondary-white:hover {
    background: var(--color-white);
    color: var(--color-primary);
  }

  /* Sections */
  .section {
    padding: 4rem 1rem;
  }

  .section-gray {
    background: var(--color-gray-100);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .section-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--color-primary);
    margin-bottom: 0.75rem;
  }

  .section-title {
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    color: var(--color-gray-800);
    margin-bottom: 1.5rem;
  }

  .section-text {
    font-size: 1.125rem;
    color: var(--color-gray-600);
    line-height: 1.8;
    margin-bottom: 2rem;
  }

  /* Markdown body styling for CMS-rendered content */
  .markdown-body :global(p) {
    font-size: 1.125rem;
    color: var(--color-gray-600);
    line-height: 1.8;
    margin: 0 0 1rem 0;
  }
  .markdown-body :global(p:last-child) {
    margin-bottom: 0;
  }
  .markdown-body :global(strong) { font-weight: 700; color: var(--color-gray-800); }
  .markdown-body :global(em) { font-style: italic; }
  .markdown-body :global(ul),
  .markdown-body :global(ol) {
    margin: 0 0 1rem 1.5rem;
    color: var(--color-gray-600);
    line-height: 1.8;
  }
  .markdown-body :global(li) { margin-bottom: 0.25rem; }
  .markdown-body :global(blockquote) {
    border-left: 3px solid var(--color-primary);
    padding-left: 1rem;
    margin: 0 0 1rem 0;
    color: var(--color-gray-500);
    font-style: italic;
  }
  .markdown-body :global(h1),
  .markdown-body :global(h2),
  .markdown-body :global(h3),
  .markdown-body :global(h4) {
    color: var(--color-gray-800);
    margin: 1.5rem 0 0.75rem 0;
    font-weight: 700;
    line-height: 1.3;
  }
  .markdown-body :global(h1) { font-size: 1.75rem; }
  .markdown-body :global(h2) { font-size: 1.5rem; }
  .markdown-body :global(h3) { font-size: 1.25rem; }
  .markdown-body :global(h4) { font-size: 1.1rem; }
  /* Compact variants */
  .event-description.markdown-body :global(p),
  .card-text.markdown-body :global(p) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 768px) {
    .section {
      padding: 6rem 2rem;
    }
  }

  /* Content Grid */
  .content-grid {
    display: grid;
    gap: 3rem;
  }

  @media (min-width: 768px) {
    .content-grid {
      grid-template-columns: 2fr 1fr;
    }
  }

  .content-sidebar {
    display: grid;
    gap: 1rem;
  }

  .stat-card {
    background: var(--color-white);
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    text-align: center;
  }

  .stat-number {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: 0.25rem;
  }

  .stat-label {
    font-size: 0.875rem;
    color: var(--color-gray-500);
  }

  /* Events List */
  .events-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .event-card {
    display: grid;
    grid-template-columns: auto 1fr;
    gap: 1.5rem;
    background: var(--color-white);
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
  }

  .event-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateX(4px);
  }

  .event-date {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--color-primary);
    color: var(--color-white);
    padding: 1rem;
    border-radius: var(--radius);
    min-width: 70px;
    text-align: center;
  }

  .event-day {
    font-size: 1.75rem;
    font-weight: 800;
    line-height: 1;
  }

  .event-month {
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .event-year {
    font-size: 1rem;
    font-weight: 500;
    color: var(--color-gray-500);
    margin-top: 0.25rem;
  }

  .event-type {
    display: inline-block;
    font-size: 0.625rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary);
    background: var(--color-gray-100);
    padding: 0.25rem 0.5rem;
    border-radius: 9999px;
    margin-bottom: 0.5rem;
  }

  .event-title {
    font-size: 1.25rem;
    color: var(--color-gray-800);
    margin-bottom: 0.75rem;
  }

  .event-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.75rem;
    font-size: 0.875rem;
    color: var(--color-gray-500);
  }

  .event-description {
    color: var(--color-gray-600);
    line-height: 1.6;
  }

  .events-more {
    text-align: center;
    margin-top: 2rem;
  }

  .events-more-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1.75rem;
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: var(--radius);
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s, color 0.2s;
  }

  .events-more-btn:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }

  /* Schonzeiten Table */
  .schonzeiten-table {
    margin-top: 2rem;
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    background: var(--color-white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow-sm);
  }

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid var(--color-gray-200);
  }

  th {
    background: var(--color-gray-100);
    font-weight: 700;
    color: var(--color-gray-800);
  }

  tr:last-child td {
    border-bottom: none;
  }

  /* Membership Categories */
  .membership-categories {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .membership-categories {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .membership-category {
    background: var(--color-white);
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
  }

  .membership-category-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-primary);
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--color-primary);
  }

  .membership-entry-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .membership-entry {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--color-gray-100);
    gap: 1rem;
  }

  .membership-entry:last-child {
    border-bottom: none;
  }

  .membership-entry-label {
    color: var(--color-gray-700);
    font-size: 0.95rem;
  }

  .membership-entry-price {
    font-weight: 700;
    font-size: 1.05rem;
    color: var(--color-gray-800);
    white-space: nowrap;
  }

  .membership-entry-period {
    font-size: 0.75rem;
    font-weight: 400;
    color: var(--color-gray-500);
  }

  .membership-disclaimer {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.5rem;
    color: var(--color-gray-600);
  }

  .membership-disclaimer-btn {
    white-space: nowrap;
    flex-shrink: 0;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1.1rem;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--radius);
    font-size: 0.875rem;
    font-weight: 600;
    text-decoration: none;
    transition: background 0.2s;
  }

  .membership-disclaimer-btn:hover {
    background: var(--color-primary-dark);
  }

  /* Contact Section */
  .contact-icon-grid {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .contact-icon-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .contact-icon-card {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: var(--color-white);
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    text-align: left;
    text-decoration: none;
    color: inherit;
  }

  .card-icon {
    font-size: 2.5rem;
    line-height: 1;
    flex-shrink: 0;
  }

  @media (max-width: 767px) {
    .contact-icon-card {
      padding: 1.25rem;
      gap: 1rem;
    }

    .card-icon {
      font-size: 1.75rem;
    }

    .card-label {
      font-size: 1rem;
    }

    .card-text {
      font-size: 0.9rem;
    }
  }

  .card-content {
    flex: 1;
  }

  .card-label {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--color-gray-800);
    margin: 0 0 0.5rem 0;
  }

  .card-text {
    color: var(--color-gray-600);
    line-height: 1.6;
    font-size: 1.05rem;
    margin: 0;
  }

  /* Map Container */
  .map-container {
    margin-top: 3rem;
  }

  .map-title {
    font-size: 1.25rem;
    color: var(--color-gray-800);
    margin-bottom: 1rem;
  }

  .gmap {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
  }
</style>
