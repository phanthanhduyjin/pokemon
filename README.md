# Pokemon Explorer

A modern Pokemon browsing application built with Next.js 15, TypeScript, and Tailwind CSS. Features type filtering and server-side rendering for optimal performance.

## 🚀 Features

- **Server-Side Rendered Pokemon Lists** - Fast loading with SSR
- **Advanced Type Filtering** - Smart filtering logic for single, dual, and multiple types
- **Type Safety** - Full TypeScript implementation
- **Modern UI** - Clean interface with Tailwind CSS
- **Pagination** - Efficient navigation through Pokemon lists

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **API**: [PokeAPI](https://pokeapi.co/)
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
pokemon/
├── src/
│   ├── api/
│   │   └── pokemon-api.ts          # API functions for Pokemon data
│   ├── app/
│   │   ├── globals.css             # Global styles and Tailwind imports
│   │   ├── layout.tsx              # Root layout component
│   │   ├── page.tsx                # Home page (redirects to pokemon-ssr)
│   │   └── pokemon-ssr/
│   │       └── page.tsx            # Main Pokemon listing page with SSR
│   ├── components/
│   │   ├── Pagination.tsx          # Pagination component
│   │   ├── PokemonGrid.tsx         # Grid layout for Pokemon cards
│   │   ├── PokemonItem.tsx         # Individual Pokemon card
│   │   ├── PokemonTypes.tsx        # Type filter component (SSR)
│   │   ├── PokemonTypesClient.tsx  # Type filter component (Client)
│   │   └── TypeItem.tsx            # Individual type filter item
│   ├── types/
│   │   └── pokemon.ts              # TypeScript type definitions
│   └── utils/
│       ├── pokemon.ts              # Utility functions
│       └── routes.ts               # Route constants and navigation helpers
├── public/                         # Static assets
├── eslint.config.mjs              # ESLint configuration
├── next.config.ts                 # Next.js configuration
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Dependencies and scripts
```

## 🔧 Installation & Setup

### Prerequisites

- Node.js 18+
- npm, yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/phanthanhduyjin/pokemon.git

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm run start

# Format and lint code
npm run format
```

## 🎯 Core Features Explained

### Smart Type Filtering Logic

The application implements intelligent filtering based on the number of selected types:

1. **Single Type** (1 selected)
   - Shows all Pokemon of that type
   - Simple extraction logic

2. **Dual Types** (2 selected)
   - Shows Pokemon that have BOTH types (AND logic)
   - Example: Fire + Flying = Charizard

3. **Multiple Types** (3+ selected)
   - Shows Pokemon that have AT LEAST 2 of the selected types
   - Prevents empty results since Pokemon have max 2 types
   - Example: Fire + Flying + Dragon = Pokemon with (Fire+Flying) OR (Fire+Dragon) OR (Flying+Dragon)


## 🚀 Deployment

### Vercel

The easiest way to deploy is using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme):

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

[My website](https://pokemon-cyan-nu.vercel.app)

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
