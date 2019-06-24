const axios = require("axios");
const db = require("../models");


module.exports = {

    findAll: function(req,res) {
        const{query:params} = req;

        axios.get("https://www.googleapis.com/books/v1/volumes",{params})
        .then(results => results.data.items.filter(
            result =>
            result.volumeInfo.title &&
            result.volumeInfo.infoLink &&
            result.volumeInfo.authors &&
            result.volumeInfo.description &&
            result.volumeInfo.imageLink &&
            result.volumeInfo.imageLink.thumbnail
        )).then(saved =>
            db.Book.find().then(dbBooks =>
                saved.filter(saved => dbBooks.every(dbBook => dbBook.googvleId.toString() !== saved.id))))
                .then(books => res.json(books))
                .catch(err => res.status(442).json(err));
    }
};