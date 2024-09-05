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
import image from "../../../../assets/images/certificates-bg/certificate11bg.png"

import Lobster from "../../../../assets/fonts/Lobster-Regular.ttf"
import OldLondon from "../../../../assets/fonts/OldLondon.ttf"
import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import OpenSansBold from "../../../../assets/fonts/OpenSans-Bold.ttf"

Font.register({ family: "Lobster", src: Lobster })
Font.register({ family: "OldLondon", src: OldLondon })
Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "OpenSansBold", src: OpenSansBold })

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
    top: "500px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  certificateTitle: {
    fontSize: "138px",
    fontFamily: "OldLondon",
    color: "#30383b",
    paddingBottom: "60px",
    borderBottom: "5px solid #b4c4c3",
    maxWidth: "2287px",
  },
  certificateSubTitle: {
    fontSize: "38px",
    fontWeight: "300",
    fontFamily: "OpenSans",
    color: "#414c50",
    marginTop: "77px",
    minHeight: "89px",
    maxWidth: "2287px",
  },
  certificatePresentedTo: {
    fontSize: "75px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    marginTop: "144px",
    color: "#414c50",
    borderBottom: "5px solid #b4c4c3",
    paddingLeft: "100px",
    paddingRight: "100px",
  },
  certificateReceiverName: {
    fontSize: "129px",
    fontWeight: "700",
    fontFamily: "OpenSansBold",
    color: "#30383b",
    marginBottom: "139px",
    textAlign: "center",
  },
  certificateOnBehalf: {
    fontSize: "63px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    color: "#414c50",
    paddingLeft: "300px",
    paddingRight: "400px",
    maxWidth: "2386px",
    borderBottom: "3px solid #b4c4c3",
  },
  certificateRecognition: {
    maxWidth: "2386px",
    fontSize: "50px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    color: "#414c50",
    minHeight: "200px",
    textAlign: "center",
    marginTop: "20px",
  },
  certificateAuthorityWrapper: {
    minHeight: "230px",
    width: "2100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "140px",
  },
  certificateSigneeName: {
    fontSize: "54px",
    fontWeight: "300",
    fontFamily: "OpenSans",
    color: "#414c50",
    textAlign: "center",
    margin: "0 auto",
  },
  certificateSigneeTitle: {
    fontSize: "42px",
    fontWeight: "600",
    fontFamily: "OpenSansBold",
    color: "#30383b",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "2px solid #d5dfde",
    paddingLeft: "20px",
    paddingRight: "20px",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    bottom: "640px",
    left: "0",
    right: "0",
    textAlign: "center",
  },
  certificateBadgeText: {
    fontSize: "30px",
    fontWeight: "400",
    fontFamily: "Lobster",
    color: "#fff",
    maxWidth: "150px",
    margin: "0 auto",
    textAlign: "center",
  },
  singleBadgeText: {
    fontSize: "30px",
    fontFamily: "Lobster",
    color: "#fff",
    maxWidth: "150px",
    textAlign: "center",
    marginTop: "20px",
  },
})

const pageWidth = 3600
const pageHeight = 2551

const Certificate11 = ({
  certificateTitle,
  certificateSubTitle,
  certificatePresentedTo,
  certificateReceiverName,
  certificateRecognition,
  certificateSigneeTitle1,
  certificateSigneeName1,
  certificateSigneeImg1,
  certificateSigneeTitle2,
  certificateSigneeName2,
  certificateSigneeImg2,
  certificateBadgeText,
  onBehalfOfCompany,
}) => {
  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <Text style={styles.certificateTitle}>{certificateTitle}</Text>
            <Text style={styles.certificateSubTitle}>
              {certificateSubTitle}
            </Text>
            <Text style={styles.certificatePresentedTo}>
              {certificatePresentedTo}
            </Text>
            <Text style={styles.certificateReceiverName}>
              {certificateReceiverName}
            </Text>
            <Text style={styles.certificateOnBehalf}>
              on Behalf of {onBehalfOfCompany}
            </Text>
            <Text style={styles.certificateRecognition}>
              {certificateRecognition}
            </Text>
            <View style={styles.certificateAuthorityWrapper}>
              <View style={styles.certificateSigneeWrapper}>
                {certificateSigneeImg1 && (
                  <Image
                    style={styles.certificateSigneeImg}
                    src={certificateSigneeImg1}
                  />
                )}
                <Text style={styles.certificateSigneeName}>
                  {certificateSigneeName1}
                </Text>
                <Text style={styles.certificateSigneeTitle}>
                  {certificateSigneeTitle1}
                </Text>
              </View>
              <View style={styles.certificateSigneeWrapper}>
                {certificateSigneeImg2 && (
                  <Image
                    style={styles.certificateSigneeImg}
                    src={certificateSigneeImg2}
                  />
                )}
                <Text style={styles.certificateSigneeName}>
                  {certificateSigneeName2}
                </Text>
                <Text style={styles.certificateSigneeTitle}>
                  {certificateSigneeTitle2}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.certificateBadgeWrapper}>
            <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
              {certificateBadgeText}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Certificate11
