# 🚀 Estonian SaaS Landing Page Template

**Modern, High-Converting Landing Page for Estonian e-Resident Startups**

Inspired by successful Estonian unicorns: Wise, Bolt, Pipedrive, Veriff, Skype

---

## ✨ What's New (Latest Updates)

### 🎯 **Pricing Toggle (Monthly/Annual)**
- ✅ Fully functional toggle between monthly and annual pricing
- ✅ Automatic price switching with smooth animations
- ✅ "Save 20%" badge appears on annual pricing
- ✅ Clean button-based UI (no confusing switches)

### 🎥 **Enhanced Video Section**
- ✅ Professional video player with overlay
- ✅ Pulse animation on play button
- ✅ Video duration badge
- ✅ Click to open video in modal (fullscreen experience)
- ✅ Easy to customize with your own YouTube/Vimeo video

### 📬 **Improved Footer**
- ✅ Newsletter signup form
- ✅ Social media icons (Twitter, LinkedIn, GitHub, YouTube)
- ✅ 5 footer columns (Product, Solutions, Resources, Company, Legal)
- ✅ Trust badges (GDPR, SOC 2, Uptime SLA, ISO 27001)
- ✅ "We're hiring!" badge
- ✅ Estonian company branding (OÜ, Tallinn location)

---

## 📋 Features

### 🎨 **Design**
- Modern gradient-based design
- Smooth animations and transitions
- Fully responsive (Mobile/Tablet/Desktop)
- Dark header with light sections
- Professional typography (Inter font family)

### 🧩 **Sections Included**
1. **Hero** - Eye-catching headline with CTA buttons
2. **Social Proof** - Trusted by 2,000+ startups
3. **Demo Video** - Interactive video player
4. **Features Grid** - 6 key features with icons
5. **Testimonials** - 3 customer reviews
6. **Pricing** - 3 tiers (Starter/Pro/Enterprise)
7. **Integrations** - 12+ integration logos
8. **CTA Section** - Final conversion push
9. **Footer** - Comprehensive footer with newsletter

### ⚙️ **Functionality**
- Smooth scroll navigation
- Mobile hamburger menu
- Pricing toggle (Monthly/Annual)
- Video modal player
- Newsletter form
- Scroll animations
- Sticky navigation

---

## 🚀 Quick Start

### 1. **Customize Your Branding**

Replace `GrowthOS` with your company name throughout:

```html
<!-- In index.html -->
<span class="logo-text">YourCompany</span>
<h1>Your Product Tagline</h1>
```

### 2. **Add Your Video**

Replace the YouTube URL with your demo video:

```html
<div class="video-demo" data-video-url="https://www.youtube.com/embed/YOUR_VIDEO_ID">
```

**Video Recommendations:**
- Duration: 1-3 minutes
- Focus: Product demo or explainer
- Quality: 1080p minimum
- Thumbnail: Custom thumbnail for better CTR

### 3. **Update Pricing**

Modify the pricing in `index.html`:

```html
<div class="pricing-card" data-monthly-price="99" data-annual-price="79">
```

The JavaScript automatically calculates the discount percentage!

### 4. **Add Your Company Info**

Update footer with your details:

```html
<p>&copy; 2025 YourCompany OÜ. All rights reserved.</p>
<p class="footer-location">🇪🇪 Proudly made in Tallinn, Estonia</p>
```

---

## 🎯 Customization Guide

### **Colors**

All colors are defined in CSS variables:

```css
:root {
    --primary: #667EEA;        /* Main brand color */
    --primary-dark: #5568D3;   /* Hover states */
    --secondary: #764BA2;      /* Gradient accent */
    --success: #10B981;        /* Success states */
}
```

### **Fonts**

Default: Inter (Google Fonts)

To change:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;600;700;900&display=swap" rel="stylesheet">
```

```css
:root {
    --font-primary: 'Your Font', sans-serif;
}
```

### **Sections**

To hide/show sections, simply comment out in HTML:

```html
<!-- Testimonials Section -->
<!-- <section class="social-proof-section">...</section> -->
```

### **Integrations**

Add more integration logos:

```html
<div class="integration-logo">Stripe</div>
<div class="integration-logo">Your Integration</div>
```

---

## 📊 SEO Optimization

### **Meta Tags** (Already Included)

```html
<title>GrowthOS - The All-in-One Growth Platform for European Startups</title>
<meta name="description" content="Join 2,000+ European startups...">
```

### **Recommendations**

1. Add Schema.org JSON-LD markup
2. Create `sitemap.xml`
3. Add `robots.txt`
4. Optimize images (WebP format)
5. Add Open Graph tags for social sharing
6. Add favicon and apple-touch-icon

---

## 🔌 Integrations

### **GoHighLevel Form Integration**

Replace the contact form with GHL iframe:

```html
<div class="contact-form">
    <iframe 
        src="https://api.leadconnectorhq.com/widget/form/YOUR_FORM_ID"
        style="width:100%;height:100%;border:none;">
    </iframe>
