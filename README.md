my-nextjs-app/
├── public/                       # Static files (images, favicon, etc.)
├── src/
│   ├── app/                      # App Router entry point
│   │   ├── layout.tsx           # Root layout
│   │   ├── page.tsx             # Root page
│   │   ├── (routes)/            # Your routes, can use colocation or nesting
│   │   └── api/                 # API routes (if needed)
│   ├── components/              # Reusable UI components
│   ├── features/                # Domain-specific logic (e.g., auth, products)
│   ├── styles/                  # Tailwind / global CSS
│   ├── lib/                     # Utils, helpers
│   ├── hooks/                   # Custom hooks (e.g., useUser, useModal)
│   ├── types/                   # TypeScript interfaces & types
│   ├── constants/               # Static configs / enums / labels
│   ├── services/                # API logic (e.g., axios calls)
│   ├── store/                   # Zustand or Redux store
│   ├── config/                  # Environment config, metadata, SEO
│   └── middleware.ts            # Middleware for auth, redirects, etc.
├── .env.local                   # Environment variables
├── next.config.js               # Next.js config
├── tsconfig.json                # TypeScript config
├── tailwind.config.ts           # Tailwind config
├── postcss.config.js            # PostCSS config
└── README.md                    # Project documentation
