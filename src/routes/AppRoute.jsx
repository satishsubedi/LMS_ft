import React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
// import HomePage from "../pages/home/HomePage";
// import DashboardPage from "../pages/dashboard/DashboardPage";
import {
  HomePage,
  DashboardPage,
  SignInPage,
  SignUpPage,
  ForgetPassword,
  Books,
  BookLandingPage,
  EditPage,
  BorrowHistoryPage,
  NewBookPage,
  ReviewsPage,
  UserPage,
  ProfilePage,
} from "../pages";
import { DefaultLayout } from "@components/layouts/DefaultLayout";
import { UserLayout } from "@components/layouts/UserLayout";
const AppRoute = () => {
  return (
    <Routes>
      {/* public page */}
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
      </Route>
      {/* private page */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="books" element={<Books />} />
        <Route path="edit-book" element={<EditPage />} />
        <Route path="borrow-history" element={<BorrowHistoryPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="all" element={<UserPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoute;
