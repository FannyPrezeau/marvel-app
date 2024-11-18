// FILEPATH: /c:/Users/fprezeau/marvel-app/src/api/character-api.js

import characters from '../data/characters.json';

// Fonction pour retourner la liste des personnages avec tri
export function getCharacters(sortBy = 'name', order = 'asc') {
    return characters.sort((a, b) => {
        if (sortBy === 'name') {
            return order === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
        } else if (sortBy === 'modified') {
            return order === 'asc' ? new Date(a.modified) - new Date(b.modified) : new Date(b.modified) - new Date(a.modified);
        }
        return 0;
    });
}

// Fonction pour retourner un personnage par son ID
export function getCharacterById(id) {
    return characters.find(character => character.id === id);
}