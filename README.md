# Portfolio Website - Samiun Alim Auntor

A modern, responsive single-page portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

🌐 **Live Website:** [https://samiun-alim-auntor.pages.dev/](https://samiun-alim-auntor.pages.dev/)

## 🚀 Features

- **Fully Responsive Design** - Optimized for mobile, tablet, laptop, and larger devices
- **Dark/Light Theme Toggle** - Smooth theme switching with persistent storage
- **Smooth Animations** - Powered by Framer Motion and CSS transitions
- **Glass Effect Navbar** - Modern glassmorphism design
- **Smooth Scrolling** - Seamless navigation between sections
- **Interactive Components** - Accordion dropdowns, hover effects, and more
- **Contact Form** - Functional email contact form powered by EmailJS
- **Email Notifications** - Receive contact form submissions directly to your email

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Router DOM** - Routing
- **React Intersection Observer** - Scroll animations
- **EmailJS** - Email service for contact form
- **SweetAlert2** - Beautiful alert notifications

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
7. **Contact** - Functional contact form with EmailJS integration and contact information
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

3. **Set up Environment Variables:**
   
   Create a `.env` file in the root directory with your EmailJS credentials:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   
   To get your EmailJS credentials:
   1. Sign up at [EmailJS](https://www.emailjs.com/)
   2. Create an email service
   3. Create an email template
   4. Get your Public Key from the Integration page
   5. Add the credentials to your `.env` file

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

### Deployment

#### Environment Variables for Production

Make sure to set the following environment variables in your hosting platform:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**Popular Hosting Platforms:**
- **Vercel**: Add environment variables in Project Settings → Environment Variables
- **Netlify**: Add environment variables in Site Settings → Build & Deploy → Environment
- **GitHub Pages**: Use GitHub Secrets (requires build workflow)

#### EmailJS Template Setup

For the contact form to work properly, configure your EmailJS template to include:

**Email Subject:**
```
{{subject}}
```

**Email Body:**
```
{{message}}
```

The `message` field contains all form data (email, subject, and message) formatted for easy reading.

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
- `src/Components/Contact.jsx` - Contact information and form configuration

### EmailJS Configuration

The contact form uses EmailJS to send emails. To configure:

1. Update your EmailJS credentials in the `.env` file
2. Configure your EmailJS template to use:
   - `{{subject}}` for the email subject
   - `{{message}}` for the email body (contains all form fields)
   - `{{reply_to}}` for reply-to address
   - `{{user_email}}`, `{{user_subject}}`, `{{user_message}}` for individual fields

## 🔒 Security Notes

- Never commit your `.env` file to version control
- The `.env` file is already included in `.gitignore`
- Keep your EmailJS credentials secure
- Use environment variables for all sensitive data in production

## 📝 License

This project is private and not licensed for public use.

## 👤 Author

**Samiun Alim Auntor**

- 🌐 **Portfolio:** [https://samiun-alim-auntor.pages.dev/](https://samiun-alim-auntor.pages.dev/)
- 📧 Email: samiunalimauntor@gmail.com
- 📱 Phone: +8801988774499
- 💻 GitHub: [@SamiunAuntor](https://github.com/SamiunAuntor)

---

Built with ❤️ using React, Vite, Tailwind CSS, and Framer Motion

