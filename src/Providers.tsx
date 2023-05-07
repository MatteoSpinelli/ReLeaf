import React from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { SWRConfig } from "swr"
import { store } from "./store"

import { HelmetProvider } from "react-helmet-async"

// components
import ScrollToTop from "./components/common/ScrollToTop"
import AuthProvider from "./providers/AuthProvider"

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <AuthProvider>
          <SWRConfig
            value={{
              fetcher: (uri, options = {}) =>
                fetch(process.env.REACT_APP_SERVER_URI + uri, {
                  ...options,
                  credentials: "include",
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
