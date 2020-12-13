// Make a call to the back-end API/Google Books
import axios from "axios";

const API = {
    // Gets the Google book with the given id
    getGoogleBook: function(search) {
        return axios.get("/api/google/", { params: { q: "title:" + search } });
    }
    ,
    // Gets all saved books from database
    getBooks: function() {
        return axios.get("/api/books");
    },
    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    // Saves a book to the database
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};

export default API;
