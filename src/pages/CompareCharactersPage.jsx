// FILEPATH: /c:/Users/fprezeau/marvel-app/src/pages/CompareCharactersPage.jsx

import React, { useState, useEffect } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, Legend } from 'recharts';
import { getCharacters } from '../api/character-api';

const CompareCharactersPage = () => {
    // change the title of the page
    document.title = "Compare | Marvel App";

    const [characters, setCharacters] = useState([]);
    const [option1, setOption1] = useState(null);
    const [option2, setOption2] = useState(null);

    useEffect(() => {
        const fetchedCharacters = getCharacters();
        setCharacters(fetchedCharacters);
        setOption1(fetchedCharacters[0]);
        setOption2(fetchedCharacters[1]);
    }, []);

    if (!characters.length) {
        return <div>Loading...</div>;
    }

    const options = characters.map((character, index) => ({
        value: index,
        label: character.name,
    }));

    const data = [
        {
            subject: 'Force',
            A: option1.capacities.force,
            B: option2.capacities.force,
            fullMark: 10,
        },
        {
            subject: 'Intelligence',
            A: option1.capacities.intelligence,
            B: option2.capacities.intelligence,
            fullMark: 10,
        },
        {
            subject: 'Durability',
            A: option1.capacities.durability,
            B: option2.capacities.durability,
            fullMark: 10,
        },
        {
            subject: 'Energy',
            A: option1.capacities.energy,
            B: option2.capacities.energy,
            fullMark: 10,
        },
        {
            subject: 'Speed',
            A: option1.capacities.speed,
            B: option2.capacities.speed,
            fullMark: 10,
        },
        {
            subject: 'Fighting',
            A: option1.capacities.fighting,
            B: option2.capacities.fighting,
            fullMark: 10,
        },
    ];

    const centerStyle = {
        textAlign: 'center',
        width: 500,
    };

    return (
        <>
            <h2>Compare characters</h2>

            <p style={centerStyle}>
                <select
                    data-testid='select-character-1'
                    value={option1 ? option1.value : ''}
                    onChange={(event) => setOption1(characters[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>&nbsp; {/* Fix the ambiguous spacing */}
                with&nbsp;
                <select
                    data-testid='select-character-2'
                    value={option2 ? option2.value : ''}
                    onChange={(event) => setOption2(characters[event.target.value])}
                >
                    {options.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
            </p>

            <RadarChart cx={300} cy={250} outerRadius={150} width={600} height={500} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis />
                <Radar name={option1.name} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                <Radar name={option2.name} dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                <Tooltip />
                <Legend />
            </RadarChart>
        </>
    );
};

export default CompareCharactersPage;