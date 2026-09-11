import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css"

import LabNavs from "./LabNavs";
import Homepage from "./Homepage";

// Lab 18
import Layout3 from "./Lab_18/Layout3";
import App_a from "./Lab_18/Lab-18a/App_a";

// Lab 19
import Layout5 from "./Lab_19/Layout5";
import A19 from "./Lab_19/A19";

// Lab 20
import Layout from "./Lab_20/Layout";
import Home from "./Lab_20/Home";
import Contact from "./Lab_20/Contact";
import About from "./Lab_20/About";
import Info from "./Lab_20/Info";
import MoreDatails from "./Lab_20/MoreDatails";

// Lab 21
import Layout2 from "./Lab_21/Layout2";
import A1 from "./Lab_21/A1";
import A2 from "./Lab_21/A2";

// Lab 22
import Layout4 from "./Lab_22/Layout4";
import Cal from "./Lab_22/A1";

//Lab 23
import Layout6 from "./Lab_23/Layout6";
import A23 from "./Lab_23/A23";

function App() {
  return (
    <BrowserRouter>
      <LabNavs />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Homepage />} />

        {/* ================= LAB 18 ================= */}
        <Route path="/Lab18" element={<Layout3 />}>
          <Route path="A" element={<App_a />} />
          <Route path="B" element={<App_a />} />
          <Route path="C" element={<App_a />} />
        </Route>

        {/* ================= LAB 19 ================= */}
        <Route path="/Lab19" element={<Layout5 />}>
          <Route path="A19" element={<A19 />} />
        </Route>

        {/* ================= LAB 20 ================= */}
        <Route path="/Lab20" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
          <Route path="Info" element={<Info />} />
          <Route path="MoreDatails" element={<MoreDatails />} />
        </Route>

        {/* ================= LAB 21 ================= */}
        <Route path="/Lab21" element={<Layout2 />}>
          <Route path="A1" element={<A1 />} />
          <Route path="A2" element={<A2 />} />
        </Route>

        {/* ================= LAB 22 ================= */}
        <Route path="/Lab22" element={<Layout4 />}>
          <Route path="A1" element={<Cal />} />
        </Route>
        {/* ================= LAB 23 ================= */}
        <Route path="/Lab23" element={<Layout6 />}>
          <Route path="A23" element={<A23 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
