import React from 'react';
import { CardMedia } from '@material-ui/core';
export default function ImageCard(props) {


    return <><CardMedia component="img" height={props.imgHeight} image={props.imageurl} className={props.media} title={props.title} /></>
}