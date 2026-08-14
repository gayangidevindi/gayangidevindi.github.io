# 🚀 Personal Portfolio Website

A modern, responsive portfolio website built with React, showcasing projects, skills, and contact information. The site features smooth scrolling, mobile-responsive design, and seamless navigation.

**Live Demo:** [https://gayangidevindi.github.io/](https://gayangidevindi.github.io/)

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Navigation**: Smooth scrolling with active section highlighting in navigation
- **Mobile Menu**: Hamburger menu for mobile devices with smooth animations
- **Multiple Sections**: 
  - Hero/Home section
  - About section with personal information
  - Projects showcase with project details
  - Contact section
- **Modern UI**: Built with Tailwind CSS for clean, modern styling
- **Icons**: React Icons library for beautiful, scalable icons
- **Scroll to Top**: Quick scroll-to-top button for better UX
- **Dynamic Section Tracking**: Active navigation links update based on scroll position
- **GitHub Pages Ready**: Pre-configured for deployment to GitHub Pages

---

## 🛠 Tech Stack

- **Frontend Framework**: [React 19.1.1](https://react.dev/)
- **Routing**: [React Router DOM 7.8.1](https://reactrouter.com/)
- **Styling**: [Tailwind CSS 3.4.19](https://tailwindcss.com/)
- **Icons**: 
  - [React Icons 5.5.0](https://react-icons.github.io/react-icons/)
  - [Lucide React 1.21.0](https://lucide.dev/)
- **Build Tool**: [Create React App 5.0.1](https://create-react-app.dev/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)
- **Testing**: Jest & React Testing Library
- **CSS Processing**: PostCSS & Autoprefixer

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 14.0.0 or higher
- **npm**: Version 6.0.0 or higher (or yarn/pnpm)
- **Git**: For cloning the repository

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/gayangidevindi/myself.git
   cd myself
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   The app will open in your default browser at [http://localhost:3000](http://localhost:3000)

---

## 📝 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode with hot-reloading.
- Opens [http://localhost:3000](http://localhost:3000) in your browser
- The page reloads when you make changes
- Lint errors appear in the console

### `npm test`
Launches the test runner in interactive watch mode.
See the [testing documentation](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build/` folder.
- Bundles React in production mode
- Optimizes for best performance
- Build is minified with hashed filenames
- Ready for deployment

### `npm run deploy`
Deploys the built app to GitHub Pages.
- Runs `npm run build` automatically
- Uses gh-pages to push to GitHub Pages
- Requires GitHub configuration (see [Deployment](#deployment) section)

### `npm run eject`
**⚠️ One-way operation** - Cannot be undone!
Ejects from Create React App and exposes all configuration.
- Gives full control over webpack, Babel, ESLint config
- Use only if you need advanced customization

---

## 📁 Project Structure

```
myself/
├── public/
│   ├── index.html          # Main HTML file
│   ├── manifest.json       # PWA manifest
│   └── robots.txt         # SEO robots configuration
├── src/
│   ├── components/        # Reusable components
│   │   ├── Header.js      # Navigation header with mobile menu
│   │   ├── Footer.js      # Footer component
│   │   ├── About.js       # About section
│   │   └── ScrollToTopButton.js  # Scroll to top functionality
│   ├── pages/             # Page components
│   │   ├── Home.js        # Hero/home section
│   │   ├── About.js       # About page (if using routing)
│   │   ├── Projects.js    # Projects showcase
│   │   ├── Contact.js     # Contact section
│   │   ├── ProjectDetails.js  # Individual project details
│   │   └── AboutInD.js    # Additional about info
│   ├── assets/            # Images, fonts, and static assets
│   ├── App.js            # Main App component
│   ├── index.js          # React entry point
│   ├── index.css         # Global styles
│   ├── reportWebVitals.js # Performance metrics
│   └── setupTests.js     # Test configuration
├── build/                # Production build output (generated)
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
└── README.md            # This file
```

---

## 🧩 Components

### Header Component
Navigation header with:
- Logo/branding
- Navigation links (Home, About, Projects, Contact)
- Mobile hamburger menu
- Active section highlighting
- Hire me modal

### Home Section
Hero section featuring:
- Introduction
- Call-to-action buttons
- Personal tagline

### About Section
About you section with:
- Personal bio
- Skills and expertise
- Background information

### Projects Section
Showcase of projects with:
- Project cards
- Project images/thumbnails
- Project descriptions
- Links to project details
- Demo/GitHub links

### Contact Section
Contact information with:
- Contact form (if implemented)
- Social media links
- Email contact
- Location information

### Footer Component
Footer with:
- Copyright information
- Social media links
- Quick navigation

### ScrollToTopButton
Utility component that:
- Appears when user scrolls down
- Smoothly scrolls to top when clicked
- Smooth animations

---

## ⚙️ Configuration

### Tailwind CSS
Configured via `tailwind.config.js` with:
- Custom color schemes
- Responsive breakpoints
- Custom utilities

### PostCSS
Configured via `postcss.config.js` with:
- Tailwind CSS processing
- Autoprefixer for browser compatibility

### Public URL
Change the homepage in `package.json` to match your deployment URL:
```json
"homepage": "https://yourusername.github.io/"
```

---

## 🌐 Deployment

### Deploy to GitHub Pages

1. **Update package.json**
   - Change `"homepage"` to your GitHub Pages URL
   ```json
   "homepage": "https://yourusername.github.io/repository-name/"
   ```

2. **Deploy**
   ```bash
   npm run deploy
   ```

3. **Verify Deployment**
   - Go to your repository settings
   - Navigate to "Pages"
   - Confirm the branch is set to `gh-pages`

### Deploy to Other Platforms

The `build/` folder can be deployed to:
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop `build/` folder
- **Heroku**: `git push heroku main`
- **Firebase Hosting**: `firebase deploy`

---

## 📚 Learn More

### React & Create React App
- [React Documentation](https://react.dev/)
- [Create React App Docs](https://create-react-app.dev/)

### Styling
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PostCSS Documentation](https://postcss.org/)

### Routing
- [React Router Documentation](https://reactrouter.com/)

### Icons
- [React Icons Gallery](https://react-icons.github.io/react-icons/)
- [Lucide Icons Gallery](https://lucide.dev/)

---

## 🤝 Contributing

Contributions are welcome! Here's how to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Gayangi Devindi**
- GitHub: [@gayangidevindi](https://github.com/gayangidevindi)
- Portfolio: [https://gayangidevindi.github.io/](https://gayangidevindi.github.io/)

---

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/) - Build setup
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [React Router](https://reactrouter.com/) - Routing library

---

futer updates
npm run build
npx gh-pages -d build

**Happy Coding! 💻**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
