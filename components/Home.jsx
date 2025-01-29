import {  useState } from "react";
import CountriesList from "./CountriesList";
import Searchbar from "./Searchbar";
import SearchMenu from "./SearchMenu";
import { useOutletContext } from "react-router-dom";

import { useTheme } from "../hooks/useTheme";


export default function Home() {
  const [query, setQuery] = useState("");

  // const [isDark] = useOutletContext();

  const [isDark] = useTheme()
  

  

  return (
    <main className={`${isDark ? "dark" : ""}`}>
      <div className="search-filter-container">
        <Searchbar setQuery={setQuery} />
        <SearchMenu setQuery={setQuery}/>
      </div>
      
      <CountriesList query={query} />
    </main>
  );
}
