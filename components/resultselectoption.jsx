function ResultSelectOption(props) {


    return (
        <option key={props.id} value={props.id}>{props.title} By {(Array.isArray(props.author_name) ? props.author_name.join(", ") : props.author_name)}</option>
    )
}

export default ResultSelectOption