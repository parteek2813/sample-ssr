import React from "react";
import App from "./App";
import "./index.css";
import { Helmet } from "react-helmet";

function Page() {
  return (
    <>
      <Helmet>
        <title>SSR Project</title>
        <meta
          name="description"
          content="Sample SSR Project Demo Using Vite-plugin-SSR [VIKE]"
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>
      <App />
    </>
  );
}

export { Page };
