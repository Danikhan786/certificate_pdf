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
import image from "../../../../assets/images/certificates-bg/certificate30bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import TimesBold from "../../../../assets/fonts/Times-new-roman-Bold.ttf"
import RalewayBlack from "../../../../assets/fonts/Raleway-ExtraBold.ttf"
import Signerica from "../../../../assets/fonts/Signerica_Fat.ttf"


Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "RalewayBlack", src: RalewayBlack })
Font.register({ family: "TimesBold", src: TimesBold })
Font.register({ family: "Signerica", src: Signerica })


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
  certificateLogoWrapper: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "300px",
    left: "400px",
  },
  certificateLogo: {
    minWidth: "150px",
    minHeight: "150px",
    maxWidth: "240px",
    margin: "0 auto 20px auto",
  },
  companyName: {
    fontFamily: "OpenSans",
    fontSize: "60px",
    color: "#000",
    fontWeight: "500",
    maxWidth: "400px",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    bottom: "320px",
    right: "330px",
    textAlign: "center",
    margin: "0 auto",
    width: "300px",
    lineHeight: "1.2",
  },
  certificateBadgeText: {
    fontSize: "110px",
    fontFamily: "GreatVibes",
    textTransform: "capitalize",
    color: "#a3740c",
  },
  certificateBadgeText2: {
    fontSize: "60px",
    fontFamily: "RalewayBlack",
    textTransform: "uppercase",
    color: "#3c2413",
  },
  singleBadgeText: {
    fontSize: "90px",
    fontFamily: "GreatVibes",
    textTransform: "capitalize",
    marginTop: "25px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "490px",
    left: "950px",
    right: "0",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left",
    color: "#181c1e",
  },
  certificateTitleWrapper: {
    position: "absolute",
    top: "0",
    left: "100px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  certificateTitle: {
    fontSize: "220px",
    fontWeight: "500",
    fontFamily: "TimesBold",
    color: "rgba(222,187,78,1)",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "83px",
    fontWeight: "500",
    fontFamily: "TimesBold",
    color: "000",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "500px",
    left: "100px",
    maxWidth: "1500px",
    width: "100%",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    fontFamily: "Signerica",
    color: "#000",
    textTransform: "capitalize",
    marginBottom: "70px",
    zIndex: "9999",
    textAlign: "center"
  },
  nameDivider: {
    position: "absolute",
    top: "300px",
    left: "0",
    display: "inline-block",
    right: "0",
    margin: "0 auto",
    height: "10px",
    width: "100%",
    backgroundColor: "#c3983d",
    zIndex: "0",
  },
  certificatePresentedTo: {
    fontSize: "40px",
    textAlign: "center",
    fontFamily: "TimesBold",
    marginTop: "100px",
    marginBottom: "30px",
    textTransform: "uppercase",
    color: "#1b1f21",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
  },
  certificateRecognition: {
    fontSize: "42px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    color: "#2d3538",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1500px",
    minHeight: "350px",
    width: "1750px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "baseline",
  },
  certificateSigneeWrapper: {
    width: "600px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    color: "#1b1f21",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "5px solid #2e3639",
    padding: "30px 0",
    width: "100%",
    textTransform: "uppercase",
  },
  certificateSigneeDate: {
    fontSize: "58px",
    fontFamily: "OpenSans",
    fontWeight: "400",
    color: "#1b1f21",
    margin: "0 auto",
    textAlign: "center",
    width: "100%",
  },
  certificateSigneeImg: {
    maxWidth: "400px",
    height: "150px",
    margin: "0 auto",
  },
  singleBadgeText: {

  },
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate30 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const formattedDate = formatDate(certificateData.date);
  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateBadgeWrapper}>
              <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
                {badgeText[0]}
              </Text>
              {badgeText[1] &&
                <Text style={styles.certificateBadgeText2}>
                  {badgeText[1]}
                </Text>
              }
            </View>
          <View style={styles.certificateLogoWrapper}>
            {certificateData.logo && (
              <Image style={styles.certificateLogo} src={certificateData.logo} />
            )}
            <Text style={styles.companyName}>{certificateData.companyName}</Text>
          </View>

          <View style={styles.certificateContentWrapper}>
            <View style={styles.certificateTitleWrapper}>
              <Text style={styles.certificateTitle}>
                CERTIFICATE
              </Text>
              <Text style={styles.certificateValue}>
                OF {certificateData.certificateType.value.toUpperCase()}
              </Text>
            </View>

            <View style={styles.presenterWrapper}>
              <View>
                <Text style={styles.certificateReceiverName}>
                  {certificateData.recipientNames[0]}
                </Text>
                <View style={styles.nameDivider}></View>
              </View>
              <Text style={styles.certificatePresentedTo}>
                {certificateData.presentedTo.label}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
            </View>

            <View style={styles.certificateAuthorityWrapper}>
              <View style={styles.certificateSigneeWrapper}>
                {certificateData.firstSigneeSignature && (
                  <Image
                    style={styles.certificateSigneeImg}
                    src={certificateData.firstSigneeSignature}
                  />
                )}
                <Text style={styles.certificateSigneeTitle}>{certificateData.firstSigneeTitle}</Text>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate30
