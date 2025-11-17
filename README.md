
# 🕹️ Pokedex App

A modern, minimalist React application for browsing and searching Pokémon using the [PokeAPI](https://pokeapi.co/). Built with React 19, TypeScript, and Vite.


## ✨ Features

- 🧑‍💻 **Minimalist, Modern UI** – Clean, flat design inspired by real Pokedex devices
- 🔍 **Search** – Instantly filter Pokémon by name
- 🖼️ **Pokémon List** – Browse the first 151 Pokémon (Gen 1) with images and types
- 📋 **Details Modal** – Click a Pokémon to view stats, types, height, and weight
- ⚡ **Live Data** – All data fetched from [PokeAPI](https://pokeapi.co/)
- 📱 **Responsive** – Works great on desktop and mobile


## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Custom minimalist CSS
- **API:** [PokeAPI](https://pokeapi.co/)
- **Linting:** ESLint

ai-test-2/

## 📦 Project Structure

```
ai-test-2/
├── src/
│   ├── components/
│   │   ├── PokemonCard.tsx      # Card for each Pokémon
│   │   ├── PokemonDetails.tsx   # Modal with Pokémon details
│   │   └── PokemonList.tsx      # Main list/search component
│   ├── services/
│   │   └── api.ts               # PokeAPI service
│   ├── types/
│   │   └── pokemon.ts           # TypeScript interfaces
│   ├── App.tsx                  # Main app layout
│   ├── App.css                  # App-level styles
│   ├── main.tsx                 # Entry point
│   └── index.css                # Global styles
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript config
└── vite.config.ts               # Vite config
```


## 🚦 Getting Started

### Prerequisites

- **Node.js** 20 or higher
- **npm** 10 or higher

### 1. Clone the Repository

```bash
git clone https://github.com/grepec-swo/ai-test-2.git
cd ai-test-2
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173/`

### 4. Build for Production

```bash
npm run build
```

Production files will be in the `dist/` directory.


## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```

## 📝 Available Scripts

```bash
npm run dev      # Start development server with HMR
npm run build    # Build for production
npm run lint     # Run ESLint
npm run preview  # Preview production build locally
```


## 🎨 Design Philosophy

- **Minimalist, flat UI** – Inspired by modern Pokedex and mobile apps
- **Soft gradients & shadows** – For depth, but no clutter
- **Consistent spacing** – Clean, readable layout
- **Responsive** – Looks great on all devices


## 🤝 Development

- Clean, readable code with TypeScript
- Modular React components
- No API keys required (uses public PokeAPI)


## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- **PokeAPI** – Pokémon data provided by [PokeAPI.co](https://pokeapi.co/)
- **React Team** – For the amazing framework
- **Vite Team** – For the blazing-fast build tool

---

**Built with ❤️ using React, TypeScript, Vite, and GitHub Copilot**
