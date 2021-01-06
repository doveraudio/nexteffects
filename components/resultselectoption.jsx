import MenuItem from '@material-ui/core/MenuItem';
function ResultSelectOption(props) {
    //console.log(props.id);
    //if (props.id.includes("/books/")) { console.log(props.id + "<--- book key"); } else if (props.id.includes("/works/")) { console.log("work Key : " + props.id) }

    return (
        <option key={props.id} value={props.id}>{props.title} By {(Array.isArray(props.author_name) ? props.author_name.join(", ") : props.author_name)}</option>
    )
}

export default ResultSelectOption