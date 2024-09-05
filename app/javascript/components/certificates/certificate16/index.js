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
import image from "../../../../assets/images/certificates-bg/certificate16bg.png"

import Minion from "../../../../assets/fonts/MinionPro-Bold.otf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import OpenSansBlack from "../../../../assets/fonts/OpenSans-ExtraBold.ttf"
import AlexBrush from "../../../../assets/fonts/AlexBrush-Regular.ttf"

Font.register({ family: "Minion", src: Minion })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "OpenSansBlack", src: OpenSansBlack })
Font.register({ family: "AlexBrush", src: AlexBrush })

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
    left: "350",
    right: "0",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left",
    color: "#1b1f21",
  },
  certificateTitle: {
    fontSize: "179px",
    fontWeight: "700",
    fontFamily: "Minion",
    color: "#1b1f21",
    lineHeight: "0px",
    margin: "0",
  },
  certificateSubTitle: {
    fontSize: "179px",
    fontWeight: "700",
    fontFamily: "GreatVibes",
    marginTop: "-60px",
    marginBottom: "200px",
    color: "#0e4aa3",
  },
  certificatePresentedTo: {
    fontSize: "67px",
    fontWeight: "700",
    fontFamily: "OpenSans",
    marginBottom: "40px",
    color: "#1b1f21",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    color: "#9fec33",
    marginBottom: "70px",
    fontFamily: "AlexBrush",
  },
  certificateRecognition: {
    maxWidth: "1845px",
    fontSize: "42px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    color: "#2d3538",
    marginBottom: "170px",
    minHeight: "206px",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    bottom: "-150px",
    minHeight: "230px",
    width: "1845px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "600px",
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
    color: "#1b1f21",
    fontFamily: "OpenSans",
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
  certificateBadgeWrapper: {
    position: "absolute",
    top: "425px",
    right: "355px",
    width: "420px",
    color: "#5db9f5",
    lineHeight: "1",
    textAlign: "center",
  },
  certificateBadgeTextTop: {
    fontSize: "90px",
    fontFamily: "GreatVibes",
    marginBottom: "20px",
  },
  certificateBadgeText: {
    fontSize: "50px",
    fontFamily: "OpenSansBlack",
    textTransform: "uppercase",
  },
  singleBadgeText: {
    fontSize: "90px",
    fontFamily: "GreatVibes",
    marginTop: "30px",
  },
  certificateLogoWrapper: {
    top: "190px",
    left: "350px",
  },
  certificateLogo: {
    width: "180px",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 3579
const pageWidth = 2551

const Certificate16 = ({certificateData}) => {
  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <>
      <Document>
        <Page size={[pageWidth, pageHeight]}>
          <View style={styles.certificateWrapper}>
            <Image src={image} style={styles.certificateBg} />
            <View style={styles.certificateContentWrapper}>
              <Text style={styles.certificateTitle}>
                CERTIFICATE
              </Text>
              <Text style={styles.certificateSubTitle}>
                of {certificateData.certificateType.value}
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
                  {certificateData.firstSigneeSignature ?
                      <Image
                        style={styles.certificateSigneeImg}
                        src={certificateData.firstSigneeSignature}
                      />
                    :
                      <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}> Lorem Ipsum </Text>
                  }
                  <Text style={styles.certificateSigneeTitle}>
                    SIGNATURE
                  </Text>
                </View>
                <View style={styles.certificateSigneeWrapper}>
                  <Text style={styles.certificateSigneeName}>
                    {certificateData.date}
                  </Text>
                  <Text style={styles.certificateSigneeTitle}>
                    DATE
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.certificateBadgeWrapper}>
              <Text style={multiBadgeText ? styles.certificateBadgeTextTop : styles.singleBadgeText}>
                {badgeText[0]}
              </Text>
              {badgeText[1] &&
                <Text style={styles.certificateBadgeText}>
                  {badgeText[1]}
                </Text>
              }
            </View>
            <View style={styles.certificateLogoWrapper}>
              {certificateData.logo && (
                <Image style={styles.certificateLogo} src={certificateData.logo} />
              )}
            </View>
          </View>
        </Page>
      </Document>
    </>
  )
}

export default Certificate16
