# Portfolio Website - Samiun Alim Auntor

A modern, responsive single-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, laptop, and larger devices
- **Dark/Light Theme Toggle** - Smooth theme switching with persistent storage
- **Smooth Animations** - Powered by Framer Motion and CSS transitions
- **Glass Effect Navbar** - Modern glassmorphism design
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive Components** - Accordion dropdowns, hover effects, and more

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router DOM** - Routing
- **React Intersection Observer** - Scroll animations

## 📁 Project Structure

```
portfolio-website/
├── public/
│   └── resume.pdf          # Resume file
├── src/
│   ├── assets/             # Images and static assets
│   │   └── avatar.jpg      # Profile photo
│   ├── Components/         # Reusable UI components
│   │   ├── AboutMe.jsx
│   │   ├── Banner.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Footer.jsx
│   │   ├── NavBar.jsx
│   │   ├── Projects.jsx
│   │   ├── Services.jsx
│   │   └── Skills.jsx
│   ├── Layouts/            # Layout components
│   │   └── HomeLayout.jsx
│   ├── Pages/              # Page components
│   │   └── HomePage.jsx
│   ├── Router/             # Routing configuration
│   │   └── Router.jsx
│   ├── index.css           # Global styles
│   └── main.jsx            # Application entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Sections

1. **Banner** - Introduction with profile photo and social links
2. **About Me** - Personal information with accordion dropdowns
3. **Skills** - Technical skills organized by category
4. **Services** - Services offered
5. **Education** - Educational timeline with roadmap design
6. **Projects** - Portfolio projects with live links and GitHub repos
7. **Contact** - Contact form and information
8. **Footer** - Footer with links and social media

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## 🎯 Customization

### Theme Colors

Edit `tailwind.config.js` to customize theme colors:

```javascript
colors: {
  primary: {
    DEFAULT: '#10b981', // greenish
    dark: '#059669',
    light: '#34d399',
  },
}
```

### Content

Update the content in respective component files:
- `src/Components/Banner.jsx` - Personal introduction
- `src/Components/AboutMe.jsx` - About section content
- `src/Components/Skills.jsx` - Skills list
- `src/Components/Projects.jsx` - Project details
- `src/Components/Education.jsx` - Education history
- `src/Components/Contact.jsx` - Contact information

## 📝 License

This project is private and not licensed for public use.

## 👤 Author

**Samiun Alim Auntor**

- Email: samiunalimauntor@gmail.com
- Phone: +8801988774499
- GitHub: [@SamiunAuntor](https://github.com/SamiunAuntor)

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion

