import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


function InfoCard(props) {
    function openGoodreads() {
        window.open("https://www.goodreads.com/book/isbn/" + record.result.isbn[0], '_blank');
    }
    function openGoodreads() {
        window.open("https://www.goodreads.com/book/isbn/" + record.result.isbn[0], '_blank');
    }
    function openAbeBooks() {
        window.open("https://www.abebooks.com/servlet/SearchResults?isbn=" + record.result.isbn[0], '_blank');
    }
    const classes = useStyles();
    let record = {};
    if (props.record.book != undefined) {
        record = props.record;
    }
    console.log(record);
    if (record.book !== undefined) {
        return <>
            <Card>
                <CardContent>
                    <Typography variant="h5" component="h2" >{record.work.title}</Typography>
                    <Typography variant="h5" component="h2">{record.work.subtitle}</Typography>
                    <Typography>{((record.result.author_name !== undefined ? (record.result.author_name.length > 1 ? record.result.author_name.join(', ') : record.result.author_name[0]) : ""))}</Typography>
                    <Typography className={classes.title} >{(record.result.isbn !== undefined ? `ISBN-10: ${record.result.isbn[0]}` : "No ISBN")}</Typography>
                    <Typography className={classes.title} >{(record.result.isbn !== undefined ? `ISBN-30: ${record.result.isbn[1]}` : "No ISBN 30")}</Typography>
                    <Typography className={classes.title} >{(record.book.description !== undefined ? record.book.description.value : "")}</Typography>

                </CardContent>
                <CardActions>
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