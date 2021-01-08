import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

        width: 180,
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


    const classes = useStyles();
    if (record !== undefined) {
        if (record.result.isbn !== undefined) {
            imageurl = "http://covers.openlibrary.org/b/isbn/" + record.result.isbn[0] + "-M.jpg";
        } else { imgHeight = "0%"; }
        return <>
            <Card className={classes.root}>
                <CardContent>
                    <CardMedia component="img" height="50%" image={imageurl} className={classes.media} title={record.work.title + " cover"} />
                    <Typography className={classes.title} variant="h5" component="h2" >{(record.book.full_title !== undefined ? record.book.full_title : record.work.title)}</Typography>
                    <Typography className={classes.subtitle} variant="h5" component="h2">{record.book.subtitle}</Typography>
                    <Typography className={classes.author} >{((record.result.author_name !== undefined ? (record.result.author_name.length > 1 ? record.result.author_name.join(', ') : record.result.author_name[0]) : ""))}</Typography>
                    <Typography className={classes.isbn} >{(record.result.isbn !== undefined ? `ISBN-13: ${record.result.isbn[0]}` : "No ISBN 13")}</Typography>
                    <Typography className={classes.isbn} >{(record.result.isbn !== undefined ? `ISBN-10: ${record.result.isbn[1]}` : "No ISBN 10")}</Typography>
                    <Typography className={classes.text} >{(record.book.description !== undefined ? record.book.description.value : "")}</Typography>

                </CardContent>
                <CardActions>
                    <Button onClick={logRecord}>Add to Book List</Button>
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