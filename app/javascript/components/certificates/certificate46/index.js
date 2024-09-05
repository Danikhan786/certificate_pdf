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
import image from "../../../../assets/images/certificates-bg/certificate46bg.png"

import MontserratMed from "../../../../assets/fonts/Montserrat-Medium.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"


Font.register({ family: "MontserratMed", src: MontserratMed })
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
    top: "360px",
    right: "280px",
    color: "#fff",
    textAlign: "center",
    lineHeight: "1.2",  
    fontFamily: "MontserratMed",
    textTransform: "uppercase",
    width: "290px",
  },
  certificateBadgeText: {
    fontSize: "45px",
  },
  certificateBadgeText1: {
    fontSize: "35px",
  },
  singleBadgeText: {
    fontSize: "45px",
    marginTop: "15px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "450px",
    left: "1050px",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificateTitleWrapper: {
    position: "absolute",
    left: "100px",
    top: "0",
    color: "#000",
    textAlign: "center",
  },
  certificateTitle: {
    fontSize: "220px",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    fontFamily: "MontserratMed",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "60px",
    position: "absolute",
    top: "260px",
    left: "0",
    right: "0",
    margin: "0 auto",
    maxWidth: "1685px",
    textTransform: "uppercase",
    fontFamily: "MontserratReg",
    letterSpacing: "30px",
  },
  presenterWrapper: {
    position: "absolute",
    top: "280px",
    left: "0",
    right: "0",
    margin: "0 auto",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontFamily: "MontserratReg",
    marginTop: "200px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#19204a",
  },
  certificateReceiverName: {
    fontSize: "230px",
    fontFamily: "GreatVibes",
    color: "#c9a24e",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "50px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "MontserratMed",
    color: "#19204a",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1550px",
    left: "0",
    right: "0",
    margin: "0 auto",
    minHeight: "230px",
    width: "1685px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateSigneeWrapper: {
    width: "600px",
  },
  certificateSigneeName: {
    fontSize: "58px",
    fontWeight: "500",
    color: "#1b1f21",
    fontFamily: "MontserratMed",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    color: "#1b1f21",
    fontFamily: "MontserratMed",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "2px solid #2e3639",
    padding: "10px",
    width: "100%",
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

const Certificate46 = ({certificateData}) => {
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
                <Text style={styles.certificateSigneeTitle}>
                  SIGNATURE
                </Text>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate46