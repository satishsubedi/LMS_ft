import React, { useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import BookListing from "../../components/booklisting/BookListing";
import { useSelector } from "react-redux";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";

const SearchBook = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");
  useEffect(() => {
    !query && navigate("/");
  }, [query, navigate]);
  const { publicbooks } = useSelector((state) => state.bookInfo);
  const filteredbooks = publicbooks.filter((b) => {
    const str = (b.title + b.description).toLowerCase();
    return str.includes(query?.toLowerCase());
  });
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/search" }}>
              Search
            </Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing
        bookList={filteredbooks}
        query={query}
        totalbooks={publicbooks}
      />
    </Container>
  );
};

export default SearchBook;
