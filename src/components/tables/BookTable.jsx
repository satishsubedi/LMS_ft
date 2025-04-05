import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);
  const [displaybook, setDisplayBook] = useState([]);
  const now = new Date();
  const handleOnsearch = (e) => {
    const { value } = e.target;
    console.log(value);
    const tempArg = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayBook(tempArg);
  };
  useEffect(() => {
    setDisplayBook(books);
  }, [books]);
  return (
    <div>
      <div className="d-flex justify-content-between mb-2">
        <div>{displaybook.length} (s) Books found</div>
        <div className="text-end">
          <Form.Control
            placeholder="Searchby Book Name"
            onChange={handleOnsearch}
          />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>S.N</th>
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Is Available</th>
            <th>Number of Days</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displaybook.map(
            (
              { _id, status, title, imgUrl, expectedAvailable, availability },
              i
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td
                  className={
                    status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {status}
                </td>
                <td>
                  <img
                    src={import.meta.env.VITE_BASE_API_URL + imgUrl.slice(6)}
                    alt=""
                    width={100}
                  />
                </td>
                <td>{title}</td>
                <td>
                  {availability
                    ? "yes"
                    : !availability && expectedAvailable
                    ? expectedAvailable.slice(0, 10)
                    : "NA"}
                </td>
                <td>
                  {availability
                    ? "YES"
                    : !availability && expectedAvailable
                    ? Math.ceil(
                        (new Date(expectedAvailable) - now) /
                          (1000 * 60 * 60 * 24)
                      ) > 0
                      ? Math.ceil(
                          (new Date(expectedAvailable) - now) /
                            (1000 * 60 * 60 * 24)
                        ) + " day(s) in"
                      : Math.abs(
                          Math.ceil(
                            (new Date(expectedAvailable) - now) /
                              (1000 * 60 * 60 * 24)
                          )
                        ) + " day(s) ago"
                    : "NA"}
                </td>
                <td>
                  <Link to={"/user/edit-book/" + _id}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default BookTable;
