import { useState } from "react"
import { Input, InputGroup, IconButton, Flex } from "@chakra-ui/react"
import { LuSearch } from "react-icons/lu"

function SearchBar({ getData }) {
    const [name, setName] = useState();
    const searchCharacter = () => {
        if (!name) return;
        getData(name);
    }
    return (
        <>
            <Flex>
                <Input type="text" placeholder="Morty" onChange={(e) => setName(e.target.value)} borderRightRadius="0" />
                <IconButton aria-label="Search database" onClick={searchCharacter} borderLeftRadius="0">
                    <LuSearch />
                </IconButton>
            </Flex>
        </>
    )
}
export default SearchBar;