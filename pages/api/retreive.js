export default async (req, res) => {
    const selection = req.query.selection;
    let jsonData;
    const book = await fetch('http://openlibrary.org' + selection + '.json').then(result => result.json()).then(res.statusCode = 200)
        .then(jsonData => (res.json(jsonData)))
        .catch(error => console.log(error));
    console.log(jsonData);
}