import React from "react";
import { BrowserRouter, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import store, { persistor } from "./store/index.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import Header from "./components/Header/index.js";
import Routes from "./routes/index.js";

function Layout() {
  const location = useLocation();

  const hideHeader = location.pathname === "/login";

  return (
    <>
      {!hideHeader && <Header />}

      <Routes />

      <GlobalStyles />

      <ToastContainer autoClose={3000} className="toast-container" />
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
