import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

export default function MyRoute({
  component: Component,
  isClosed,
  professorOnly,
}) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);

  const location = useLocation();

  // Rota protegida
  if (isClosed && !isLoggedIn) {
    return (
      <Navigate to="/login" state={{ prevPath: location.pathname }} replace />
    );
  }

  // Apenas professores
  if (professorOnly && role !== "user") {
    return <Navigate to="/" replace />;
  }

  return <Component />;
}

MyRoute.defaultProps = {
  isClosed: false,
  professorOnly: false,
};

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.elementType, PropTypes.func])
    .isRequired,
  isClosed: PropTypes.bool,
  professorOnly: PropTypes.bool,
};
