function SearchResult(props) {
    console.log(JSON.stringify(props.id));
    return (
        <li id={props.id}>{props.title}, By {(Array.isArray(props.author_name) ? props.author_name.join(", ") : props.author_name)}</li>
    )

}

export default SearchResult;