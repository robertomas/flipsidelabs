# FlipSideLabs Website - Setup Guide

## 🚀 Quick Start

Votre site est prêt à être déployé ! Voici ce qu'il reste à configurer :

---

## ✅ Configuration Requise

### **1. Ajouter Votre Numéro GHL**

**Localisation :** `index.html` ligne 472

**Actuel :**
```html
<p><a href="tel:+[YOUR_GHL_NUMBER]">+[Your GHL Number]</a></p>
```

**À remplacer par :**
```html
<p><a href="tel:+37212345678">+372 1234 5678</a></p>
```

**Comment obtenir un numéro GHL :**
1. Connectez-vous à votre compte GoHighLevel
2. Allez dans Settings → Phone Numbers
3. Achetez un numéro (€5-€15/mois selon pays)
4. Configurez le forwarding vers votre mobile
5. Copiez le numéro dans le format international (+372...)

---

## 📋 Informations de l'Entreprise

Toutes les informations suivantes sont déjà intégrées :

✅ **Nom :** FlipSideLabs OÜ  
✅ **Registry Code :** 14673240  
✅ **Fondation :** 2019 (6+ ans)  
✅ **Adresse :** Harju maakond, Tallinn, Lasnamäe linnaosa, Sepapaja tn 6, 15551  
✅ **Email :** info@flipsidelabs.com  
✅ **Activité :** Computer Programming Services (EMTAK 62101)  
✅ **Google Reviews :** 5.0/5.0 (10 reviews)

---

## 🎯 Sections du Site

Votre site contient les sections suivantes :

1. **Hero Section**
   - Titre accrocheur
   - Stats (80% time saved, 3x lead growth, 24/7 automation)
   - Trust badges (Google reviews, Since 2019, 20+ years exp)

2. **Problem Section** (2x2 grid)
   - Wasting Time on Manual Tasks
   - Bleeding Money on Tools
   - Losing Leads in the Cracks
   - Tech Stack Overwhelm

3. **Services Section** (2x2 grid)
   - WordPress + Elementor Pro
   - Complete Marketing Automation System (Most Popular)
   - Landing Pages & Newsletters
   - n8n Workflow Automation

4. **Packages Section** (3 packages)
   - Digital Foundation (€4,500)
   - Growth Automation System (€9,500 + €597/mo) - Best Value
   - Fractional Growth CTO (€3,500/mo)

5. **Why Us Section** (6 cards)
   - e-Residency Specialists
   - Trilingual Support
   - Modern Stack
   - 20+ Years Experience
   - AI-First Approach
   - ROI-Focused

6. **Testimonials Section** (3x2 grid)
   - 6 Google reviews sélectionnées
   - Lien vers toutes les reviews

7. **Use Cases Section** (3x2 grid)
   - Early-Stage Startups
   - Growth-Stage Companies
   - B2B SaaS Businesses
   - Coaches & Consultants
   - Marketing Agencies
   - E-commerce Brands

8. **Payment Terms Section**
   - Flexible payment plans
   - Multiple payment methods
   - Clear terms

9. **CTA Section**
   - Call to action principal
   - Garanties

10. **Contact Form**
    - Formulaire complet
    - Informations de contact
    - Intégration prête pour backend

11. **Footer**
    - Navigation
    - Registry code
    - Copyright

---

## 🎨 Design Features

✅ **Responsive Design**
- Mobile-first approach
- Tablette optimisée
- Desktop full-width

✅ **Modern UI**
- Dark theme (Apple-style)
- Gradient bleu moderne
- Animations smooth
- Micro-interactions

✅ **Typography**
- `text-wrap: balance` pour les titres
- `text-wrap: pretty` pour les paragraphes
- Pas d'orphelins typographiques

✅ **Optimisations**
- Grid 2x2 pour sections équilibrées
- Featured cards mis en avant
- Trust signals partout

---

## 📦 Fichiers du Projet

```
flipsidelabs/
├── index.html                    # Page principale
├── styles.css                    # Styles CSS
├── script.js                     # JavaScript
├── flipside-labs-logo.png        # Logo
├── PROPOSAL_TEMPLATE.md          # Template de proposition commerciale
├── CONTRACT_TEMPLATE.md          # Template de contrat
└── README_SETUP.md              # Ce fichier
```

---

## 🔧 Prochaines Étapes

### **Avant de Déployer :**

1. ✅ Ajouter votre numéro GHL (ligne 472 de index.html)
2. ✅ Tester le formulaire de contact (connecter à votre backend)
3. ✅ Vérifier tous les liens
4. ✅ Tester sur mobile/tablette/desktop

