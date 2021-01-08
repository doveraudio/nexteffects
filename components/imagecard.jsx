import { CardMedia } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
function ImageCard(props) {
    console.log(props.cover_i);
    //if (props.id.includes("/books/")) { console.log(props.id + "<--- book key"); } else if (props.id.includes("/works/")) { console.log("work Key : " + props.id) }
    if (props.cover_i !== undefined) {
        return (
            <CardMedia component="img" height={props.imgHeight} image={props.imageurl} className={props.css} title={props.title} />

        )
    } else {
        return (<span></span>)
    }

}

export default ImageCard;