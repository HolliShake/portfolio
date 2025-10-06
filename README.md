# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a Web3-inspired design with glass morphism effects, parallax sections, and smooth animations.

## ✨ Features

### 🎨 Design & UX
- **Web3 Aesthetic**: Dark theme with cobalt blue accents, glass morphism, and neon text effects
- **Responsive Layout**: Mobile-first design that works across all devices
- **Parallax Effects**: Fixed background sections with smooth scrolling
- **Scroll Animations**: Staggered reveal animations for project cards
- **Interactive Elements**: Hover effects, focus states, and smooth transitions

### 📱 Sections
- **Header**: Navigation with profile image, bio, and social links
- **About**: Developer profile with enhanced link icons
- **Experience & Education**: Timeline-based career history
- **Skills**: Technology stack display
- **Projects**: 
  - **Personal Projects**: Public portfolio items with external links
  - **Private Projects**: Secure previews with iframe thumbnails or fallback images
- **Contact**: Contact form and information

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable React components
- **Path Aliases**: Clean imports with `@components/*` and `@hooks/*`
- **Intersection Observer**: Performance-optimized scroll animations
- **Accessibility**: ARIA labels, semantic HTML, and keyboard navigation
- **SEO Ready**: Proper meta tags and semantic structure

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1 with TypeScript 5.9.3
- **Build Tool**: Vite 7.1.7 with SWC for fast compilation
- **Styling**: Tailwind CSS 4.1.14 with custom design system
- **Linting**: ESLint with TypeScript and React rules
- **Icons**: Custom SVG icons for social links and UI elements

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Button.tsx       # Reusable button component
│   ├── Card.tsx         # Public project card
│   ├── CardGrid.tsx     # Project grid layout
│   ├── ContactSection.tsx
│   ├── DeveloperProfile.tsx
│   ├── EducationList.tsx
│   ├── ExperienceList.tsx
│   ├── Header.tsx       # Navigation and hero section
│   ├── PrivateCard.tsx  # Private project preview
│   ├── Skills.tsx
│   └── Timeline.tsx
├── hooks/               # Custom React hooks
│   └── useReveal.ts    # Scroll animation hook
├── App.tsx             # Main application component
├── index.css           # Global styles and design system
└── main.tsx           # Application entry point
```

## 🎨 Design System

### Color Palette
- **Background**: `#002240` (Deep cobalt)
- **Surface**: `#193549` (Dark blue-gray)
- **Primary**: `#0088ff` (Bright blue)
- **Success**: `#3ad900` (Green)
- **Warning**: `#ffb627` (Orange)

### Typography
- **Headings**: Space Grotesk (modern, geometric)
- **Body**: Inter (clean, readable)
- **Effects**: Neon text shadows and glow borders

### Components
- **Glass Morphism**: Backdrop blur with transparency
- **Interactive Cards**: Hover animations and focus states
- **Timeline**: Vertical progress with connecting lines
- **Parallax**: Fixed background with overlay effects

## 🔧 Customization

### Adding Projects

1. **Public Projects**: Add to the `items` array in `App.tsx`
   ```typescript
   {
     title: 'Project Name',
     description: 'Project description',
     href: 'https://project-url.com',
     imageUrl: 'https://image-url.com',
   }
   ```

2. **Private Projects**: Add with `private: true` and optional `thumbnailUrl`
   ```typescript
   {
     title: 'Private Project',
     description: 'Private project description',
     href: 'https://private-url.com',
     thumbnailUrl: 'https://thumbnail-url.com', // Optional
     private: true,
   }
   ```

### Updating Profile Information

Edit the data in `App.tsx`:
- **Header**: Name, role, bio, social links
- **Experience**: Company, role, period, location, details
- **Education**: School, degree, period, location
- **Skills**: Technology list
- **Contact**: Email address

### Styling Customization

- **Colors**: Update CSS custom properties in `src/index.css`
- **Animations**: Modify keyframes and utility classes
- **Layout**: Adjust Tailwind classes in components
- **Typography**: Change font imports and family declarations

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Vite will auto-detect the build settings
3. Deploy with zero configuration

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing if needed

## 📱 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Unsplash** for high-quality placeholder images
- **Tailwind CSS** for the utility-first CSS framework
- **React** and **Vite** for the modern development experience
- **TypeScript** for type safety and developer experience

---

Built with ❤️ using React, TypeScript, and Tailwind CSS