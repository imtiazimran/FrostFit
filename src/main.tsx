import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/routes.tsx";
import { Provider } from "react-redux";
import { persister, store } from "./redux/store.ts";
import { Toaster } from "./components/ui/sonner.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { DarkModeProvider } from "./utils/DarkMoodProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <DarkModeProvider>
          <RouterProvider router={router} />
        </DarkModeProvider>
      </PersistGate>
      <Toaster />
    </Provider>
  </React.StrictMode>
);
