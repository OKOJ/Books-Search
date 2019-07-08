import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import Button from "../Button"
import "./style.css";

// Exporting both RecipeList and RecipeListItem from this file

// RecipeList renders a bootstrap list item
export function BookList({ children }) {
  return <ul className="list-group">{children}</ul>;
}

// RecipeListItem renders a bootstrap list item containing data from the recipe api call
export function BookListItem({
  image = "https://placehold.it/300x500",
  title,
  authors,
  description,
  link,
  onClick
}) {
  return (
    <li className="list-group-item">
      <Container>
        <Row>
          <Col size="xs-4 sm-2">
            <Thumbnail src={image} />
          </Col>
          <Col size="xs-8 sm-9">
            <h3>{title}</h3>
            <h5>{authors}</h5>
            
                          <Button
                        onClick={onClick}
                        type="warning"
                        className="input-lg"
                      >
                        Save
                      </Button>
            <p>Synopsis: {description}</p>
            <a rel="noreferrer noopener" target="_blank" href={link}>
              More Info Here >>>>
            </a>
          </Col>
        </Row>
      </Container>
    </li>
  );
}
