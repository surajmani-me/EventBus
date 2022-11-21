import { NextUIProvider } from "@nextui-org/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import Navigation from "../common/Navbar/Navigation";

import "react-toastify/dist/ReactToastify.css";

import "../styles/globals.css";
import theme from "../theme";
import { ToastContainer } from "react-toastify";
import store from "../redux/store";
import CheckLogin from "../components/CheckLogin";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <CheckLogin />
      <NextUIProvider theme={theme}>
        <ToastContainer />
        <Navigation />
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  );
};

export default MyApp;
