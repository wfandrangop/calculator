import { useState } from "react";

function SearchBar({ getData }) {
    const [name, setName] = useState();
    return (
        <>
            <section>
                <input type="text" placeholder="Morty" onChange={(e) => setName(e.target.value)}  />
                <button onClick={() => getData(name)}>Buscar</button>
            </section>
        </>
    )
}
export default SearchBar;