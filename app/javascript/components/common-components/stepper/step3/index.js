import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import downloadIcon from "../../../../../assets/images/download-icon.svg";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Certificate1 from "../../../certificates/certificate1/index.js";
import logo from "../../../../../assets/images/Monogram.png";
import ContextModuleFactory from "webpack/lib/ContextModuleFactory";
import { Button } from "react-bootstrap";

const StepThree = ({formData, certificate}) => {
  const [component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState([1, 2]);
  const [certificateData, setCertificateData] = useState(() => {
    const formDataArray = formData.recipientNames.map(recipientName => ({
      ...formData,
      recipientNames: [recipientName]
    }));

    return formDataArray;
  })

  useEffect(() => {

    const generateDownloadPDF = async () => {
      const module = await import(`../../../certificates/${certificate.name}/index.js`);
      setComponent(module);
    };

    generateDownloadPDF();
  }, [certificate.name]);

  const downloadAllPdfs = () => {
    if(!loading) {
      document.querySelectorAll('.all-pdfs').forEach(element => {
        setTimeout(() => {
          element.click();
        }, 1000);
      });
    }
  };

  const loaderHandler = () => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <div className="download-certificate-wrapper">
      <div className="download">
        <img src={downloadIcon} alt="download" />
        <Button className="btn btn-primary mx-auto" onClick={downloadAllPdfs}>
          {
            loading ? (
              <div className="d-flex align-items-center">
                <Spinner
                  animation="border"
                  variant="light"
                  size="sm"
                  className="me-1"
                />{" "}
                  Loading certificate...
              </div>
            ) : (
              "Download Certificate(s)!"
            )

          }
          
        </Button> 
        {component && formData && 
          certificateData.map((formCertificate, index) => (
            <PDFDownloadLink
              document={component.default && React.createElement(component.default, { certificateData: formCertificate })}
              fileName={`${formCertificate.recipientNames[0]}_certificate.pdf`}
              className="all-pdfs d-none"
              disable={true}
            >
              {({ blob, url, pdfLoading, error }) =>
              pdfLoading ? (
                  ""
                ) : (
                  loaderHandler()
                )
              }
            </PDFDownloadLink> 
          ))}
      </div>
    </div>
  );
};

export default StepThree;
