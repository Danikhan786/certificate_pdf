import React from "react"
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer"
import image from "../../../../assets/images/certificates-bg/certificate12bg.png"

import ExoSemiBold from "../../../../assets/fonts/Exo-SemiBold.ttf"
import ExoRegular from "../../../../assets/fonts/Exo-Regular.ttf"
import ExoMedium from "../../../../assets/fonts/Exo-Medium.ttf"
import ExoBold from "../../../../assets/fonts/Exo-Bold.ttf"
import Courgette from "../../../../assets/fonts/Courgette-Regular.ttf"
import Lato from "../../../../assets/fonts/Lato-Regular.ttf"

Font.register({ family: "ExoSemiBold", src: ExoSemiBold })
Font.register({ family: "ExoRegular", src: ExoRegular })
Font.register({ family: "ExoMedium", src: ExoMedium })
Font.register({ family: "ExoBold", src: ExoBold })
Font.register({ family: "Courgette", src: Courgette })
Font.register({ family: "Lato", src: Lato })

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
  },
  certificateWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
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
    top: "1000px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#0f141a",
  },
  certificateTitle: {
    fontSize: "83px",
    fontWeight: "500",
    fontFamily: "ExoSemiBold",
    marginBottom: "250px",
  },
  certificateTitleName: {
    fontSize: "150px",
    fontWeight: "700",
    fontFamily: "ExoBold",
  },
  certificatePresentedTo: {
    fontSize: "58px",
    fontWeight: "500",
    fontFamily: "ExoMedium",
    color: "#1b1f21",
    marginBottom: "70px",
  },
  certificateReceiverName: {
    fontSize: "167px",
    fontWeight: "400",
    color: "#ff9c1a",
    fontFamily: "Courgette",
    marginBottom: "70px",
  },
  certificateRecognition: {
    maxWidth: "1600px",
    fontSize: "42px",
    fontWeight: "400",
    fontFamily: "ExoRegular",
    color: "#2d3538",
    minHeight: "150px",
  },
  certificateAuthorityWrapper: {
    minHeight: "230px",
    width: "1845px",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    marginTop: "300px",
  },
  certificateSigneeWrapper: {
    width: "600px",
  },
  certificateSigneeTitle: {
    fontSize: "42px",
    fontWeight: "400",
    color: "#2d3538",
    fontFamily: "ExoRegular",
    textAlign: "center",
    margin: "0 auto",
    padding: "10px",
    width: "100%",
  },
  certificateSigneeName: {
    fontSize: "58px",
    fontWeight: "500",
    color: "#1b1f21",
    fontFamily: "ExoSemiBold",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  certificateLogoWrapper: {
    position: "absolute",
    top: "250px",
    right: "318px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  companyLogo: {
    maxWidth: "310px",
    height: "220px",
    objectFit: "contain",
    marginRight: "40px",
  },
  companyNameWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  companyName: {
    fontSize: "77px",
    color: "#1b1f21",
    fontWeight: "400",
    fontFamily: "ExoSemiBold",
  },
  companySalogan: {
    fontSize: "55px",
    color: "#414c50",
    fontWeight: "400",
    fontFamily: "Lato",
  },
  displayNone: {
    color: 'transparent',
  },
  singleBadgeText: {

  },
})

const pageHeight = 3400;
const pageWidth = 2650;

const Certificate12 = ({certificateData}) => {
  var formattedDate = "";
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  if(certificateData.date != "") {
    formattedDate = formatDate(certificateData.date);
  } else {
    formattedDate = "02 October, 2028";
  }

  return (
    <>
      <Document>
        <Page size={[pageWidth, pageHeight]}>
          <View style={styles.certificateWrapper}>
            <Image src={image} style={styles.certificateBg} />
            <View style={styles.certificateContentWrapper}>
              <Text style={styles.certificateTitleName}>
                CERTIFICATE
              </Text>
              <Text style={styles.certificateTitle}>
                OF {certificateData.certificateType.value.toUpperCase()}
              </Text>
              <Text style={styles.certificatePresentedTo}>
                {certificateData.presentedTo.label}
              </Text>
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
              <View style={styles.certificateAuthorityWrapper}>
                <View style={styles.certificateSigneeWrapper}>
                  <Text style={styles.certificateSigneeTitle}>Date</Text>
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                    {formattedDate}
                  </Text>
                </View>
                <View style={styles.certificateSigneeWrapper}>
                  <Text style={{...styles.certificateSigneeTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
                    {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
                  </Text>
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.firstSigneeName != "" ? {} : styles.displayNone)}}>
                    {certificateData.firstSigneeName != "" ? certificateData.firstSigneeName : "Lorem ipsum"}
                  </Text>
                  {certificateData.firstSigneeSignature && (
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.firstSigneeSignature}
                    />
                  )}
                </View>
              </View>
            </View>
            <View style={styles.certificateLogoWrapper}>
              {certificateData.logo && (
                <Image style={styles.companyLogo} src={certificateData.logo} />
              )}
              <View style={styles.companyNameWrapper}>
                <Text style={{...styles.companyName, ...(certificateData.companyName != "" ? {} : styles.displayNone)}}>{certificateData.companyName != "" ? certificateData.companyName : "Lorem"}</Text>
                <Text style={{...styles.companySalogan, ...(certificateData.companySalogan != "" ? {} : styles.displayNone)}}>{certificateData.companySlogan != "" ? certificateData.companySlogan : "Lorem"}</Text>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  )
}

export default Certificate12
