import React from "react";
import { Provider } from "react-redux";
import { SWRConfig } from "swr";
import { store } from "./store";

export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <SWRConfig
        value={{
          fetcher: (uri, options = {}) =>
            fetch(process.env.REACT_APP_SERVER_URI + uri, options).then((res) =>
              res.json()
            ),
        }}
      >
        {children}
      </SWRConfig>
    </Provider>
  );
}
