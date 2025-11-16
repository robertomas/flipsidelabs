# 💳 Estonian FinTech Landing Page Template

Un template de landing page professionnel pour applications FinTech, inspiré de Wise et Revolut. Conçu spécifiquement pour les startups de paiements/transferts en Estonie et dans l'UE.

## 🎯 Vue d'ensemble

Ce template inclut tous les éléments essentiels pour une landing page FinTech convertissante et conforme aux régulations européennes :

### ✅ Fonctionnalités principales

- **Calculateur interactif de frais** - Comparaison en temps réel vs banques traditionnelles
- **Multi-currency pricing** - Support de 8+ devises avec taux de change réels
- **Trust badges** - PSD2, GDPR, FCA compliance visibles
- **Bank partnerships logos** - Section dédiée aux partenaires bancaires
- **Social proof** - Testimonials européens authentiques avec ratings
- **Comparison table** - Tableau comparatif détaillé des frais
- **Security section** - Mise en avant de la sécurité et compliance
- **Mobile-first design** - Entièrement responsive
- **Animations modernes** - Smooth et performantes

## 🎨 Design Features

### Style inspiré de
- **Wise** (anciennement TransferWise) - Clean, trustworthy
- **Revolut** - Modern, gradient-heavy
- **Stripe** - Professional, developer-friendly

### Color Palette
- **Primary**: #0052FF (Blue) - Trust et sécurité
- **Secondary**: #00D4FF (Cyan) - Innovation
- **Accent**: #FFD700 (Gold) - Value et savings
- **Success**: #00E676 (Green) - Positive actions

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300-900 pour hiérarchie claire

## 📁 Structure des fichiers

```
estonian-fintech-landing/
├── index.html          # Structure HTML complète (36 KB)
├── styles.css          # Styles FinTech modernes (25 KB)
├── script.js           # Calculateur + interactions (21 KB)
└── README.md           # Ce fichier
```

## 🚀 Installation rapide

### Option 1: Utilisation directe

1. Télécharge les 3 fichiers (HTML, CSS, JS)
2. Place-les dans le même dossier
3. Ouvre `index.html` dans ton navigateur
4. Le calculateur fonctionne immédiatement! 🎉

### Option 2: Hébergement web

```bash
# Upload vers serveur
scp index.html styles.css script.js user@server:/var/www/html/

# Ou utilise Netlify, Vercel, GitHub Pages
```

### Option 3: WordPress/Elementor

1. Crée une nouvelle page
2. Widget "Custom HTML" pour le HTML
3. CSS dans **Apparence → Personnaliser → CSS additionnel**
4. JS via plugin "Insert Headers and Footers"

## 💰 Calculateur Interactif

### Fonctionnalités du calculateur

✅ **8 devises supportées** (EUR, GBP, USD, CAD, AUD, JPY, INR, CHF)  
✅ **Taux de change réels** - Mid-market rates sans markup  
✅ **Calcul automatique des frais** - 0.25-0.30% selon devise  
✅ **Comparaison vs banques** - Montre les économies réelles  
✅ **Transfer time indicator** - Instant/Fast/Standard selon route  
✅ **Swap currencies** - Bouton pour inverser les devises  

### Customizer le calculateur

#### 1. Ajouter des devises

Dans `script.js` (ligne 10-40), ajoute dans l'objet `exchangeRates`:

```javascript
const exchangeRates = {
    EUR: {
        USD: 1.0955,
        SEK: 11.2450,  // Nouvelle devise
        NOK: 11.5630   // Nouvelle devise
    }
    // ...
};
```

Puis ajoute dans le HTML (`index.html`, ligne ~90):

```html
<option value="SEK">SEK 🇸🇪</option>
<option value="NOK">NOK 🇳🇴</option>
```

#### 2. Modifier les frais

Dans `script.js` (ligne 42-46):

```javascript
const feeStructure = {
    standard: 0.0025,    // 0.25% → Change to 0.005 for 0.5%
    highVolume: 0.0030   // 0.30% → Adjust as needed
};
```

#### 3. Connecter à une API de taux réels

Décommente et modifie dans `script.js` (ligne 450-470):

```javascript
async function fetchRealRates() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/EUR');
        const data = await response.json();
        
        // Update rates
        Object.keys(data.rates).forEach(currency => {
            if (exchangeRates.EUR) {
                exchangeRates.EUR[currency] = data.rates[currency];
            }
        });
        
        calculateTransfer();
    } catch (error) {
        console.error('Failed to fetch rates:', error);
    }
}

// Fetch every 60 seconds
fetchRealRates();
setInterval(fetchRealRates, 60000);
```

