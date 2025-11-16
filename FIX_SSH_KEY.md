# 🔧 Correction de la Clé SSH

## ❌ Erreur : "error in libcrypto"

Cette erreur signifie que la clé SSH privée dans GitHub Secrets n'est pas correctement formatée.

## ✅ Solution : Vérifier et Corriger la Clé SSH

### Étape 1 : Vérifier votre clé SSH locale

Sur votre Mac, dans le terminal :

```bash
# Vérifier que la clé existe
ls -la ~/.ssh/siteground_deploy

# Afficher le début de la clé (doit commencer par -----BEGIN)
head -n 1 ~/.ssh/siteground_deploy

# Afficher la fin de la clé (doit finir par -----END)
tail -n 1 ~/.ssh/siteground_deploy

# Vérifier que la clé est valide
ssh-keygen -l -f ~/.ssh/siteground_deploy
```

### Étape 2 : Copier la clé complète

```bash
# Afficher TOUTE la clé (important : copier TOUT)
cat ~/.ssh/siteground_deploy
```

La clé doit ressembler à ceci :

```
-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABlwAAAAdzc2gtcn
NhAAAAAwEAAQAAAYEAv... (beaucoup de lignes) ...
... (beaucoup de lignes) ...
-----END OPENSSH PRIVATE KEY-----
```

### Étape 3 : Mettre à jour le secret GitHub

1. Allez sur : https://github.com/robertomas/flipsidelabs/settings/secrets/actions
2. Cliquez sur l'environment `SITEGROUND_HOST`
3. Trouvez le secret `SITEGROUND_SSH_KEY`
4. Cliquez sur **Edit** (ou **Update**)
5. **Supprimez tout le contenu actuel**
6. Collez la clé complète que vous avez copiée avec `cat ~/.ssh/siteground_deploy`
7. **IMPORTANT** :
   - ✅ Copiez TOUT, de `-----BEGIN` jusqu'à `-----END`
   - ✅ Incluez les lignes `-----BEGIN` et `-----END`
   - ✅ Ne mettez PAS de guillemets autour
   - ✅ Ne mettez PAS d'espaces avant ou après
   - ✅ Gardez tous les retours à la ligne
8. Cliquez sur **Update secret**

### Étape 4 : Vérifier le format dans GitHub

Après avoir sauvegardé, GitHub devrait afficher :
- "Last updated: X minutes ago"
- Le secret devrait être masqué avec des `***`

## 🚨 Erreurs Courantes

### ❌ Erreur : "Clé incomplète"
- **Cause :** Vous n'avez pas copié toutes les lignes
- **Solution :** Utilisez `cat ~/.ssh/siteground_deploy` et copiez TOUT

### ❌ Erreur : "Format incorrect"
- **Cause :** La clé ne commence pas par `-----BEGIN` ou ne finit pas par `-----END`
- **Solution :** Vérifiez avec `head -n 1` et `tail -n 1`

### ❌ Erreur : "Espaces en trop"
- **Cause :** Des espaces avant/après la clé dans GitHub
- **Solution :** Supprimez tout et recopiez proprement

### ❌ Erreur : "Clé publique au lieu de privée"
- **Cause :** Vous avez copié `siteground_deploy.pub` au lieu de `siteground_deploy`
- **Solution :** Utilisez `cat ~/.ssh/siteground_deploy` (sans `.pub`)

## ✅ Si vous n'avez pas encore de clé SSH

Générez-en une nouvelle :

```bash
# Générer une nouvelle clé
ssh-keygen -t ed25519 -C "github-deploy-flipsidelabs" -f ~/.ssh/siteground_deploy

# Ne mettez PAS de passphrase (appuyez juste sur Entrée)

# Afficher la clé publique (pour SiteGround)
cat ~/.ssh/siteground_deploy.pub

# Afficher la clé privée (pour GitHub)
cat ~/.ssh/siteground_deploy
```

Ensuite :
1. **Sur SiteGround :** Importez la clé publique (`siteground_deploy.pub`)
2. **Sur GitHub :** Ajoutez la clé privée (`siteground_deploy`) dans le secret

## 🧪 Test après Correction

Une fois la clé corrigée dans GitHub :

1. Retournez sur : https://github.com/robertomas/flipsidelabs/actions
2. Cliquez sur "Deploy to SiteGround"
3. Cliquez sur "Run workflow" → "Run workflow"
4. Les logs devraient maintenant afficher "SSH key is valid" au lieu de l'erreur

