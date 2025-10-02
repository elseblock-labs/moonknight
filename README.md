# 🌙 MoonNight

A modern, production-ready Next.js template with beautiful landing page, authentication flows, and dashboard. Built with the latest web technologies and best practices.

## ✨ Features

- 🎨 **Beautiful UI** - Clean, modern interface with shadcn/ui components
- 🌓 **Dark/Light Mode** - Seamless theme switching with system preference support
- ✨ **Motion Animations** - Smooth, polished animations with Framer Motion
- 🔐 **Authentication Pages** - Ready-to-use sign-in and sign-up pages
- 📊 **Dashboard** - Fully functional dashboard with sidebar navigation
- 🎯 **Landing Page** - Engaging landing page with modern design
- 📱 **Responsive Design** - Mobile-first approach, works on all devices
- ⚡ **Fast Performance** - Optimized with Next.js 15 and React 19
- 🎭 **TypeScript** - Fully typed for better developer experience
- 🎨 **TailwindCSS 4** - Latest Tailwind with new features

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/)
- **React:** [React 19](https://react.dev/)
- **Styling:** [TailwindCSS 4](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Type Safety:** [TypeScript](https://www.typescriptlang.org/)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/elseblock-labs/moonknight.git
cd moonnight
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 What's Included

```
moonnight/
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── page.tsx           # Landing page
│   │   ├── sign-in/           # Sign in page
│   │   ├── sign-up/           # Sign up page
│   │   └── dashboard/         # Dashboard
│   ├── components/
│   │   ├── ui/                # shadcn/ui components
│   │   ├── layout/            # Layout components
│   │   └── common/            # Shared components
│   ├── context/               # React contexts
│   ├── hooks/                 # Custom hooks
│   ├── lib/                   # Utilities
│   └── styles/                # Global styles
├── public/                    # Static assets
└── package.json
```

## 🎨 Customization

### Theme Colors

Customize your theme in `src/styles/theme.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  /* ... */
}
```

### Components

All UI components are built with shadcn/ui and can be easily customized in `src/components/ui/`

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run format:check # Check formatting
```

## 🌟 Use Cases

Perfect for:
- SaaS applications
- Dashboard applications
- Marketing websites
- Web applications
- Startup MVPs
- Portfolio sites

## 📄 License

MIT License - feel free to use this template for your projects!

## 🤝 Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## 💬 Support

If you have any questions or need help, please open an issue on GitHub.

---

Made with ❤️ by [elseblock.io](https://elseblock.io)

Built with Next.js and shadcn/ui
