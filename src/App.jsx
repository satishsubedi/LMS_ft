import { ToastContainer, toast } from "react-toastify";

import AppRoute from "./routes/AppRoute.jsx";
import "./App.css";
function App() {
  return (
    <>
      <AppRoute />
      <ToastContainer />
    </>
  );
}

export default App;
