<svelte:head>
  <title>Termine - Angelverein</title>
  <meta name="description" content="Veranstaltungen und Termine des Angelvereins" />
</svelte:head>

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <span class="page-label">Veranstaltungen</span>
    <h1 class="page-title">Termine</h1>
    <p class="page-subtitle">Arbeitsdienst, Hegefischen, Vereinsaktivitäten und mehr</p>
  </div>
</section>

<!-- Events Timeline -->
<section class="section section-gray">
  <div class="container">
    <div class="events-list">
      <article class="event-card">
        <div class="event-date">
          <span class="event-day">15</span>
          <span class="event-month">März</span>
        </div>
        <div class="event-content">
          <span class="event-type">Arbeitsdienst</span>
          <h2 class="event-title">Frühjahrsputz am Gewässer</h2>
          <div class="event-meta">
            <span class="event-location">📍 Gewässerabschnitt A</span>
            <span class="event-time">🕘 9:00 Uhr</span>
          </div>
          <p class="event-description">
            Gemeinsam machen wir unsere Angelplätze fit für die neue Saison. Treffpunkt am Parkplatz. Bitte bringen Sie Handschuhe und entsprechende Kleidung mit.
          </p>
        </div>
      </article>

      <article class="event-card">
        <div class="event-date">
          <span class="event-day">05</span>
          <span class="event-month">April</span>
        </div>
        <div class="event-content">
          <span class="event-type">Jugend</span>
          <h2 class="event-title">Jugendangeln</h2>
          <div class="event-meta">
            <span class="event-location">📍 Vereinsgewässer</span>
            <span class="event-time">🕘 Ganztägig</span>
          </div>
          <p class="event-description">
            Ein Tag für unsere jungen Angler. Kinder unter 16 Jahren können das Angeln unter Anleitung lernen. Ausrüstung kann gestellt werden. Anmeldung erforderlich.
          </p>
        </div>
      </article>

      <article class="event-card">
        <div class="event-date">
          <span class="event-day">20</span>
          <span class="event-month">Juni</span>
        </div>
        <div class="event-content">
          <span class="event-type">Fest</span>
          <h2 class="event-title">Vereinsfest</h2>
          <div class="event-meta">
            <span class="event-location">📍 Vereinsheim</span>
            <span class="event-time">🕘 Ab 16:00 Uhr</span>
          </div>
          <p class="event-description">
            Unser jährliches Vereinsfest mit Grill, Getränken und gemütlichem Beisammensein. Alle Mitglieder und ihre Familien sind herzlich eingeladen.
          </p>
        </div>
      </article>

      <article class="event-card">
        <div class="event-date">
          <span class="event-day">12</span>
          <span class="event-month">Okt.</span>
        </div>
        <div class="event-content">
          <span class="event-type">Wanderung</span>
          <h2 class="event-title">Herbstwanderung</h2>
          <div class="event-meta">
            <span class="event-location">📍 Start: Vereinsheim</span>
            <span class="event-time">🕘 10:00 Uhr</span>
          </div>
          <p class="event-description">
            Genießen Sie die herbstliche Natur auf unserer gemeinsamen Wanderung entlang der Gewässer. Abschluss mit gemütlichem Ausklang im Vereinsheim.
          </p>
        </div>
      </article>

      <article class="event-card">
        <div class="event-date">
          <span class="event-day">15</span>
          <span class="event-month">Nov.</span>
        </div>
        <div class="event-content">
          <span class="event-type">Arbeitsdienst</span>
          <h2 class="event-title">Herbstputz & Wintervorbereitung</h2>
          <div class="event-meta">
            <span class="event-location">📍 Alle Gewässer</span>
            <span class="event-time">🕘 9:00 Uhr</span>
          </div>
          <p class="event-description">
            Letzter Arbeitsdienst des Jahres. Wir bereiten die Gewässer auf den Winter vor und sammeln Müll. Abschluss mit warmem Getränk im Vereinsheim.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="section">
  <div class="container text-center">
    <h2 class="section-title">Termin verpasst?</h2>
    <p class="section-text">
      Abonnieren Sie unseren Newsletter oder folgen Sie uns auf Social Media, um keine Veranstaltung zu verpassen.
    </p>
    <a href="/about" class="btn btn-primary">Kontakt aufnehmen</a>
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

  .text-center {
    text-align: center;
  }

  .section-title {
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: var(--color-gray-800);
    margin-bottom: 1rem;
  }

  .section-text {
    color: var(--color-gray-600);
    line-height: 1.8;
    margin-bottom: 2rem;
    max-width: 65ch;
    margin-left: auto;
    margin-right: auto;
  }

  /* Events List */
  .events-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* Event Card */
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

  @media (min-width: 768px) {
    .event-card {
      padding: 2rem;
      gap: 2rem;
    }
  }

  /* Event Date */
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

  /* Event Content */
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

  /* Button */
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

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-white);
  }

  .btn-primary:hover {
    background: var(--color-primary-dark);
  }

  @media (min-width: 768px) {
    .section {
      padding: 5rem 2rem;
    }
  }
</style>
