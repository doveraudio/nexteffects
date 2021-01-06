import React, { useEffect, useState } from 'react';
import SearchResults from "../components/searchresults";
import ResultSelectBox from "../components/resultselectbox";
import InfoCard from '../components/infocard';
function SearchForm(props) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [selection, setSelection] = useState("");
    const [record, setRecord] = useState({});


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

    useEffect(() => {
        async function retrieveRecord() {
            if (selection !== "") {
                console.log("Stored Key:" + selection);
                var tempKey = results.filter(r => { return r.key == selection; })[0];
                console.log("Books Api Key" + tempKey.seed[0]);
                var tempRecord = await fetch('http://openlibrary.org' + selection + '.json').then(res => res.json());
                /*
                if (selection.includes('/books/')) {

                    tempRecord = await fetch('http://openlibrary.org' + selection + '.json').then(res => res.json());

                } else {

                    tempRecord = await fetch('http://openlibrary.org' + tempKey.seed[0] + '.json').then(res => res.json());
                }*/

                console.log(tempRecord);
                setRecord(tempRecord);
            }
        }
        retrieveRecord();
    }, [selection]);

    useEffect(() => {
        console.log(record);
    }, [record]);

    return <>
        <label> Search OpenLibrary<br />
            <input type="text" placeholder={(props.placeholder ? props.placeholder : "Search Term")} value={query} onChange={e => setQuery(e.target.value)} />
            <button type="button" onClick={() => setSearch(query)}>Search</button><br />
            Query: {query} Search: {search} <br />
            <ResultSelectBox results={results} value={selection} select={selection => setSelection(selection)} />
            <InfoCard record={record} />
        </label>
    </>
}
export default SearchForm