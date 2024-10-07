import { CharactersList } from '../components/CharactersList';
import { NumberOfCharacters } from '../components/NumberOfCharacters';
import characters from '../data/characters.json'

const CharactersPage = () => {
    document.title = "Characters | MarvelApp";
    
    return (

      <>
        <h1 id="title">Marvel Characters</h1>
        <CharactersList characters={characters}/>
        <br />
        <NumberOfCharacters characters={characters} />
      </>
    );
};

export default CharactersPage;