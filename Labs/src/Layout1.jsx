import { BrowserRouter, Route, Routes } from "react-router-dom";

import LabNavs from "./LabNavs";

import Layout from "./Lab_20/Layout";
import Home from "./Lab_20/Home";
import Contact from "./Lab_20/Contact";
import About from "./Lab_20/About";
import Info from "./Lab_20/Info";
import MoreDatails from "./Lab_20/MoreDatails";
import Homepage from "./Homepage";

function Layout1() {
  return (
    <BrowserRouter>
      <LabNavs />
      <Routes>
      <Route path="/" element={<Homepage/>} />
        <Route path="/Lab20" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Info" element={<Info />} />
          <Route path="MoreDatails" element={<MoreDatails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Layout1;
