export default async (req, res) => {
    const search = req.query.q;
    if (search !== "") {
        await fetch('http://openlibrary.org/search.json?q=' + search + '&jscmd=data&format=json')
            .then(result => result.json()).then(res.statusCode = 200)
            .then(jsonData => (Array.isArray(jsonData.docs ? res.json(jsonData.docs) : res.json({})))
            )
            .catch(error => console.log(error));

    }


}