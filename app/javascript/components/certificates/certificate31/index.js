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
import image from "../../../../assets/images/certificates-bg/certificate31bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import TimesBold from "../../../../assets/fonts/Times-new-roman-Bold.ttf"
import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import BRUSHSCI from "../../../../assets/fonts/BRUSHSCI.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"


Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "TimesBold", src: TimesBold })
Font.register({ family: "MontserratSemi", src: MontserratSemi })
Font.register({ family: "BRUSHSCI", src: BRUSHSCI })
Font.register({ family: "MontserratReg", src: MontserratReg })


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
    top: "200px",
    left: "0",
    right: "0",
    margin: "0 auto",
  },
  certificateLogo: {
    minWidth: "150px",
    minHeight: "150px",
    maxWidth: "240px",
    margin: "0 auto 20px auto",
  },
  companyName: {
    fontFamily: "OpenSans",
    fontSize: "60px",
    color: "#000",
    fontWeight: "500",
    maxWidth: "400px"
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "2060px",
    left: "1670px",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "40px",
    fontFamily: "MontserratReg",
    width: "250px",
    color: "#fff",
    textTransform: "uppercase",
  },
  certificateBadgeText: {
    textAlign: "center",
  },
  certificateBadgeText2: {
    textAlign: "center",
  },
  singleBadgeText: {
    marginTop: "10px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "520px",
    left: "950px",
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
    justifyContent: "center",
    alignItems: "center",
  },
  certificateTitle: {
    fontSize: "220px",
    fontWeight: "500",
    fontFamily: "TimesBold",
    color: "#bb8c37",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "83px",
    fontWeight: "500",
    fontFamily: "MontserratSemi",
    color: "#bb8c37",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "400px",
    left: "0",
    maxWidth: "1585px",
    width: "100%",
  },
  certificatePresentedTo: {
    fontSize: "40px",
    textAlign: "center",
    fontFamily: "MontserratReg",
    marginTop: "100px",
    marginBottom: "30px",
    textTransform: "uppercase",
    color: "#476054",
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    fontFamily: "BRUSHSCI",
    color: "#00321b",
    textTransform: "capitalize",
    marginBottom: "70px",
    zIndex: "9999",
    textAlign: "center",
  },
  nameDivider: {
    position: "absolute",
    top: "300px",
    left: "0",
    height: "10px",
    width: "88%",
    backgroundColor: "#c3983d",
    marginLeft: "50px",
  },
  certificateRecognition: {
    fontSize: "42px",
    fontWeight: "400",
    fontFamily: "MontserratReg",
    color: "#476054",
    marginBottom: "140px",
    minHeight: "200px",
    textTransform: "capitalize",
    textAlign: "center",
  },
  certificateSigneeContainer: {
    position: "absolute",
    top: "1400px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  authorityWrapper: {
    position: "absolute",
    top: "0",
    left: "450px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  authorityWrapper2: {
    position: "absolute",
    top: "0",
    right: "400px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  certificateSigneeWrapper: {
    position: "absolute",
    left: "-700px",
    width: "400px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateSigneeWrapper2: {
    position: "absolute",
    right: "-2350px",
    width: "400px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateSigneeTitle: {
    fontSize: "40px",
    fontWeight: "400",
    fontFamily: "MontserratReg",
    color: "#1b1f21",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "5px solid #2e3639",
    padding: "30px 0",
    width: "100%",
    textTransform: "uppercase",
  },
  certificateSigneeDate: {
    fontSize: "58px",
    fontFamily: "OpenSans",
    fontWeight: "400",
    color: "#1b1f21",
    margin: "0 auto",
    textAlign: "center",
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

const Certificate31 = ({certificateData}) => {
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
              <Text style={styles.certificateBadgeText2}>
                {badgeText[1]}
              </Text>
            }
          </View>

          <View style={styles.certificateLogoWrapper}>
            {certificateData.logo && (
              <Image style={styles.certificateLogo} src={certificateData.logo} />
            )}
            <Text style={styles.companyName}>{certificateData.companyName}</Text>
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
              <View>
                <Text style={styles.certificateReceiverName}>
                  {certificateData.recipientNames[0]}
                </Text>
                <View style={styles.nameDivider}></View>
              </View>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
            </View>

            <View style={styles.certificateSigneeContainer}>
              <View style={styles.authorityWrapper}>
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
              
              <View style={styles.authorityWrapper2}>
                <View style={styles.certificateSigneeWrapper2}>
                  {certificateData.secondSigneeSignature ?
                      <Image
                        style={styles.certificateSigneeImg}
                        src={certificateData.secondSigneeSignature}
                      />
                    :
                      <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
                  }
                  <Text style={styles.certificateSigneeTitle}>Signature</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Certificate31