import { useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import TableCards from './TableCards';
import CardDetail from './CardDetail';

const URL = "https://rickandmortyapi.com/api/character/?";

function RickandMorty({ goToThePage }) {

    const [character, setCharacter] = useState('Morty');
    const [result, setResult] = useState([]);
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    async function fetchData(name) {
        let url_characteres = `${URL}name=${name}`;
        try {
            const response = await fetch(url_characteres);
            if (!response.ok) {
                throw new Error(`Error ${response.status}`);
            }
            const data = await response.json();
            setResult(data);
        } catch (error) {
            setResult([]);
            console.log("Error en la peticion ", error);
        }
    }

    useEffect(
        () => {
            fetchData(character)
        },
        [character]
    );

    const getData = (character) => {
        setCharacter(character);
    }

    const showCardDetail = (id) => {
        setSelectedCharacterId(id);
    }

    const backToCards = () => {
        setSelectedCharacterId(null);
    }

    if (selectedCharacterId) {
        return (
            <>
                <h1>Rick and Morty API</h1>
                <CardDetail id={selectedCharacterId} back={backToCards} />
            </>
        );
    }

    return (
        <>
            <h1>Rick and Morty API</h1>
            <SearchBar getData={getData} />
            <br />
            <TableCards data={result} onShowDetails={showCardDetail} />
            <button onClick={() => goToThePage('home')} >Back</button>
        </>
    )
}
export default RickandMorty;
