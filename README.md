# House Reconstruction (Vite Migration)

Dieses Projekt migriert die Inhalte aus `project_Haussanierung` in ein Vite-Setup, das auf Vercel deploybar ist.

## Was wurde migriert

- React Login in `src/App.tsx`
- Benutzer-Hashes aus dem alten Projekt in `src/data/users.ts`
- ATG-Komponente in `src/components/Atg.tsx`
- Eingebundene ATG-HTML-Datei in `src/assets/atg.html`
- Originale Styles und Medien:
  - `public/css/styles.css`
  - `public/images/atg/*`
  - `public/images/fotos/*`

## Lokal starten

```bash
npm install
npm run dev
```

Dann im Browser: `http://localhost:5173`

## Build testen

```bash
npm run build
npm run preview
```

## Deploy auf Vercel

1. Repository in Vercel importieren.
2. Framework Preset: `Vite`.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.
5. Deploy ausfuehren.

Hinweis: Das Login laeuft hier clientseitig (ohne Node/Bun-Server), damit das Projekt als Vite-App direkt auf Vercel deploybar ist.
