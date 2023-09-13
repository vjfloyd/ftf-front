// import React from "react";
import "./App.css";
import Navigation from "./components/navigation/navigation.component";
import Menu from "./components/menu/menu.component";
import Commits from "./components/commits/commit.component";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard.component";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <div className="container-fluid">
          <div className="row">
            <Menu />
            <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Commits History</h1>
              </div>

              <Routes>
                <Route path={"/"} element={<Dashboard />} />
                <Route path={"/commits"} element={<Commits />} />
              </Routes>
            </main>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
