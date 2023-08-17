import { useSearchResultContext } from "../store/contexts/SearchResultContext"
import { memo, useState } from "react";
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { searchWord } = useSearchResultContext();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (searchTerm != "") {
      searchWord(searchTerm)
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
  }
  
  return (
    <div className="mt-5">
      <form onSubmit={handleSearch} className=" search_bar py-3 px-3">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <input type="search" onChange={handleChange} value={searchTerm} className=" ps-3" placeholder="search here..." />
      </form>
    </div>
  )
}

export default memo(SearchBar);