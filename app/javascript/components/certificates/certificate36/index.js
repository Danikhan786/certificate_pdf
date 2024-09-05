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
import image from "../../../../assets/images/certificates-bg/certificate36bg.png"

import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"


Font.register({ family: "MontserratSemi", src: MontserratSemi })
Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "GreatVibes", src: GreatVibes })


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
  certificateBadgeWrapper: {
    position: "absolute",
    top: "560px",
    right: "645px",
    color: "#fff",
    fontFamily: "MontserratSemi",
    textAlign: "center",
    width: "360px",
  },
  certificateBadgeText: {
    fontSize: "80px",
  },
  certificateBadgeText1: {
    fontSize: "60px",
    letterSpacing: "6px",
    textTransform: "uppercase",
  },
  singleBadgeText: {
    fontSize: "80px",
    marginTop: "30px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "350px",
    left: "500px",
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
    left: "0",
    textAlign: "center",
    display: "flex",
    color: "#000",
    justifyContent: "left",
    flexDirection: "column",
    alignItems: "left",
  },
  certificateTitle: {
    fontSize: "180px",
    fontFamily: "MontserratSemi",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "80px",
    fontFamily: "MontserratReg",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "550px",
    left: "0",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"left",
    textAlign: "left",
  },
  presentedToTitle: {
    fontSize: "40px",
    textAlign: "left",
    fontFamily: "MontserratReg",
    textTransform: "uppercase",
    marginBottom: "100px",
  },
  certificateReceiverName: {
    fontSize: "220px",
    fontFamily: "GreatVibes",
    color: "#000",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "left",
    marginTop: "70px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "MontserratReg",
    color: "#000",
    marginBottom: "140px",
    minHeight: "200px",
  },
  certificateSigneeWrapper: {
    position: "absolute",
    top: "1400px",
    left: "0",
    width: "600px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  certificateSigneeTitle: {
    fontFamily: "MontserratSemi",
    fontSize: "40px",
    borderTop: "1px solid #2e3639",
    marginTop: "20px",
    paddingTop: "20px",
    width: "500px",
    textTransform: "uppercase",
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
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate36 = ({certificateData}) => {
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
              <Text style={styles.certificateBadgeText1}>
                {badgeText[1]}
              </Text>
            }
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
              <Text style={styles.presentedToTitle}>
                {certificateData.presentedTo.label}
              </Text>
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
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
              <Text style={styles.certificateSigneeTitle}>Signature</Text>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate36