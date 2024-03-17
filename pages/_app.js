import MainLayout from "../components/MainLayout";
import "../styles/global.css";

import { useEffect } from "react";
import { initGA, logPageView } from "./analytics";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, []);

  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}
