import React from "react";
import Showcase from "../../components/home/showcase/Showcase";
import Card from "../../components/shared/card/Card";

const Home = () => {
  return (
    <React.Fragment>
      <Showcase />

      <section id="featured">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Card></Card>
            </div>
            <div className="col-lg-4">
              <Card></Card>
            </div>{" "}
            <div className="col-lg-4">
              <Card></Card>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
