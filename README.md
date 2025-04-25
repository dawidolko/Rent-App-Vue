# Rent App Vue (Vue.js, Sass, Vite)

> **Case:** Build a responsive and modern web application for showcasing rental properties. The application includes a homepage with a header, slider, apartment filter, project listings, about section, and a mobile menu. Animations and hover effects have been added to improve UX. The design was provided beforehand.

> **Tech Stack:** `Vue 3`, `JavaScript`, `SCSS`, `Vite`.

## 🚀 Usage

### Using via NPM

- Install `Node.js`: <https://nodejs.org/en/download/>
- Clone this repository:

```bash
git clone https://github.com/dawidolko/Rent-App-Vue.git
```

- Move to the project directory:

```bash
cd ./Rent-App-Vue
```

- Install project dependencies:

```bash
npm install
```

- Run the application in development mode:

```bash
npm run dev
```

- Check for linting issues:

```bash
npm run lint
```

- Build the project for production:

```bash
npm run build
```

- Output will be generated inside the `./dist` folder.

- Preview the production build locally:

```bash
npm run preview
```

---

### Using via Docker (optional)

- Install Docker: <https://www.docker.com/products/docker-desktop>
- Build and run the project:

```bash
docker build -t rent-app-vue .
docker run -p 8080:80 rent-app-vue
```

- Open `http://localhost:8080` in your browser.

---

## 🌍 Deployment to GitHub Pages

To deploy the app on GitHub Pages:

1. Install the `gh-pages` package:

```bash
npm install gh-pages --save-dev
```

2. Add the following script to your `package.json`:

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy your project:

```bash
npm run deploy
```

This will automatically create and push the `gh-pages` branch and host the project.

---

## 📁 Project Structure

```text
Rent-App-Vue
├── dist/               # Production build output
│   └── assets/         # Compiled JS/CSS assets
│
├── public/             # Static public files
│   └── images/         # Public images
│
└── src/                # Source files
    ├── assets/
    │   ├── fonts/
    │   ├── scss/
    │   └── ...
    ├── components/     # Reusable Vue components
    │   ├── icons/      # SVG icons
    │   ├── subforms/   # Sub-components
    ├── App.vue
    └── main.js
```

---

## 📸 Preview

![Full Screen Screenshot](public/images/full-screen.png)

---

## 📜 License

The **Rent App Vue** project is licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

## 🙋‍♂️ Author

Created by [Dawid Olko](https://github.com/dawidolko)

> Feel free to connect with me!

---
