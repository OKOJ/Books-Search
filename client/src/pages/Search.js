import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import DeleteBtn from "../components/DeleteBtn";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import Form from "../components/Form";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
//import Book from "../Book";

class Search extends Component {
  state = {
    books: [],
    q: "",
  };


  render() {
    return (
      <Wrapper>
          <Nav />
            <Jumbotron>
              <h1 className="text-center">Book-Search</h1>
            </Jumbotron>
            <Footer />
     </Wrapper>
    );
  }
}

export default Search;
