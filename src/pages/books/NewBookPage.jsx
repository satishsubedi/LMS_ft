import React from "react";
import { NewBookForm } from "../../components/forms";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

const NewBookPage = () => {
  return (
    <div className="p-3">
      <div className="text-center m-3 fw-bolder fs-3">NewBookPage</div>
      <hr />
      <div>
        <Link to="/user/books">
          <Button>&lt;Back</Button>
        </Link>
      </div>
      <div>
        <NewBookForm />
      </div>
    </div>
  );
};

export default NewBookPage;
