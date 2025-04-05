import React from "react";
import Star from "../star/Star";
let reviews = [
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
  },
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
  },
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
  },
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
  },
];
const Reviews = () => {
  return (
    <div className="reviews-tab">
      {reviews.map((r, i) => (
        <div
          key={i}
          className=" border rounded-lg shadow-lg d-flex p-3 reviews-item gap-2 "
        >
          <div className="left   d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center fw-bold fs-4">
              SS
            </div>
          </div>
          <div className="right ">
            <h3>{r.title}</h3>
            <Star averagerating={r.rating} />
            <p>{r.review}</p>
            <div className="text-end">-{r.reviewdby}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
