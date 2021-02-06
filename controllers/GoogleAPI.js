const axios = require("axios");

module.exports = {
    findAll: function(req, res) {
        // console.log(req);
        const { query: params } = req;
        // console.log(params);

        axios
        .get("https://www.googleapis.com/books/v1/volumes", {
            params
        })
        .then(results =>
            results.data.items.filter(
            result =>
                result.volumeInfo.title &&
                result.volumeInfo.infoLink &&
                result.volumeInfo.authors &&
                result.volumeInfo.description &&
                result.volumeInfo.imageLinks &&
                result.volumeInfo.imageLinks.thumbnail
            )
        )
        .then(data => res.json(data))
    }
}