import { lazy } from "react";
const Searchbar = lazy(() => import("../components/Searchbar.js"));
const Navbar = lazy(() => import("../components/Navbar.js"));
const SlideShow = lazy(() => import("../components/SlideShow.js"));
const Products = lazy(() => import("../components/Products.js"));
const Footer = lazy(() => import("../components/Footer.js"));

const HomePage = () => {
  return (
    <>
      <Searchbar />
      <Navbar />
      <SlideShow />
      <Products />
      <Footer />
    </>
  );
};

export default HomePage;
