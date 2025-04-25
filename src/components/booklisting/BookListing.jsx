import { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import CustomPagination from "../custompagination/CustomPagination";
import { CustomCard, CustomList } from "../customcard/CustomCard";

const BookListing = ({ bookList, query, totalbooks }) => {
  const [view, setView] = useState("card");
  const [active, setActive] = useState(1);
  const itemperscreen = 2;
  const page = Math.ceil(bookList?.length / itemperscreen);
  const startpage = (active - 1) * itemperscreen;
  const currentbooks = bookList?.slice(startpage, startpage + itemperscreen);

  return (
    <div>
      <Row>
        <div className="d-flex justify-content-between align-items-center ">
          <div>
            {bookList?.length} book found out of {totalbooks?.length}
          </div>

          <div>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={() => setView("card")}>
                Card View
              </Button>
              <Button variant="dark" onClick={() => setView("list")}>
                List View
              </Button>
            </ButtonGroup>
          </div>
        </div>

        <Col>
          <div className="m-2 d-flex gap-3 flex-wrap ">
            {currentbooks.length &&
              currentbooks.map((book) =>
                view === "card" ? (
                  <CustomCard key={book._id} {...book} />
                ) : (
                  <CustomList key={book._id} {...book} />
                )
              )}
          </div>
          <CustomPagination active={active} setActive={setActive} page={page} />
        </Col>
      </Row>
    </div>
  );
};

export default BookListing;
