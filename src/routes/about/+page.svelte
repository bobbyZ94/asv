<svelte:head>
  <title>Über uns - Angelverein</title>
  <meta name="description" content="Über unseren Angelverein" />
</svelte:head>

<!-- Page Header -->
<section class="page-header">
  <div class="container">
    <span class="page-label">Angelverein e.V.</span>
    <h1 class="page-title">Über uns</h1>
    <p class="page-subtitle">Gemeinsam die Natur erleben und die Angelpflege bewahren</p>
  </div>
</section>

<!-- Verein Section -->
<section class="section">
  <div class="container">
    <div class="content-grid">
      <div class="content-main">
        <span class="section-label">Unser Verein</span>
        <h2 class="section-title">Verein(t) seit 1950</h2>
        <p class="section-text">
          Der Angelverein wurde 1950 gegründet und hat seitdem über 150 Mitglieder. Wir pflegen mehrere Gewässer in der Region und engagieren uns für den Naturschutz und nachhaltiges Angeln.
        </p>
        <p class="section-text">
          Seit dem 26.08.1950 vereint der Angelverein nun bereits seine Mitglieder, die durch die Leidenschaft zum Angeln verbunden sind – damals wie heute. In 2025 dürfen wir ein besonderes Fest feiern: unser 75-jähriges Vereinsjubiläum.
        </p>
      </div>
      <div class="content-sidebar">
        <div class="stat-card">
          <span class="stat-number">150+</span>
          <span class="stat-label">Mitglieder</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">75</span>
          <span class="stat-label">Jahre</span>
        </div>
        <div class="stat-card">
          <span class="stat-number">5</span>
          <span class="stat-label">Gewässer</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Goals Section -->
<section class="section section-gray">
  <div class="container">
    <span class="section-label">Was uns antreibt</span>
    <h2 class="section-title">Unsere Ziele</h2>
    
    <div class="goals-grid">
      <div class="goal-card">
        <span class="goal-icon">🎣</span>
        <h3 class="goal-title">Sportfischen</h3>
        <p class="goal-text">Förderung des Sportfischens und der Anglertradition</p>
      </div>
      <div class="goal-card">
        <span class="goal-icon">🌿</span>
        <h3 class="goal-title">Gewässerschutz</h3>
        <p class="goal-text">Pflege und Erhaltung unserer Gewässer</p>
      </div>
      <div class="goal-card">
        <span class="goal-icon">🦆</span>
        <h3 class="goal-title">Naturschutz</h3>
        <p class="goal-text">Naturschutz und Umweltbildung</p>
      </div>
      <div class="goal-card">
        <span class="goal-icon">👨‍👩‍👧‍👦</span>
        <h3 class="goal-title">Jugend</h3>
        <p class="goal-text">Jugendförderung im Angelsport</p>
      </div>
      <div class="goal-card">
        <span class="goal-icon">🤝</span>
        <h3 class="goal-title">Gemeinschaft</h3>
        <p class="goal-text">Gemeinschaftliches Miteinander</p>
      </div>
    </div>
  </div>
</section>

<!-- Membership Section -->
<section class="section">
  <div class="container">
    <span class="section-label">Mitgliedschaft</span>
    <h2 class="section-title">Mitglied werden</h2>
    <p class="section-text">
      Interessiert an einer Mitgliedschaft? Kontaktieren Sie uns oder kommen Sie zu einem unserer Vereinsabende. Wir freuen uns auf neue Mitglieder!
    </p>
    <div class="cta-buttons">
      <a href="/about" class="btn btn-primary">Jetzt Mitglied werden</a>
      <a href="/about" class="btn btn-secondary">Kontakt aufnehmen</a>
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
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: var(--color-gray-800);
    margin-bottom: 1.5rem;
  }

  .section-text {
    color: var(--color-gray-600);
    line-height: 1.8;
    margin-bottom: 1rem;
    max-width: 65ch;
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

  /* Stat Cards */
  .content-sidebar {
    display: grid;
    gap: 1rem;
  }

  @media (min-width: 640px) and (max-width: 767px) {
    .content-sidebar {
      grid-template-columns: repeat(3, 1fr);
    }
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

  /* Goals Grid */
  .goals-grid {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
  }

  @media (min-width: 640px) {
    .goals-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .goals-grid {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  .goal-card {
    background: var(--color-white);
    padding: 1.5rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    text-align: center;
    transition: var(--transition);
  }

  .goal-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .goal-icon {
    display: block;
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  .goal-title {
    font-size: 1.125rem;
    color: var(--color-gray-800);
    margin-bottom: 0.5rem;
  }

  .goal-text {
    font-size: 0.875rem;
    color: var(--color-gray-600);
  }

  /* CTA Buttons */
  .cta-buttons {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 2rem;
  }

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

  .btn-secondary {
    background: transparent;
    color: var(--color-primary);
    border-color: var(--color-primary);
  }

  .btn-secondary:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }

  @media (min-width: 768px) {
    .section {
      padding: 5rem 2rem;
    }
  }
</style>
