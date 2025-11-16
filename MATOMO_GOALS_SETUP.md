# 📊 Guide de Configuration Matomo Goals

## ✅ Code Matomo Intégré

Le tracking code Matomo est maintenant actif sur ton site avec des événements automatiques détaillés.

---

## 🎯 Goals à Configurer dans Matomo

Va dans **Matomo Dashboard → Goals → Add a new goal** et configure ces objectifs :

### **Goal 1: Réservation Consultation** ⭐ (Priorité HAUTE)
- **Nom:** Book Free Consultation
- **Description:** Visiteur clique sur le lien de réservation calendrier
- **Type:** Event
- **Category:** `Conversion`
- **Action:** `Book Consultation`
- **Valeur de conversion:** €200 (valeur estimée d'un lead qualifié)

---

### **Goal 2: CTA Principal Cliqué** ⭐ (Priorité HAUTE)
- **Nom:** CTA Button Click
- **Description:** Clic sur boutons "Get Started"
- **Type:** Event
- **Category:** `CTA`
- **Action:** `Click`
- **Valeur de conversion:** €50

---

### **Goal 3: Intérêt Package** ⭐ (Priorité MOYENNE)
- **Nom:** Package Card Click
- **Description:** Visiteur clique sur une carte de package
- **Type:** Event
- **Category:** `Package`
- **Action:** `View`
- **Valeur de conversion:** €75

---

### **Goal 4: Contact Email** ⭐ (Priorité HAUTE)
- **Nom:** Email Click
- **Description:** Clic sur lien email info@flipsidelabs.com
- **Type:** Event
- **Category:** `Contact`
- **Action:** `Email Click`
- **Valeur de conversion:** €100

---

### **Goal 5: Contact Téléphone** ⭐ (Priorité HAUTE)
- **Nom:** Phone Click
- **Description:** Clic sur numéro de téléphone
- **Type:** Event
- **Category:** `Contact`
- **Action:** `Phone Click`
- **Valeur de conversion:** €150

---

### **Goal 6: Utilisateur Engagé (Scroll)** (Priorité MOYENNE)
- **Nom:** Engaged User - 75% Scroll
- **Description:** Visiteur scrolle jusqu'à 75% de la page
- **Type:** Event
- **Category:** `Engagement`
- **Action:** `Scroll Depth`
- **Name:** `75%`
- **Valeur de conversion:** €10

---

### **Goal 7: Utilisateur Très Engagé (Temps)** (Priorité MOYENNE)
- **Nom:** Engaged User - 2+ Minutes
- **Description:** Visiteur reste 2 minutes ou plus
- **Type:** Event
- **Category:** `Engagement`
- **Action:** `Time on Page`
- **Name:** `2+ minutes`
- **Valeur de conversion:** €25

---

## 📈 Événements Trackés (sans Goals assignés)

Ces événements sont automatiquement trackés dans Matomo → Behaviour → Events :

### **Navigation**
- **Category:** `Navigation`
- **Action:** `Section Click`
- **Name:** Section visitée (#services, #packages, etc.)

### **FAQ Interactions**
- **Category:** `FAQ`
- **Action:** `Question Click`
- **Name:** Question cliquée

### **Engagement - Scroll Depth**
- **Category:** `Engagement`
- **Action:** `Scroll Depth`
- **Name:** `25%`, `50%`, `75%`, `100%`

### **Social Proof**
- **Category:** `Engagement`
- **Action:** `Testimonials Viewed`
- **Name:** `Social Proof`

### **Formulaire GHL**
- **Category:** `Form`
- **Action:** `GHL Form Loaded`
- **Name:** `Contact Form`

---

## 🚀 Prochaines Étapes

### 1. **Configurer les Goals dans Matomo** (15 min)
   - Connecte-toi à `analytics.flipsidelabs.com`
   - Va dans **Goals** → **Manage Goals**
   - Crée les 7 goals ci-dessus avec les IDs correspondants (1-7)

### 2. **Vérifier le Tracking** (5 min)
   - Ouvre ton site dans un nouvel onglet incognito
   - Clique sur différents éléments
   - Va dans Matomo → **Visitors** → **Real-time**
   - Vérifie que les événements apparaissent en temps réel

### 3. **Créer un Dashboard Personnalisé** (10 min)
   - Matomo → **Dashboard** → **Create New Dashboard**
   - Ajoute ces widgets :
     - Goals Overview (taux de conversion)
     - Visitor Log (activité récente)
     - Events by Category
     - Acquisition Channels
     - Devices (Desktop/Mobile/Tablet)
     - Countries

### 4. **Configurer les Alertes** (optionnel)
   - Matomo → **Personal** → **Email Reports**
   - Configure un rapport hebdomadaire avec :
     - Conversions totales (Goals 1, 2, 4, 5)
     - Trafic par source
     - Taux de rebond

---

## 💡 Conseils d'Optimisation

### **Analyser les Données** (après 2-4 semaines)

1. **Taux de Conversion par Source**
   - Quelle source de trafic convertit le mieux ? (Google Ads, Organic, Direct, Social)
   - Ajuste ton budget marketing en conséquence

2. **Engagement par Section**
   - Quelles sections ont le plus de clics ? (Services, Packages, FAQ)
   - Optimise les sections moins performantes

3. **Comportement Mobile vs Desktop**
   - Compare les taux de conversion mobile vs desktop
   - Optimise l'expérience mobile si nécessaire

4. **Parcours Utilisateur**
   - Matomo → **Behaviour** → **Pages**
   - Identifie où les visiteurs quittent le site
   - Optimise ces pages

5. **Tests A/B** (futur)
   - Teste différents titres CTA
   - Teste différentes positions de boutons
   - Teste différents prix ou offres

---

## 🔒 Respect de la Vie Privée

✅ **Conformité RGPD/GDPR :**
- Matomo est auto-hébergé (analytics.flipsidelabs.com)
- Aucune donnée partagée avec des tiers
- Anonymisation IP activée
- Pas de cookies tiers

⚠️ **Optionnel:** Ajoute un banner de consentement si tu veux être ultra-conforme :
- [Matomo Opt-Out Documentation](https://developer.matomo.org/guides/tracking-consent)

---

## 📞 Besoin d'Aide ?

Si tu as des questions sur la configuration ou l'analyse des données, contacte-moi :
- Email: info@flipsidelabs.com
- Dashboard Matomo: https://analytics.flipsidelabs.com

---

## 🎉 Résumé

✅ Tracking Matomo actif  
✅ 11 types d'événements configurés  
✅ 7 Goals prêts à être créés dans le dashboard  
✅ Tracking automatique des conversions  
✅ Respect RGPD avec hébergement privé  

**Prochaine étape:** Configure les Goals dans ton dashboard Matomo ! 🚀

