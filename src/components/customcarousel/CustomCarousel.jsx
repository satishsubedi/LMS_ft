import React from "react";
import Carousel from "react-bootstrap/Carousel";
import a from "@/assets/img/a.jpg";
import b from "@/assets/img/b.jpg";
import c from "@/assets/img/c.jpg";
export const CustomCarousel = () => {
  return (
    <Carousel className="mt-3">
      <Carousel.Item>
        <img src={a} alt="First slide" className="d-block w-100%" />
        <Carousel.Caption className="carousel-caption-bg rounded">
          <h3>First slide label</h3>
          <hr />
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={b} alt="second slide" />
        <Carousel.Caption className="carousel-caption-bg rounded">
          <h3>second slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img src={c} alt="Third slide" />
        <Carousel.Caption className="carousel-caption-bg rounded">
          <h3>Third slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
