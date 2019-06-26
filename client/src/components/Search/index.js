import React from "react";
import "./style.css";

function BookSearch({ q, handleInputChange, handleFormSubmit }){

    return(
  <div className="row">
    <div className="card flex" id="search">
      <div className="card-body">
            <h4 className="card-title">Book Search</h4>
         <div className="input-group md-form form-sm form-2 pl-0">
             <input className="form-control my-0 py-1 lime-border" id="Title" type="text" placeholder="Enter Book Title" name="q" aria-label="Search" onChange={handleInputChange}
                    required value={ q }></input>
            <div className="input-group-append">
              <span className="input-group-text lime lighten-2" id="basic-text1"><i className="fas fa-search text-grey" onClick={handleFormSubmit}
                   aria-hidden="true"></i></span>
            </div>
        </div>
      </div>
    </div>
  </div>
    );
}

export default BookSearch;




