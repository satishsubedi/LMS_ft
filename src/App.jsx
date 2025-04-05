import { ToastContainer, toast } from "react-toastify";

import AppRoute from "./routes/AppRoute.jsx";
import "./App.css";
import { useEffect } from "react";
import { publicFetchBookAction } from "./features/book/bookAction.js";
import { useDispatch } from "react-redux";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(publicFetchBookAction());
  }, [dispatch]);
  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  );
}

export default App;
