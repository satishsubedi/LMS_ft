import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";

const CustomPagination = ({ active, setActive, page }) => {
  let items = [];
  for (let number = 1; number <= page; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => setActive(number)}
      >
        {number}
      </Pagination.Item>
    );
  }
  CustomPagination.propTypes = {
    setActive: PropTypes.func.isRequired, // 👈 expects a function, required
    active: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
  };
  return (
    <div>
      <div className="d-flex justify-content-center">
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};

export default CustomPagination;
