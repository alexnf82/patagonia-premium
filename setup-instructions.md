# 🏗️ Setup React + shadcn/ui + Tailwind + TypeScript

## 1. Criar novo projeto Next.js

```bash
npx create-next-app@latest patagonia-premium --typescript --tailwind --eslint --app --src-dir --import-alias "@/*"
cd patagonia-premium
```

## 2. Configurar shadcn/ui

```bash
npx shadcn-ui@latest init
```

Escolha as seguintes opções:
- Would you like to use TypeScript? → Yes
- Which style would you like to use? → Default
- Which color would you like to use as base color? → Slate
- Where is your global CSS file? → src/app/globals.css
- Would you like to use CSS variables for colors? → Yes
- Where is your tailwind.config.js located? → tailwind.config.js
- Configure the import alias for components? → src/components
- Configure the import alias for utils? → src/lib/utils

## 3. Instalar dependências necessárias

```bash
npm install framer-motion usehooks-ts lucide-react
```

## 4. Estrutura de pastas

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       └── expandable-tabs.tsx
└── lib/
    └── utils.ts
```