</div>
```

### **Analytics (Matomo/Google Analytics)**

Add before `</head>`:

```html
<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  // ... your Matomo code
</script>
```

### **Newsletter (Mailchimp/ConvertKit)**

Replace the form action:

```html
<form class="newsletter-form" action="YOUR_MAILCHIMP_URL" method="POST">
    <input type="email" name="EMAIL" required>
    <button type="submit">Subscribe</button>
</form>
```

---

## 🌍 Estonian e-Resident Specific

### **Trust Signals for e-Residents**

Already included:
- 🇪🇪 Estonian company registration (OÜ)
- 🏢 Tallinn location
- 🔒 GDPR compliance
- ✅ SOC 2 certification badge
- ⚡ Uptime SLA guarantee

### **Payment Processors**

Recommended for Estonian companies:
- Stripe (easiest for global payments)
- Xero (accounting integration)
- TransferWise Business (multi-currency)

### **Hosting Recommendations**

- **Cloudflare Pages** (free, fast, global CDN)
- **Netlify** (easy deployment, CI/CD)
- **Vercel** (optimal for Next.js if upgrading)
- **Hetzner** (European servers, GDPR-friendly)

---

## 📱 Responsive Breakpoints

```css
/* Desktop: Default */
/* Tablet: 1024px and below */
/* Mobile: 768px and below */
/* Small Mobile: 640px and below */
```

All breakpoints are optimized for:
- iPhone (375px, 414px)
- iPad (768px, 1024px)
- Desktop (1280px, 1440px, 1920px)

---

## 🎨 Color Schemes (Alternatives)

### **Option 1: Fintech Blue (Current)**
```css
--primary: #667EEA;
--secondary: #764BA2;
```

### **Option 2: Growth Green**
```css
--primary: #10B981;
--secondary: #059669;
```

### **Option 3: Bold Orange**
```css
--primary: #F97316;
--secondary: #EA580C;
```

### **Option 4: Purple Power**
```css
--primary: #8B5CF6;
--secondary: #7C3AED;
```

---

## ✅ Pre-Launch Checklist

- [ ] Replace all "GrowthOS" with your company name
- [ ] Update logo and favicon
- [ ] Add your demo video URL
- [ ] Customize pricing (amounts + features)
- [ ] Update testimonials with real reviews
- [ ] Add your company info (OÜ, address, email)
- [ ] Connect newsletter form to your email service
- [ ] Add analytics tracking code
- [ ] Test on mobile devices
- [ ] Optimize images (compress, WebP)
- [ ] Update meta tags (title, description)
- [ ] Add Schema.org markup
- [ ] Create sitemap.xml
- [ ] Test all links and CTAs
- [ ] Set up SSL certificate
- [ ] Submit to Google Search Console

---

## 🚀 Deployment

### **Option 1: Cloudflare Pages** (Recommended)

1. Create account at [pages.cloudflare.com](https://pages.cloudflare.com)
2. Connect your Git repo (or upload files)
3. Deploy (automatic)
4. Add custom domain
5. SSL is automatic ✅

### **Option 2: Netlify**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### **Option 3: FTP/SFTP**

Upload these files:
- `index.html`
- `styles.css`
- `script.js`
- Your logo images
- `favicon.png`

---

## 📞 Support

Need help customizing this template?

**FlipSideLabs** - Growth Automation for Estonian e-Residents

- 📧 Email: info@flipsidelabs.com
- 🌐 Website: https://flipsidelabs.com
- 📍 Location: Tallinn, Estonia

---

## 📄 License

This template is provided as part of FlipSideLabs services.

For commercial use or white-labeling, please contact us.

---

## 🎉 Credits

**Designed & Developed by:**  
Roberto Mas - FlipSideLabs  
[robertomas.com](https://robertomas.com)

**Inspired by:**  
Wise, Bolt, Pipedrive, Veriff, Skype (Estonian unicorns)

---

## 🔄 Changelog

### v1.1 (Current)
- ✅ Fixed pricing toggle functionality
- ✅ Enhanced video player with pulse animation
- ✅ Completely redesigned footer (newsletter + 5 columns)
- ✅ Added trust badges with SVG icons
- ✅ Improved mobile responsiveness
- ✅ Added "We're hiring!" badge option

### v1.0 (Initial Release)
- 🎉 Initial Estonian SaaS landing page template
- 🎨 Modern design with Wise/Bolt aesthetic
- 📱 Fully responsive
- ⚡ Performance optimized

---

**Made with ❤️ in Estonia** 🇪🇪

For more templates and automation services, visit **FlipSideLabs.com**
