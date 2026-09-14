# Yousef Salman - Full-Stack Developer Portfolio

A modern, responsive portfolio web application built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**, matching the design aesthetic with dark/light themes and full-stack ASP.NET Core & React credentials.

---

## ✨ Features

- **Personalized Hero Section**: Features your custom portrait photo with an amber/blue layered glowing border, dynamic title, bio, and social links.
- **Light & Dark Mode ("Dark Mood")**:
  - Light mode base: Soft gray-close-to-white (`#f3f5f8`).
  - Dark mode base: Deep slate & navy (`#080d1a` / `#0d1527`) with glowing accents.
  - Remembers theme choice in `localStorage`.
- **Unified Projects Showcase**:
  - Category tabs (`ALL`, `JS`, `REACT`) removed as requested for a seamless, unified display.
  - **To-Do App**: Live demo link (`https://todoappyousefsalman.netlify.app/`) and GitHub repo (`https://github.com/yusefalsalman/Todo-List-React`).
  - **Weather App**: Live demo link (`https://weatherflyyousefsalman.netlify.app/`) and GitHub repo (`https://github.com/yusefalsalman/Weatherify`).
  - **Portfolio**: Interactive showcase of this modern web application.
- **Skills Section**:
  - Displays the exact 16 Devicon SVG links provided (C++, HTML5, CSS3, JavaScript, React, Redux, Tailwind CSS, TypeScript, Material UI, Git, GitHub, C#, MS SQL Server, .NET Core, Swagger, Postman) with smooth hover scaling and tooltips.
- **Framer Motion Animations**:
  - Staggered entrance reveals.
  - Smooth scroll transitions.
  - Interactive button and card micro-animations.
- **EmailJS Integration**:
  - Direct form submission targeting `yusefsalman13@gmail.com`.
  - Confetti celebration effect and loading states.
  - Includes direct mail fallback.
- **Fully Responsive**: Flawless experience across mobile phones, tablets, and desktops with a mobile navigation drawer.

---

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production

```bash
npm run build
```

The optimized bundle is generated in the `dist/` directory, ready to deploy to Netlify, Vercel, or GitHub Pages.

---

## ✉️ EmailJS Setup

To connect the contact form to your EmailJS account:

1. Create a free account at [emailjs.com](https://www.emailjs.com/).
2. Create an Email Service (connect your Gmail `yusefsalman13@gmail.com`).
3. Create an Email Template.
4. Copy your Service ID, Template ID, and Public Key into a `.env` file:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   _(If no `.env` is provided, the contact form gracefully submits with feedback and opens your direct mailto link to `yusefsalman13@gmail.com`)._
