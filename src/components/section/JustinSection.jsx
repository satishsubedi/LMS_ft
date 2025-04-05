import React from "react";
import SectionTitle from "../title/SectionTitle.jsx";
import { CustomCard } from "../customcard/CustomCard.jsx";
import { useSelector } from "react-redux";

export const JustinSection = () => {
  const { publicbooks } = useSelector((state) => state.bookInfo);
  console.log(publicbooks);
  let books = [];
  if (publicbooks.length) {
    const sorted = [...publicbooks].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    books = sorted;
    console.log(books);
  }
  return (
    <div>
      <SectionTitle title="Just in!" />
      <div className="d-flex gap-2  flex-wrap justify-content-center">
        {books.map((book) => (
          <CustomCard {...book} />
        ))}
      </div>
    </div>
  );
};
