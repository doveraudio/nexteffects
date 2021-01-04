import SearchResult from '../components/searchresult';
function SearchResults(props) {
    console.log("running from searchresults.jsx");
    console.log(props.results);

    return (
        <ul>
            {
                props.results.map(result => (
                    <SearchResult id={result.key} title={result.title} author_name={result.author_name} />
                ))
            }
        </ul>)

}
export default SearchResults;