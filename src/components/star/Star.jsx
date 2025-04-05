import React from "react";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoMdStarHalf } from "react-icons/io";
import { IoMdStarOutline } from "react-icons/io";
const Star = ({ averagerating, review }) => {
  const HighestRating = 5;
  if (averagerating > HighestRating) {
    return "----";
  }
  const halfStar = !Number.isInteger(averagerating);
  console.log(halfStar);
  const emptyStar =
    HighestRating - Math.floor(averagerating) - (halfStar ? 1 : 0);
  const fullStar = HighestRating - emptyStar - (halfStar ? 1 : 0);
  let star = [];
  for (let index = 0; index < fullStar; index++) {
    star.push(<MdOutlineStarPurple500 />);
  }
  halfStar && star.push(<IoMdStarHalf />);
  for (let index = 0; index < emptyStar; index++) {
    star.push(<IoMdStarOutline />);
  }
  return (
    <div>
      {star}
      <span> {review} </span>
    </div>
  );
};

export default Star;
