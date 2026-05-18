const HTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Admin - ASV Rotauge</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  <script src="https://unpkg.com/decap-cms-locales@^3.0.0/dist/decap-cms-locales.js"></script>
  <script>
    const markdown = (label, name, required) => ({
      label,
      name,
      widget: 'markdown',
      required: required !== false,
      editor_components: []
    });
    const noPreview = { preview: false };

    if (window.DecapCmsLocales) CMS.registerLocale('de', window.DecapCmsLocales.de);
    CMS.init({
      config: {
        locale: 'de',
        backend: {
          name: 'github',
          repo: 'bobbyZ94/asv',
          branch: 'main',
          base_url: 'https://sveltia-cms-auth.r-zioltkowski.workers.dev',
          auth_endpoint: 'auth'
        },
        media_folder: 'static/uploads',
        public_folder: '/uploads',
        media_library: {
          max_file_size: 10485760
        },
        collections: [
          {
            name: 'start',
            label: 'Start',
            editor: noPreview,
            files: [{
              name: 'start',
              label: 'Start',
              file: 'src/content/sections/start.json',
              description: 'Text unter dem Logo auf dem Hero-Banner.',
              editor: noPreview,
              fields: [
                { label: 'Titel', name: 'title', widget: 'string' },
                { label: 'Untertitel', name: 'subtitle', widget: 'string' },
              ]
            }]
          },
          {
            name: 'about',
            label: 'Über Uns',
            editor: noPreview,
            files: [{
              name: 'about',
              label: 'Über Uns',
              file: 'src/content/sections/about.json',
              editor: noPreview,
              fields: [
                { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string'},
                { label: 'Titel', name: 'title', widget: 'string' },
                markdown('Text', 'body'),
                {
                  label: 'Statistik-Karten',
                  label_singular: 'Statistik-Karte',
                  name: 'stats',
                  widget: 'list',
                  collapsed: true,
                  summary: '{{fields.number}} {{fields.label}}',
                  fields: [
                    { label: 'Zahl', name: 'number', widget: 'string' },
                    { label: 'Bezeichnung', name: 'label', widget: 'string' }
                  ]
                }
              ]
            }]
          },
          {
            name: 'events',
            label: 'Termine',
            editor: noPreview,
            files: [{
              name: 'events',
              label: 'Termine',
              file: 'src/content/sections/events.json',
              editor: noPreview,
              fields: [
                { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                { label: 'Titel', name: 'title', widget: 'string' },
                {
                  label: 'Veranstaltungen',
                  label_singular: 'Veranstaltung',
                  name: 'events',
                  widget: 'list',
                  collapsed: true,
                  summary: '{{fields.date}} - {{fields.title}}',
                  fields: [
                    {
                      label: 'Datum',
                      name: 'date',
                      widget: 'datetime',
                      date_format: 'dd.MM.yyyy',
                      time_format: false,
                      format: 'dd.MM.yyyy',
                      picker_utc: false
                    },
                    { label: 'Typ', name: 'type', widget: 'select', options: ['Arbeitsdienst', 'Jugend', 'Versammlung', 'Fest', 'Sonstiges'] },
                    { label: 'Titel', name: 'title', widget: 'string' },
                    { label: 'Ort', name: 'location', widget: 'string' },
                    { label: 'Uhrzeit', name: 'time', widget: 'string' },
                    markdown('Beschreibung', 'description')
                  ]
                }
              ]
            }]
          },
          {
            name: 'schonzeiten',
            label: 'Schonzeiten',
            editor: noPreview,
            files: [{
              name: 'schonzeiten',
              label: 'Schonzeiten',
              file: 'src/content/sections/schonzeiten.json',
              editor: noPreview,
              fields: [
                { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                { label: 'Titel', name: 'title', widget: 'string' },
                markdown('Einführungstext', 'intro'),
                {
                  label: 'Fischarten',
                  label_singular: 'Fischart',
                  name: 'fish',
                  widget: 'list',
                  collapsed: true,
                  summary: '{{fields.species}} - {{fields.season}}',
                  fields: [
                    { label: 'Fischart', name: 'species', widget: 'string' },
                    { label: 'Schonzeit', name: 'season', widget: 'string', hint: 'z.B. 01.04. - 31.05.' },
                    { label: 'Mindestmaß', name: 'min_size', widget: 'string', hint: 'z.B. 35 cm' }
                  ]
                }
              ]
            }]
          },
          {
            name: 'membership',
            label: 'Mitgliedschaft',
            editor: noPreview,
            files: [
              {
                name: 'membership',
                label: 'Allgemein',
                file: 'src/content/sections/membership.json',
                editor: noPreview,
                fields: [
                  { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                  { label: 'Titel', name: 'title', widget: 'string' },
                  markdown('Einführungstext', 'intro'),
                  { label: 'Hinweistext', name: 'disclaimer', widget: 'string', required: false },
                  { label: 'Gebührenordnung (PDF)', name: 'disclaimer_file', widget: 'file', required: false },
                  { label: 'Aufnahmeformular (PDF)', name: 'membership_form_file', widget: 'file', required: false },
                  { label: 'Satzung (PDF)', name: 'satzung_file', widget: 'file', required: false },
                ]
              },
              {
                name: 'membership_erwachsene',
                label: 'Beiträge - Erwachsene',
                file: 'src/content/sections/membership_erwachsene.json',
                editor: noPreview,
                fields: [{
                  label: 'Einträge', name: 'entries', widget: 'list',
                  summary: '{{fields.label}} - {{fields.price}}',
                  fields: [
                    { label: 'Bezeichnung', name: 'label', widget: 'string' },
                    { label: 'Preis', name: 'price', widget: 'string' }
                  ]
                }]
              },
              {
                name: 'membership_kinder',
                label: 'Beiträge - Kinder',
                file: 'src/content/sections/membership_kinder.json',
                editor: noPreview,
                fields: [{
                  label: 'Einträge', name: 'entries', widget: 'list',
                  summary: '{{fields.label}} - {{fields.price}}',
                  fields: [
                    { label: 'Bezeichnung', name: 'label', widget: 'string' },
                    { label: 'Preis', name: 'price', widget: 'string' }
                  ]
                }]
              },
              {
                name: 'membership_familie',
                label: 'Beiträge - Familie',
                file: 'src/content/sections/membership_familie.json',
                editor: noPreview,
                fields: [{
                  label: 'Einträge', name: 'entries', widget: 'list',
                  summary: '{{fields.label}} - {{fields.price}}',
                  fields: [
                    { label: 'Bezeichnung', name: 'label', widget: 'string' },
                    { label: 'Preis', name: 'price', widget: 'string' }
                  ]
                }]
              }
            ]
          },
          {
            name: 'contact',
            label: 'Kontakt',
            editor: noPreview,
            files: [{
              name: 'contact',
              label: 'Kontakt',
              file: 'src/content/sections/contact.json',
              editor: noPreview,
              fields: [
                { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                { label: 'Titel', name: 'title', widget: 'string' },
                markdown('Adresse', 'address'),
                { label: 'E-Mail', name: 'email', widget: 'string' },
                { label: 'Telefon', name: 'phone', widget: 'string' }
              ]
            }]
          },
          {
            name: 'impressum',
            label: 'Impressum',
            editor: noPreview,
            files: [{
              name: 'impressum',
              label: 'Impressum',
              file: 'src/content/sections/impressum.json',
              editor: noPreview,
              fields: [
                { label: 'Inhalt', name: 'body', widget: 'markdown', editor_components: [] }
              ]
            }]
          },
          {
            name: 'datenschutz',
            label: 'Datenschutz',
            editor: noPreview,
            files: [{
              name: 'datenschutz',
              label: 'Datenschutz',
              file: 'src/content/sections/datenschutz.json',
              editor: noPreview,
              fields: [
                { label: 'Inhalt', name: 'body', widget: 'markdown', editor_components: [] }
              ]
            }]
          },
          {
            name: 'gallery',
            label: 'Galerie',
            editor: noPreview,
            files: [{
              name: 'gallery',
              label: 'Galerie',
              file: 'src/content/sections/gallery.json',
              editor: noPreview,
              fields: [
                { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                { label: 'Titel', name: 'title', widget: 'string' },
                {
                  label: 'Bilder',
                  label_singular: 'Bild',
                  name: 'images',
                  widget: 'list',
                  collapsed: true,
                  summary: '{{fields.date}} - {{fields.caption}}',
                  fields: [
                    { label: 'Bild', name: 'image', widget: 'image' },
                    {
                      label: 'Datum',
                      name: 'date',
                      widget: 'datetime',
                      date_format: 'dd.MM.yyyy',
                      time_format: false,
                      format: 'dd.MM.yyyy',
                      picker_utc: false
                    },
                    { label: 'Beschriftung', name: 'caption', widget: 'string', required: false }
                  ]
                }
              ]
            }]
          }
        ]
      }
    });
  </script>
</body>
</html>`;

export function GET() {
  return new Response(HTML, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8'
    }
  });
}
