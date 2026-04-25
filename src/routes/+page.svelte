<svelte:head>
  <title>Angelverein - Willkommen</title>
  <meta name="description" content="Willkommen beim Angelverein" />
</svelte:head>

<!-- Hero Section -->
<section id="hero" class="hero">
  <div class="hero-container">
    <img src="/logo.png" alt="ASV Rotauge e.V." class="hero-logo" />
    <h1 class="hero-title">Entspannt Angeln im Verein</h1>
    <p class="hero-subtitle">Entdecke unsere Gewässer bei Büttelborn und im Braunshardter Tännchen</p>
    <p class="hero-subtitle hero-waters"></p>
    <div class="hero-buttons">
      <a href="#about" class="btn btn-white">Über uns</a>
      <a href="#events" class="btn btn-secondary-white">Termine</a>
    </div>
  </div>
</section>

<!-- Über uns Section -->
<section id="about" class="section">
  <div class="container">
    <span class="section-label">Über uns</span>
    <h2 class="section-title">Verein(t) seit 1950</h2>
    <div class="content-grid">
      <div class="content-main">
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
          <span class="stat-number">2</span>
          <span class="stat-label">Gewässer</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Termine Section -->
<section id="events" class="section section-gray">
  <div class="container">
    <span class="section-label">Termine</span>
    <h2 class="section-title">Veranstaltungen</h2>
    <div class="events-list">
      <article class="event-card">
        <div class="event-date">
          <span class="event-day">15</span>
          <span class="event-month">März</span>
        </div>
        <div class="event-content">
          <span class="event-type">Arbeitsdienst</span>
          <h3 class="event-title">Frühjahrsputz am Gewässer</h3>
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
          <h3 class="event-title">Jugendangeln</h3>
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
          <h3 class="event-title">Vereinsfest</h3>
          <div class="event-meta">
            <span class="event-location">📍 Vereinsheim</span>
            <span class="event-time">🕘 Ab 16:00 Uhr</span>
          </div>
          <p class="event-description">
            Unser jährliches Vereinsfest mit Grill, Getränken und gemütlichem Beisammensein. Alle Mitglieder und ihre Familien sind herzlich eingeladen.
          </p>
        </div>
      </article>
    </div>
  </div>
</section>

<!-- Schonzeiten Section -->
<section id="schonzeiten" class="section">
  <div class="container">
    <span class="section-label">Schonzeiten</span>
    <h2 class="section-title">Schonzeiten beachten</h2>
    <p class="section-text">
      Zum Schutz unserer Fischbestände müssen folgende Schonzeiten beachtet werden:
    </p>
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
          <tr>
            <td>Karpfen</td>
            <td>01.04. - 31.05.</td>
            <td>35 cm</td>
          </tr>
          <tr>
            <td>Hecht</td>
            <td>01.02. - 31.03.</td>
            <td>50 cm</td>
          </tr>
          <tr>
            <td>Zander</td>
            <td>01.02. - 31.03.</td>
            <td>45 cm</td>
          </tr>
          <tr>
            <td>Barsch</td>
            <td>01.04. - 31.05.</td>
            <td>20 cm</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- Mitgliedschaft Section -->
<section id="mitgliedschaft" class="section section-gray">
  <div class="container">
    <span class="section-label">Mitgliedschaft</span>
    <h2 class="section-title">Mitglied werden</h2>
    <p class="section-text">
      Werden Sie Teil unseres Angelvereins und genießen Sie Zugang zu unseren Gewässern, regelmäßige Vereinsaktivitäten und eine starke Gemeinschaft.
    </p>
    <div class="membership-cards">
      <div class="membership-card">
        <h3 class="membership-title">Erwachsene</h3>
        <span class="membership-price">€80/Jahr</span>
        <ul class="membership-features">
          <li>Zugang zu allen Gewässern</li>
          <li>Teilnahme an Veranstaltungen</li>
          <li>Stimmrecht in der Mitgliederversammlung</li>
        </ul>
      </div>
      <div class="membership-card featured">
        <h3 class="membership-title">Familie</h3>
        <span class="membership-price">€120/Jahr</span>
        <ul class="membership-features">
          <li>Zugang für 2 Erwachsene + Kinder</li>
          <li>Teilnahme an Veranstaltungen</li>
          <li>Jugendförderung</li>
        </ul>
      </div>
      <div class="membership-card">
        <h3 class="membership-title">Jugend</h3>
        <span class="membership-price">€25/Jahr</span>
        <ul class="membership-features">
          <li>Bis 18 Jahre</li>
          <li>Zugang zu allen Gewässern</li>
          <li>Jugendaktivitäten</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- Kontakt Section -->
