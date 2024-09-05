import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./styles.scss";
import StepOne from "./step1";
import StepTwo from "./step2";
import StepThree from "./step3";

const Stepper = () => {
  const [step, setStep] = useState(1);
  const [certificateNext, setCertificateNext] = useState(false);
  const [stripeNext, setStripeNext] = useState(0);
  const [certificate, setCertificate] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    certificateName: "",
    logo: "",
    companyName: "",
    companySlogan: "",
    certificateType: null,
    presentedTo: null,
    recipientNames: [],
    onBehalfOfCompany: "",
    recognitionText: "",
    firstSigneeName: "",
    secondSigneeName: "",
    firstSigneeTitle: "",
    secondSigneeTitle: "",
    firstSigneeSignature: "",
    secondSigneeSignature: "",
    topText: "",
    badgeText: "",
    date: "",
  });

  return (
    <div className="stepper-wrapper">
      <div className="stepper-header d-flex align-items-center justify-content-between">
        <div className={`steps text-center ${step === 1 ? "active" : ""}`}>
          <div className={`${step === 1 ? "active" : ""} circle`}>1</div>
          <p>Select & Create</p>
        </div>
        <div className="connector"></div>
        <div className={`steps text-center ${step === 2 ? "active" : ""}`}>
          <div className={`${step === 2 ? "active" : ""} circle`}>2</div>
          <p>Payment</p>
        </div>
        <div className="connector"></div>
        <div className={`steps text-center ${step === 3 ? "active" : ""}`}>
          <div className={`${step === 3 ? "active" : ""} circle`}>3</div>
          <p>Download</p>
        </div>
      </div>
      <div className="stepper-body-wrapper">
        {step === 1 && 
          <StepOne 
            formData={formData}
            setFormData={setFormData}
            certificate={certificate}
            setCertificate={setCertificate}
            setCertificateNext={setCertificateNext}
            currentSlide={currentSlide}
            setCurrentSlide={setCurrentSlide}
          />}
        {step === 2 && <StepTwo formData={formData} certificate={certificate} setStep={setStep} />}
        {step === 3 && <StepThree formData={formData} certificate={certificate} />}
      </div>
      <div className="stepper-footer">
        {!certificate.name && (
          <div className="carousalIntro">
            <p>Please Select a Certificate Style</p>
          </div>
        )}
      
        {step == 2 ? (
          <Button
            variant="secondary"
            className="stepper-back-btn"
            onClick={() => setStep(step - 1)}
          >
            Back
          </Button>
        ) : (
          ""
        )}
        {step < 2 && (
          <Button
            variant="primary"
            className="stepper-next-btn ms-auto"
            onClick={() => setStep(step + 1)}
            disabled={!certificateNext}
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
