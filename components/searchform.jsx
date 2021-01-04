import React, { useEffect, useState } from 'react';
import SearchResults from "../components/searchresults";
import ResultSelectBox from "../components/resultselectbox";
function SearchForm(props) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);


    useEffect(() => {
        async function callOpenLibrary() {
            if (search !== "") {
                var tempResult = await fetch('http://openlibrary.org/search.json?q=' + search).then(res => res.json());
                if (Array.isArray(tempResult.docs)) {
                    setResults(tempResult.docs);
                } else {
                    setResults([]);
                }
            }

        }
        callOpenLibrary();


    }, [search]);


    return <>
        <label> Search OpenLibrary<br />
            <input type="text" placeholder={(props.placeholder ? props.placeholder : "Search Term")} value={query} onChange={e => setQuery(e.target.value)} />
            <button type="button" onClick={() => setSearch(query)}>Search</button><br />
            Query: {query} Search: {search} <br />
            <ResultSelectBox results={results} />
            <SearchResults results={results} />
        </label>
    </>
}
export default SearchForm