<section id="kontakt" class="section">
  <div class="container">
    <span class="section-label">Kontakt</span>
    <h2 class="section-title">Kontaktieren Sie uns</h2>
    <div class="contact-grid">
      <div class="contact-info">
        <div class="contact-item">
          <span class="contact-icon">📍</span>
          <div>
            <h4 class="contact-label">Adresse</h4>
            <p class="contact-text">Angelverein Rotauge e.V.<br>Musterstraße 1<br>65824 Büttelborn</p>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📧</span>
          <div>
            <h4 class="contact-label">E-Mail</h4>
            <p class="contact-text">info@asv-rotauge.de</p>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon">📞</span>
          <div>
            <h4 class="contact-label">Telefon</h4>
            <p class="contact-text">+49 6123 456789</p>
          </div>
        </div>
      </div>
      <div class="contact-form">
        <h3 class="form-title">Nachricht senden</h3>
        <form class="form">
          <input type="text" placeholder="Name" class="form-input" />
          <input type="email" placeholder="E-Mail" class="form-input" />
          <textarea placeholder="Ihre Nachricht" class="form-textarea" rows="5"></textarea>
          <button type="submit" class="btn btn-primary">Senden</button>
        </form>
      </div>
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

  .hero-waters {
    font-size: clamp(0.875rem, 2.5vw, 1.15rem);
    opacity: 0.8;
    margin-bottom: 2rem;
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

  .btn-primary {
    background: var(--color-primary);
    color: var(--color-white);
  }

  .btn-primary:hover {
    background: var(--color-primary-dark);
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

  /* Membership Cards */
  .membership-cards {
    display: grid;
    gap: 1.5rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .membership-cards {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .membership-card {
    background: var(--color-white);
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    transition: var(--transition);
    border: 2px solid transparent;
  }

  .membership-card.featured {
    border-color: var(--color-primary);
    transform: scale(1.05);
  }

  .membership-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .membership-card.featured:hover {
    transform: scale(1.05) translateY(-2px);
  }

  .membership-title {
    font-size: 1.25rem;
    color: var(--color-gray-800);
    margin-bottom: 0.5rem;
  }

  .membership-price {
    display: block;
    font-size: 2rem;
    font-weight: 800;
    color: var(--color-primary);
    margin-bottom: 1.5rem;
  }

  .membership-features {
    list-style: none;
    padding: 0;
  }

  .membership-features li {
    padding: 0.5rem 0;
    color: var(--color-gray-600);
    position: relative;
    padding-left: 1.5rem;
  }

  .membership-features li::before {
    content: "✓";
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-weight: 700;
  }

  /* Contact Section */
  .contact-grid {
    display: grid;
    gap: 3rem;
    margin-top: 2rem;
  }

  @media (min-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  .contact-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .contact-icon {
    font-size: 1.5rem;
  }

  .contact-label {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--color-gray-800);
    margin-bottom: 0.25rem;
  }

  .contact-text {
    color: var(--color-gray-600);
    line-height: 1.6;
  }

  .form-title {
    font-size: 1.25rem;
    color: var(--color-gray-800);
    margin-bottom: 1.5rem;
  }

  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .form-input, .form-textarea {
    padding: 0.875rem;
    border: 1px solid var(--color-gray-300);
    border-radius: var(--radius);
    font-family: inherit;
    font-size: 1rem;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
  }
</style>
