import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
//import API from "../utils/API";
//import DeleteBtn from "../components/DeleteBtn";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";
//import BookSearch from "../components/Search";
// import Footer from "../components/Footer";
//import Nav from "../components/Nav";
//import Book from "../components/Book";


class Saved extends Component {
    state = {
      books: []
    };

    render() {
      return (
        <div>
            {/* <Nav /> */}
              <Jumbotron />
              <div className="container">
             {/* <Book /> */}
             </div>
              {/* <Footer /> */}
</div>
      );
    }
    
    }

export default Saved;