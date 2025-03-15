import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Button from "react-bootstrap/Button";

import BookTable from "../../components/tables/BookTable";
import { adminFetchBookAction } from "../../features/book/bookAction";
import { Link, useParams } from "react-router";

const Books = () => {
  // const dispatch = useDispatch(); //returns a reference to the dispatch func from the Redux Store
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminFetchBookAction());
  }, [dispatch]);
  return (
    <div className="p-3">
      <div>
        <h3>Books</h3>
      </div>
      <hr />
      <div className="text-end mb-2">
        <Link to="/user/new-book">
          <Button>Add New Book</Button>
        </Link>
      </div>

      <BookTable />
    </div>
  );
};

export default Books;
