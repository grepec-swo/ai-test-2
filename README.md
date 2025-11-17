# ai-test-2

A React + TypeScript starter project built with Vite, automatically deployed to GitHub Pages.

## 🚀 Live Demo

Once deployed, the application will be available at: `https://grepec-swo.github.io/ai-test-2/`

## 📦 Features

- ⚛️ **React 19** - Latest version of React
- 🔷 **TypeScript** - Type safety and better developer experience
- ⚡ **Vite** - Lightning fast build tool with HMR (Hot Module Replacement)
- 🎨 **ESLint** - Code quality and consistency
- 🚀 **GitHub Actions** - Automatic deployment to GitHub Pages on push to main branch

## 🛠️ Development

### Prerequisites

- Node.js 20 or higher
- npm 10 or higher

### Installation

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Lint Code

```bash
npm run lint
```

### Preview Production Build

```bash
npm run preview
```

## 🚀 Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions (see `.github/workflows/deploy.yml`).

### Manual Deployment

You can also trigger a manual deployment from the Actions tab in GitHub.

## 📁 Project Structure

```
ai-test-2/
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions workflow for deployment
├── public/                  # Static assets
├── src/
│   ├── assets/             # Images and other assets
│   ├── App.tsx             # Main App component
│   ├── App.css             # App styles
│   ├── main.tsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── vite.config.ts          # Vite configuration
└── README.md              # This file
```

## 📝 Vite + React + TypeScript

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
