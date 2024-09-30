// Création d'un composant React personnalisé
export function CharactersList({characters}) {
    return (
        <ul id="characters">
          {characters.map((character)=>(
            <li key={character.id}>
              {character.name}
            </li>
          ))}
        </ul>
    );
  }