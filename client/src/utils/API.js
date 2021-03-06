import axios from "axios";

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: q } });
    
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get("/api/saved");
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/saved/" + id);
  },
  // Saves an book to the database
  saveBook: function(bookData) {
    return axios.post("/api/saved", bookData);
  }
};

