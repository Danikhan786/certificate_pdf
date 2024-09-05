import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

import PoppinsRegularFont from "../../../../assets/fonts/Poppins-Regular.ttf";
import PoppinsBoldFont from "../../../../assets/fonts/Poppins-SemiBold.ttf";
import DancingScriptFont from "../../../../assets/fonts/DancingScript.ttf";
import logo from "../../../../assets/images/logo3.png";
import image from "../../../../assets/images/certificates-bg/certificate3bg.png";

Font.register({ family: "Poppins Regular", src: PoppinsRegularFont });
Font.register({ family: "Poppins Bold", src: PoppinsBoldFont });
Font.register({
  family: "Dancing Script",
  src: DancingScriptFont,
});

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  certificateWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
    borderColor: "#fff",
  },
  certificateBg: {
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "100px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#000",
    fontFamily: "Poppins Regular",
    lineHeight: "normal",
  },
  certificateLogoWrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "230px",
  },
  certificateLogo: {
    width: "78px",
    height: "78px",
  },
  companyName: {
    fontSize: "50px",
    fontWeight: "700",
    fontFamily: "Poppins Bold",
    marginLeft: "32px",
    color: "#3e3c3c",
  },
  certificateTitle: {
    fontSize: "221px",
    fontWeight: "700",
    fontFamily: "Poppins Bold",
    color: "#3e3c3c",
    zIndex: "1",
    textTransform: "capitalize",
  },
  certificateSubTitle: {
    maxWidth: "2413px",
    fontSize: "60px",
    fontWeight: "700",
    fontFamily: "Poppins Bold",
    color: "#000",
    textTransform: "capitalize",
    marginBottom: "30px",
  },
  certificatePresentedTo: {
    maxWidth: "2000px",
    fontSize: "50px",
    fontWeight: "400",
    fontFamily: "Poppins Regular",
    marginBottom: "262px",
  },
  certificateReceiverName: {
    maxWidth: "2000px",
    fontSize: "290px",
    fontWeight: "400",
    color: "#3e3c3c",
    fontFamily: "Dancing Script",
  },
  certificateReceiverNameBottom: {
    borderTopWidth: "9px",
    borderTopStyle: "solid",
    borderTopColor: "#ffc321",
    width: "900px",
    height: "9px",
    marginBottom: "200px",
  },
  certificateRecognitionTitle: {
    maxWidth: "2313px",
    fontSize: "54px",
    fontWeight: "700",
    fontFamily: "Poppins Bold",
    padding: "2px 50px",
    backgroundColor: "#ffc321",
    marginBottom: "35px",
  },
  certificateRecognition: {
    maxWidth: "2280px",
    fontSize: "50px",
    fontWeight: "400",
    fontFamily: "Poppins Regular",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    bottom: "-400px",
    minHeight: "230px",
    width: "2690px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: "0",
  },
  certificateSigneeWrapper: {
    width: "600px",
  },
  certificateSigneeDate: {
    fontSize: "50px",
    fontWeight: "700",
    fontFamily: "Poppins Bold",
    color: "#000",
  },
  certificateSigneeTitle: {
    borderTop: "2px solid #000",
    padding: "25px 20px",
    fontSize: "50px",
    fontWeight: "400",
    color: "#000",
    fontFamily: "Poppins Regular",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  displayNone: {
    color: 'transparent',
  },
  displayVisible: {
    color: 'transparent',
    opacity: 0,
  },
  singleBadgeText: {

  },
});

const pageWidth = 3508;
const pageHeight = 2600;

const Certificate3 = ({certificateData}) => {
  var formattedDate = "";
  if(certificateData.date != "") {
    const date = new Date(certificateData.date);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();

    let daySuffix;
    if (day === 1 || day === 21 || day === 31) {
      daySuffix = 'st';
    } else if (day === 2 || day === 22) {
      daySuffix = 'nd';
    } else if (day === 3 || day === 23) {
      daySuffix = 'rd';
    } else {
      daySuffix = 'th';
    }

    formattedDate = `${month} ${day}${daySuffix} ${year}`;
  } else {
    formattedDate = "January 2nd 2028";
  }

  return (
    <>
      <Document>
        <Page size={[pageWidth, pageHeight]}>
          <View style={styles.certificateWrapper}>
            <Image src={image} style={styles.certificateBg} />
            <View style={styles.certificateContentWrapper}>
              <View style={styles.certificateLogoWrapper}>
                <Image style={styles.certificateLogo} src={logo} />
                <Text style={{...styles.companyName, ...(certificateData.companyName != "" ? {} : styles.displayNone)}}>
                  {certificateData.companyName != "" ? certificateData.companyName : "Lorem"}
                </Text>
              </View>
              <Text style={styles.certificateTitle}>CERTIFICATE</Text>
              <Text style={styles.certificateTitleBottom}></Text>
              <Text style={styles.certificateSubTitle}>OF {certificateData.certificateType.value.toUpperCase()}</Text>
              <Text style={styles.certificatePresentedTo}>
                {certificateData.presentedTo.label}
              </Text>
              <Text style={styles.certificateReceiverName}>{certificateData.recipientNames[0]}</Text>
              <Text style={styles.certificateReceiverNameBottom}></Text>
              <Text style={{...styles.certificateRecognitionTitle, ...(certificateData.onBehalfOfCompany != "" ? {} : styles.displayVisible)}}>
                on behalf of {certificateData.onBehalfOfCompany}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}{" "}
              </Text>
              <View style={styles.certificateAuthorityWrapper}>
                <View style={styles.certificateSigneeWrapper}>
                  <Text style={{...styles.certificateSigneeDate, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                    {formattedDate}
                  </Text>
                  <Text style={styles.certificateSigneeTitle}>Date</Text>
                </View>
                <View style={styles.certificateSigneeWrapper}>
                    {certificateData.firstSigneeSignature ?
                        <Image
                          style={styles.certificateSigneeImg}
                          src={certificateData.firstSigneeSignature}
                        />
                      :
                        <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
                    }
                  <Text style={styles.certificateSigneeTitle}>SIGNATURE</Text>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default Certificate3;
