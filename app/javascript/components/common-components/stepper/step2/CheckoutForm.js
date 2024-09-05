import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap"
import {
  ElementsConsumer,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from "@stripe/react-stripe-js"
import { PDFViewer } from "@react-pdf/renderer"
import Certificate4 from "../../../certificates/certificate4/index"
import Certificate1 from "../../../certificates/certificate1/index.js"
import { pdf, Document, Page, Text } from "@react-pdf/renderer"
import axios from "axios"
import { toast } from 'react-toastify';

const CheckoutForm = ({ stripe, elements, certificateType, certificateData, setStep }) => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCvc: "",
  })
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const createOptions = () => {
    return {
      style: {
        base: {
          color: "#212529",
          fontWeight: "400",
          fontSize: "1.2rem",
          backgroundColor: "#F8F8F8",
        },
      },
    }
  }

  const pdfView = {
    overflow: "auto",
  }

  const calculatePrice = (certificateCount) => {
    if(certificateCount == 1) {
      return (0.50 * 100).toFixed(2);
    } else if(certificateCount == 2) {
      return ((certificateCount * 0.45) * 100).toFixed(2);
    } else if(certificateCount > 2 && certificateCount < 11) {
      return ((certificateCount * 0.40) * 100).toFixed(2);
    } else if(certificateCount > 10 && certificateCount < 26) {
      return ((certificateCount * 0.35) * 100).toFixed(2);
    } else if(certificateCount > 26) {
      return ((certificateCount * 0.25) * 100).toFixed(2);
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardNumberElement)
    const result = await stripe.createToken(card)
    const csrfToken = document
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content")
    if (result.error) {
      showToast(result.error.message);
      console.log(result.error.message)
    } else {
      try {
        const response = await axios.post('/checkout/process_payment', {
          stripe_token: result.token.id,
          amount: parseInt(calculatePrice(certificateData.recipientNames.length)),
        }, {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': csrfToken,
          },
        });
        if(response.data.status == 'success') {
          setStep(3);
        } else {
          showToast(response.data.message);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  }

  useEffect(() => {
    const generatePDF = async () => {
      const componentName = certificateType.name.charAt(0).toUpperCase() + certificateType.name.slice(1);
      const module = await import(
        `../../../certificates/${certificateType.name}/index.js`
      );      

      const Component = module.default;

      try {
        const totalDuration = 30000; // 30 seconds
        const updateInterval = 1000; // Update progress every 1000ms (1 second)
        let currentTime = 0;

        const timer = setInterval(() => {
          currentTime += updateInterval;
          const percentage = (currentTime / totalDuration) * 100;
          setUploadProgress(percentage);

          if (currentTime >= totalDuration) {
            clearInterval(timer); // Stop the timer when it reaches 100%
          }
        }, updateInterval);

        const pdfBlob = await pdf(
            <Component certificateData={certificateData} />
        ).toBlob();

        const formData = new FormData()
        formData.append("pdf", pdfBlob)
        const csrfToken = document
          .querySelector('meta[name="csrf-token"]')
          .getAttribute("content")

        const response = await axios
          .post("/pdf/convert_image", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
              "X-CSRF-Token": csrfToken,
            },
          })
          .then((res) => {
            setImages(res.data.images)
          });
          
          setUploadProgress(100);
      } catch (error) {
        console.error("Error generating PDF:", error)
      }
    }

    generatePDF()
  }, [])

  const showToast = (errorMessage) => {
    toast.error(errorMessage , {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000, // Auto-close after 3 seconds
    });
  };

  return (
    <Row className="g-4">
      <Col lg="6">
        <Row className="g-3">
          <Col sm="12">
            <div>
              <label>Card Holder Name<span style={{ color: "red" }}>*</span></label>
              <Form.Control type="text" />
            </div>
          </Col>
          <Col sm="12">
            <label>Card Number<span style={{ color: "red" }}>*</span></label>
            <div className="strip-element-wrapper">
              <CardNumberElement
                className="strip-element"
                options={createOptions()}
              />
            </div>
          </Col>
          <Col sm="12">
            <label>Card Expiry<span style={{ color: "red" }}>*</span></label>
            <div className="strip-element-wrapper">
              <CardExpiryElement
                className="strip-element"
                options={createOptions()}
              />
            </div>
          </Col>
          <Col sm="12">
            <label>CVC<span style={{ color: "red" }}>*</span></label> 
            <div className="strip-element-wrapper">
              <CardCvcElement
                className="strip-element"
                options={createOptions()}
              />
            </div>
          </Col>
          <Col sm="12">
            <div className="d-flex justify-content-end">
              <Button
                variant="primary"
                className="ms-auto"
                onClick={handleSubmit}
              >
                Confirm Checkout
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
      <Col lg="6" className="d-flex justify-content-center">
        <div className="certificate-preview">
          {images.length > 0 ? (
            images.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index}`} />
            ))
          ) : (
            <div className="loading-spinner d-flex align-items-center justify-content-center">
              <Spinner animation="border" variant="light" size="md" className="me-2" />{" "}
              {uploadProgress < 100 ? `Processing: ${uploadProgress.toFixed(2)}%` : "Loading preview..."}
            </div>
          )}
        </div>
      </Col>
    </Row>
  )
}

export default function InjectedCheckoutForm({ certificateType, certificateData, setStep }) {
	return (
		<ElementsConsumer>
			{({ stripe, elements }) => (
				<CheckoutForm stripe={stripe} elements={elements} certificateType={certificateType} certificateData={certificateData} setStep={setStep} />
			)}
		</ElementsConsumer>
	);
}
