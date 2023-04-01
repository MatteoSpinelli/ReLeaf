import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { store } from "./store";

import { HelmetProvider } from "react-helmet-async";

export default function Providers({ children }) {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <SWRConfig
          value={{
            fetcher: (uri, options = {}) =>
              fetch(process.env.REACT_APP_SERVER_URI + uri, options).then(
                (res) => res.json()
              ),
          }}
        >
          <BrowserRouter>{children}</BrowserRouter>
        </SWRConfig>
      </Provider>
    </HelmetProvider>
  );
}
