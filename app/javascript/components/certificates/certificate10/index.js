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
import image from "../../../../assets/images/certificates-bg/certificate10bg.png"

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
    top: "420px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  certificateTitle: {
    width: "1696px",
    fontSize: "179px",
    fontWeight: "700",
    fontFamily: "CinzelDecorativeBold",
    color: "#eec97b",
    lineHeight: "0px",
    margin: "0",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontWeight: "500",
    fontFamily: "MontserratSemiBold",
    marginTop: "200px",
    marginBottom: "115px",
    color: "#ffffff",
  },
  certificateReceiverName: {
    fontSize: "190px",
    fontWeight: "400",
    fontFamily: "SnellRegular",
    color: "#ffffff",
    marginBottom: "100px",
    paddingLeft: "200px",
    paddingRight: "90px",
    paddingBottom: "40px",
    borderBottom: "6px solid #cfab58",
    textAlign: "center",
  },
  certificateRecognition: {
    maxWidth: "1690px",
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: "MontserratRegular",
    color: "#ffffff",
    minHeight: "200px",
    textAlign: "left",
  },
  certificateAuthorityWrapper: {
    minHeight: "230px",
    width: "2490px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "110px",
  },
  certificateSigneeWrapper: {
    width: "520px",
    textAlign: "center",
  },
  certificateSigneeTitle: {
    paddingTop: "35px",
    borderTop: "5px solid #d1ad5a",
    width: "100%",
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: "MontserratRegular",
    color: "#ffffff",
    textAlign: "center",
    margin: "0 auto",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  certificateLogo: {
    maxHeight: "230px",
    maxWidth: "230px",
    width: "100%",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "555px",
    right: "370px",
    textAlign: "center",
  },
  certificateBadgeText: {
    fontSize: "80px",
    fontWeight: "700",
    fontFamily: "Bodoni",
    color: "#000000",
    width: "300px",
    margin: "0 auto",
    textAlign: "center",
  },
  singleBadgeText: {
    fontSize: "80px",
    fontFamily: "Bodoni",
    color: "#000000",
    width: "300px",
    textAlign: "center",
    marginTop: "30px",
  },
  certificateLogoWrapper: {
    position: "absolute",
    top: "477px",
    left: "238px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "100px",
    maxWidth: "700px",
  },
  companyLogo: {
    maxWidth: "310px",
    height: "220px",
    objectFit: "contain",
    margin: "0 auto 50px auto",
  },
  companyName: {
    fontSize: "62px",
    color: "#ffffff",
    fontWeight: "500",
    fontFamily: "MontserratSemiBold",
    textAlign: "center",
  },
})

const pageWidth = 3600
const pageHeight = 2551

const Certificate10 = ({certificateData}) => {
  const textWidth = certificateData.companyName.length * 50;
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <Text style={styles.certificateTitle}>{certificateData.certificateType.label}</Text>
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
              {certificateData.badgeText.value}
            </Text>
          </View>
          <View style={[styles.certificateLogoWrapper, { width: 200 }]}>
            {certificateData.logo && (
              <Image style={styles.companyLogo} src={certificateData.logo} />
            )}
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Certificate10
