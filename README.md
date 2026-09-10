# TheoWeb Healthcare Demo

Une démonstration portfolio d'une expérience de santé numérique moderne : prise de rendez-vous, espace patient, suivi de résultats, FAQ et assistance interactive.

> Ce projet ne représente pas un établissement médical réel. Les professionnels, services, horaires, tarifs, patients, résultats et témoignages affichés sont fictifs et ne constituent pas un avis médical.

## Aperçu

TheoWeb Healthcare Demo montre comment un établissement de santé pourrait offrir un parcours patient plus simple et plus rassurant, sur mobile comme sur ordinateur.

Les parcours inclus sont :

- présentation des services de santé illustratifs ;
- prise de rendez-vous en quatre étapes ;
- confirmation visuelle d'une demande ;
- espace patient fictif avec résultats, rendez-vous et tendances ;
- FAQ avec recherche ;
- assistant de démonstration ;
- page de contact avec téléphone, email et WhatsApp.

## Identité du projet

Les informations publiques du projet sont centralisées dans [`src/data/business.ts`](src/data/business.ts).

| Élément | Valeur |
| --- | --- |
| Nom | TheoWeb Healthcare Demo |
| Type | Projet portfolio / démonstration réaliste |
| Email | louisjustetheodore@gmail.com |
| Téléphone et WhatsApp | +509 4634 4841 |

Pour réutiliser ce projet pour une entreprise réelle, modifiez d'abord ce fichier de configuration. Les données cliniques fictives sont conservées séparément dans [`src/data/site.ts`](src/data/site.ts).

## Technologies

- React 19 et TypeScript
- TanStack Start et TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI et Lucide Icons

## Démarrage local

Prérequis : Node.js 20 ou une version plus récente, puis npm.

```bash
git clone https://github.com/Thalex35/healthsync-prototype.git
cd healthsync-prototype
npm install
npm run dev
```

Lancez ensuite l'adresse locale indiquée dans le terminal.

## Commandes disponibles

```bash
# Démarrer le serveur de développement
npm run dev

# Vérifier le style et les règles de qualité
npm run lint

# Générer une version de production
npm run build

# Prévisualiser la version de production
npm run preview

# Formater le code
npm run format
```

## Fonctionnalités simulées

Les interactions suivantes sont volontairement simulées et n'envoient ni ne stockent de données :

- formulaire de contact ;
- demande de rendez-vous ;
- connexion à l'espace patient ;
- téléchargement et partage de résultats ;
- conversation avec l'assistant.

Ne connectez pas de données de patients, d'identifiants, de clés API ou d'informations médicales réelles sans mettre en place les contrôles de sécurité, la conformité et l'infrastructure nécessaires.

## Structure du projet

```text
src/
├── assets/            Images locales
├── components/site/   En-tête, pied de page et assistant
├── components/ui/     Composants d'interface réutilisables
├── data/              Identité publique et données fictives
├── routes/            Pages et métadonnées SEO
└── styles.css          Styles globaux et thème
```

## Personnalisation

Avant d'adapter ce projet à une organisation réelle :

1. Remplacez l'identité, les coordonnées et les liens dans `src/data/business.ts`.
2. Remplacez le logo et le favicon.
3. Vérifiez chaque service, horaire, prix et information clinique dans `src/data/site.ts`.
4. Ajoutez un système sécurisé de formulaires, rendez-vous et dossiers patients avant toute mise en production.
5. Ajoutez les métadonnées de domaine finales, une image Open Graph et les mentions légales appropriées.

## Contact

Pour discuter de ce projet ou d'une adaptation : [louisjustetheodore@gmail.com](mailto:louisjustetheodore@gmail.com) · [+509 4634 4841](https://wa.me/50946344841)
