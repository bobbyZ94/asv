<script lang="ts">
  import { marked } from 'marked';
  import content from '../../content/sections/datenschutz.json';
  marked.setOptions({ breaks: false, gfm: true });
</script>

<svelte:head>
  <title>Datenschutz - ASV Rotauge e.V.</title>
  <meta name="description" content="Datenschutzerklärung des Angelverein Rotauge e.V." />
</svelte:head>

<section class="page-section">
  <div class="container">
    <h1 class="page-title">Datenschutz</h1>
    <div class="content markdown-body">
      {@html marked.parse(content.body || '')}
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
    text-align: center;
  }

  .content :global(h2) {
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--color-gray-800);
    margin-top: 3rem;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .content :global(p) {
    color: var(--color-gray-600);
    line-height: 1.9;
    margin-bottom: 0.75rem;
    text-align: center;
  }

  .content :global(a) {
    color: var(--color-primary);
    text-decoration: underline;
  }
</style>
