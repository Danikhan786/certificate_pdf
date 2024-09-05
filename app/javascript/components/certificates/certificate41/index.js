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
import image from "../../../../assets/images/certificates-bg/certificate41bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"


Font.register({ family: "OpenSans", src: OpenSans })
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
    top: "460px",
    left: "520px",
    color: "#fff",
    fontFamily: "MontserratReg",
    textAlign: "center",
    width: "370px",
  },
  certificateBadgeText: {
    fontSize: "65px",
  },
  certificateBadgeText1: {
    fontSize: "45px",
    letterSpacing: "6px",
    textTransform: "uppercase",
  },
  singleBadgeText: {
    fontSize: "65px",
    marginTop: "25px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "350px",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems:"end",
    textAlign: "right",
    color: "#10141b",
  },
  certificateTitleWrapper: {
    position: "absolute",
    top: "0",
    left: "1700px",
    display: "flex",
    justifyContent: "flex-end",
    alignItems:"end",
    textAlign: "right",
    color: "#10141b",
  },
  certificateTitle: {
    fontSize: "220px",
    fontFamily: "MontserratReg",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "right",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "110px",
    position: "absolute",
    right: "0",
    top: "240px",
    fontFamily: "MontserratReg",
    margin: "0",
    textAlign: "right",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "280px",
    right: "400px",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems:"end",
    textAlign: "right",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontFamily: "MontserratReg",
    marginTop: "250px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#000",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontFamily: "GreatVibes",
    color: "#10141b",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "right",
    marginTop: "70px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "MontserratReg",
    color: "#10141b",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "right",
  },
  certificateAuthorityWrapper: {
    minHeight: "350px",
    width: "1750px",
    position: "absolute",
    top: "1500px",
    right: "-880px",
    margin: "0 auto",
  },
  certificateSigneeWrapper: {
    width: "500px",
    height: "350px",
  },
  certificateSigneeTitle: {
    fontSize: "45px",
    fontWeight: "400",
    fontFamily: "MontserratSemi",
    color: "#000",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "2px solid #000",
    padding: "30px 0",
    width: "100%",
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

const Certificate40 = ({certificateData}) => {
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
              <Text style={styles.certificatePresentedTo}>
                {certificateData.presentedTo.label}
              </Text>
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
            </View>

            <View style={styles.certificateAuthorityWrapper}>
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

        </View>
      </Page>
    </Document>
  )
}

export default Certificate40