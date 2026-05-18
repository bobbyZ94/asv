export const prerender = true;

const CONFIG = `backend:
  name: github
  repo: bobbyZ94/asv
  branch: main
  base_url: https://sveltia-cms-auth.r-zioltkowski.workers.dev
  auth_endpoint: auth
locale: de
media_folder: static/uploads
public_folder: /uploads
collections:
  - name: start
    label: Start
    editor:
      preview: false
    files:
      - name: start
        label: Start
        file: src/content/sections/start.json
        description: Text unter dem Logo auf dem Hero-Banner.
        editor:
          preview: false
        fields:
          - { label: Titel, name: title, widget: string }
          - { label: Untertitel, name: subtitle, widget: string }

  - name: about
    label: Über Uns
    editor:
      preview: false
    files:
      - name: about
        label: Über Uns
        file: src/content/sections/about.json
        editor:
          preview: false
        fields:
          - { label: Bereichsbezeichnung, name: section_label, widget: string }
          - { label: Titel, name: title, widget: string }
          - { label: Text, name: body, widget: markdown, required: true, editor_components: [] }
          - label: Statistik-Karten
            label_singular: Statistik-Karte
            name: stats
            widget: list
            collapsed: true
            summary: '{{fields.number}} {{fields.label}}'
            fields:
              - { label: Zahl, name: number, widget: string }
              - { label: Bezeichnung, name: label, widget: string }

  - name: events
    label: Termine
    editor:
      preview: false
    files:
      - name: events
        label: Termine
        file: src/content/sections/events.json
        editor:
          preview: false
        fields:
          - { label: Bereichsbezeichnung, name: section_label, widget: string }
          - { label: Titel, name: title, widget: string }
          - label: Veranstaltungen
            label_singular: Veranstaltung
            name: events
            widget: list
            collapsed: true
            summary: '{{fields.date}} - {{fields.title}}'
            fields:
              - { label: Datum, name: date, widget: datetime, date_format: YYYY-MM-DD, time_format: false, format: YYYY-MM-DD, picker_utc: false }
              - { label: Typ, name: type, widget: select, options: [Arbeitsdienst, Jugend, Versammlung, Fest, Sonstiges] }
              - { label: Titel, name: title, widget: string }
              - { label: Ort, name: location, widget: string }
              - { label: Uhrzeit, name: time, widget: string }
              - { label: Beschreibung, name: description, widget: markdown, required: true, editor_components: [] }

  - name: schonzeiten
    label: Schonzeiten
    editor:
      preview: false
    files:
      - name: schonzeiten
        label: Schonzeiten
        file: src/content/sections/schonzeiten.json
        editor:
          preview: false
        fields:
          - { label: Bereichsbezeichnung, name: section_label, widget: string }
          - { label: Titel, name: title, widget: string }
          - { label: Einführungstext, name: intro, widget: markdown, required: true, editor_components: [] }
          - label: Fischarten
            label_singular: Fischart
            name: fish
            widget: list
            collapsed: true
            summary: '{{fields.species}} - {{fields.season}}'
            fields:
              - { label: Fischart, name: species, widget: string }
              - { label: Schonzeit, name: season, widget: string, hint: 'z.B. 01.04. - 31.05.' }
              - { label: Mindestmaß, name: min_size, widget: string, hint: 'z.B. 35 cm' }

  - name: membership
    label: Mitgliedschaft
    editor:
      preview: false
    files:
      - name: membership
        label: Allgemein
        file: src/content/sections/membership.json
        editor:
          preview: false
        fields:
          - { label: Bereichsbezeichnung, name: section_label, widget: string }
          - { label: Titel, name: title, widget: string }
          - { label: Einführungstext, name: intro, widget: markdown, required: true, editor_components: [] }
          - { label: Disclaimer-Text, name: disclaimer, widget: string, required: false }
          - { label: Gebührenordnung PDF, name: disclaimer_file, widget: file, required: false }
      - name: membership_erwachsene
        label: Beiträge - Erwachsene
        file: src/content/sections/membership_erwachsene.json
        editor:
          preview: false
        fields:
          - label: Einträge
            name: entries
            widget: list
            summary: '{{fields.label}} - {{fields.price}}'
            fields:
              - { label: Bezeichnung, name: label, widget: string }
              - { label: Preis, name: price, widget: string }
      - name: membership_kinder
        label: Beiträge - Kinder
        file: src/content/sections/membership_kinder.json
        editor:
          preview: false
        fields:
          - label: Einträge
            name: entries
            widget: list
            summary: '{{fields.label}} - {{fields.price}}'
            fields:
              - { label: Bezeichnung, name: label, widget: string }
              - { label: Preis, name: price, widget: string }
      - name: membership_familie
        label: Beiträge - Familie
        file: src/content/sections/membership_familie.json
        editor:
          preview: false
        fields:
          - label: Einträge
            name: entries
            widget: list
            summary: '{{fields.label}} - {{fields.price}}'
            fields:
              - { label: Bezeichnung, name: label, widget: string }
              - { label: Preis, name: price, widget: string }

  - name: contact
    label: Kontakt
    editor:
      preview: false
    files:
      - name: contact
        label: Kontakt
        file: src/content/sections/contact.json
        editor:
          preview: false
        fields:
          - { label: Bereichsbezeichnung, name: section_label, widget: string }
          - { label: Titel, name: title, widget: string }
          - { label: Adresse, name: address, widget: markdown, required: true, editor_components: [] }
          - { label: E-Mail, name: email, widget: string }
          - { label: Telefon, name: phone, widget: string }

  - name: impressum
    label: Impressum
    editor:
      preview: false
    files:
      - name: impressum
        label: Impressum
        file: src/content/sections/impressum.json
        editor:
          preview: false
        fields:
          - { label: Inhalt, name: body, widget: markdown, editor_components: [] }

  - name: datenschutz
    label: Datenschutz
    editor:
      preview: false
    files:
      - name: datenschutz
        label: Datenschutz
        file: src/content/sections/datenschutz.json
        editor:
          preview: false
        fields:
          - { label: Inhalt, name: body, widget: markdown, editor_components: [] }

  - name: gallery
    label: Galerie
    editor:
      preview: false
    files:
      - name: gallery
        label: Galerie
        file: src/content/sections/gallery.json
        editor:
          preview: false
        fields:
          - { label: Bereichsbezeichnung, name: section_label, widget: string }
          - { label: Titel, name: title, widget: string }
          - label: Bilder
            label_singular: Bild
            name: images
            widget: list
            collapsed: true
            summary: '{{fields.date}} - {{fields.caption}}'
            fields:
              - { label: Bild, name: image, widget: image }
              - { label: Datum, name: date, widget: datetime, date_format: dd.MM.yyyy, time_format: false, format: dd.MM.yyyy, picker_utc: false }
              - { label: Beschriftung, name: caption, widget: string, required: false }
`;

export function GET() {
  return new Response(CONFIG, {
    headers: {
      'Content-Type': 'text/yaml; charset=utf-8'
    }
  });
}
