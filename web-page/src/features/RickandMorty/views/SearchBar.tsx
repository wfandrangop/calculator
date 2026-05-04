import { Flex, IconButton, Input } from "@chakra-ui/react";
import { useState } from "react";
import { LuSearch } from "react-icons/lu";

interface SearchBarProps {
  onSearch: (name: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [name, setName] = useState<string>("Morty");

  const triggerSearch = () => {
    onSearch(name);
  };

  return (
    <Flex>
      <Input
        type="text"
        placeholder="Morty"
        value={name}
        onChange={(event) => setName(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            triggerSearch();
          }
        }}
        borderRightRadius="0"
      />
      <IconButton aria-label="Search database" onClick={triggerSearch} borderLeftRadius="0">
        <LuSearch />
      </IconButton>
    </Flex>
  );
}

export default SearchBar;
