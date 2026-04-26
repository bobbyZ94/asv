<script>
  const images = [
    { src: '/galerie/placeholder1.svg', alt: 'Gewässer Blick 1', height: 400 },
    { src: '/galerie/placeholder2.svg', alt: 'Angelplatz am Morgen', height: 300 },
    { src: '/galerie/placeholder3.svg', alt: 'Fischbestand', height: 450 },
    { src: '/galerie/placeholder4.svg', alt: 'Vereinsfest 2025', height: 350 },
    { src: '/galerie/placeholder5.svg', alt: 'Jugendangeln', height: 400 },
    { src: '/galerie/placeholder6.svg', alt: 'Gewässerabschnitt B', height: 500 },
    { src: '/galerie/placeholder7.svg', alt: 'Arbeitsdienst', height: 300 },
    { src: '/galerie/placeholder8.svg', alt: 'Sonnenuntergang am Gewässer', height: 450 },
    { src: '/galerie/placeholder9.svg', alt: 'Mitgliederversammlung', height: 350 },
  ];
</script>

<svelte:head>
  <title>Galerie - ASV Rotauge e.V.</title>
  <meta name="description" content="Bildergalerie des Angelvereins Rotauge e.V." />
</svelte:head>

<div class="page">
  <section class="section">
    <div class="container">
      <span class="section-label">Galerie</span>
      <h1 class="page-title">Bildergalerie</h1>
      <p class="page-description">
        Einblicke in unsere Gewässer, Vereinsaktivitäten und gemeinsame Momente.
      </p>
      
      <div class="masonry-gallery">
        <div class="masonry-column">
          <div class="gallery-item">
            <img src="/galerie/placeholder1.svg" alt="Gewässer Blick 1" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Gewässer Blick 1</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/galerie/placeholder4.svg" alt="Vereinsfest 2025" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Vereinsfest 2025</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/galerie/placeholder7.svg" alt="Arbeitsdienst" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Arbeitsdienst</span>
            </div>
          </div>
        </div>
        <div class="masonry-column">
          <div class="gallery-item">
            <img src="/galerie/placeholder2.svg" alt="Angelplatz am Morgen" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Angelplatz am Morgen</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/galerie/placeholder5.svg" alt="Jugendangeln" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Jugendangeln</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/galerie/placeholder8.svg" alt="Sonnenuntergang am Gewässer" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Sonnenuntergang am Gewässer</span>
            </div>
          </div>
        </div>
        <div class="masonry-column">
          <div class="gallery-item">
            <img src="/galerie/placeholder3.svg" alt="Fischbestand" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Fischbestand</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/galerie/placeholder6.svg" alt="Gewässerabschnitt B" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Gewässerabschnitt B</span>
            </div>
          </div>
          <div class="gallery-item">
            <img src="/galerie/placeholder9.svg" alt="Mitgliederversammlung" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-caption">Mitgliederversammlung</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

<style>
  .page {
    min-height: 100vh;
    background: var(--color-gray-50);
    padding-top: 72px;
  }

  .section {
    padding: 4rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section-label {
    display: inline-block;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary);
    margin-bottom: 0.5rem;
  }

  .page-title {
    font-size: 3rem;
    font-weight: 800;
    color: var(--color-gray-800);
    margin: 0 0 1rem 0;
    line-height: 1.2;
  }

  .page-description {
    font-size: 1.125rem;
    color: var(--color-gray-600);
    line-height: 1.6;
    margin: 0 0 3rem 0;
    max-width: 700px;
  }

  .masonry-gallery {
    display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .masonry-column {
    flex: 1;
    min-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .gallery-item {
    position: relative;
    overflow: hidden;
    border-radius: var(--radius);
    background: var(--color-white);
    box-shadow: var(--shadow-sm);
  }

  .gallery-item img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;
  }

  .gallery-item:hover img {
    transform: scale(1.05);
  }

  .gallery-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .gallery-item:hover .gallery-overlay {
    opacity: 1;
  }

  .gallery-caption {
    color: white;
    font-size: 0.875rem;
    font-weight: 500;
  }

  @media (max-width: 767px) {
    .section {
      padding: 2rem 0;
    }

    .page-title {
      font-size: 2rem;
    }

    .page-description {
      font-size: 1rem;
    }

    .masonry-gallery {
      flex-direction: column;
    }

    .masonry-column {
      min-width: 100%;
    }
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    .masonry-column {
      min-width: 45%;
    }
  }
</style>
