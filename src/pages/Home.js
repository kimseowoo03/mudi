import { useState, useEffect } from "react";

import Aspoiler from "../components/Aspoiler";
import Banner from "../components/Banner";
import FullMovie from "../components/FullMovie";
import Footer from "../components/Footer"
import MobileHeader from "../components/MobileHeader"

const Home = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowWidth = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowWidth);
    return () => {
      window.removeEventListener("resize", handleWindowWidth);
    };
  });

  return(
    <div>
      {windowWidth < 391 && <MobileHeader />}
     <Banner />
     <Aspoiler />
     <FullMovie />
     <Footer />
    </div>
  )
}

export default Home;