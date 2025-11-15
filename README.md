# Advocate Portfolio — Next.js 14 + TypeScript + Tailwind

This is a premium advocate/lawyer portfolio website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion for elegant animations.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running

1. **Install dependencies:**
   ```powershell
   cd "C:\Users\kagat\OneDrive\Desktop\Adv"
   npm install
   ```

2. **Start development server:**
   ```powershell
   npm run dev
   ```

3. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```powershell
npm run build
npm start
```

## 📁 Project Structure

```
Adv/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles with Tailwind
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   ├── about/
│   │   └── page.tsx       # About page
│   ├── services/
│   │   └── page.tsx       # Services page
│   └── contact/
│       └── page.tsx       # Contact page
├── components/            # Reusable React components
│   ├── Navbar.tsx        # Navigation with mobile menu
│   ├── Hero.tsx          # Hero section with animations
│   ├── ServiceCard.tsx   # Service display cards
│   ├── ContactForm.tsx   # Contact form with validation
│   └── Footer.tsx        # Footer with links
├── public/
│   └── favicon.svg       # Site favicon
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## ✏️ Customization Guide

### Personal Information
Update these files with your details:

**1. Site Metadata (`app/layout.tsx`):**
```typescript
export const metadata = {
  title: 'Adv. [Your Name] — Expert Legal Counsel',
  description: 'Your tagline here',
  // ... update OpenGraph and Twitter meta
}
```

**2. Hero Section (`components/Hero.tsx`):**
- Replace `[Your Name]` with your actual name
- Update tagline and description

**3. About Page (`app/about/page.tsx`):**
- Replace photo URL with your professional headshot
- Update bio, qualifications, education details
- Modify practice areas and achievements

**4. Contact Details (`app/contact/page.tsx`):**
- Update phone: `[+123 456 7890]`
- Update email: `advocate@example.com` 
- Update office address: `[Your Office Address]`

**5. Navigation (`components/Navbar.tsx`):**
- Update name in navbar branding

**6. Footer (`components/Footer.tsx`):**
- Update contact information
- Modify copyright notice

### Styling & Colors

**Accent Colors (`tailwind.config.js`):**
```javascript
colors: {
  accent: '#caa43a',    // Gold - change this
  accent2: '#1e90ff'    // Royal blue - change this
}
```

**Background Gradient (`tailwind.config.js`):**
```javascript
backgroundImage: {
  'dark-legal': 'linear-gradient(180deg,#030312 0%,#0b0b11 50%, #081226 100%)'
}
```

### Images
Replace placeholder images with your professional photos:
- Hero section background (optional)
- About page profile photo: Update URL in `app/about/page.tsx`
- Add custom favicon: Replace `public/favicon.svg`

## 🎨 Features

- ✅ **Dark Premium Theme** - Elegant black/gold design
- ✅ **Fully Responsive** - Mobile, tablet, desktop optimized
- ✅ **Smooth Animations** - Framer Motion powered
- ✅ **SEO Optimized** - Meta tags, OpenGraph, Twitter cards
- ✅ **TypeScript** - Type-safe development
- ✅ **Contact Form** - Client-side validation (frontend only)
- ✅ **Mobile Navigation** - Hamburger menu with animations
- ✅ **Glassmorphism UI** - Modern glass-effect cards
- ✅ **Performance Optimized** - Next.js 14 App Router

## 📧 Contact Form Backend

The contact form currently shows a success message but doesn't send emails. To add backend functionality:

### Option 1: Formspree (Recommended)
1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update `components/ContactForm.tsx`:
   ```typescript
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   })
   ```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to form element
3. Netlify automatically handles form submissions

### Option 3: Custom API Route
Create `app/api/contact/route.ts` for custom email handling.

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to [vercel.com](https://vercel.com)
3. Deploy automatically

### Netlify
1. Run `npm run build`
2. Upload `out/` folder to Netlify
3. Configure custom domain

### Other Platforms
Compatible with any platform supporting Next.js static export.

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Emoji + Custom
- **Fonts:** Inter (system fonts)

## 📝 Notes

- This is a static frontend - no database required
- All animations are performant and accessible
- Form validation is client-side only
- Images use Unsplash placeholders - replace with your photos
- Fully customizable color scheme and branding

## 🆘 Support

For customization help or additional features, please refer to:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

---

**Built with ❤️ for legal professionals seeking a premium online presence.**