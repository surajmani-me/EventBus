import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../redux/actionCreators/auth.actionCreator";
import jwt_decode from "jwt-decode";
import { getOrganizations } from "../redux/actionCreators/organization.actionCreator";
import { getEventsAction } from "../redux/actionCreators/event.actionCreator";

const CheckLogin = () => {
  const { isAuthenticated, isOrgLoading } = useSelector((state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    isOrgLoading: state.organization.isLoading,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      const userData = localStorage.getItem("ebp_token");

      if (userData) {
        const token = jwt_decode(JSON.parse(userData));

        console.log(token);

        if (token) {
          // check token expired

          const currentTime = Date.now() / 1000;

          if (token.exp > currentTime) {
            dispatch(
              loginAction({
                token,
                user: {
                  id: token._doc._id,
                  name: token._doc.name,
                  email: token._doc.email,
                  role: token._doc.role,
                },
              })
            );
          }
        }
      }
    }
    if (isOrgLoading) {
      dispatch(getOrganizations());
      dispatch(getEventsAction());
    }
  }, [dispatch, isAuthenticated, isOrgLoading]);

  return <div></div>;
};

export default CheckLogin;
