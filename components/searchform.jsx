import React, { useEffect, useState } from 'react';
import SearchResults from "../components/searchresults";
import ResultSelectBox from "../components/resultselectbox";
import InfoCard from '../components/infocard';
import { Container, TextareaAutosize } from '@material-ui/core';

function SearchForm(props) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [selection, setSelection] = useState("");
    const [record, setRecord] = useState(undefined);


    function setSelected() {
        if (results.length > 0) {
            console.log(results);
            setSelection(results[0].key);

        }
    }
    useEffect(() => {

        async function callOpenLibrary() {

            if (search != "") {
                var tempSearch = await fetch('/api/search?q=' + search)
                    .then(res => res.json())
                    .then(jsonData => (Array.isArray(jsonData ? setResults(jsonData) : setResults([]))))
                    .catch(error => console.log(error));


            }

        }
        callOpenLibrary();

    }, [search]);

    useEffect(() => {
        async function retreiveRecord() {

            if (selection !== "") {
                console.log(selection);
                var tempResult = results.filter(r => { return r.key == selection; })[0];
                console.log(tempResult);
                var tempBook = await fetch('/api/retreive?selection=' + tempResult.seed[0]).then(res => res.json());
                var tempWork = await fetch('/api/retreive?selection=' + selection).then(res => res.json());
                // console.log("Stored Key:" + selection);
                //console.log("Books Api Key:" + tempResult.seed[0]);
                var tempRecord = {
                    id: selection,
                    result: tempResult,
                    book: tempBook,
                    work: tempWork,
                    authors: tempResult.authors

                };
                setRecord(tempRecord);
            }
        }
        retreiveRecord();
    }, [selection]);

    useEffect(() => {

        if (results.length > 0) {
            console.log(results);
            setSelection(results[0].key);

        }
    }, [results]);
    useEffect(() => {
        //console.log(record);
    }, [record]);
    // saved incase of ui errors during layout process
    //Query: {query} Search: {search} <br />
    return <>

        <Container maxWidth="md">
            <label> Search OpenLibrary<br />
                <input type="text" placeholder={(props.placeholder ? props.placeholder : "Search Term")} value={query} onChange={e => setQuery(e.target.value)} />
                <button type="button" onClick={() => setSearch(query)}>Search</button><br />

                <ResultSelectBox results={results} value={selection} select={selection => setSelection(selection)} />

                <InfoCard record={record} />

            </label>
        </Container>
    </>
}
export default SearchForm