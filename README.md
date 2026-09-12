# Rent App

> 🏢 **Filters that show their work** — a Vue 3 flat-finder where every active criterion stays visible as a removable chip

**Rent App** is the search page of a property developer's site: a list of flats with a filter panel above it. Floor, area and price are range sliders; project, finishing standard and completion deadline are dropdowns. Whatever is active appears as a labelled chip with its own clear button, so the list never quietly hides results behind a filter you forgot you set.

It is a static Vue 3 build published to GitHub Pages — no backend, the flats come from the component's own data.

![Vue.js](https://img.shields.io/badge/Vue.js-3-4FC08D?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-build-646CFF?logo=vite&logoColor=white)
![noUiSlider](https://img.shields.io/badge/noUiSlider-15-0E9BE0)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222222?logo=githubpages&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green)

**Live:** [rent.dawidolko.pl](https://rent.dawidolko.pl)

---

## 🎯 Key Features

- **Active filters are visible and individually clearable** — each criterion renders as a chip with its own ✕, and a counter on the mobile button says how many are on. Clearing one does not reset the rest.
- **Three range sliders, not six number fields** — floor (1–16), area (24–160 m²) and price are `@vueform/slider` ranges, which is the control the values actually call for.
- **A panel that expands** — the common filters are always visible; the rest sit behind an "extended" toggle, so the page does not open with a wall of controls.
- **Flats as cards** — `FlatCard` renders one result, so the list, the comparison and any future view share the same presentation.
- **An icon set as files, not a font** — SVGs in `src/components/icons`, imported where needed, so nothing loads a whole icon font for six glyphs.
- **Responsive layout** — the filter panel becomes a sheet on a phone; the flat list drops from a grid to a single column.

---

## 🛠️ Technology Stack

| Technology          | Version | Role                                                     |
| ------------------- | ------- | -------------------------------------------------------- |
| **Vue.js**          | 3.2     | Options API single-file components.                      |
| **Vite**            | —       | Dev server and build.                                    |
| **@vueform/slider** | 2.1     | The floor, area and price ranges.                        |
| **noUiSlider**      | 15.6    | Range slider engine behind the controls.                 |
| **vue-select**      | 4 beta  | The dropdown criteria.                                   |
| **gh-pages**        | —       | Publishing `dist/` to GitHub Pages.                      |

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### 1. Clone the repository

```bash
git clone https://github.com/dawidolko/Rent-App-Vue.git
cd Rent-App-Vue
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run

```bash
npm run dev       # development server
npm run build     # production build into dist/
npm run preview   # serve the build on :4173
npm run lint      # ESLint over .vue and .js
npm run deploy    # build and publish to GitHub Pages
```

---

## 📁 Project Structure

```
Rent-App-Vue/
├── public/                      # static files and CNAME
└── src/
    ├── App.vue                  # page composition
    ├── main.js                  # app bootstrap
    ├── components/
    │   ├── Header.vue           # navigation
    │   ├── Main.vue             # opening section
    │   ├── Filter.vue           # sliders, dropdowns, active-filter chips
    │   ├── Projects.vue         # project listing
    │   ├── Slider.vue           # gallery
    │   ├── About.vue
    │   ├── subforms/FlatCard.vue # one result
    │   └── icons/               # SVG icon set
    └── assets/
```

---

## 📄 License

MIT © [Dawid Olko](https://dawidolko.pl)
