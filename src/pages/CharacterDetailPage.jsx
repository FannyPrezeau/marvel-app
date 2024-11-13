// src/pages/CharacterDetailPage.jsx

import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CharacterDetail from '../components/CharacterDetail'; // Assurez-vous d'importer ce composant

const CharacterDetailPage = () => {
    const character = useLoaderData();
    return (
        <div>
            {character ? <CharacterDetail character={character} /> :'Loading...'}
        </div>
    );
};

export default CharacterDetailPage;