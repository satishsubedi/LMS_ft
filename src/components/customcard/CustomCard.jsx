import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router";
export const CustomCard = ({ imgUrl, author, slug, year }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="m-2 rounded">
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_BASE_API_URL + imgUrl?.slice(6)}
        />
      </div>

      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          {author}-{year}
        </Card.Text>
        <Link to={"/book/public/" + slug}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export const CustomList = ({ imgUrl, author, slug, year, description }) => {
  return (
    <div>
      <div className="d-flex gap-3">
        <div className="m-2 rounded">
          <Card.Img
            variant="top"
            src={import.meta.env.VITE_BASE_API_URL + imgUrl?.slice(6)}
            height={"200px"}
            width={"200px"}
          />
        </div>

        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            {author}-{year}
          </Card.Text>
          {description?.slice(200)}
          <Link to={"/book/public/" + slug}>
            <Button variant="primary">View Details</Button>
          </Link>
        </Card.Body>
      </div>
    </div>
  );
};
