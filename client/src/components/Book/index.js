import React from "react";
import { ListItem } from "../List";
import "./style.css";

function Book({ title, authors, link, description, image }){

return(
    <ListItem>
    <div className="row">
        <div className="card col-md-12">
            <div className="card-title">
                 <h4 className="card-title font-weight-bold mt-2">{title}</h4>
                 <p className="card-text">Written by {authors}</p>
            </div>

            <div className="card-body">
                <div className="card-content">
                  <img className="card-img" src={image} alt="">
                  </img> 
                  <p className="card-text">{description}</p>
                </div>

                <div className="content text-right">            
                  <button type="button" href={link} class="btn btn-info">View</button>   <button type="button" class="btn btn-success">Save</button> <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </div>
    </div>
    </ListItem>
)

};


export default Book;