import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import Certificate from "../../certificates/certificate30/index.js"
import logo from "../../../../assets/images/logo18.png"
import sign1 from "../../../../assets/images/sign1.png"
import sign2 from "../../../../assets/images/sign2.png"

const PdfViewer = () => {
  const formData = {
    badgeText: {
      value: "Certified Award",
    },
    certificateType: {
        label: "Certificate",
        value: "of excellence"
    },
    companyName: "qwqw",
    companySlogan: "wqqwq",
    date: "2023-09-21",
    firstSigneeName: "aasass",
    firstSigneeSignature: "blob:http://localhost:3000/d832550c-a87a-499f-824e-0940e0f04b11",
    firstSigneeTitle: "qwqwqw",
    logo: "blob:http://localhost:3000/a141e76d-879c-420a-8830-41a6492f8e5b",
    onBehalfOfCompany: "",
    presentedTo: {
        label: "This Certificate is proudly presented to",
        value: "proudlyPresented",
    },
    recipientNames: [
      "faiq",
    ],
    recognitionText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tristique mollis tortor, sit amet auctor dolor suscipit tristique. Phasellus euismod consequat laoreet.",
    secondSigneeName: "aasas",
    secondSigneeSignature: "blob:http://localhost:3000/86be292b-7df8-4c2f-aa43-a1c7668f74f4",
    secondSigneeTitle: "qwqwqw"
  }
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <PDFViewer style={{ width: "100%", height: "100%" }}>
        {/* <Certificate
          certificateTitle="CERTIFICATE"
          certificateSubTitle="OF ACHIVEMENT"
          certificatePresentedTo="This Certificate Is Presented To"
          certificateReceiverName="Jonathan Smith"
          certificateRecognition="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          certificateSigneeDate="01 October, 2020"
          certificateSigneeImg1={sign1}
          certificateSigneeTitle2="Director"
          certificateSigneeName2="Jonathan Smith"
          certificateSigneeTitle1="Director"
          certificateSigneeName1="Jonathan Smith"
          certificateSigneeImg2={sign2}
          companyLogo={logo}
          companyName="CompanyName"
          certificateBadgeText="Best Award"
        /> */}

        <Certificate
          certificateData={formData}
        />
      </PDFViewer>
    </div>
  )
}

export default PdfViewer;
