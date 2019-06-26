import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import DeleteBtn from "../components/DeleteBtn";
//import { Col, Row, Container } from "../components/Grid";
import { List} from "../components/List";
//import Form from "../components/Form";
import BookSearch from "../components/Search";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import Book from "../components/Book";

class Home extends Component {
  state = {
    books: [],
    q: "",
    massage:"To Begin Enter any Book Title"
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.getBooks();
  };

  getBooks = () => {
    API.getBooks(this.state.q)
    .then(res => this.setState({
      books: res.data
     
    })
    ).catch(() => this.setState({
      books: [],
      message: "No Books Found"
    })
    );
  };

  // handleBookSave = id => {
  //   const book = this.state.books.find(book => book.id === id);

  //   API.saveBook({
  //     googleId: book.id,
  //     title: book.volumeInfo.title,
  //     subtitle: book.volumeInfo.subtitle,
  //     link: book.volumeInfo.infoLink,
  //     authors: book.volumeInfo.authors,
  //     description: book.volumeInfo.description,
  //     image: book.volumeInfo.imageLinks.thumbnail
  //   }).then(() => this.getBooks());
  // };



  render() {
    return (
     <Wrapper>
        <Nav />
          <Jumbotron />
           <div className="container">
            <BookSearch 
            handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit}
            q={this.state.q}
            />
            <div className="row">
            {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Book
                      key={book.id}
                      title={book.volumeInfo.title}
                      link={book.volumeInfo.infoLink}
                      authors={book.volumeInfo.authors.join(", ")}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
                      
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">{this.state.message}</h2>
              )}

            </div>
           </div>
        <Footer />
     </Wrapper>
    );
  }
}

export default Home;
