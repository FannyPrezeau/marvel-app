// FILEPATH: /c:/Users/fprezeau/marvel-app/src/components/CharactersList.test.jsx

import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom';
import { getCharacters } from '../api/character-api';

jest.mock('../api/character-api');

const characters = [
    {
        id: "1",
        name: "Thor",
        modified: "2021-03-01"
    },
    {
        id: "2",
        name: "Captain America",
        modified: "2021-02-01"
    }
];

describe('CharactersList component', () => {
    beforeEach(() => {
        getCharacters.mockReturnValue(characters);
    });

    test('renders without crashing', () => {
        render(<CharactersList />, { wrapper: BrowserRouter });
    });

    test('renders the correct number of characters', () => {
        render(<CharactersList />, { wrapper: BrowserRouter });
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);
    });

    test('renders the correct character names', () => {
        render(<CharactersList />, { wrapper: BrowserRouter });
        characters.forEach(character => {
            expect(screen.getByText(character.name)).toBeInTheDocument();
        });
    });

    test('renders the correct links for each character', () => {
        render(<CharactersList />, { wrapper: BrowserRouter });
        characters.forEach(character => {
            const linkElement = screen.getByText(character.name).closest('a');
            expect(linkElement).toHaveAttribute('href', `/characters/${character.id}`);
        });
    });

    test('sorts characters by name ascending', () => {
        getCharacters.mockReturnValueOnce([
            { id: "2", name: "Captain America", modified: "2021-02-01" },
            { id: "1", name: "Thor", modified: "2021-03-01" }
        ]);
        render(<CharactersList />, { wrapper: BrowserRouter });
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems[0]).toHaveTextContent('Captain America');
        expect(characterItems[1]).toHaveTextContent('Thor');
    });

    test('sorts characters by modified date descending', () => {
        getCharacters.mockReturnValueOnce([
            { id: "1", name: "Thor", modified: "2021-03-01" },
            { id: "2", name: "Captain America", modified: "2021-02-01" }
        ]);
        render(<CharactersList />, { wrapper: BrowserRouter });
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems[0]).toHaveTextContent('Thor');
        expect(characterItems[1]).toHaveTextContent('Captain America');
    });

    test('updates sortBy and order parameters in URL', () => {
        render(<CharactersList />, { wrapper: BrowserRouter });

        const sortBySelect = screen.getByLabelText('Sort by:');
        const orderSelect = screen.getByLabelText('Order:');

        fireEvent.change(sortBySelect, { target: { value: 'modified' } });
        fireEvent.change(orderSelect, { target: { value: 'desc' } });

        expect(window.location.search).toContain('sortBy=modified');
        expect(window.location.search).toContain('order=desc');
    });
});