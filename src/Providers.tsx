import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { SWRConfig } from "swr"
import { store } from "./store"

import { HelmetProvider } from "react-helmet-async"

// components
import ScrollToTop from "./components/common/ScrollToTop"
import AuthProvider from "./providers/AuthProvider"
import Cookies from "js-cookie"

export default function Providers({ children }: { children: React.ReactNode }) {
  const jwt = Cookies.get("jwt")
  const headers = jwt ? { authorization: `Bearer ${jwt}` } : {}
  return (
    <HelmetProvider>
      <Provider store={store}>
        <AuthProvider>
          <SWRConfig
            value={{
              fetcher: (uri, options = {}) =>
                fetch(process.env.REACT_APP_SERVER_URI + uri, {
                  ...options,
                  mode: "cors",
                  headers,
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
        </AuthProvider>
      </Provider>
    </HelmetProvider>
  )
}
