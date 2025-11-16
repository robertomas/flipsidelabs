# 🚀 Configuration du Déploiement Automatique vers SiteGround (SSH)

Ce guide vous explique comment configurer le déploiement automatique de votre dépôt GitHub vers votre serveur SiteGround via **SSH** (plus sécurisé que FTP).

## 📋 Prérequis

1. ✅ Un compte SiteGround avec accès SSH activé
2. ✅ Votre dépôt GitHub configuré
3. ✅ Une clé SSH générée

## 🔑 Étape 1 : Activer SSH sur SiteGround

### Via le Site Tools (nouveau panneau SiteGround) :

1. Connectez-vous à votre compte SiteGround
2. Allez dans **Site Tools** → **Dev** → **SSH Keys Manager**
3. Si SSH n'est pas activé, activez-le
4. Notez votre **hostname SSH** (ex: `ssh.flipsidelabs.com` ou `your-server.siteground.com`)
5. Notez votre **nom d'utilisateur SSH** (généralement le même que votre compte cPanel)

### Via cPanel (ancien panneau) :

1. Connectez-vous à cPanel
2. Allez dans **SSH Access**
3. Activez SSH si nécessaire
4. Notez votre hostname et username

## 🔐 Étape 2 : Générer une Clé SSH

### Sur votre Mac (terminal) :

```bash
# Générer une nouvelle clé SSH (si vous n'en avez pas déjà une pour SiteGround)
ssh-keygen -t ed25519 -C "github-deploy-flipsidelabs" -f ~/.ssh/siteground_deploy

# Afficher la clé publique (à copier)
cat ~/.ssh/siteground_deploy.pub

# Afficher la clé privée (à copier pour GitHub)
cat ~/.ssh/siteground_deploy
```

### Ajouter la clé publique sur SiteGround :

1. Allez dans **Site Tools** → **Dev** → **SSH Keys Manager**
2. Cliquez sur **Import SSH Key**
3. Collez le contenu de `~/.ssh/siteground_deploy.pub`
4. Donnez-lui un nom (ex: "GitHub Deploy")
5. Cliquez sur **Import**

### Tester la connexion SSH :

```bash
ssh -i ~/.ssh/siteground_deploy votre-username@votre-hostname.siteground.com
```

Si ça fonctionne, vous êtes connecté ! Tapez `exit` pour quitter.

## 🔐 Étape 3 : Configurer les Secrets GitHub

1. Allez sur votre dépôt GitHub : https://github.com/robertomas/flipsidelabs
2. Cliquez sur **Settings** (en haut à droite)
3. Dans le menu de gauche, cliquez sur **Secrets and variables** → **Actions**
4. Cliquez sur **New repository secret** et ajoutez les 4 secrets suivants :

### Secret 1 : `SITEGROUND_HOST`
- **Name:** `SITEGROUND_HOST`
- **Value:** Votre hostname SSH (ex: `ssh.flipsidelabs.com` ou `your-server.siteground.com`)

### Secret 2 : `SITEGROUND_USERNAME`
- **Name:** `SITEGROUND_USERNAME`
- **Value:** Votre nom d'utilisateur SSH (généralement votre username cPanel)

### Secret 3 : `SITEGROUND_SSH_KEY`
- **Name:** `SITEGROUND_SSH_KEY`
- **Value:** Le contenu complet de votre **clé privée** (`~/.ssh/siteground_deploy`)
  - ⚠️ **IMPORTANT** : Copiez TOUT le contenu, y compris `-----BEGIN OPENSSH PRIVATE KEY-----` et `-----END OPENSSH PRIVATE KEY-----`

### Secret 4 : `SITEGROUND_PATH`
- **Name:** `SITEGROUND_PATH`
- **Value:** Le chemin vers votre répertoire web (généralement `/home/username/public_html/` ou `/public_html/`)
  - Pour trouver le chemin exact, connectez-vous en SSH et tapez `pwd` dans votre répertoire web

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

- ✅ **SSH est plus sécurisé que FTP** : connexion chiffrée et authentification par clé
- ✅ Les secrets sont stockés de manière sécurisée dans GitHub
- ✅ Ils ne sont jamais visibles dans les logs
- ✅ Seuls les fichiers nécessaires sont déployés (les fichiers `.md` et `.git` sont exclus)
- ✅ **rsync** est utilisé pour un transfert efficace et sécurisé

## 🐛 Dépannage

### Erreur : "Connection refused" ou "Host key verification failed"
- Vérifiez que SSH est bien activé sur votre compte SiteGround
- Vérifiez que le hostname SSH est correct dans `SITEGROUND_HOST`
- Le port SSH est généralement 22 (par défaut, géré automatiquement)

### Erreur : "Permission denied (publickey)"
- Vérifiez que la clé publique est bien importée sur SiteGround
- Vérifiez que la clé privée dans GitHub Secrets est complète (avec les lignes BEGIN/END)
- Assurez-vous qu'il n'y a pas d'espaces avant/après la clé privée

### Erreur : "No such file or directory"
- Vérifiez que le chemin dans `SITEGROUND_PATH` est correct
- Connectez-vous en SSH et vérifiez le chemin avec `pwd`
- Le chemin doit être absolu (commence par `/`)

### Erreur : "rsync: command not found"
- SiteGround devrait avoir rsync installé, mais si ce n'est pas le cas, contactez le support
- Alternative : nous pouvons utiliser `scp` au lieu de `rsync`

### Les fichiers ne se mettent pas à jour
- Vérifiez les logs GitHub Actions pour voir les erreurs
- Assurez-vous que le workflow s'est bien exécuté (icône verte)

## 📝 Personnalisation du Workflow

Si vous avez besoin de modifier le comportement du déploiement, éditez le fichier :
`.github/workflows/deploy-siteground.yml`

### Exemples de modifications :

**Changer le répertoire de destination :**
Modifiez le secret `SITEGROUND_PATH` dans GitHub (ex: `/home/username/www/`)

**Exclure d'autres fichiers :**
Modifiez le workflow et ajoutez dans les `--exclude` :
```yaml
--exclude='dossier-a-exclure' \
--exclude='*.extension' \
```

**Désactiver la suppression des fichiers supprimés localement :**
Retirez `--delete` de la commande rsync dans le workflow

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

