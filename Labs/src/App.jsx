import { BrowserRouter, Route, Routes } from "react-router-dom";

import LabNavs from "./LabNavs";

import Layout from "./Lab_20/Layout";
import Home from "./Lab_20/Home";
import Contact from "./Lab_20/Contact";
import About from "./Lab_20/About";
import Info from "./Lab_20/Info";
import MoreDatails from "./Lab_20/MoreDatails";
import Homepage from "./Homepage";
import Layout2 from "./Lab_21/Layout2";
import A1 from "./Lab_21/A1";
import A2 from "./Lab_21/A2";
import Layout3 from "./Lab_18/Layout3";
import App_a from "./Lab_18/Lab-18a/App_a";

function App() {
  return (
    <>
      <BrowserRouter>
        <LabNavs />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Lab20" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Home" element={<Home />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="About" element={<About />} />
            <Route path="Info" element={<Info />} />
            <Route path="MoreDatails" element={<MoreDatails />} />
          </Route>
          <Route path="/Lab21" element={<Layout2 />}>
            <Route path="A1" element={<A1 />} />
            <Route path="A2" element={<A2 />} />
          </Route>
          <Route path="/Lab18" element={<Layout3 />}>
          <Route path="A" element={<App_a/>}/>
          
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
