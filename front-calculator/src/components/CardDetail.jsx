import { useEffect, useState } from "react";

const URL = "https://rickandmortyapi.com/api/character/";

function CardDetail({ id, back }) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const url_character = `${URL}${id}`;
            try {
                const response = await fetch(url_character);
                if (!response.ok) {
                    throw new Error(`Error ${response.status}`);
                }
                const data = await response.json();
                setResult(data);
            } catch (error) {
                setResult(null);
                console.log(id);
                console.log("Error en la peticion ", error);
            }
        }

        fetchData();
    }, [id]);

    const getEpisodeCode = (episodeUrl) => {
        const segments = episodeUrl.split("/");
        return segments[segments.length - 1];
    }

    if (!result) {
        return (
            <>
                <p>Loading character details...</p>
                <button onClick={back}>Back to cards</button>
            </>
        );
    }

    return (
        <>
            <img src={result.image} alt={result.name} />
            <p>{result.name}</p>
            <p>{result.status}</p>
            <p>{result.species}</p>
            <p>{result.type}</p>
            <p>{result.gender}</p>
            <ul>
                <li>{result.origin?.name}</li>
                <li>{result.location?.name}</li>
            </ul>
            <ul>
                {result.episode?.map((episode) => (
                    <li key={episode}>Episode {getEpisodeCode(episode)}</li>
                ))}
            </ul>
            <p>{result.url}</p>
            <p>{result.created}</p>
            <button onClick={back}>Back to cards</button>
        </>
    )
}
export default CardDetail;
