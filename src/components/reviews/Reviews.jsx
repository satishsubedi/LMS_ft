import React from "react";
import Star from "../star/Star";
import { formatDistanceToNow } from "date-fns";
let reviews = [
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
    Date: "2025-04-19",
  },
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
    Date: "2025-04-14",
  },
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
    Date: "2025-04-12",
  },
  {
    title: "Thisis awesome book",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus facilis quae rerum corporis neque. Rem ipsa autem assumenda esse.",
    reviewdby: "satish subedi",
    rating: 2.5,
    Date: "2025-04-10",
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
            <div className="d-flex gap-2">
              <Star averagerating={r.rating} />
              <span>
                {formatDistanceToNow(new Date(r.Date), { addSuffix: true })}
              </span>
            </div>

            <p>{r.review}</p>

            <div className="text-end">-{r.reviewdby}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
