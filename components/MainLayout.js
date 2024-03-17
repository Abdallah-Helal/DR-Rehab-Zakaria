import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import Social from "./Social";

export default function MainLayout(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
      <Social />
    </>
  );
}
