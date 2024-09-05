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
import image from "../../../../assets/images/certificates-bg/certificate42bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"

import PoppinsSemi from "../../../../assets/fonts/Poppins-SemiBold.ttf"
import PoppinsReg from "../../../../assets/fonts/Poppins-Regular.ttf"


Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "MontserratSemi", src: MontserratSemi })
Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "GreatVibes", src: GreatVibes })

Font.register({ family: "PoppinsSemi", src: PoppinsSemi })
Font.register({ family: "PoppinsReg", src: PoppinsReg })

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
    top: "480px",
    left: "0",
    right: "0",
    margin: "0 auto",
  },
  certificateLogo: {
    maxWidth: "270px",
    minHeight: "150px",
    margin: "0 auto 20px auto",
  },
  companyName: {
    fontFamily: "PoppinsSemi",
    fontSize: "65px",
    color: "#ffffff",
    fontWeight: "500",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "950px",
    left: "650px",
    right: "0",
    display: "flex",
    justifyContent: "flex-end",
    alignItems:"end",
    textAlign: "right",
  },
  certificateTitleWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "right",
    color: "#bc8e38",
  },
  certificateTitle: {
    fontSize: "210px",
    fontFamily: "PoppinsSemi",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "80px",
    position: "absolute",
    top: "210px",
    fontFamily: "PoppinsSemi",
    margin: "0",
    textAlign: "center",
    maxWidth: "1685px",
    letterSpacing: "8px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "480px",
    left: "-250px",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontFamily: "PoppinsReg",
    marginTop: "210px",
    marginBottom: "80px",
    textTransform: "uppercase",
    color: "#58706f",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontFamily: "PoppinsSemi",
    color: "#556667",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "70px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "PoppinsReg",
    color: "#486766",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    minHeight: "350px",
    width: "1750px",
    position: "absolute",
    top: "2000px",
    left: "400px",
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
  singleBadgeText: {

  },
})

const pageHeight = 3579
const pageWidth = 2551

const Certificate42 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const formattedDate = formatDate(certificateData.date);
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />

          <View style={styles.certificateLogoWrapper}>
            {certificateData.logo && (
              <Image style={styles.certificateLogo} src={certificateData.logo} />
            )}
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

export default Certificate42