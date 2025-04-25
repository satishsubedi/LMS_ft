import { useSelector } from "react-redux";
import Container from "react-bootstrap/Container";
import { Breadcrumb, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import BookListing from "../../components/booklisting/BookListing";
const AllBooks = () => {
  const { publicbooks } = useSelector((state) => state.bookInfo);
  return (
    <Container>
      <Row>
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item>All Books</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing bookList={publicbooks} />
    </Container>
  );
};
export default AllBooks;
