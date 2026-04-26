<svelte:head>
  <title>Impressum - ASV Rotauge e.V.</title>
  <meta name="description" content="Impressum des Angelverein Rotauge e.V." />
</svelte:head>

<section class="page-section">
  <div class="container">
    <h1 class="page-title">Impressum</h1>
    <div class="content">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p class="text">
        Angelverein Rotauge e.V.<br>
        Musterstraße 1<br>
        65824 Büttelborn
      </p>

      <h2>Vertreten durch</h2>
      <p class="text">
        Vorstand des Angelverein Rotauge e.V.
      </p>

      <h2>Kontakt</h2>
      <p class="text">
        E-Mail: info@asv-rotauge.de<br>
        Telefon: +49 6123 456789
      </p>

      <h2>Registereintrag</h2>
      <p class="text">
        Eintragung im Vereinsregister<br>
        Registergericht: Amtsgericht Gießen<br>
        Registernummer: VR 12345
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p class="text">
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br>
        DE 123 456 789
      </p>
    </div>
  </div>
</section>

<style>
  .page-section {
    padding: 6rem 1rem 4rem;
    min-height: 100vh;
    background: var(--color-gray-50);
  }

  .container {
    max-width: 800px;
    margin: 0 auto;
  }

  .page-title {
    font-size: clamp(2rem, 5vw, 3rem);
    color: var(--color-gray-800);
    margin-bottom: 2rem;
  }

  .content h2 {
    font-size: 1.5rem;
    color: var(--color-gray-800);
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .text {
    color: var(--color-gray-600);
    line-height: 1.8;
    margin-bottom: 1rem;
  }
</style>
