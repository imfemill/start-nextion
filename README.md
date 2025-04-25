## Folder Structure

```mermaid
graph TD
    A[my-nextjs-app] --> B[public/]
    A --> C[src/]
    A --> D[.env.local]
    A --> E[next.config.js]
    A --> F[tsconfig.json]
    A --> G[tailwind.config.ts]
    A --> H[postcss.config.js]
    A --> I[README.md]
    
    C --> C1[app/]
    C1 --> C1a[layout.tsx]
    C1 --> C1b[page.tsx]
    C1 --> C1c[(routes)]
    C1 --> C1c[(auth)]
    C1 --> C1d[api/]
    
    C --> C2[components/]
    C --> C3[features/]
    C --> C4[styles/]
    C --> C5[lib/]
    C --> C6[hooks/]
    C --> C7[types/]
    C --> C8[constants/]
    C --> C9[services/]
    C --> C10[store/]
    C --> C11[config/]
    C --> C12[middleware.ts]


## 🧭 Explanation

- **`public/`** – Static assets like images, icons, or `robots.txt`.
- **`src/app/`** – Root for routing and layouts in App Router-based structure.
- **`components/`** – Shared UI building blocks, split for clarity (`ui/`, `form/`, `layout/`).
- **`features/`** – Encapsulated features like authentication, dashboard logic, etc.
- **`styles/`** – Tailwind base config or global styles.
- **`lib/`** – Helper functions, formatters, etc.
- **`hooks/`** – Reusable custom React hooks.
- **`types/`** – TypeScript types and interfaces.
- **`constants/`** – Static values, enums, app-level labels.
- **`services/`** – API calls and services using Axios, fetch, etc.
- **`store/`** – Global state management (Zustand, Redux).
- **`config/`** – App-wide configuration like SEO, routes, metadata.
- **`middleware.ts`** – Middleware logic (auth, redirects).
- **`app.tsx`** – Entry point for the app.

