import "./PageMain.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Story from "../Story/Story";
import Home from "./Home";
import HyLap from "../Story/HyLap";
import Account from "../Login/Account";

function PageMain() {
  return (
    <div>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Story" element={<Story />} />
        <Route path="/Story/ThanThoaiHyLap" element={<HyLap />} />
        <Route path="/Account" element={<Account/>}/>
      </Routes>
    </div>
  );
}

export default PageMain;
