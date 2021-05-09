import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
// css
import "./App.css";
// components
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
// pages
import Home from "./pages/home/Home";
import Signup from "./pages/signUp/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardHome from "./pages/dashboard/dashboardHome/DashboardHome";
import DashboardCreate from "./pages/dashboard/dashboardCreate/DashboardCreate";
import DashboardUpdate from "./pages/dashboard/dashboardUpdate/DashboardUpdate";
import SingleOffer from "./pages/singleOffer/SingleOffer";

function App() {
  // const [message, setMessage] = useState("No message recieved");
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("http://localhost:5000/");
      console.log(data.data.message);
      // setMessage(data.data.message);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/offers/:id" exact>
            <Header />
            <SingleOffer />
            <Footer />
          </Route>
          <Route path="/user/signup" exact>
            <Header />
            <Signup />
            <Footer />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard>
              <DashboardHome />
            </Dashboard>
          </Route>
          <Route path="/dashboard/create">
            <Dashboard>
              <DashboardCreate />
            </Dashboard>
          </Route>
          <Route path="/dashboard/offers/:id">
            <Dashboard>
              <DashboardUpdate />
            </Dashboard>
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
