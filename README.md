# **MVP for Welcome Page Extension**

The goal is to build a **simple, functional** browser extension that replaces the new tab page with a minimalist clock, similar to Momentum.

---

## **Core Features for MVP**

✅ **Clock Display**

- 🕒 Digital clock that updates in real-time
- 📆 Option to show date (optional toggle)

✅ **Basic UI**

- Minimalist design using **Tailwind CSS**
- Centered, full-screen layout with clean typography
- Dark mode support

✅ **Browser Extension Setup**

- Chrome & Firefox support
- `manifest.json` to override the new tab page
- Icons & metadata for proper extension branding

✅ **Build & Deployment**

- **Frontend:** React + Vite
- **Packaging:** Vite build output as an unpacked extension
- **Local Testing:** Chrome `chrome://extensions/` & Firefox `about:debugging#/runtime/this-firefox`

---

## **Future Enhancements (Post-MVP)**

🚀 **Personalized Greetings** – "Good Morning, [User]!" based on time 📖 **Inspirational Quotes** – Fetch & display random motivational quotes 🌤️ **Weather Widget** – Show local weather info using OpenWeather API 📝 **To-Do List** – Simple productivity feature with local storage 🎨 **Customizable Themes** – Users can switch colors, fonts, or backgrounds 📲 **Mobile PWA Version** – Extend to mobile-friendly usage
