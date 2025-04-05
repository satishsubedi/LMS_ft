import React, { useEffect, useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
  Spinner,
  Tab,
  Tabs,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { publicFetchSingleBookAction } from "../../features/book/bookAction";
import Star from "../../components/star/Star";
import Reviews from "../../components/reviews/Reviews";

const BookLandingPage = () => {
  const { slug } = useParams();
  const { selectedbook } = useSelector((state) => state.bookInfo);
  console.log(selectedbook);
  const dispatch = useDispatch();
  // const [book, SetBook] = useState({});
  const [showimage, SetShowImage] = useState(0);
  const [sliced, SetSliced] = useState(true);
  const [loader, SetLoader] = useState(true);
  const [buttonText, setButtonText] = useState("Read More");
  useEffect(() => {
    // console.log(publicbooks);
    // const selectedbook = publicbooks?.find((book) => book?.slug === slug);
    // console.log(selectedbook);
    // SetBook(selectedbook);

    dispatch(publicFetchSingleBookAction(slug));
    SetLoader(false);
  }, [dispatch, slug]);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Breadcrumb>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
                All Books
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{selectedbook.title}</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        {loader && (
          <div className="text-center">
            {" "}
            <Spinner animation="border" variant="primary" />
          </div>
        )}

        {!selectedbook?._id && (
          <Row>
            <Col>
              <Alert variant="danger">The requested book is not found</Alert>
            </Col>
          </Row>
        )}

        {selectedbook?._id && (
          <>
            <Row>
              <Col md={4}>
                <div className="mb-3 bg-warning  " style={{ height: "300px" }}>
                  <img
                    src={
                      import.meta.env.VITE_BASE_API_URL +
                      selectedbook?.imageList?.[showimage]?.slice(6)
                    }
                    className="h-100 w-100 img-fluid object-fit-contain"
                  ></img>
                </div>
              </Col>
              <Col>
                <div className="d-flex  flex-column h-100 justify-content-between">
                  <div className="top">
                    <h1>{selectedbook?.title}</h1>
                    <div className="fw-bolder">
                      <span>{selectedbook?.author}</span>-
                      <span>{selectedbook?.year}</span>
                    </div>

                    <div className="my-3 d-flex">
                      <span>{selectedbook?.genre}</span> {}
                      <span>
                        <Star averagerating={2.4} review={300} Reviews />
                      </span>
                    </div>
                    <div className="d-flex">
                      {sliced
                        ? selectedbook?.description?.slice(0, 3) + "..."
                        : selectedbook?.description}
                      {/* {sliced && ( */}
                      <Button
                        className="text-decoration-underline  fw-bold bg-secondary"
                        onClick={() => {
                          SetSliced(!sliced);

                          {
                            sliced
                              ? setButtonText("Read Less")
                              : setButtonText("Read More");
                          }
                        }}
                      >
                        {buttonText}
                      </Button>
                      {/* )} */}
                    </div>
                  </div>

                  <div className=" buttom d-grid mb-3">
                    <Button variant="dark">Add to burrowing List..</Button>
                  </div>
                </div>
              </Col>
              <div className="d-flex gap-2 overflow-auto p-2">
                {selectedbook?.imageList?.map((image, i) => (
                  <img
                    key={i}
                    src={import.meta.env.VITE_BASE_API_URL + image?.slice(6)}
                    width={50}
                    onClick={() => SetShowImage(i)}
                    className="img-thumbnail"
                    style={{ cursor: "pointer" }}
                  ></img>
                ))}
              </div>
            </Row>

            <Row>
              <Col className="border mt-2 mb-5">
                <h3 className="text-center">More Details</h3>
                <Tabs
                  defaultActiveKey="Description"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="Description" title="Description">
                    {selectedbook.description}
                  </Tab>
                  <Tab eventKey="Reviews" title="Reviews">
                    <Reviews />
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default BookLandingPage;
