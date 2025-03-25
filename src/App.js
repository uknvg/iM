import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Server from "./components/Discord";
import Dashboard from "./Dashboard/Home";
import Sidebar from "./Dashboard/SideBar";

import Overview from "./pages/Overview";
import Servers from "./pages/Servers";
import Premium from "./pages/Premium";
import Wallet from "./pages/Wallet";
import Coins from "./pages/Coins";

import "./App.css";

const App = () => {
  return (
   <Router>
      <div className="app-container">
        <Routes>
          {/* Root Route */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <Hero />
                <Features />
                <Server />
                <Footer />
              </>
            }
          />

          {/* Dashboard Route */}
          <Route
            path="/dashboard/*"
            element={
              <div className="dashboard-container">
                <>
                  <Sidebar />
                  <Dashboard />
                </>
                <div className="dashboard-content">
                  <Routes>
                    <Route path="" element={<Overview />} />
                    <Route path="servers" element={<Servers />} />
                    <Route path="premium" element={<Premium />} />
                    <Route path="wallet" element={<Wallet />} />
                    <Route path="coins" element={<Coins />} />
                  </Routes>
                </div>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;