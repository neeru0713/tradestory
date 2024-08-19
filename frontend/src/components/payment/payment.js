import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../config/config";
import { hideSpinner, showSpinner } from "../../redux/actions/spinnerAction";
import { showNotification } from "../../redux/actions/notificationAction";
import { useDispatch, useSelector } from "react-redux";
const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const sessionId = query.get("session_id");

    if (sessionId) {
      dispatch(showSpinner("Verifying Payment Details"));
      axios
        .post(
          API_URL + "/api/payment/verify",
          { sessionId },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          dispatch(hideSpinner());
          if (response.data.success) {
            dispatch(showNotification({type: 'success', message: "Payment verification successful", sticky: false}))
            navigate("/trade");
          } else {
            dispatch(showNotification({type: 'error', message: "Payment verification failed", sticky: false}))
            console.error("Payment verification failed");
          }
        })
        .catch((error) => {
          console.error("Error verifying payment", error);
        });
    }
  }, [location, navigate]);

  return (
    <div>
      <h1>Verifying your payment...</h1>
    </div>
  );
};

export default Payment;
