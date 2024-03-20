import { useState } from "react";

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value);
        };  
         const performSearch = () => {
           // Ici, vous pouvez implémenter la logique de recherche
           console.log(`Recherche effectuée pour : ${searchValue}`);
        };
  

  return (
    <div className="search-bar">
      <input
        type="search"
        placeholder="Recherchez ici..."
        value={searchValue}
        onChange={handleSearchChange}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            performSearch();
          }
        }}
      />
      <button  onClick={performSearch}>Rechercher</button>
    </div>
  );
};

export default SearchBar;