import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      {/* navbar */}
      <Header />

      {/* main body */}
      <div className="main">children</div>
      {/* footer */}
      <Footer />
    </div>
  );
};
