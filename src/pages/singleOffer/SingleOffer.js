import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useHttpRequest from "../../hooks/useHttpRequest";
import "./SingleOffer.css";

const SingleOffer = () => {
  const [offer, setOffer] = useState({});
  const { isLoading, error, sendRequest } = useHttpRequest();

  const offerId = useParams().id;

  useEffect(() => {
    (async () => {
      try {
        const response = await sendRequest(
          "GET",
          `http://localhost:5000/offers/${offerId}`
        );
        setOffer(response.data.offer);
      } catch (err) {}
    })();
  });
  return (
    <section className="single-offer">
      <div className="container ">
        <div className="grid-container">
          <h3 className="offer-title">{offer.title}</h3>
          <img src="/assets/images/germany.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

export default SingleOffer;
