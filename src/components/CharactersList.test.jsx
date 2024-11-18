import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharactersList } from './CharactersList';
import { BrowserRouter } from 'react-router-dom';

const characters = [
    {
        id: "1",
        name: "Thor"
    },
    {
        id: "2",
        name: "Captain America"
    }
];

describe('CharactersList component', () => {
    test('renders without crashing', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
    });

    test('renders the correct number of characters', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
        const characterItems = screen.getAllByRole('listitem');
        expect(characterItems).toHaveLength(characters.length);
    });

    test('renders the correct character names', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
        characters.forEach(character => {
            expect(screen.getByText(character.name)).toBeInTheDocument();
        });
    });

    test('renders the correct links for each character', () => {
        render(<CharactersList characters={characters} />, { wrapper: BrowserRouter });
        characters.forEach(character => {
            const linkElement = screen.getByText(character.name).closest('a');
            expect(linkElement).toHaveAttribute('href', `/characters/${character.id}`);
        });
    });
});