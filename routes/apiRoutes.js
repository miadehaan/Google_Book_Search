// /api/books (get) - Should return all saved books as JSON.
// /api/books (post) - Will be used to save a new book to the database.
// /api/books/:id (delete) - Will be used to delete a book from the database by Mongo _id.
// * (get) - Will load your single HTML page in client/build/index.html. Make sure you have this after all other routes are defined.

const router = require("express").Router();
const db = require("../models");

router.get("/recipes", (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
    db.Book.find({
        title: { $regex: new RegExp(req.query.q, 'i')}
    })
    .then(recipes => res.json(recipes))
    .catch(err => res.status(422).end());
});

module.exports = router;