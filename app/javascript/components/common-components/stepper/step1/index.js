import React, { useState, useRef, useEffect } from "react";
import { Button, Form, FormControl, Row, Col } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";
import MultipleValueTextInput from "react-multivalue-text-input";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import logoPlaceholder from "../../../../../assets/images/logo-placeholder.svg";
import delIcon from "../../../../../assets/images/bin.svg";

import leftIcon from "../../../../../assets/images/chevron-left-icon.svg";
import rightIcon from "../../../../../assets/images/chevron-right-icon.svg";
import data from "../../../data.json";

const certificateOptions = [
  { value: "achievement", label: "Certificate of Achievement" },
  { value: "appreciation", label: "Certificate of Appreciation" },
  { value: "excellence", label: "Certificate of Excellence" },
  { value: "leadership", label: "Leadership Award" },
  { value: "completion", label: "Certificate of Completion" },
  { value: "graduation", label: "Certificate of Graduation" },
];

const presentToOptions = [
  { value: "presentedTo", label: "Presented to" },
  {
    value: "proudlyPresented",
    label: "This Certificate is proudly presented to",
  },
  { value: "isPresentedTo", label: "This Certificate is presented to" },
  {
    value: "hounredToPresent",
    label: "We’re honoured to present this certificate to",
  },
  { value: "certify", label: "This is to Certify that" },
];

const BadgeTextOptions = [
  { value: "Best Award", label: "Best Award" },
  { value: "Top Award", label: "Top Award" },
  { value: "Certified Award", label: "Certified Award" },
  { value: "Certified", label: "Certified" },
  { value: "Award", label: "Award" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "#F8F8F8",
    borderRadius: "0.375rem",
    color: "#212529",
    borderColor: state.isFocused ? "#ced4da" : "#ced4da",
    outline: "none",
    boxShadow: "none",
    height: 48,
    minHeight: 48,
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    "&:hover": {
      borderColor: state.isFocused ? "#ced4da" : "#ced4da",
    },
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0,
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#6c757d",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#f83811" : "#F8F8F8",
    color: state.isSelected ? "#F8F8F8" : "#f83811",
    cursor: "pointer",
    borderBottom: "1px solid #F8F8F8",
    "&:hover": {
      backgroundColor: "#f83811",
      color: "#F8F8F8",
    },
  }),
};

const certificateImages = {};

for(let i=1; i<= 50; i++) {
  if(i == 5 || i == 20 || i == 21 || i == 32 || i == 33 || i == 50) continue;
  
  import(`../../../../../assets/images/certificate${i}.png`)
  .then((module) => {
    certificateImages[`certificate${i}`] = module.default;
  })

}


