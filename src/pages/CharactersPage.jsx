import React from 'react';
import { CharactersList } from "../components/CharactersList";
import { NumberOfCharacters } from "../components/NumberOfCharacters";
// import { getCharacters } from '../api/characters-api';
import { useLoaderData } from 'react-router';

// import characters from '../data/characters.json';

const CharactersPage = () => {
    // change the title of the page
    document.title = "Marvel App";

    // const characters = getCharacters();

    const characters = useLoaderData();

    return (
        <>
            <h2>Marvel Characters</h2>
            <CharactersList characters={characters} />
            <br />
            <NumberOfCharacters characters={characters} />
        </>
    );
};

export default CharactersPage;