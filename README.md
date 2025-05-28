# Rent-App-Vue

> 🚀 **Modern Rental Property Platform with Vue.js** - Build responsive web applications for showcasing rental properties with advanced filtering

## 📋 Description

Welcome to the **Rent-App-Vue** repository! This project showcases a responsive and modern web application for showcasing rental properties built with Vue.js and Vite. The application features a comprehensive homepage with header, slider, apartment filtering system, project listings, about section, and mobile menu with smooth animations and hover effects for enhanced user experience.

This repository demonstrates best practices in Vue.js development, component-based architecture, and modern build tools for real estate and property rental platforms.

## 📁 Repository Structure

```
Rent-App-Vue/
├── 📁 dist/             # Production build output
│   └── 🎨 assets/       # Compiled JS/CSS assets
├── 📁 public/           # Static public files
│   └── 🖼️ images/       # Public images and media
└── 📁 src/              # Source files
    ├── 🎨 assets/
    │   ├── 🔤 fonts/     # Custom fonts
    │   ├── 🎨 scss/      # SCSS styling files
    │   └── ...
    ├── ⚛️ components/    # Reusable Vue components
    │   ├── 🔧 icons/     # SVG icons
    │   ├── 📋 subforms/  # Sub-components
    ├── 💻 App.vue        # Main application component
    └── 🚀 main.js        # Application entry point
```

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/dawidolko/Rent-App-Vue.git
cd Rent-App-Vue
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

### 4. Additional Commands
```bash
# Check for linting issues
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview
```

## ⚙️ System Requirements

### **Essential Tools:**
- **Node.js** (latest LTS version recommended)
- **npm** or **yarn** package manager
- **Modern Web Browser** (Chrome, Firefox, Safari, Edge)
- **Git** for version control

### **Development Environment:**
- **Code Editor** (VS Code, WebStorm, Sublime Text)
- **Vue.js DevTools** browser extension
- **Vite** development server (included)

### **Recommended Extensions:**
- **Vue.js** syntax highlighting (Vetur or Volar)
- **Sass/SCSS** support
- **Prettier** for code formatting
- **ESLint** for code quality
- **Auto Rename Tag** for Vue template editing

### **Vue.js Ecosystem:**
- **Vue 3** (Composition API)
- **Vite** for fast build tooling
- **SCSS/Sass** for styling
- **JavaScript (ES6+)** for logic

### **Optional Tools:**
- **Docker** for containerized deployment
- **GitHub Pages** for hosting

## ✨ Key Features

### **🏠 Property Showcase**
- Comprehensive rental property listings with detailed information
- Interactive property slider with smooth transitions
- Advanced apartment filtering system by price, location, and features

### **📱 Responsive Design**
- Fully optimized for mobile, tablet, and desktop devices
- Mobile-first approach with collapsible navigation menu
- Modern Vue.js responsive patterns

### **⚡ Interactive User Experience**
- Smooth animations and hover effects throughout the application
- Dynamic filtering and search functionality
- Intuitive navigation with mobile-optimized menu

### **🎨 Modern UI/UX**
- Component-based Vue.js architecture for maintainability
- Modular SCSS styling with organized file structure
- Professional design following provided specifications

### **🚀 Performance Optimized**
- Vite build system for fast development and production builds
- Optimized assets and efficient bundle splitting
- Smooth animations and transitions

## 🛠️ Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **JavaScript (ES6+)** - Modern JavaScript features
- **SCSS/Sass** - Advanced CSS preprocessing
- **Vite** - Next-generation frontend build tool
- **Git** - Version control and collaboration

## 🐳 Docker Deployment (Optional)

For containerized deployment:

```bash
# Install Docker: https://www.docker.com/products/docker-desktop
docker build -t rent-app-vue .
docker run -p 8080:80 rent-app-vue
```

Open `http://localhost:8080` in your browser.

## 🌍 GitHub Pages Deployment

To deploy on GitHub Pages:

1. Install gh-pages package:
```bash
npm install gh-pages --save-dev
```

2. Add deploy script to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Deploy your project:
```bash
npm run deploy
```

## 🖼️ Preview

![Full Screen Screenshot](public/images/full-screen.png)

## 🤝 Contributing

Contributions are highly welcomed! Here's how you can help:

- 🐛 **Report bugs** - Found an issue? Let us know!
- 💡 **Suggest improvements** - Have ideas for better features?
- 🔧 **Submit pull requests** - Share your enhancements and solutions
- 📖 **Improve documentation** - Help make the project clearer

Feel free to open issues or reach out through GitHub for any questions or suggestions.

## 👨‍💻 Author

Created by **[Dawid Olko](https://github.com/dawidolko)** - Feel free to connect with me!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ **Found this helpful?** Give it a star and share with fellow Vue.js developers!