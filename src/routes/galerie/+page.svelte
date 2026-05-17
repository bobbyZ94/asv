<script lang="ts">
  import { marked } from 'marked';
  import gallery from '../../content/sections/gallery.json';

  marked.setOptions({ breaks: false, gfm: true });

  type GalleryImage = { image: string; date?: string; caption?: string };

  function parseDate(s?: string): number {
    if (!s) return 0;
    const [d, m, y] = s.split('.').map(Number);
    return new Date(y, m - 1, d).getTime();
  }

  // Sort newest-first by date
  let sortedImages = $derived(([...((gallery.images || []) as GalleryImage[])])
    .sort((a, b) => parseDate(b.date) - parseDate(a.date)));

  // Distribute into 3 columns for masonry layout
  let columns = $derived((() => {
    const cols: GalleryImage[][] = [[], [], []];
    sortedImages.forEach((img, i) => cols[i % 3].push(img));
    return cols;
  })());
</script>

<svelte:head>
  <title>{gallery.title} - ASV Rotauge e.V.</title>
  <meta name="description" content={gallery.intro || 'Bildergalerie des Angelvereins Rotauge e.V.'} />
</svelte:head>

<div class="page">
  <section class="section">
    <div class="container">
      <span class="section-label">{gallery.section_label}</span>
      <h1 class="page-title">{gallery.title}</h1>
      {#if gallery.intro}
        <div class="page-description markdown-body">{@html marked.parse(gallery.intro)}</div>
      {/if}

      {#if sortedImages.length === 0}
        <p class="empty-state">Es wurden noch keine Bilder hochgeladen.</p>
      {:else}
        <div class="masonry-gallery">
          {#each columns as column}
            <div class="masonry-column">
              {#each column as img}
                <div class="gallery-item">
                  <img src={img.image} alt={img.caption || ''} loading="lazy" />
                  {#if img.caption}
                    <div class="gallery-overlay">
                      <span class="gallery-caption">{img.caption}</span>
                    </div>
                  {/if}
                </div>
              {/each}
            </div>
          {/each}
        </div>
      {/if}
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

  .markdown-body :global(p) { margin: 0 0 1rem 0; }
  .markdown-body :global(p:last-child) { margin-bottom: 0; }
  .markdown-body :global(strong) { font-weight: 700; }
  .markdown-body :global(em) { font-style: italic; }

  .empty-state {
    text-align: center;
    padding: 4rem 1rem;
    color: var(--color-gray-500);
    font-size: 1.125rem;
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
