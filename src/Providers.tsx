import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import { store } from "./store";

import { HelmetProvider } from "react-helmet-async";

// components
import ScrollToTop from "./components/common/ScrollToTop";
import { getCookie } from "./utils/cookie";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <SWRConfig
          value={{
            fetcher: (uri, options = {}) =>
              fetch(process.env.REACT_APP_SERVER_URI + uri, {
                ...options,
                headers: {
                  authorization: `Bearer ${getCookie("jwt")}`,
                },
              }).then((res) => res.json()),
          }}
        >
          <BrowserRouter>
            <>
              {/* Scroll to Top when route change */}
              <ScrollToTop />
              {children}
            </>
          </BrowserRouter>
        </SWRConfig>
      </Provider>
    </HelmetProvider>
  );
}
