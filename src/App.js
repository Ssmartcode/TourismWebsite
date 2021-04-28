import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
// css
import "./App.css";
// components
import Header from "./components/shared/header/Header";
// pages
import Home from "./pages/home/Home";
import Signup from "./pages/signUp/Signup";
function App() {
  const [message, setMessage] = useState("No message recieved");
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/");
      console.log(data);
      setMessage(data.data.message);
    };
    fetchData();
  });
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/user/signup">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
