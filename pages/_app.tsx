import { useState, useEffect } from "react";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState({});

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");
    if (theme !== "dark") return;
    setTheme({ type: "dark" });
  }, []);

  return (
    <GeistProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
}
export default MyApp;
