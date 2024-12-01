import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { PiCursorClickDuotone } from "react-icons/pi";
import { DefaultLayout } from "./components/layouts/DefaultLayout";
import HomePage from "./pages/home/HomePage.jsx";
import Dashboard from "./pages/dashboard/DashboardPage.jsx";
import AppRoute from "./routes/AppRoute.jsx";
function App() {
  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  );
}

export default App;
