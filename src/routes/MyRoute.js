import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
export default function MyRoute({ component: Component, isClosed }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();
  if (isClosed && !isLoggedIn) {
    return (
      <Navigate to="/login" state={{ prevPath: location.pathname }} replace />
    );
  }
  return <Component />;
}

MyRoute.defaulProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
};
