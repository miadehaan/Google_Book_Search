import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
