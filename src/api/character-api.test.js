// FILEPATH: /c:/Users/fprezeau/marvel-app/src/api/character-api.test.js

import { getCharacters, getCharacterById } from './character-api';

jest.mock('../data/characters.json', () => [
    { id: 1, name: 'Iron Man', modified: '2021-01-01' },
    { id: 2, name: 'Captain America', modified: '2021-02-01' },
    { id: 3, name: 'Thor', modified: '2021-03-01' }
]);

describe('Character API', () => {
    describe('getCharacters', () => {
        it('should return characters sorted by name ascending', () => {
            const result = getCharacters('name', 'asc');
            expect(result).toEqual([
                { id: 2, name: 'Captain America', modified: '2021-02-01' },
                { id: 1, name: 'Iron Man', modified: '2021-01-01' },
                { id: 3, name: 'Thor', modified: '2021-03-01' }
            ]);
        });

        it('should return characters sorted by name descending', () => {
            const result = getCharacters('name', 'desc');
            expect(result).toEqual([
                { id: 3, name: 'Thor', modified: '2021-03-01' },
                { id: 1, name: 'Iron Man', modified: '2021-01-01' },
                { id: 2, name: 'Captain America', modified: '2021-02-01' }
            ]);
        });

        it('should return characters sorted by modified date ascending', () => {
            const result = getCharacters('modified', 'asc');
            expect(result).toEqual([
                { id: 1, name: 'Iron Man', modified: '2021-01-01' },
                { id: 2, name: 'Captain America', modified: '2021-02-01' },
                { id: 3, name: 'Thor', modified: '2021-03-01' }
            ]);
        });

        it('should return characters sorted by modified date descending', () => {
            const result = getCharacters('modified', 'desc');
            expect(result).toEqual([
                { id: 3, name: 'Thor', modified: '2021-03-01' },
                { id: 2, name: 'Captain America', modified: '2021-02-01' },
                { id: 1, name: 'Iron Man', modified: '2021-01-01' }
            ]);
        });
    });

    describe('getCharacterById', () => {
        it('should return the correct character for a given ID', () => {
            const result = getCharacterById(1);
            expect(result).toEqual({ id: 1, name: 'Iron Man', modified: '2021-01-01' });
        });

        it('should return undefined for an invalid ID', () => {
            const result = getCharacterById(999);
            expect(result).toBeUndefined();
        });
    });
});