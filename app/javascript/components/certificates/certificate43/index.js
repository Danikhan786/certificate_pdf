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
import image from "../../../../assets/images/certificates-bg/certificate43bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import Chopin from "../../../../assets/fonts/ChopinScript.ttf"



Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "MontserratSemi", src: MontserratSemi })
Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "Chopin", src: Chopin })

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
    top: "250px",
    left: "0",
    right: "0",
    margin: "0 auto",
  },
  certificateLogo: {
    maxWidth: "310px",
    minHeight: "220px",
    margin: "0 auto 20px auto",
  },
  companyName: {
    fontFamily: "OpenSans",
    fontSize: "65px",
    color: "#000",
    fontWeight: "500",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    bottom: "380px",
    left: "1050px",
    textAlign: "center",
    fontFamily: "MontserratSemi",
    color: "#fff",
    lineHeight: "1",
    width: "450px",
    textTransform: "uppercase",
    fontSize: "60px",
  },
  certificateBadgeText: {
  },
  singleBadgeText: {
    marginBottom: "40px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "950px",
    left: "0",
    right: "0",
    margin: "0 auto",
    display: "flex",
    justifyContent: "flex-end",
    alignItems:"end",
    textAlign: "right",
  },
  certificateTitleWrapper: {
    position: "absolute",
    top: "0",
    left: "550px",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "right",
    color: "#ddb94d",
    fontFamily: "MontserratSemi",
  },
  certificateTitle: {
    fontSize: "220px",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "80px",
    position: "absolute",
    top: "230px",
    margin: "0",
    textAlign: "center",
    maxWidth: "1685px",
    letterSpacing: "8px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "300px",
    left: "450px",
    right: "0",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontFamily: "OpenSans",
    marginTop: "200px",
    marginBottom: "70px",
    textTransform: "uppercase",
    color: "#58706f",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontFamily: "Chopin",
    color: "#294e4d",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "60px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "OpenSans",
    color: "#486766",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1400px",
    left: "350px",
    minHeight: "230px",
    width: "1845px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "500px",
  },
  certificateSigneeName: {
    fontSize: "58px",
    fontWeight: "500",
    color: "#1b1f21",
    fontFamily: "OpenSans",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    color: "#294e4d",
    fontFamily: "OpenSans",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "2px solid #294e4d",
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

const pageHeight = 3579
const pageWidth = 2551

const Certificate43 = ({certificateData}) => {
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

          <View style={styles.certificateLogoWrapper}>
            {certificateData.logo ?
                <Image style={styles.certificateLogo} src={certificateData.logo} />
              :
                <Text style={{...styles.certificateLogo, ...styles.displayNone}}>Lorem ipsum</Text>
            }
            {/* <Text style={styles.companyName}>coursera</Text> */}
          </View>
          
          <View style={styles.certificateBadgeWrapper}>
            <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
              {badgeText[0]}
            </Text>
            {badgeText[1] &&
              <Text style={styles.certificateBadgeText}>
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
                  <Text style={styles.certificateSigneeTitle}>SIGNATURE</Text>
                </View>
                <View style={styles.certificateSigneeWrapper}>
                  {certificateData.secondSigneeSignature ? 
                      <Image
                        style={styles.certificateSigneeImg}
                        src={certificateData.secondSigneeSignature}
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
  )
}

export default Certificate43