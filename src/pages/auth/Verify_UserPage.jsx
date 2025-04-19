import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import { verifyNewUserApi } from "../../services/authAPI";
const Verify_UserPage = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const [response, setResponse] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const shouldFetchRef = useRef(true);
  const sessionid = searchParams.get("sessionid");
  const t = searchParams.get("t");
  // useEffect(() => {
  //   if (sessionid && t && shouldFetchRef.current) {
  //     // call api
  //     (async () => {
  //       const result = await verifyNewUserApi({
  //         sessionid,
  //         t,
  //       });

  //       setResponse(result);
  //       setShowSpinner(false);
  //       shouldFetchRef.current = false;
  //     })();
  //   }
  //   if (response.status === "success") {
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 3000);
  //   }
  // }, [sessionid, t, response.status, navigate]);

  useEffect(() => {
    const fetchUserVerification = async () => {
      try {
        const result = await verifyNewUserApi({ sessionid, t });
        console.log(result);
        setResponse(result);
      } catch (error) {
        console.error("Verification failed:", error);
      } finally {
        setShowSpinner(false);
        shouldFetchRef.current = false;
      }
    };

    if (sessionid && t && shouldFetchRef.current) {
      fetchUserVerification();
    }

    if (response.status === "success") {
      const timeoutId = setTimeout(() => {
        navigate("/login");
      }, 3000);

      return () => clearTimeout(timeoutId); // cleanup if component unmounts
    }
  }, [sessionid, t, response.status, navigate]);

  return (
    <div className=" mt-3 p-5">
      {showSpinner && (
        <>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="secondary" />
          </div>

          <div className="d-flex justify-content-center">
            <p>Please wait to activate the user </p>
          </div>
        </>
      )}
      {response?.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default Verify_UserPage;
