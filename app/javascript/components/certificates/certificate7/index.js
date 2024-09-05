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
import image from "../../../../assets/images/certificates-bg/certificate7bg.png"

import MontserratSemiBold from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratRegular from "../../../../assets/fonts/Montserrat-Regular.ttf"
import CinzelDecorativeBold from "../../../../assets/fonts/CinzelDecorative-Bold.ttf"
import Bodoni from "../../../../assets/fonts/bodoni.ttf"
import SnellRegular from "../../../../assets/fonts/SnellBT-Regular.otf"
import SnellBold from "../../../../assets/fonts/SnellBT-Bold.otf"

Font.register({ family: "MontserratSemiBold", src: MontserratSemiBold })
Font.register({ family: "MontserratRegular", src: MontserratRegular })
Font.register({ family: "CinzelDecorativeBold", src: CinzelDecorativeBold })
Font.register({ family: "Bodoni", src: Bodoni })
Font.register({ family: "SnellRegular", src: SnellRegular })
Font.register({ family: "SnellBold", src: SnellBold })

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
    top: "240px",
    left: "350",
    right: "0",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left",
    color: "#000000",
  },
  certificateTitleWrapper: {
    fontFamily: "CinzelDecorativeBold",
    fontSize: "150px",
    color: "#003d6d",
    lineHeight: "1",
    maxWidth: "1685px",
    width: "100%",
    margin: "0",
    textAlign: "left",
  },
  certificateTitle: {
    textAlign: "left",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontWeight: "500",
    fontFamily: "MontserratSemiBold",
    marginTop: "100px",
    marginBottom: "100px",
    color: "#000000",
  },
  certificateReceiverName: {
    paddingLeft: "50px",
    fontSize: "190px",
    fontWeight: "400",
    fontFamily: "SnellRegular",
    color: "#000000",
    marginBottom: "70px",
    borderBottom: "5px solid #0d6aaa",
    maxWidth: "1700px",
    width: "100%",
    textAlign: "center",
    paddingBottom: "40px",
  },
  certificateRecognition: {
    maxWidth: "1700px",
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: "MontserratRegular",
    color: "#000000",
    marginBottom: "100px",
    minHeight: "200px",
  },
  certificateAuthorityWrapper: {
    minHeight: "230px",
    width: "1845px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "600px",
  },
  certificateSigneeTitle: {
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: "MontserratRegular",
    color: "#000000",
    textAlign: "left",
    margin: "0 auto",
    borderTop: "5px solid #0b63a0",
    padding: "30px 0",
    width: "100%",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
    paddingBottom: "20px",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "290px",
    right: "485px",
    textAlign: "center",
    margin: "0 auto",
    textTransform: "uppercase",
    fontSize: "60px",
    fontFamily: "Bodoni",
    color: "#000",
    maxWidth: "236px",
    textAlign: "center",
    margin: "0 auto",
  },
  certificateBadgeText: {
    width: "550px",
    textAlign: "center",
  },
  singleBadgeText: {
    width: "550px",
    textAlign: "center",
    marginTop: "30px",
  },
  certificateLogoWrapper: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "164px",
  },
  certificateLogo: {
    maxWidth: "500px",
    height: "220px",
    objectFit: "contain",
    margin: "0 auto 50px auto",
  },
  companyName: {
    fontFamily: "MontserratSemiBold",
    fontSize: "63px",
    color: "#000000",
    fontWeight: "500",
  },
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate7 = ({certificateData}) => {
  const textWidth = certificateData.companyName.length * 50;
  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <View style={[styles.certificateLogoWrapper, { width: textWidth }]}>
              {certificateData.logo && (
                <Image style={styles.certificateLogo} src={certificateData.logo} />
              )}
              <Text style={styles.companyName}>{certificateData.companyName}</Text>
            </View>

            <View style={styles.certificateTitleWrapper}>
              <Text style={styles.certificateTitle}>
                CERTIFICATE
              </Text>
              <Text style={styles.certificateTitle}>
                OF {certificateData.certificateType.value.toUpperCase()}
              </Text>
            </View>
            <Text style={styles.certificatePresentedTo}>
              {certificateData.presentedTo.label}
            </Text>
            <View>
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
            </View>
            <Text style={styles.certificateRecognition}>
              {certificateData.recognitionText}
            </Text>
            <View style={styles.certificateAuthorityWrapper}>
              <View style={styles.certificateSigneeWrapper}>
                {certificateData.firstSigneeSignature && (
                  <Image
                    style={styles.certificateSigneeImg}
                    src={certificateData.firstSigneeSignature}
                  />
                )}
                <Text style={styles.certificateSigneeTitle}>
                  SIGNATURE
                </Text>
              </View>
            </View>
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
        </View>
      </Page>
    </Document>
  )
}

export default Certificate7
