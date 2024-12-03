// FILEPATH: /c:/Users/fprezeau/marvel-app/src/pages/CompareCharactersPage.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CompareCharactersPage from './CompareCharactersPage';
import { getCharacters } from '../api/character-api';

jest.mock('../api/character-api', () => ({
    getCharacters: jest.fn(),
}));

describe('CompareCharactersPage Component', () => {
    beforeEach(() => {
        getCharacters.mockReturnValue([
            {
                id: '1',
                name: 'Iron Man',
                capacities: {
                    force: 8,
                    intelligence: 9,
                    durability: 7,
                    energy: 6,
                    speed: 5,
                    fighting: 8,
                },
            },
            {
                id: '2',
                name: 'Captain America',
                capacities: {
                    force: 7,
                    intelligence: 8,
                    durability: 6,
                    energy: 5,
                    speed: 4,
                    fighting: 9,
                },
            },
        ]);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('renders CompareCharactersPage with characters', () => {
        render(<CompareCharactersPage />);
        expect(screen.getByText('Compare characters')).toBeInTheDocument();
        expect(screen.getAllByText('Iron Man').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Captain America').length).toBeGreaterThan(0);
    });

    test('renders loading state when characters are not loaded', () => {
        getCharacters.mockReturnValueOnce([]);
        render(<CompareCharactersPage />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('updates the selected characters', () => {
        render(<CompareCharactersPage />);
        fireEvent.change(screen.getByTestId('select-character-1'), { target: { value: '1' } });
        fireEvent.change(screen.getByTestId('select-character-2'), { target: { value: '0' } });
        expect(screen.getAllByText('Captain America').length).toBeGreaterThan(0);
        expect(screen.getAllByText('Iron Man').length).toBeGreaterThan(0);
    });

    test('renders the radar chart with correct data', () => {
        render(<CompareCharactersPage />);
        expect(screen.getByText('Force')).toBeInTheDocument();
        expect(screen.getByText('Intelligence')).toBeInTheDocument();
        expect(screen.getByText('Durability')).toBeInTheDocument();
        expect(screen.getByText('Energy')).toBeInTheDocument();
        expect(screen.getByText('Speed')).toBeInTheDocument();
        expect(screen.getByText('Fighting')).toBeInTheDocument();
    });
});