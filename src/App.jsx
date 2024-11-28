import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { PiCursorClickDuotone } from "react-icons/pi";
function App() {
  toast("helllo");
  // return (
  //   <Routes>
  //     <Route>
  //       LMS is comming Soon....
  //       <Button>Clickme</Button>
  //     </Route>
  //   </Routes>
  // );
  // const notify = () => toast("Wow so easy!");
  return (
    <>
      <Button onClick={() => toast("success")}>
        Click Me <PiCursorClickDuotone />{" "}
      </Button>
      {/* <button onClick={notify}>Notify!</button> */}
      <ToastContainer />
    </>
  );
}

export default App;
