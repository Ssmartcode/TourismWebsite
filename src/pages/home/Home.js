import React, { useEffect, useState } from "react";
import useHttpRequest from "../../hooks/useHttpRequest";
// components
import Showcase from "../../components/home/showcase/Showcase";
import Card from "../../components/shared/card/Card";
import Spinner from "../../components/shared/spinner/Spinner";

const Home = () => {
  const { isLoading, error, sendRequest } = useHttpRequest();
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await sendRequest("GET", "http://localhost:5000/offers");
      setOffers(response.data.offers);
    })();
  }, [sendRequest]);
  return (
    <React.Fragment>
      <Showcase />

      <section id="featured">
        <div className="container">
          <div className="row">
            {isLoading && <Spinner />}
            {offers.map((offer) => {
              return (
                <div className="col-lg-4">
                  <Card
                    key={offer.id}
                    title={offer.title}
                    category={offer.category}
                    period={offer.period}
                    price={offer.price}
                    readMoreLink={`http://localhost:3000/offers/${offer.id}`}
                  ></Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
