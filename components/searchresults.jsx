import SearchResult from '../components/searchresult';
function SearchResults(props) {
    return (
        <ul>
            {
                props.results.map(result => (

                    <SearchResult id={result.key} key={result.key} title={result.title} author_name={result.author_name} />
                ))
            }
        </ul>)

}
export default SearchResults;