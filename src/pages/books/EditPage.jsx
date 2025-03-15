import React from "react";
import EditBookForm from "../../components/forms/bookform/EditBookForm ";
import { Button } from "react-bootstrap";
import { Link } from "react-router";

const EditPage = () => {
  return (
    <div className="p-3">
      <h3>EditPage</h3>
      <div>
        <Link to="/user/books">
          <Button>&lt;Back</Button>
        </Link>
      </div>
      <div>
        <EditBookForm />
      </div>
    </div>
  );
};

export default EditPage;
