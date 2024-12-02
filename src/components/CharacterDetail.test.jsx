// FILEPATH: /c:/Users/fprezeau/marvel-app/src/components/CharacterDetail.test.jsx

import '@testing-library/jest-dom';
import React from 'react';
import { render, screen } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('CharacterDetail Component', () => {
    test('renders "No character" when no character is provided', () => {
        render(<CharacterDetail />);
        expect(screen.getByText('No character')).toBeInTheDocument();
    });

    test('renders character details when character is provided', () => {
        const character = {
            name: 'Iron Man',
            description: 'A billionaire industrialist and genius inventor.',
            modified: '2020-04-04T19:01:59-0400',
            thumbnail: {
                path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087',
                extension: 'jpg',
            },
        };
        render(<CharacterDetail character={character} />);
        expect(screen.getByText('Iron Man')).toBeInTheDocument();
        expect(screen.getByText('A billionaire industrialist and genius inventor.')).toBeInTheDocument();
        expect(screen.getByAltText('Iron Man')).toHaveAttribute('src', 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087/standard_large.jpg');
    });

    test('renders character details without thumbnail', () => {
        const character = {
            name: 'Iron Man',
            description: 'A billionaire industrialist and genius inventor.',
            modified: '2020-04-04T19:01:59-0400',
        };
        render(<CharacterDetail character={character} />);
        expect(screen.getByText('Iron Man')).toBeInTheDocument();
        expect(screen.getByText('A billionaire industrialist and genius inventor.')).toBeInTheDocument();
        expect(screen.queryByAltText('Iron Man')).not.toBeInTheDocument();
    });
});