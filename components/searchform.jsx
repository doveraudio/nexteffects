import React, { useEffect, useState } from 'react';
import SearchResults from "../components/searchresults";
import ResultSelectBox from "../components/resultselectbox";
import InfoCard from '../components/infocard';
import { Container, Button, TextareaAutosize, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


function SearchForm(props) {
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const [selection, setSelection] = useState("");
    const [record, setRecord] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const useStyles = makeStyles({
        searchbox: {
            width: 275,
        },
    });
    const classes = useStyles();
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
                var tempAuthors = [];
                if (tempResult.author_key != undefined) {
                    tempAuthors = await fetch('api/retreive?selection=/authors/' + tempResult.author_key[0]).then(res => res.json());
                }
                // console.log("Stored Key:" + selection);
                //console.log("Books Api Key:" + tempResult.seed[0]);
                var tempRecord = {
                    id: selection,
                    result: tempResult,
                    book: tempBook,
                    work: tempWork,
                    authors: tempAuthors,

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
    //<input type="text" placeholder={(props.placeholder ? props.placeholder : "Search Term")} value={query} onChange={e => setQuery(e.target.value)} />
    return <>

        <Container maxWidth="md">
            <label> Search OpenLibrary<br />
                <TextField className="searchbox" type="text" placeholder={(props.placeholder ? props.placeholder : "Search Term")} value={query} onChange={e => setQuery(e.target.value)} />
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    onClick={() => setSearch(query)}>Search</Button><br />

                <ResultSelectBox results={results} value={selection} select={selection => setSelection(selection)} />

                <InfoCard record={record} />

            </label>
        </Container>
    </>
}
export default SearchForm