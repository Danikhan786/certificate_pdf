import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
} from "@stripe/react-stripe-js";
import InjectedCheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51NAHApKY760lUtrJfDKeiq236JAXC8CXBO1VaE1V5EDUdd4TGtITpCztFRUeIBOMN7vDLFyMlghO1aR1mg0XIXiC00gHxWaTbD");

const StepTwo = ({certificate, formData, setStep}) => {
  return (
    <>
      <div className="certificates-details-wrapper stripe-payment-wrapper">
        <Elements stripe={stripePromise}>
          <InjectedCheckoutForm certificateType={certificate} certificateData={formData} setStep={setStep} />
        </Elements>
      </div>
    </>
  );
};

export default StepTwo;
