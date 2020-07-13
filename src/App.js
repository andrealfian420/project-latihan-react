import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Page from "./components/Page";

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Page title="Homepage">
                <Home {...props} />
              </Page>
            )}
          />
          <Route
            path="/about"
            render={(props) => (
              <Page title="About Page">
                <About {...props} />
              </Page>
            )}
          />
          <Route
            path="/contact"
            render={(props) => (
              <Page title="Contact Page">
                <Contact {...props} />
              </Page>
            )}
          />
          <Route
            path="/posts/:post_id"
            render={(props) => (
              <Page title="Post">
                <Post {...props} />
              </Page>
            )}
          />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
