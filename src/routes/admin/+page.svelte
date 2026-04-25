<script lang="ts">
	import { onMount } from 'svelte';
	import '@sveltia/cms';

	onMount(() => {
		if (window.CMS) {
			window.CMS.init({
				config: {
					backend: {
						name: 'git-gateway',
						branch: 'main'
					},
					media_folder: 'static/media',
					public_folder: '/media',
					collections: [
						{
							name: 'pages',
							label: 'Seiten',
							files: [
								{
									name: 'home',
									label: 'Startseite',
									file: 'src/content/pages/home.md',
									fields: [
										{ name: 'title', label: 'Titel', widget: 'string' },
										{ name: 'hero_title', label: 'Hero Titel', widget: 'string' },
										{ name: 'hero_subtitle', label: 'Hero Untertitel', widget: 'string' },
										{ name: 'content', label: 'Inhalt', widget: 'markdown' }
									]
								},
								{
									name: 'about',
									label: 'Über uns',
									file: 'src/content/pages/about.md',
									fields: [
										{ name: 'title', label: 'Titel', widget: 'string' },
										{ name: 'content', label: 'Inhalt', widget: 'markdown' }
									]
								}
							]
						},
						{
							name: 'news',
							label: 'Neuigkeiten',
							folder: 'src/content/news',
							create: true,
							slug: '{{year}}-{{month}}-{{slug}}',
							fields: [
								{ name: 'title', label: 'Titel', widget: 'string' },
								{ name: 'date', label: 'Datum', widget: 'datetime' },
								{ name: 'content', label: 'Inhalt', widget: 'markdown' }
							]
						},
						{
							name: 'events',
							label: 'Veranstaltungen',
							folder: 'src/content/events',
							create: true,
							slug: '{{year}}-{{month}}-{{slug}}',
							fields: [
								{ name: 'title', label: 'Titel', widget: 'string' },
								{ name: 'date', label: 'Datum', widget: 'datetime' },
								{ name: 'location', label: 'Ort', widget: 'string' },
								{ name: 'description', label: 'Beschreibung', widget: 'markdown' }
							]
						}
					]
				}
			});
		}
	});
</script>

<svelte:head>
	<title>CMS - Angelverein</title>
</svelte:head>

<div id="cms-root"></div>

<style>
	:global(body) {
		margin: 0;
	}
</style>
