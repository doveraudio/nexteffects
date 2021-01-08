import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from '../components/imagecard';
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    media: {

        width: 220,
        //paddingBottom: '10%',
        //paddingTop: '56.25%', // 16:9

    },
    title: {
        fontSize: 26,
    },
    subtitle: {
        fontSize: 22,
    },
    author: {
        fontSize: 18,
    },
    isbn: {
        fontSize: 16,
        fontWeight: 900,
    },
    text: {
        fontSize: 16,
    },
    pos: {
        marginBottom: 12,
    },
});


function InfoCard(props) {
    const classes = useStyles();
    var imageurl = "";
    var imgHeight = "50%";
    var record = props.record;
    function openGoodreads() {
        if (record.result.isbn !== undefined) {
            window.open("https://www.goodreads.com/book/isbn/" + record.result.isbn[0], '_blank');
        }
    }
    function logRecord() {
        console.log(props.record);
    }

    function openAbeBooks() {
        if (record.result.isbn !== undefined) {
            window.open("https://www.abebooks.com/servlet/SearchResults?isbn=" + record.result.isbn[0], '_blank');
        }
    }
    function openOpenLibrary() {
        if (record.result.edition_key[0] !== undefined) {
            window.open("http://openlibrary.org/books/" + record.result.edition_key[0], '_blank');
        }
    }


    if (record !== undefined) {
        if (record.result.cover_i !== undefined) {
            imageurl = "http://covers.openlibrary.org/b/id/" + record.result.cover_i + "-M.jpg";
            //imageurl = "http://covers.openlibrary.org/b/isbn/" + record.result.isbn[0] + "-M.jpg";
            //imageurl = record.book.thumbnail_url;
        } else { imgHeight = "0%"; }
        return <>
            <Card className={classes.root}>
                <CardContent>
                    <ImageCard imgHeight={imgHeight} imageurl={imageurl} cover_i={record.result.cover_i} css={classes.media} title={record.work.title + " cover"} />
                    <Typography className={classes.title} variant="h5" component="h2" >{(record.book.full_title !== undefined ? record.book.full_title : record.work.title)}</Typography>
                    <Typography className={classes.subtitle} variant="h5" component="h2">{record.book.subtitle}</Typography>
                    <Typography className={classes.author} >{((record.result.author_name !== undefined ? (record.result.author_name.length > 1 ? record.result.author_name.join(', ') : record.result.author_name[0]) : ""))}</Typography>
                    <Typography className={classes.isbn} >{(record.result.isbn !== undefined ? `ISBN-13: ${record.result.isbn[0]}` : "No ISBN 13")}</Typography>
                    <Typography className={classes.isbn} >{(record.result.isbn !== undefined ? `ISBN-10: ${record.result.isbn[1]}` : "No ISBN 10")}</Typography>
                    <Typography className={classes.text} >{(record.book.description !== undefined ? record.book.description.value : "")}</Typography>
                    <Typography className={classes.text} >{(record.book.thumbnail_url !== undefined ? record.book.thumbnail_url : "")}</Typography>

                </CardContent>
                <CardActions>
                    <Button onClick={logRecord}>Add to Book List</Button>
                    <Button onClick={openOpenLibrary}>Find on OpenLibrary</Button>
                    <Button onClick={openGoodreads}>Find on goodreads</Button>
                    <Button onClick={openAbeBooks}>Find on Abe Books</Button>
                </CardActions>
            </Card>
        </>
    } else {
        return <>
            <Card>
                <CardContent>
                    <Typography className={classes.title} >Search for a book</Typography>

                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
        </>
    }
    // return <></>
}

export default InfoCard;