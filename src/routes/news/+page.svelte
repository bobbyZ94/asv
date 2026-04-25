<svelte:head>
  <title>News - Angelverein</title>
  <meta name="description" content="Aktuelle Neuigkeiten vom Angelverein" />
</svelte:head>

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <span class="page-label">Aktuell</span>
    <h1 class="page-title">News</h1>
    <p class="page-subtitle">Alle Informationen und Neuigkeiten aus dem Vereinsleben</p>
  </div>
</section>

<!-- News Grid -->
<section class="section section-gray">
  <div class="container">
    <div class="news-grid">
      <article class="news-card">
        <span class="news-date">25. Januar 2025</span>
        <h2 class="news-title">Mitgliederversammlung 2025</h2>
        <p class="news-excerpt">
          Die jährliche Mitgliederversammlung findet am 15. Februar 2025 im Vereinsheim statt. Alle Mitglieder sind herzlich eingeladen. Tagesordnung und Protokoll der letzten Versammlung liegen im Vereinsheim zur Einsicht bereit.
        </p>
        <a href="/news" class="news-link">Weiterlesen →</a>
      </article>

      <article class="news-card">
        <span class="news-date">10. Januar 2025</span>
        <h2 class="news-title">Neue Angelkarten verfügbar</h2>
        <p class="news-excerpt">
          Die Angelkarten für die Saison 2025 sind jetzt im Vereinsheim erhältlich. Bitte bringen Sie Ihren Mitgliedsausweis und ein Passfoto mit. Die Preise bleiben unverändert.
        </p>
        <a href="/news" class="news-link">Weiterlesen →</a>
      </article>

      <article class="news-card">
        <span class="news-date">15. November 2024</span>
        <h2 class="news-title">Erfolgreicher Herbstputz</h2>
        <p class="news-excerpt">
          Vielen Dank an alle Teilnehmer unserer Herbstputz-Aktion! Wir konnten wieder viele Müllteile aus unseren Gewässern entfernen und die Uferbereiche für den Winter herrichten.
        </p>
        <a href="/news" class="news-link">Weiterlesen →</a>
      </article>

      <article class="news-card">
        <span class="news-date">1. Oktober 2024</span>
        <h2 class="news-title">Fang des Monats: Großer Zander</h2>
        <p class="news-excerpt">
          Unser Mitglied Peter M. hat einen beeindruckenden Zander mit 72cm Länge gefangen. Herzlichen Glückwunsch zu dieser tollen Leistung!
        </p>
        <a href="/news" class="news-link">Weiterlesen →</a>
      </article>

      <article class="news-card">
        <span class="news-date">15. September 2024</span>
        <h2 class="news-title">Jugendangeln ein voller Erfolg</h2>
        <p class="news-excerpt">
          Über 20 Kinder und Jugendliche nahmen an unserem jährlichen Jugendangeln teil. Bei herrlichem Wetter konnten die jungen Angler ihre ersten Fische fangen.
        </p>
        <a href="/news" class="news-link">Weiterlesen →</a>
      </article>

      <article class="news-card">
        <span class="news-date">20. August 2024</span>
        <h2 class="news-title">Neue Regeln für das Barschangeln</h2>
        <p class="news-excerpt">
          Ab der kommenden Saison gelten neue Schonzeiten und Mindestmaße für das Barschangeln. Bitte informieren Sie sich über die aktuellen Bestimmungen.
        </p>
        <a href="/news" class="news-link">Weiterlesen →</a>
      </article>
    </div>
  </div>
</section>

<style>
  /* Page Header */
  .page-header {
    background: linear-gradient(135deg, var(--color-primary-dark) 0%, var(--color-primary) 100%);
    color: var(--color-white);
    padding: 8rem 1rem 4rem;
    text-align: center;
  }

  .page-label {
    display: block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    opacity: 0.9;
    margin-bottom: 0.75rem;
  }

  .page-title {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    margin-bottom: 0.75rem;
    color: var(--color-white);
  }

  .page-subtitle {
    font-size: 1.125rem;
    opacity: 0.9;
  }

  /* Section */
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

  /* News Grid */
  .news-grid {
    display: grid;
    gap: 1.5rem;
  }

  @media (min-width: 640px) {
    .news-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .news-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  /* News Card */
  .news-card {
    background: var(--color-white);
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    display: flex;
    flex-direction: column;
  }

  .news-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .news-date {
    display: block;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-primary);
    margin-bottom: 0.75rem;
  }

  .news-title {
    font-size: 1.25rem;
    color: var(--color-gray-800);
    margin-bottom: 0.75rem;
    line-height: 1.3;
  }

  .news-excerpt {
    color: var(--color-gray-600);
    line-height: 1.6;
    margin-bottom: 1rem;
    flex: 1;
  }

  .news-link {
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-primary);
    text-decoration: none;
  }

  .news-link:hover {
    color: var(--color-primary-dark);
  }

  @media (min-width: 768px) {
    .section {
      padding: 5rem 2rem;
    }
  }
</style>
