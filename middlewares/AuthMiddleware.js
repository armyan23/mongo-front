import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { authenticatedRequest } from "store/auth/action";
import usePreviousList from "hooks/usePreviousList";
import { logoutAction } from "config/instance";
import Loading from "components/ui/Loading";

const AuthMiddleware = ({ children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { isAuthenticatedSuccess, isAuthenticatedFailure } = useSelector(
    (state) => state.auth
  );

  const [prevIsAuthenticatedSuccess, prevIsAuthenticatedFailure] =
    usePreviousList([isAuthenticatedSuccess, isAuthenticatedFailure]);

  const [loading, setLoading] = useState(true);

  const token = typeof window !== "undefined" && localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      dispatch(authenticatedRequest(token));
    } else {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthenticatedSuccess && prevIsAuthenticatedSuccess === false) {
      router.push("/people");
    } else if (isAuthenticatedFailure && prevIsAuthenticatedFailure === false) {
      setLoading(false);
      logoutAction();
    }
  }, [isAuthenticatedSuccess, isAuthenticatedFailure]);

  if (loading) {
    return <Loading />;
  }

  return children;
};

AuthMiddleware.propTypes = {
  children: PropTypes.node,
};

export default AuthMiddleware;
