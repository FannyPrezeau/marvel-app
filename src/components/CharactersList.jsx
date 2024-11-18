// FILEPATH: /c:/Users/fprezeau/marvel-app/src/components/CharactersList.jsx

import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getCharacters } from '../api/character-api';

export function CharactersList() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [characters, setCharacters] = useState([]);
    const sortBy = searchParams.get('sortBy') || 'name';
    const order = searchParams.get('order') || 'asc';

    useEffect(() => {
        const sortedCharacters = getCharacters(sortBy, order);
        setCharacters(sortedCharacters);
    }, [sortBy, order]);

    const handleSortChange = (e) => {
        searchParams.set('sortBy', e.target.value);
        setSearchParams(searchParams);
    };

    const handleOrderChange = (e) => {
        searchParams.set('order', e.target.value);
        setSearchParams(searchParams);
    };

    return (
        <div>
            <div>
                <label>
                    Sort by:
                    <select value={sortBy} onChange={handleSortChange}>
                        <option value="name">Name</option>
                        <option value="modified">Date Modified</option>
                    </select>
                </label>
                <label>
                    Order:
                    <select value={order} onChange={handleOrderChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                </label>
            </div>
            <ul id="characters">
                {characters.map((character) => (
                    <li key={character.id}>
                        <h2>
                            <Link to={`/characters/${character.id}`}>
                                {character.name}
                            </Link>
                        </h2>
                    </li>
                ))}
            </ul>
        </div>
    );
}