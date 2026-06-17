# Vikas — Frontend Engineer Portfolio

A personal portfolio built with React, Tailwind CSS v4, and Vite. Dark terminal aesthetic with matrix-style canvas background, glass-morphism cards, and a copper accent palette.

**Live:** [vikas.dev](https://your-domain.netlify.app)

## Tech Stack

- **React 19** + **Vite 8** — fast dev & build
- **Tailwind CSS v4** — utility-first styling via `@tailwindcss/vite`
- **React Router 7** — client-side routing
- **Lucide React** — icon system
- **Netlify** — deployment & SPA redirects

## Features

- Matrix rain canvas background with Japanese characters
- Responsive navbar with mobile drawer
- Terminal-style cards (`TerminalCard` component)
- Glass-morphism cards with hover effects
- Certificate gallery with lightbox
- Contact page with copy-to-clipboard
- Custom SVG project illustrations
- Reduced-motion support

## Pages

| Route | Description |
|---|---|
| `/` | Hero, skills, education, mission |
| `/about` | Profile, values, terminal story |
| `/projects` | Project showcase with screenshots lightbox |
| `/certificates` | Certificate grid with zoom preview |
| `/contact` | Email, phone, GitHub, Instagram |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint
npm run lint
```

## Project Structure

```
src/
├── App.jsx              # Router + layout
├── main.jsx             # Entry point
├── index.css            # Tailwind theme, animations, global styles
├── components/
│   ├── navbar.jsx       # Responsive navigation
│   ├── footer.jsx       # Footer with skills & links
│   ├── SystemBg.jsx     # Matrix canvas background
│   ├── TerminalCard.jsx # Reusable terminal window card
│   ├── top.jsx          # Hero section + skills grid
│   └── img/             # Icons, logos, illustrations
├── pages/
│   ├── home.jsx
│   ├── about.jsx
│   ├── Projects.jsx     # Projects with lightbox
│   ├── certificate.jsx  # Certificate gallery
│   ├── Contact.jsx
│   └── screenshots/     # Project screenshots for lightbox
```

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `canvas` | `#050505` | Page background |
| `panel` | `#0a0a0a` | Footer, large panels |
| `surface` | `#0c0c0e` | Cards |
| `elevated` | `#131316` | Inputs, chips |
| `line` | `#1d1d22` | Borders |
| `ink` | `#f4f4f5` | Primary text |
| `muted` | `#a1a1aa` | Secondary text |
| `accent` | `#c17f4e` | Copper accent |

## Author

**Vikas Maurya** — Frontend Developer, Delhi IN
- GitHub: [vikasmourya10](https://github.com/vikasmourya10)
- Email: t4tokito@gmail.com
