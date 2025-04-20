# 🧱 Component Library

A reusable, customizable, and accessible component library built with React, TypeScript, and styled-components/TailwindCSS. Designed for B2B enterprise apps with a focus on consistency, scalability, and developer experience.

## 🚀 Project Overview

This library includes core UI components like buttons, inputs, modals, and more—each built with performance and accessibility in mind. Developed as part of a frontend interview assignment focused on Color, Data Display, and Navigation.

## 📂 Folder Structure

```bash
Component-Library/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Button/       # Button component + stories + styles
│   │   ├── Card/         # Card component
│   │   └── ...           # More components (Data Display, Navigation)
│   ├── styles/           # Global styles / tokens
│   ├── tokens/           # Design tokens (colors, spacing, typography)
│   ├── utils/            # Helper functions (e.g., classNames, theming)
│   └── index.ts          # Entry point for exports
├── .storybook/           # Storybook config files
├── .gitignore
├── package.json
├── README.md
└── tsconfig.json
