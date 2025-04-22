import React, { useEffect, useState } from "react";

const ProtectRoutes = ({ children }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setIsAuthorized(true);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="form-container">
        <div className="form-wrapper">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  return isAuthorized ? (
    children
  ) : (
    <div className="form-container">
      <div className="form-wrapper">
        <h2>Unauthorized</h2>
        <p>Please login to access this page.</p>
      </div>
    </div>
  );
};

export default ProtectRoutes;
