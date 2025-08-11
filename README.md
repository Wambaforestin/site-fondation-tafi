# Fondation TAFI Academy - Site Web Officiel

> Site web moderne et responsive pour la Fondation TAFI Academy, centre de formation sport-études situé à Yaoundé-Mbankomo, Cameroun.

[![Deployed on Firebase](https://img.shields.io/badge/Deployed%20on-Firebase-orange)](https://fondation-tafi-cameroun.web.app/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## À Propos

La **Fondation TAFI Academy** est une école dédiée au développement des jeunes talents à travers l'excellence sportive et académique. Située au Cameroun principalement à Yaoundé-Mbankomo, notre centre de formation sport-études offre un environnement unique pour former la prochaine génération de leaders.

### Informations de l'Organisation

- **Type**: Organisation à but non lucratif
- **Spécialité**: Centre de formation sport et études
- **Localisation**: Rue de la CAF, Mbankomo, Yaoundé, Cameroun
- **Mission**: Accompagner les jeunes dans leur parcours académique et sportif vers l'excellence

## Site Web

**URL Production**: [https://fondation-tafi-cameroun.web.app/](https://fondation-tafi-cameroun.web.app/)

## Fonctionnalités

### Design Moderne & Responsive

- Interface utilisateur moderne avec animations fluides
- Design responsive optimisé pour tous les appareils
- Carrousel d'images automatique sur la page d'accueil
- Navigation mobile avec menu hamburger

### Sections Principales

- **Accueil**: Présentation avec carrousel et statistiques
- **À Propos**: Histoire et mission de la fondation
- **Programmes**: Formation sportive et académique
- **Admission**: Processus d'inscription
- **Galerie**: Photos des activités et infrastructures
- **Contact**: Informations de contact et formulaire
- **Paiement**: Section pour les frais de pension

### Technologies Utilisées (initiales utilisées)

- **Frontend**: HTML5, CSS3 (Grid/Flexbox), JavaScript (ES6+)
- **Icons**: Font Awesome 6.0.0
- **Animations**: CSS Transitions & Keyframes
- **Responsive**: Mobile-first design
- **Performance**: Images optimisées et code minifié

## Déploiement

### Firebase Hosting

Le site est déployé sur **Firebase Hosting** pour assurer une performance optimale et une disponibilité 24/7.

#### Configuration Firebase

```json
{
  "hosting": {
    "public": "public",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ]
  }
}
```

#### deploiement en production

> Alors, dans notre cas, le déploiement se fait via un processus CI/CD (Intégration Continue / Déploiement Continu) en utilisant GitHub Actions.
> Ce processus permet de déployer automatiquement les modifications sur Firebase à chaque push sur la branche principale.
> Pour plus de détails, consultez la [documentation Firebase](https://firebase.google.com/docs/hosting).
> Vérifiez le le dossier `.github/workflows/` pour la configuration CI/CD.

## Perspectives d'Avenir

### Phase 2: Backend & Base de Données

- **Supabase Integration**: Migration vers Supabase pour la gestion des données
- **Base de données**: PostgreSQL pour stocker les informations des étudiants
- **Authentification**: Système de connexion sécurisé
- **API REST**: Endpoints pour les opérations CRUD

### Phase 3: Espace Administration

- **Dashboard Admin**: Interface de gestion complète
- **Gestion des Étudiants**: CRUD des profils étudiants
- **Gestion des Programmes**: Administration des cours et activités
- **Système de Paiement**: Suivi des frais de pension
- **Rapports**: Génération de statistiques et rapports

### Phase 4: Fonctionnalités Avancées

- **Portail Étudiant**: Espace personnel pour chaque élève
- **Communication**: Système de messagerie interne
- **Calendrier**: Planning des cours et événements
- **E-learning**: Plateforme de cours en ligne
- **Mobile App**: Application mobile native

### Technologies Futures

```typescript
// Stack technique envisagé
Frontend: React + TypeScript ou Frappe framework
Backend: Supabase + PostgreSQL
Authentification: Supabase Auth
Paiements: Orange Money / MTN Mobile Money (méthode de paiement locale)
```

## Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

*Développé avec ❤️ pour l'excellence sportive et académique au Cameroun*
