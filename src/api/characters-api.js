// fonction getCharacters qui retourne la liste des personnages
// fonction getCharacterById qui retourne un personnage en fonction de son id en récupérant les données du fichier characters.json

import characters from '../data/characters.json';

// Fonction pour retourner la liste des personnages
export function getCharacters() {
    return characters;
}

// Fonction pour retourner un personnage par son ID
export function getCharacterById(id) {
    return characters.find(character => character.id === id);
}
