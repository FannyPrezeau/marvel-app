# Marvel App

## Tests Unitaires

Ce projet utilise **Jest** pour les tests unitaires et **Babel** pour la transpilation ES6+ et JSX. Voici les étapes pour installer, configurer et exécuter les tests.

### Installation des Dépendances

1. **Installer Jest** et les dépendances pour le testing :

   ```bash
   npm install --save-dev jest @babel/preset-env @babel/preset-react jest-environment-jsdom

### Configuration de Babel

Le projet utilise Babel pour transpiler le code JavaScript moderne et JSX. La configuration de Babel est définie dans le fichier babel.config.cjs :

module.exports = {
    presets: ["@babel/preset-env", "@babel/preset-react"],
    plugins: [
        ["@babel/plugin-transform-react-jsx", { "runtime": "automatic" }] // Transforme JSX en appels React.createElement avec import automatique
    ]
};

### Structure des Tests

Les tests unitaires peuvent être placés dans un dossier __tests__ ou dans des fichiers avec l'extension .test.js ou .spec.js à côté des fichiers source.

### Scripts

Les scripts pour exécuter les tests et générer un rapport de couverture sont définis dans package.json :

json
"scripts": {
  "test": "jest --coverage",
  ...
}
npm test : Lance tous les tests une fois avec un rapport de couverture.

npm run test:watch : (optionnel) Pour lancer Jest en mode surveillance, ajoutez un script :

"test:watch": "jest --watch"

### Exemple de Test

Voici un exemple de fichier de test pour une simple fonction :

Fichier source : src/sum.js

export function sum(a, b) {
    return a + b;
}
Fichier de test : src/__tests__/sum.test.js

import { sum } from '../sum';

test('ajoute 1 + 2 pour égaler 3', () => {
    expect(sum(1, 2)).toBe(3);
});

### Exécution des tests

Pour exécuter vos tests, utilisez la commande suivante dans le terminal :

bash

npm test

Cela exécutera Jest et affichera les résultats des tests, y compris un rapport de couverture si spécifié.