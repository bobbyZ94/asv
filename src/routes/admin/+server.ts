export const prerender = true;

const HTML = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Admin - ASV Rotauge</title>
  <link rel="stylesheet" href="https://unpkg.com/@staticcms/app@^4.0.0/dist/main.css" />
</head>
<body>
  <script src="https://unpkg.com/@staticcms/app@^4.0.0/dist/static-cms-app.js"></script>
  <script>
    CMS.init({
      config: {
        locale: 'de',
        backend: {
          name: 'gitlab',
          repo: 'r.zioltkowski/asv',
          branch: 'main',
          auth_type: 'pkce',
          app_id: '5353a5d31a12c810d32579be2e0eae5f15f47ebaf41877d80dd64c1b1f791968'
        },
        media_folder: 'static/uploads',
        public_folder: '/uploads',
        collections: [
          {
            name: 'sections',
            label: 'Seitenbereiche',
            label_singular: 'Seitenbereich',
            description: 'Bearbeite die Inhalte der einzelnen Seitenbereiche.',
            files: [
              {
                name: 'start',
                label: 'Start (Hero-Banner)',
                file: 'src/content/sections/start.json',
                description: 'Text unter dem Logo auf dem Hero-Banner.',
                fields: [
                  { label: 'Titel', name: 'title', widget: 'string', hint: 'Große Überschrift unter dem Logo' },
                  { label: 'Untertitel', name: 'subtitle', widget: 'string', hint: 'Kleinerer Text unter der Überschrift' },
                  { label: 'Button 1 - Beschriftung', name: 'button1_label', widget: 'string', required: false },
                  { label: 'Button 2 - Beschriftung', name: 'button2_label', widget: 'string', required: false }
                ]
              },
              {
                name: 'about',
                label: 'Über Uns',
                file: 'src/content/sections/about.json',
                fields: [
                  { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string', hint: 'Kleiner Text über dem Titel' },
                  { label: 'Titel', name: 'title', widget: 'string' },
                  { label: 'Absatz 1', name: 'paragraph1', widget: 'text' },
                  { label: 'Absatz 2', name: 'paragraph2', widget: 'text', required: false },
                  {
                    label: 'Statistik-Karten',
                    name: 'stats',
                    widget: 'list',
                    summary: '{{fields.number}} {{fields.label}}',
                    fields: [
                      { label: 'Zahl', name: 'number', widget: 'string' },
                      { label: 'Bezeichnung', name: 'label', widget: 'string' }
                    ]
                  }
                ]
              },
              {
                name: 'events',
                label: 'Termine',
                file: 'src/content/sections/events.json',
                fields: [
                  { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                  { label: 'Titel', name: 'title', widget: 'string' },
                  {
                    label: 'Veranstaltungen',
                    name: 'events',
                    widget: 'list',
                    summary: '{{fields.day}}.{{fields.month}} {{fields.year}} - {{fields.title}}',
                    fields: [
                      { label: 'Tag', name: 'day', widget: 'string', hint: 'z.B. 15' },
                      { label: 'Monat', name: 'month', widget: 'string', hint: 'z.B. März' },
                      { label: 'Jahr', name: 'year', widget: 'string', hint: 'z.B. 2026' },
                      { label: 'Typ', name: 'type', widget: 'select', options: ['Arbeitsdienst', 'Jugend', 'Versammlung', 'Fest', 'Sonstiges'] },
                      { label: 'Titel', name: 'title', widget: 'string' },
                      { label: 'Ort', name: 'location', widget: 'string' },
                      { label: 'Uhrzeit', name: 'time', widget: 'string' },
                      { label: 'Beschreibung', name: 'description', widget: 'text' }
                    ]
                  }
                ]
              },
              {
                name: 'schonzeiten',
                label: 'Schonzeiten',
                file: 'src/content/sections/schonzeiten.json',
                fields: [
                  { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                  { label: 'Titel', name: 'title', widget: 'string' },
                  { label: 'Einführungstext', name: 'intro', widget: 'text' },
                  {
                    label: 'Fischarten',
                    name: 'fish',
                    widget: 'list',
                    summary: '{{fields.species}} - {{fields.season}}',
                    fields: [
                      { label: 'Fischart', name: 'species', widget: 'string' },
                      { label: 'Schonzeit', name: 'season', widget: 'string', hint: 'z.B. 01.04. - 31.05.' },
                      { label: 'Mindestmaß', name: 'min_size', widget: 'string', hint: 'z.B. 35 cm' }
                    ]
                  }
                ]
              },
              {
                name: 'membership',
                label: 'Mitgliedschaft',
                file: 'src/content/sections/membership.json',
                fields: [
                  { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                  { label: 'Titel', name: 'title', widget: 'string' },
                  { label: 'Einführungstext', name: 'intro', widget: 'text' },
                  {
                    label: 'Mitgliedschafts-Optionen',
                    name: 'plans',
                    widget: 'list',
                    summary: '{{fields.title}} - {{fields.price}}',
                    fields: [
                      { label: 'Titel', name: 'title', widget: 'string' },
                      { label: 'Preis', name: 'price', widget: 'string', hint: 'z.B. €80/Jahr' },
                      { label: 'Hervorgehoben', name: 'featured', widget: 'boolean', default: false, required: false },
                      {
                        label: 'Vorteile',
                        name: 'features',
                        widget: 'list',
                        field: { label: 'Vorteil', name: 'feature', widget: 'string' }
                      }
                    ]
                  }
                ]
              },
              {
                name: 'contact',
                label: 'Kontakt',
                file: 'src/content/sections/contact.json',
                fields: [
                  { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                  { label: 'Titel', name: 'title', widget: 'string' },
                  { label: 'Adresse', name: 'address', widget: 'text' },
                  { label: 'E-Mail', name: 'email', widget: 'string' },
                  { label: 'Telefon', name: 'phone', widget: 'string' }
                ]
              },
              {
                name: 'gallery',
                label: 'Galerie',
                file: 'src/content/sections/gallery.json',
                fields: [
                  { label: 'Bereichsbezeichnung', name: 'section_label', widget: 'string' },
                  { label: 'Titel', name: 'title', widget: 'string' },
                  { label: 'Einführungstext', name: 'intro', widget: 'text', required: false },
                  {
                    label: 'Bilder',
                    name: 'images',
                    widget: 'list',
                    summary: '{{fields.caption}}',
                    fields: [
                      { label: 'Bild', name: 'image', widget: 'image' },
                      { label: 'Beschriftung', name: 'caption', widget: 'string', required: false }
                    ]
                  }
                ]
              }
            ]
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
