import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeaderMobile from "./Header-Mobile";
import NavigationDawn from "./NavigationDawn";

type Props = {
  children: any;
};

function Layout({ children }: Props) {
  return (
    <div>
      <Header />
      <HeaderMobile />
      {children}
      <NavigationDawn />
      <Footer />
    </div>
  );
}

export default Layout;
