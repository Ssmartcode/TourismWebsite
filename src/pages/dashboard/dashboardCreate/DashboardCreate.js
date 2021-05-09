import React, { useState, useRef } from "react";
import useFormValidation from "../../../hooks/useFormValidation";
import useHttpRequest from "../../../hooks/useHttpRequest";
// css
import "./DashboardCreate.css";
// components
import Input from "../../../components/shared/input/Input";
import Alert from "../../../components/shared/alert/Alert";
import Spinner from "../../../components/shared/spinner/Spinner";

const CreateOffer = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [period, setPeriod] = useState("");

  const [requestResponse, setRequestResponse] = useState(null);

  const { validators, validationState, allInputsValid } = useFormValidation();
  const { isRequired, isMinLength, isMaxLength } = validators;
  const { sendRequest, error, isLoading } = useHttpRequest();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(validationState.current);
    if (allInputsValid(validationState.current)) {
      const response = await sendRequest(
        "POST",
        "http://localhost:5000/offers",
        {
          category,
          title,
          price,
          period,
        }
      );
      setRequestResponse(response);
    } else {
      console.log("Not all inputs are valid");
    }
  };
  console.log(category, title, price, period);

  return (
    <div className="col-10 col-lg-6">
      <h1>Create an offer</h1>
      <form onSubmit={handleFormSubmit}>
        <Input
          id="title"
          type="text"
          label="Title"
          onChange={(title) => setTitle(title)}
          validators={[isMinLength, isMaxLength]}
          minLength={5}
          maxLength={30}
          errorMessage="Title should have at least 5 characters and maximum 30"
          validationState={validationState}
          initialValue=""
        />
        <Input
          id="category"
          type="text"
          label="Category"
          onChange={(category) => setCategory(category)}
          validators={[isMinLength, isMaxLength]}
          minLength={3}
          maxLength={15}
          errorMessage="Category should have at least 3 characters and maximum 15"
          validationState={validationState}
          initialValue=""
        />
        <Input
          id="price"
          type="number"
          label="Price"
          onChange={(price) => {
            // transform input from TEXT type to NUMBER type
            setPrice(+price);
          }}
          validators={[isRequired]}
          errorMessage="Price is required"
          validationState={validationState}
          initialValue={0}
        />
        <Input
          id="period"
          type="text"
          label="Period"
          onChange={(period) => {
            setPeriod(period);
          }}
          validators={[isRequired]}
          errorMessage="Period is required"
          validationState={validationState}
          initialValue=""
        />
        <button className="btn btn-primary w-100" type="submit">
          Create an offer
        </button>

        {/* spinning circle */}
        {isLoading && <Spinner />}

        {/* error from server after submiting form */}
        {error && <Alert type="danger" message={error.data.message} />}

        {/*If no error recieved from server display success message*/}
        {requestResponse && (
          <Alert type="success" message={requestResponse.data.message} />
        )}
      </form>
    </div>
  );
};

export default CreateOffer;
