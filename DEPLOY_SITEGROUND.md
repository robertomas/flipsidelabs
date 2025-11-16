# 🚀 Configuration du Déploiement Automatique vers SiteGround

Ce guide vous explique comment configurer le déploiement automatique de votre dépôt GitHub vers votre serveur SiteGround.

## 📋 Prérequis

1. ✅ Un compte SiteGround avec accès FTP/SFTP
2. ✅ Votre dépôt GitHub configuré
3. ✅ Les identifiants FTP/SFTP de SiteGround

## 🔑 Étape 1 : Obtenir vos identifiants SiteGround

### Via le Site Tools (nouveau panneau SiteGround) :

1. Connectez-vous à votre compte SiteGround
2. Allez dans **Site Tools** → **Files** → **FTP Accounts**
3. Notez les informations suivantes :
   - **Host** (ex: `ftp.flipsidelabs.com` ou `your-server.siteground.com`)
   - **Username** (votre nom d'utilisateur FTP)
   - **Password** (votre mot de passe FTP)
   - **Port** (généralement 21 pour FTP ou 22 pour SFTP)

### Via cPanel (ancien panneau) :

1. Connectez-vous à cPanel
2. Allez dans **FTP Accounts**
3. Créez un compte FTP si nécessaire
4. Notez les identifiants

## 🔐 Étape 2 : Configurer les Secrets GitHub

1. Allez sur votre dépôt GitHub : https://github.com/robertomas/flipsidelabs
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu de gauche, cliquez sur **Secrets and variables** → **Actions**
4. Cliquez sur **New repository secret** et ajoutez les 3 secrets suivants :

### Secret 1 : `SITEGROUND_HOST`
- **Name:** `SITEGROUND_HOST`
- **Value:** Votre host FTP (ex: `ftp.flipsidelabs.com` ou `your-server.siteground.com`)

### Secret 2 : `SITEGROUND_USERNAME`
- **Name:** `SITEGROUND_USERNAME`
- **Value:** Votre nom d'utilisateur FTP

### Secret 3 : `SITEGROUND_PASSWORD`
- **Name:** `SITEGROUND_PASSWORD`
- **Value:** Votre mot de passe FTP

## ✅ Étape 3 : Tester le Déploiement

Une fois les secrets configurés :

1. **Option A : Push automatique**
   - Faites une modification dans votre code
   - Commitez et poussez vers GitHub :
   ```bash
   git add .
   git commit -m "Test deployment"
   git push origin main
   ```
   - Le déploiement se déclenchera automatiquement

2. **Option B : Déclenchement manuel**
   - Allez sur votre dépôt GitHub
   - Cliquez sur l'onglet **Actions**
   - Sélectionnez le workflow **Deploy to SiteGround**
   - Cliquez sur **Run workflow** → **Run workflow**

## 📁 Structure de Déploiement

Les fichiers seront déployés dans `/public_html/` sur votre serveur SiteGround :

```
/public_html/
├── index.html
├── index-fr.html
├── index-es.html
├── styles.css
├── styles.min.css
├── script.js
├── flipside-labs-logo.png
├── flipsidelabs-og-image.png
├── robots.txt
├── sitemap.xml
└── estonian-*-landing-template/
```

## 🔒 Sécurité

- ✅ Les secrets sont stockés de manière sécurisée dans GitHub
- ✅ Ils ne sont jamais visibles dans les logs
- ✅ Seuls les fichiers nécessaires sont déployés (les fichiers `.md` et `.git` sont exclus)

## 🐛 Dépannage

### Erreur : "Connection refused"
- Vérifiez que le port FTP est correct (21 pour FTP, 22 pour SFTP)
- Vérifiez que votre firewall SiteGround autorise les connexions FTP

### Erreur : "Authentication failed"
- Vérifiez que les identifiants dans les secrets GitHub sont corrects
- Assurez-vous qu'il n'y a pas d'espaces avant/après les valeurs

### Erreur : "Directory not found"
- Vérifiez que le chemin `/public_html/` existe sur votre serveur
- Certains comptes SiteGround utilisent `/public_html/` ou `/www/` ou juste `/`

### Les fichiers ne se mettent pas à jour
- Vérifiez les logs GitHub Actions pour voir les erreurs
- Assurez-vous que le workflow s'est bien exécuté (icône verte)

## 📝 Personnalisation du Workflow

Si vous avez besoin de modifier le comportement du déploiement, éditez le fichier :
`.github/workflows/deploy-siteground.yml`

### Exemples de modifications :

**Changer le répertoire de destination :**
```yaml
server-dir: /www/  # Au lieu de /public_html/
```

**Exclure d'autres fichiers :**
```yaml
exclude: |
  **/.git*
  **/node_modules/**
  **/test/**
```

**Nettoyer le serveur avant déploiement (attention !) :**
```yaml
dangerous-clean-slate: true  # Supprime tout avant de déployer
```

## 🎯 Prochaines Étapes

Une fois le déploiement configuré :

1. ✅ Testez avec une petite modification
2. ✅ Vérifiez que les fichiers sont bien sur le serveur
3. ✅ Testez votre site en production
4. ✅ Configurez un domaine personnalisé si nécessaire

## 📞 Support

Si vous rencontrez des problèmes :
- Consultez les logs GitHub Actions (onglet Actions → cliquez sur le workflow)
- Vérifiez la documentation SiteGround sur FTP
- Contactez le support SiteGround si nécessaire

---

**Note :** Le déploiement se fait uniquement sur la branche `main`. Pour déployer d'autres branches, modifiez le workflow.

