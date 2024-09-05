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
import image from "../../../../assets/images/certificates-bg/certificate29bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import RalewayBlack from "../../../../assets/fonts/Raleway-ExtraBold.ttf"
import RalewayBold from "../../../../assets/fonts/Raleway-Bold.ttf"

Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "RalewayBlack", src: RalewayBlack })
Font.register({ family: "RalewayBold", src: RalewayBold })

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
    top: "270px",
    right: "260px",
    textAlign: "center",
    margin: "0 auto",
    color: "#fff",
    width: "300px",
    lineHeight: "1.1",
  },
  certificateBadgeText: {
    fontSize: "90px",
    fontFamily: "GreatVibes",
    textTransform: "capitalize",
  },
  certificateBadgeText2: {
    fontSize: "55px",
    fontFamily: "RalewayBlack",
    textTransform: "uppercase",
  },
  singleBadgeText: {
    fontSize: "90px",
    fontFamily: "GreatVibes",
    textTransform: "capitalize",
    marginTop: "25px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "900px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  certificateTitle: {
    fontSize: "230px",
    fontWeight: "700",
    fontFamily: "RalewayBold",
    color: "#00aeef",
    lineHeight: "0px",
    margin: "0",
    textAlign: "center",
    textTransform: "uppercase",
  },
  typeCertificate: {
    position: "absolute",
    top: "250px",
    fontSize: "80px",
    fontWeight: "700",
    fontFamily: "RalewayBold",
    color: "#000",
    margin: "0",
    textAlign: "center",
    textTransform: "uppercase",
  },

  presenterWrapper: {
    position: "absolute",
    top: "550px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  certificatePresentedTo: {
    fontSize: "55px",
    fontWeight: "700",
    fontFamily: "RalewayBold",
    marginBottom: "70px",
    color: "#1b1f21",
    textTransform:"uppercase",
  },
  certificateReceiverName: {
    fontSize: "240px",
    color: "#00aeef",
    marginBottom: "70px",
    fontFamily: "GreatVibes",
    textTransform: "capitalize",
  },
  certificateRecognition: {
    maxWidth: "1845px",
    fontSize: "42px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    color: "#2d3538",
    marginBottom: "270px",
    minHeight: "206px",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1600px",
    left: "0",
    width: "1845px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "center",
  },
  certificateSigneeWrapper: {
    width: "600px",
  },
  firstSigneeWrapper: {
    position: "absolute",
    top: "0",
    left: "350px",
  },
  secondSigneeWrapper: {
    position: "absolute",
    top: "0",
    left: "1600px",
  },
  certificateSigneeTitle: {
    fontSize: "35px",
    fontWeight: "400",
    color: "#1b1f21",
    fontFamily: "RalewayBlack",
    textAlign: "center",
    padding: "10px",
    width: "100%",
  },
  certificateSigneeName: {
    position: "absolute",
    top: "40px",
    fontSize: "45px",
    fontWeight: "500",
    color: "#1b1f21",
    fontFamily: "OpenSans",
    textAlign: "center",
    margin: "15px auto",
    width: "100%",
    textTransform: "capitalize",
  },
  certificateSigneeImg: {
    position:"absolute",
    top: "120px",
    left: "60px",
    right: "0",
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

const Certificate29 = ({certificateData}) => {
  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <>
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
            
            <View style={styles.certificateContentWrapper}>
              <Text style={styles.certificateTitle}>
                CERTIFICATE
              </Text>
              <Text style={styles.typeCertificate}>
                OF {certificateData.certificateType.value.toUpperCase()}
              </Text>

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
                <View style={styles.firstSigneeWrapper}>
                  <Text style={{...styles.certificateSigneeTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
                    {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
                  </Text>
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.firstSigneeName != "" ? {} : styles.displayNone)}}>
                    {certificateData.firstSigneeName != "" ? certificateData.firstSigneeName : "Lorem ipsum"}
                  </Text>
                  <View style={styles.certificateSigneeWrapper}>
                    {certificateData.firstSigneeSignature ?
                      <Image
                        style={styles.certificateSigneeImg}
                        src={certificateData.firstSigneeSignature}
                      />
                    :
                      <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
                    }
                  </View>
                </View>

                <View style={styles.secondSigneeWrapper}>
                  <Text style={{...styles.certificateSigneeTitle, ...(certificateData.secondSigneeTitle != "" ? {} : styles.displayNone)}}>
                    {certificateData.secondSigneeTitle != "" ? certificateData.secondSigneeTitle : "Lorem ipsum"}
                  </Text>
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.secondSigneeName != "" ? {} : styles.displayNone)}}>
                    {certificateData.secondSigneeName != "" ? certificateData.secondSigneeName : "Lorem ipsum"}
                  </Text>
                  <View style={styles.certificateSigneeWrapper}>
                    {certificateData.secondSigneeSignature ?
                        <Image
                          style={styles.certificateSigneeImg}
                          src={certificateData.secondSigneeSignature}
                        />
                      :
                        <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
                    }
                  </View>
                </View>

              </View>
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

export default Certificate29