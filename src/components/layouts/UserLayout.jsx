import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { SideBar } from "./SideBar";
import { AuthRoute } from "../auth/AuthRoute";
import { useSelector } from "react-redux";

export const UserLayout = () => {
  const { user } = useSelector((state) => state.userInfo);
  return (
    <AuthRoute>
      {/* navbar */}
      <Header />
      {/* main body */}
      <div>
        <div className="d-flex">
          <div className="bg-dark text-white" style={{ width: "200px" }}>
            <div className="p-4">
              <div>Welcome Back</div>
              <h4>{`${user.fName} ${user.lName}`}</h4>
            </div>
            <hr />
            <SideBar />
          </div>

          <main className="user-main ">
            <Outlet />
          </main>
        </div>
      </div>

      {/* footer */}
      <Footer />
    </AuthRoute>
  );
};