### **Déploiement :**

**Option A : Netlify (Recommandé - Gratuit)**
1. Créer compte sur netlify.com
2. Drag & drop le dossier
3. Domaine gratuit .netlify.app
4. Connecter votre domaine flipsidelabs.com

**Option B : Vercel (Alternative)**
1. Créer compte sur vercel.com
2. Import depuis GitHub
3. Deploy automatique

**Option C : Hosting Traditionnel**
1. Upload via FTP
2. Pointer votre domaine
3. SSL gratuit via Let's Encrypt

---

## 🚀 Optimisations Post-Lancement

### **Analytics :**
- [ ] Google Analytics 4
- [ ] Google Tag Manager
- [ ] Hotjar (heatmaps)

### **SEO :**
- [ ] Google Search Console
- [ ] Sitemap.xml
- [ ] robots.txt
- [ ] Meta tags (déjà optimisés)

### **Conversion :**
- [ ] A/B testing (hero CTA)
- [ ] Exit-intent popup
- [ ] Live chat (Tawk.to gratuit)

### **Performance :**
- [ ] Optimiser images (WebP)
- [ ] Minifier CSS/JS
- [ ] CDN pour assets

---

## 📞 Intégrations Recommandées

### **Formulaire de Contact :**

**Option 1 : Formspree (Simple)**
```html
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

**Option 2 : EmailJS (Gratuit)**
```javascript
emailjs.send("service_id", "template_id", {
    name: formData.name,
    email: formData.email,
    message: formData.message
});
```

**Option 3 : Webhook vers GHL**
```javascript
fetch('https://YOUR_GHL_WEBHOOK', {
    method: 'POST',
    body: JSON.stringify(formData)
});
```

### **Call Tracking (GHL) :**

Une fois votre numéro GHL configuré :
1. Forwarding automatique vers votre mobile
2. SMS bidirectionnel activé
3. Call recording ON
4. Voicemail professionnel enregistré
5. Business hours configurées

---

## 🎯 Conversion Optimization Checklist

### **Trust Signals :**
- [x] Google reviews visibles
- [x] Registry code affiché
- [x] Adresse physique
- [x] Année de fondation
- [x] 20+ ans d'expérience
- [ ] Logos de clients (optionnel)
- [ ] Certifications (optionnel)

### **Call-to-Actions :**
- [x] CTAs multiples
- [x] Boutons contrastés
- [x] "Get Started" visible
- [x] "Book Consultation" accessible
- [x] Formulaire simple

### **Social Proof :**
- [x] 10 Google reviews
- [x] 6 testimonials affichés
- [x] Client de 20+ ans mentionné
- [x] Lien vers reviews
- [ ] Case studies (à ajouter)

---

## 💰 Pricing Strategy

Vos packages sont positionnés pour :

**Package 1 (€4,500) :**
- Entry-level
- Filtre les prospects non-sérieux
- Marge confortable

**Package 2 (€9,500 + €597/mo) :**
- Sweet spot
- Meilleure valeur perçue
- Recurring revenue

**Package 3 (€3,500/mo) :**
- Premium positioning
- Pour clients €50K+/mois
- High lifetime value

**Average Customer Lifetime Value :**
- Package 1 : €4,500 (one-time)
- Package 2 : €9,500 + (€597 × 12) = €16,664/an
- Package 3 : €42,000/an

---

## 📊 Success Metrics à Suivre

### **Traffic :**
- Visiteurs uniques/mois
- Pages vues
- Taux de rebond
- Temps sur site

### **Conversion :**
- Formulaire submissions
- Appels téléphoniques
- Clics "Get Started"
- Taux de conversion global

### **Engagement :**
- Scroll depth
- Sections visitées
- Clics sur testimonials
- Clics sur Google reviews

---

## 🆘 Support

**Questions ? Modifications ?**

1. **HTML/CSS :** index.html et styles.css
2. **JavaScript :** script.js
3. **Documents commerciaux :** PROPOSAL_TEMPLATE.md et CONTRACT_TEMPLATE.md

**Besoin d'aide ?**
- Email : info@flipsidelabs.com
- Documents dans le projet pour référence

---

## 🎉 Félicitations !

Votre site est :
- ✅ Professionnel
- ✅ Optimisé pour conversion
- ✅ Mobile-responsive
- ✅ SEO-ready
- ✅ Trust-signals partout
- ✅ Pricing clair
- ✅ Légalement conforme (Estonie)

**Il ne reste qu'à ajouter votre numéro GHL et déployer ! 🚀**

---

*Dernière mise à jour : Novembre 2025*

