import { getCharacters, getCharacterById } from './character-api';
import characters from '../data/characters.json';

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man' },
    { id: 2, name: 'Captain America' },
    { id: 3, name: 'Thor' }
]);

describe('Character API', () => {
    describe('getCharacters', () => {
        it('should return the full list of characters', () => {
            const result = getCharacters();
            expect(result).toEqual(characters);
        });
    });

    describe('getCharacterById', () => {
        it('should return the correct character for a given ID', () => {
            const result = getCharacterById(1);
            expect(result).toEqual({ id: 1, name: 'Iron Man' });
        });

        it('should return undefined for an invalid ID', () => {
            const result = getCharacterById(999);
            expect(result).toBeUndefined();
        });
    });
});