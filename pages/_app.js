import Main from "@/components/main";
import "@/styles/globals.css";
import Context from "@/context/context";

export default function App({ Component, pageProps }) {
  return( 
    <Context>
  <Main Component={Component} pageProps={pageProps} />
  </Context>
  );
}
