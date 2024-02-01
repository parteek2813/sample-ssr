import "./about.css";
import { Helmet } from "react-helmet";

export { Page };

function Page() {
  return (
    <>
      <Helmet>
        <title>About Us - SSR Project</title>
        <meta
          name="description"
          content="Learn more about our company and what we do."
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
      </Helmet>
      <h1>About</h1>
      <p>
        Example of using <code>vite-plugin-ssr</code>.
      </p>
    </>
  );
}
