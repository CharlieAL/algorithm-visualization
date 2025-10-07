# Algorithm Visualizer

An interactive algorithm visualization tool built with Astro.
It allows users to explore different algorithms grouped by categories such as sorting, searching, and graph traversal — each with its own description, complexity, and visual step-by-step implementation.

## 🚀 Features

- Categorized algorithm list (sorting, searching, graph)

- Markdown-based descriptions with metadata

- Visual and interactive algorithm pages

- Easy to contribute with minimal setup

## 🧩 Project Structure

```
├── src/
│ ├── components/ # Shared components
│ └── pages/
│ ├── sorting/
│ │ ├── bubble-sort.astro
│ │ ├── merge-sort.astro
│ │ └── ...
│ ├── searching/
│ └── graph/
│
├── content/
│ └── algorithms/ # Markdown metadata for each algorithm
│ ├── bubble-sort.md
│ ├── merge-sort.md
│ └── ...
│
├── astro.config.mjs
├── package.json
└── README.md

```

## 🛠️ Installation & Setup

Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/algorithm-visualizer.git
cd algorithm-visualizer
npm install
```

Run the development server:

```bash
npm run dev
bun run dev
pnpm run dev
```

## 🧠 Adding a New Algorithm

There are two parts to adding a new algorithm:

### 1️⃣ Add the description (Markdown file)

Go to content/algorithms/ and create a new .md file:

```md
---
title: Quick Sort
description: A divide-and-conquer sorting algorithm.
timeComplexity: O(n log n)
spaceComplexity: O(log n)
category: sorting
---

Quick Sort works by selecting a 'pivot' element and partitioning the array...
```

## 2️⃣ Add the algorithm logic (Astro page)

category = 'sorting', 'searching', 'graph'

Inside src/pages/{category}/,
create a new Astro page for your algorithm.
Example for Quick Sort:

```bash
src/pages/sorting/quick-sort.astro
```

In that file, you can implement your visualization logic, for example using JavaScript, Canvas, or Web Components.

Example (simplified):

```astro
<LayoutVisualize
  title="Bubble Sort Visualization"
  description="Visual representation of the Bubble Sort algorithm."
>
  <section
    id="container"
    class="relative flex h-80 w-full items-center gap-0 overflow-hidden rounded-lg border border-black/10 transition-all"
  >
    <!-- Bars will be dynamically generated here -->
  </section>
</LayoutVisualize>
```

# 🤝 Contributing

We welcome contributions from everyone!

- You can contribute by:

- Reporting bugs

- Adding new features

- Improving existing visualizations

- Enhancing documentation

## Contribution Workflow

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes

```bash
git commit -m "Add: new sorting algorithm - Quick Sort"
```

4. Push your branch

```bash
git push origin feature/your-feature-name
```

## 🧾 Content Config

Defined in src/content/config.ts:

```ts
import { defineCollection, z } from 'astro:content'

const algorithms = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    timeComplexity: z.string().optional(),
    spaceComplexity: z.string().optional(),
    category: z.enum(['sorting', 'searching', 'graph']),
  }),
})

export const collections = { algorithms }
```
