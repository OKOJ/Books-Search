import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Title (required)" />
              <Input name="author" placeholder="Author (required)" />
              <TextArea name="synopsis" placeholder="Synopsis (Optional)" />
              <FormBtn>Submit Book</FormBtn>
            </form>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default Search;