**APIs recommandées:**
- [ExchangeRate-API](https://www.exchangerate-api.com/) - Free tier disponible
- [Fixer.io](https://fixer.io/) - EUR focus, perfect pour Europe
- [Open Exchange Rates](https://openexchangerates.org/) - Comprehensive

## 🔐 Trust & Compliance

### Badges inclus

Le template inclut les badges de compliance essentiels :

1. **PSD2 Compliant** - Payment Services Directive 2
2. **GDPR Protected** - General Data Protection Regulation
3. **FCA Regulated** - Financial Conduct Authority
4. **ISO 27001** - Information security standard
5. **SOC 2** - Service Organization Control

### Personnaliser les certifications

Dans `index.html` (ligne ~580-600), modifie la section Trust & Security:

```html
<div class="security-card">
    <div class="security-icon">🛡️</div>
    <h3>Ton Certification</h3>
    <p>Description de ta certification ou régulation.</p>
</div>
```

### Legal Requirements (EU/Estonia)

Pour être compliant, tu dois :

- ✅ **Privacy Policy** - Obligatoire sous GDPR
- ✅ **Terms of Service** - Conditions d'utilisation claires
- ✅ **Cookie Consent Banner** - Nécessaire pour EU
- ✅ **License Number** - Afficher ton numéro FCA/régulateur
- ✅ **Registered Address** - Adresse de la compagnie en Estonie

Ajoute dans le footer (ligne ~800):

```html
<p>
    <strong>Ta Company OÜ</strong> is authorized and regulated by the 
    Financial Conduct Authority (FCA) under the Payment Services 
    Regulations 2017 (FRN: TON_NUMERO). Registered in Estonia 
    (Registry code: TON_CODE).
</p>
```

## 🏦 Bank Partnerships Section

### Changer les logos de banques

Dans `index.html` (ligne ~260-285), remplace les placeholders:

```html
<div class="partner-logo">
    <img src="https://logo.clearbit.com/deutschebank.com" alt="Deutsche Bank">
</div>
```

**Où obtenir les logos:**
- [Clearbit Logo API](https://logo.clearbit.com/domain.com)
- [Brandfetch](https://brandfetch.com/)
- Sites officiels des banques (section Press/Media)

**Banques européennes populaires:**
- Deutsche Bank, ING, Rabobank (Pays-Bas)
- Nordea, SEB, Swedbank (Nordics)
- BBVA, Santander (Espagne)
- BNP Paribas, Société Générale (France)
- Revolut, Wise, Monzo (FinTech)

## 📊 Pricing Comparison Table

### Personnaliser le tableau

Dans `index.html` (ligne ~350-430), modifie les valeurs:

```html
<tr>
    <td>Transfer fee</td>
    <td class="highlight-cell">€2.50</td>        <!-- Tes frais -->
    <td>€25 - €45</td>                           <!-- Banques -->
    <td>€15 - €30</td>                           <!-- Compétiteurs -->
</tr>
```

### Ajouter des routes de devise

Ajoute des lignes dans la Currency Pricing table (ligne ~680):

```html
<tr>
    <td>🇪🇺 EUR → 🇸🇪 SEK</td>
    <td>€2.50 (0.25%)</td>
    <td class="highlight">€0 (Mid-market)</td>
    <td><span class="badge-instant">Instant</span></td>
</tr>
```

## 🎨 Customization Guide

### 1. Changer les couleurs

Dans `styles.css` (ligne 15-35):

```css
:root {
    --primary: #0052FF;        /* Bleu principal */
    --secondary: #00D4FF;      /* Cyan secondaire */
    --accent: #FFD700;         /* Gold accent */
    --success: #00E676;        /* Vert succès */
    --dark: #0A1929;           /* Texte foncé */
}
```

**Palettes recommandées pour FinTech:**
- **Blue Focus**: #0052FF, #00D4FF (Trust, security)
- **Green Focus**: #00C853, #00E676 (Money, growth)
- **Purple Focus**: #667EEA, #764BA2 (Premium, innovation)

### 2. Modifier le contenu

**Hero Section** (ligne 50-120):
```html
<h1 class="hero-title">
    Ton headline ici.<br/>
    <span class="gradient-text">Ta value prop</span>
</h1>
```

**Testimonials** (ligne ~530-580):
```html
<div class="testimonial-card">
    <div class="rating">⭐⭐⭐⭐⭐</div>
    <p class="testimonial-text">
        "Ta review client authentique ici..."
    </p>
    <div class="testimonial-author">
        <img src="https://i.pravatar.cc/150?img=XX" alt="Name">
        <div>
            <div class="author-name">Client Name</div>
            <div class="author-title">Role, Country 🇪🇺</div>
        </div>
    </div>
</div>
```

### 3. Ajouter ta vidéo demo (optionnel)

Remplace le calculateur par une vidéo:

```html
<div class="video-container">
    <iframe 
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID" 
        frameborder="0" 
        allow="autoplay; fullscreen" 
        allowfullscreen
    ></iframe>
</div>
```

## 📱 Responsive Design

Le template est optimisé pour:

| Device | Breakpoint | Notes |
|--------|-----------|-------|
| Desktop | 1200px+ | Full layout, 3 colonnes |
| Laptop | 1024-1199px | 2 colonnes |
| Tablet | 768-1023px | 2 colonnes, nav simplifié |
| Mobile | < 768px | 1 colonne, stack vertical |

### Test responsive

```bash
# Chrome DevTools
F12 → Toggle Device Toolbar (Ctrl+Shift+M)

# Tester sur:
- iPhone 12/13/14 (390x844)
- iPad Pro (1024x1366)
- Desktop (1920x1080)
```

## 🔧 Intégrations

### CRM / Email Marketing

Dans `script.js` (ligne 220), remplace le TODO:

```javascript
// GoHighLevel
fetch('https://api.gohighlevel.com/v1/contacts', {
    method: 'POST',
    headers: {
        'Authorization': 'Bearer YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email: emailInput.value,
        tags: ['fintech-landing', 'calculator-user']
    })
});

// Mailchimp
fetch('https://YOUR_DC.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
    method: 'POST',
    headers: {
        'Authorization': 'Basic YOUR_API_KEY',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        email_address: emailInput.value,
        status: 'subscribed'
    })
});
```

### Analytics

#### Google Analytics 4

Dans `<head>` (après ligne 20):

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

#### Facebook Pixel

```html
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
```

#### Track Calculator Usage

Dans `script.js`, ajoute après `calculateTransfer()`:

```javascript
// Track calculator interactions
gtag('event', 'calculator_used', {
    'send_currency': sendCurrency,
    'receive_currency': receiveCurrency,
    'amount': sendAmount
});
```

## 🎯 Optimisation SEO

### Meta Tags essentiels

Dans `<head>`:

```html
<!-- Basic SEO -->
<title>Ton App - Send Money Globally with Zero Fees | EU FinTech</title>
<meta name="description" content="Send money to 180+ countries with real exchange rates. Trusted by 3M+ Europeans. PSD2 & GDPR compliant.">
<meta name="keywords" content="money transfer, international payments, fintech, estonia, psd2">

<!-- Open Graph (Facebook/LinkedIn) -->
<meta property="og:title" content="Ton App - Zero Fee International Transfers">
<meta property="og:description" content="Save up to 8x on fees vs banks">
<meta property="og:image" content="https://tonsite.com/og-image.jpg">
<meta property="og:url" content="https://tonsite.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Ton App - Zero Fee Transfers">
<meta name="twitter:description" content="Save up to 8x on international transfers">
<meta name="twitter:image" content="https://tonsite.com/twitter-image.jpg">

<!-- Canonical -->
<link rel="canonical" href="https://tonsite.com">
```

### Schema Markup (JSON-LD)

Ajoute avant `</body>`:

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Ton App Money Transfer",
  "description": "Send money globally with zero hidden fees",
  "provider": {
    "@type": "FinancialService",
    "name": "Ton Company OÜ",
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "EE",
        "addressLocality": "Tallinn"
      }
    }
  },
  "offers": {
    "@type": "Offer",
    "price": "2.50",
    "priceCurrency": "EUR"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127493"
  }
}
</script>
```

## 🚀 Performance Optimization

### 1. Minification

Pour production:

```bash
# Install tools
npm install -g html-minifier clean-css-cli terser

# Minify files
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
cleancss -o styles.min.css styles.css
terser script.js -o script.min.js -c -m
```

### 2. Image Optimization

- **Format**: Use WebP avec fallback JPG
- **Compression**: TinyPNG ou Squoosh
- **Lazy loading**: Déjà intégré dans le script

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

### 3. CDN

Pour fonts et assets:

```html
<!-- Self-host fonts for better performance -->
<link rel="preload" href="/fonts/inter.woff2" as="font" crossorigin>
```

## 🔒 Security Best Practices

### 1. CSP Headers

Configure Content Security Policy:

```html
<meta http-equiv="Content-Security-Policy" content="
    default-src 'self';
    script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https:;
">
```

### 2. Form Protection

Ajoute CSRF token et rate limiting:

```javascript
// Rate limiting
let submissionCount = 0;
const maxSubmissions = 5;

form.addEventListener('submit', function(e) {
    if (submissionCount >= maxSubmissions) {
        alert('Too many attempts. Please try again later.');
        e.preventDefault();
        return;
    }
    submissionCount++;
});
```

### 3. Input Sanitization

```javascript
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}
```

## 📋 Checklist pré-launch

### Technique
- [ ] Remplace tous les placeholders (logo, images, textes)
- [ ] Configure les taux de change (API ou manuel)
- [ ] Connecte les formulaires à ton CRM
- [ ] Setup Google Analytics
- [ ] Teste sur mobile/tablet/desktop
- [ ] Vérifie tous les liens
- [ ] Optimise les images
- [ ] Minifie CSS/JS

### Legal/Compliance
- [ ] Privacy Policy page créée
- [ ] Terms of Service créés
- [ ] Cookie consent banner ajouté
- [ ] Numéro de licence FCA/régulateur ajouté
- [ ] Adresse registered affichée
- [ ] Compliance badges vérifiés

### Content
- [ ] Testimonials authentiques
- [ ] Bank logos avec permissions
- [ ] Taux de change à jour
- [ ] FAQ section complétée
- [ ] Contact info correcte

### Marketing
- [ ] Meta tags SEO optimisés
- [ ] OG images créées (1200x630px)
- [ ] Schema markup ajouté
- [ ] Sitemap.xml généré
- [ ] robots.txt configuré

## 💼 Utilisation Commerciale

Ce template est **libre d'utilisation** pour:

✅ Projets clients FinTech  
✅ Tes propres applications de paiement  
✅ Revente (avec modifications)  
✅ White-label dans packages GoHighLevel  

**Tu peux:**
- Modifier complètement le design
- L'intégrer dans tes snapshots GHL
- Le vendre comme service
- L'utiliser pour clients estoniens et européens

**Pas besoin de:**
- Crédit / attribution
- Permission spéciale
- Paiement de licence

## 🌍 Marché Estonien / EU

### Spécificités estoniennes

**Régulations:**
- PSD2 compliance obligatoire
- GDPR pour data protection
- FCA ou équivalent local pour license

**Langues recommandées:**
- **Primary**: English (standard FinTech)
- **Secondary**: Estonian pour confiance locale
- **Consider**: Russian (30% population Estonia)

**Payment Methods:**
- Stripe (primary pour EU)
- SEPA transfers
- Wise Business
- Local bank transfers

### Pricing Psychology EU

- Use **EUR €** (pas USD)
- Transparence totale des frais
- Comparison vs banques traditionnelles
- "Save X€" messaging efficace
- Mid-market rate = argument clé

## 🐛 Troubleshooting

### Le calculateur ne fonctionne pas
- Vérifie que script.js est bien chargé
- Ouvre Console (F12) pour erreurs
- Vérifie les IDs des inputs (sendAmount, receiveCurrency, etc.)

### Les taux de change sont incorrects
- Update l'objet `exchangeRates` dans script.js
- Ou connecte une API de taux réels (voir section Customization)

### Styles cassés
- Vérifie que styles.css est dans le même dossier
- Clear le cache navigateur (Ctrl+Shift+R)
- Vérifie les imports de fonts Google

### Responsive issues
- Test avec Chrome DevTools (F12 → Device mode)
- Vérifie la meta viewport dans `<head>`

## 📞 Support & Resources

### APIs utiles
- **Exchange Rates**: ExchangeRate-API, Fixer.io
- **Payment Processing**: Stripe, PayPal, Wise API
- **KYC/Verification**: Onfido, Jumio, Sumsub
- **Banking**: Modulr, Railsbank, Synapse

### FinTech Compliance
- [FCA Handbook](https://www.handbook.fca.org.uk/)
- [PSD2 Guidelines](https://ec.europa.eu/info/law/payment-services-psd-2-directive-eu-2015-2366_en)
- [GDPR Compliance](https://gdpr.eu/)

### Design Inspiration
- [Wise](https://wise.com/) - Clean, trustworthy
- [Revolut](https://www.revolut.com/) - Modern, gradient
- [N26](https://n26.com/) - Minimalist, mobile-first
- [Monzo](https://monzo.com/) - Friendly, approachable

## 🎯 Prochaines étapes

1. **Customise le contenu** avec tes informations
2. **Configure le calculateur** avec tes frais réels
3. **Connecte les forms** à ton CRM/email
4. **Setup analytics** pour tracking
5. **Teste compliance** avec un avocat FinTech
6. **Deploy** sur ton hébergement
7. **A/B test** différentes versions
8. **Monitor & optimize** conversions

## 📈 Version & Updates

**Version**: 1.0.0  
**Dernière mise à jour**: 2025  
**Compatibilité**:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

**🇪🇪 Built for Estonian & European FinTech ecosystem**

**💳 Compliant with PSD2, GDPR, and EU regulations**

Good luck with your FinTech launch! 🚀