const StepOne = ({formData, setFormData, certificate, setCertificate, setCertificateNext, currentSlide, setCurrentSlide}) => {
  const [selectedImg, setSelectedImg] = useState({ id: null, img: null });
  const sliderRef = useRef(null);
  const [uploadImg, setUploadImg] = useState({});
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [enlargedImage, setEnlargedImage] = useState("");
  const imgRef = useRef(null);
  const [certificates, setCertificates] = useState(
      Object.entries(data).map(([key, value]) => ({
      id: value.id,
      name: value.name,
      image: value.image
    })
  ));

  const fileInputRef = useRef(null);
  const signature1Ref = useRef(null);
  const signature2Ref = useRef(null);
  
  let pressTimer = null;

  const handlePress = (image) => {
    pressTimer = setTimeout(() => {
      setIsEnlarged(true);
      setEnlargedImage(image);
    }, 1000);
  };

  const handleDoubleClick = (image) => {
    setIsEnlarged(true);
    setEnlargedImage(image);
  };

  const handleRelease = () => {
    clearTimeout(pressTimer);
    setIsEnlarged(false);
    setEnlargedImage('');
  };

  useEffect(() => {
    if(certificate?.id) {
      const selectedCertificate = certificates.find(cert => cert.id === certificate.id)
      setSelectedImg({ id: selectedCertificate.id, img:  selectedCertificate.image})
    }
  }, []);

  useEffect(() => {
    if(document.getElementById('enlarged-image')) {
      document.getElementById('enlarged-image').src = enlargedImage;

    }
  }, [isEnlarged]);

  useEffect(() => {
    checkAllFieldsAreTrue(formData, data[certificate.name]);
  }, [formData]);

  useEffect(() => {
    if(isEnlarged) {
      const handleClickOutside = (event) => {
        if (event instanceof MouseEvent && imgRef.current && !imgRef.current.contains(event.target)) {
          setIsEnlarged(false);
          setEnlargedImage('');
        }
      };
      document.addEventListener('click', handleClickOutside);
    }
  }, [isEnlarged]);

  const checkAllFieldsAreTrue = (formData, certificateObject) => {
    var checker = true
    const nonRequiredField = ["companyName", "logo", "date", "firstSigneeTitle", "secondSigneeTitle", "firstSigneeName", "secondSigneeName", "firstSigneeSignature", "secondSigneeSignature", "onBehalfOfCompany", "topText"];

    if(certificateObject) {
      Object.keys(certificateObject).filter(key => certificateObject[key] === true).forEach(function(certificateKey) {
        if (certificateObject[certificateKey] === true && (!nonRequiredField.includes(certificateKey) && (formData[certificateKey] == null || formData[certificateKey] == "")) ) {
          checker = false;
        }
      });
      if(checker == true && formData.recipientNames.length > 0) {
        setCertificateNext(true);
      } else {
        setCertificateNext(false);
      }
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const { name } = e.target;
    const url = URL.createObjectURL(file);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: url
    }));
  };

  const handleCertificateChange = (newValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      certificateType: newValue
    }));
  }

  const handlePresentedToChange = (newValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      presentedTo: newValue
    }));
  }

  const handleBadgeTextChange = (newValue) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      badgeText: newValue
    }));
  }

  const handleItemAdded = (item, allItems) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      recipientNames: allItems
    }));
  };

  const handleItemDeleted = (item, allItems) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      recipientNames: allItems
    }));
  };

  const onOptionChangeHandler = (event) => {
      setData(event.target.value);
      console.log(
          "User Selected Value - ",
          event.target.value
      );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    centerPadding: "10px",
    prevArrow: <></>,
    nextArrow: <></>,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    initialSlide: currentSlide,
    afterChange: (current) => {
      setCurrentSlide(current);
    },
  };

  return (
    <>
      {isEnlarged && (
        <div className="enlarged-image">
          <img
            alt="Enlarged Image"
            id="enlarged-image"
            onClick={handleRelease}
          />
        </div>
      )}
      <div className="certificates-wrapper">
        <div className="slider-btn-wrapper prev-btn">
          <Button
            onClick={() => {
              sliderRef.current.slickPrev()
            }}
          >
            <img src={leftIcon} alt="" />
          </Button>
        </div>
        <div>
          <Slider {...settings} ref={sliderRef}>
            {certificates.map(({ image, id, name }) => {
              const imageModule =
                require(`../../../../../assets/images/${name}.png`).default
              
              return (
                <div
                  key={id}
                  className={`certificate ${
                    selectedImg.id === id ? "active" : ""
                  }`}
                  onClick={() => {
                    setSelectedImg({ id, image });
                    setCertificate({ id, name });
                    setFormData((prevFormData) => ({
                      ...prevFormData,
                      certificateName: name
                    }));
                  }}
                  onDoubleClick={() => {handleDoubleClick(certificateImages[name])}}
                  onTouchStart={() => {handlePress(certificateImages[name])}}
                  onTouchEnd={handleRelease}
                >
                  <img ref={imgRef} src={certificateImages[name]} alt="certificate" />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className="slider-btn-wrapper next-btn">
          <Button
            onClick={() => {
              sliderRef.current.slickNext()
            }}
          >
            <img src={rightIcon} alt="" />
          </Button>
        </div>
      </div>
      {data[certificate?.name] && (
        <div className="certificates-details-wrapper">
          <Row className="g-4">
            <Col lg="12">
              {
                data[certificate.name].logo &&
                (
                  <div className="upload-logo-wrapper">
                    <div className="logo-wrapper">
                      {formData.logo ? (
                        <div className="logo-container">
                          <img src={formData.logo} alt="logo" />
                          <Button
                            variant="danger"
                            className="clear-button"
                            onClick={() => { setFormData((prevFormData) => ({
                                ...prevFormData,
                                logo: "",
                              })) 
                            }}
                          >
                            x
                          </Button>
                        </div>
                        
                      ) : (
                        <img
                          src={logoPlaceholder}
                          className="logo-placeholder"
                          alt="upload-logo"
                        />
                      )}
                    </div>
                    <FormControl
                      type="file"
                      accept=".jpg,.jpeg,.png"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileInputChange}
                      name="logo"
                    />
                    <Button
                      variant="primary"
                      onClick={() => fileInputRef.current.click()}
                    >
                      Upload Company logo (optional)
                    </Button>
                  </div>
                )
              }
            </Col>
            { data[certificate.name].companyName &&
              <Col lg="6">
                <div className="formOptional">
                  <label>Company Name</label>
                  <Form.Control
                    type="text"
                    name="companyName"
                    placeholder="Optional"
                    value={formData.companyName}
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            }
            { data[certificate.name].companySlogan &&
              <Col lg="6">
                <div className="formOptional">
                <label>Company Slogan</label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    name="companySlogan"
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            }
            <Col lg="6">
              <div>
                <label>Certificate Type<span style={{ color: "red" }}>*</span></label>
                <CreatableSelect
                  isClearable
                  options={certificateOptions}
                  placeholder="Select or Enter Certificate type*"
                  styles={customStyles}
                  className="react-select-container"
                  classNamePrefix="react-select"
                  value={formData.certificateType}
                  onChange={handleCertificateChange}
                />
              </div>
            </Col>
            {data[certificate.name].presentedTo &&
              <Col lg="6">
                <div>
                  <label>Presented To<span style={{ color: "red" }}>*</span></label>
                  <CreatableSelect
                    isClearable
                    options={presentToOptions}
                    placeholder="Select or Enter Expression*"
                    styles={customStyles}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    value={formData.presentedTo}
                    onChange={handlePresentedToChange}
                  />
                </div>
              </Col>
            }
            <Col lg="6">
              <div className="recipient-names-inp-wrapper">
                <label>Recipient Names<span style={{ color: "red" }}>*</span></label>
                <MultipleValueTextInput
                  onItemAdded={handleItemAdded}
                  onItemDeleted={handleItemDeleted}
                  label=""
                  name="item-input"
                  placeholder="Enter 1 to 100 names*"
                  deleteButton={
                    <span className="delete-icon">
                      <img src={delIcon} alt="" />
                    </span>
                  }
                  values={formData.recipientNames}
                />
              </div>
            </Col>
            {data[certificate.name].onBehalfOfCompany && 
              <Col lg="6">
                <div className="formOptional">
                  <label>On Behalf of</label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    name="onBehalfOfCompany"
                    value={formData.onBehalfOfCompany}
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            }
            {data[certificate.name].recognitionText &&
              <Col lg="6">
                <div>
                  <label>Recognition Text<span style={{ color: "red" }}>*</span></label>
                  <Form.Control
                    type="text"
                    placeholder="Maximum 120 characters*"
                    name="recognitionText"
                    value={formData.recognitionText}
                    onChange={handleInputChange}
                    maxLength={120}
                  />
                </div>
              </Col>
            }
            {data[certificate.name].topText && 
              <Col lg="6">
                <div className="formOptional">
                  <label>Top Text</label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    name="topText"
                    value={formData.topText}
                    onChange={handleInputChange}
                    maxLength={100}
                  />
                </div>
              </Col>
            }
            {data[certificate.name].badgeText && 
              <Col lg="6">
                <div>
                  <label>Badge Text<span style={{ color: "red" }}>*</span></label>
                  <CreatableSelect
                    isClearable
                    options={BadgeTextOptions}
                    placeholder="Select or Enter Badge Text*"
                    styles={customStyles}
                    className="react-select-container"
                    classNamePrefix="react-select"
                    value={formData.badgeText}
                    onChange={handleBadgeTextChange}
                  />
                </div>
              </Col>
            }
            {data[certificate.name].date && 
              <Col lg="6">
                <div>
                  <label>Date</label>
                  <Form.Control
                    type="date"
                    name="date" 
                    value={formData.date}
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            }
            {data[certificate.name].firstSigneeName &&
              <Col lg="6">
                <div className="formOptional">
                  <label>First Signee Name</label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    name="firstSigneeName"
                    value={formData.firstSigneeName}
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            }
            {data[certificate.name].secondSigneeName && 
              <Col lg="6">
                <div className="formOptional">
                  <label>Second Signee Name</label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    name="secondSigneeName"
                    value={formData.secondSigneeName}
                    onChange={handleInputChange}
                  />
                </div>
              </Col>
            }
            <Col lg="6">
              {data[certificate.name].firstSigneeTitle &&
                <div className="formOptional">
                  <label>First Signee Title</label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    name="firstSigneeTitle"
                    value={formData.firstSigneeTitle}
                    onChange={handleInputChange}
                  />
                </div>
              }
            </Col>
            <Col lg="6">
              {data[certificate.name].secondSigneeTitle &&
                <div className="formOptional">
                  <label>Second Signee Title</label>
                  <Form.Control
                    type="text"
                    placeholder="Optional"
                    name="secondSigneeTitle"
                    value={formData.secondSigneeTitle}
                    onChange={handleInputChange}
                  />
                </div>
              }
            </Col>
          </Row>
          <Row className="g-4">
            <Col lg="6">
              {data[certificate.name].firstSigneeSignature &&
                <div className="upload-signature-wrapper mt-3">
                  <div className="signature-wrapper">
                    {formData.firstSigneeSignature ? (
                      <div className="image-container">
                        <img src={formData.firstSigneeSignature} alt="" />
                        <Button
                          variant="danger"
                          className="clear-button"
                          onClick={() => { setFormData((prevFormData) => ({
                              ...prevFormData,
                              firstSigneeSignature: "",
                            })) 
                          }}
                        >
                          x
                        </Button>
                      </div>
                    ) : (
                      <p>Uploaded signature will show here</p>
                    )}
                  </div>
                  <FormControl
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    ref={signature1Ref}
                    style={{ display: "none" }}
                    name="firstSigneeSignature"
                    onChange={handleFileInputChange}
                  />
                  <Button
                    variant="primary"
                    onClick={() => signature1Ref.current.click()}
                  >
                    Upload Signature (Optional)
                  </Button>
                </div>
              }
            </Col>

            <Col lg="6">
              {data[certificate.name].secondSigneeSignature && 
                <div className="upload-signature-wrapper mt-3">
                  <div className="signature-wrapper">
                    {formData.secondSigneeSignature ? (
                      <div className="image-container">
                        <img src={formData.secondSigneeSignature} alt="" />
                        <Button
                          variant="danger"
                          className="clear-button"
                          onClick={() => { setFormData((prevFormData) => ({
                            ...prevFormData,
                            secondSigneeSignature: "",
                          })) 
                        }}
                        >
                          x
                        </Button>
                      </div>
                    ) : (
                      <p>Uploaded signature will show here</p>
                    )}
                  </div>
                  <FormControl
                    type="file"
                    accept=".jpg,.jpeg,.png"
                    ref={signature2Ref}
                    style={{ display: "none" }}
                    onChange={handleFileInputChange}
                    name="secondSigneeSignature"
                  />
                  <Button
                    variant="primary"
                    onClick={() => signature2Ref.current.click()}
                  >
                    Upload Signature (Optional)
                  </Button>
                </div>
              }
            </Col>

          </Row>
        </div>
      )}
    </>
  )
};

export default StepOne;
