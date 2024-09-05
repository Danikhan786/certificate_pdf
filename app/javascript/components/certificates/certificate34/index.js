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
import image from "../../../../assets/images/certificates-bg/certificate34bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import CinzelSemi from "../../../../assets/fonts/Cinzel-SemiBold.ttf"
import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"


Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "CinzelSemi", src: CinzelSemi })
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
    top: "600px",
    right: "615px",
    textAlign: "center",
    margin: "0 auto",
    width: "250px",
    fontFamily: "CinzelSemi",
    fontSize: "40px",
    color: "#dbbb6a",
    textTransform: "uppercase",
    letterSpacing: "2px",
  },
  certificateBadgeText: {
  },
  singleBadgeText: {
    marginTop: "25px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "150px",
    left: "400px",
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
    alignItems: "left",
  },
  certificateTitle: {
    fontSize: "200px",
    fontFamily: "MontserratSemi",
    color: "#fff",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "70px",
    fontFamily: "MontserratReg",
    color: "#f9df7b",
    margin: "0",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "550px",
    left: "0",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems:"left",
    textAlign: "left",
  },
  certificatePresentedTo: {
    fontSize: "40px",
    textAlign: "left",
    fontFamily: "MontserratReg",
    marginTop: "100px",
    marginBottom: "30px",
    textTransform: "uppercase",
    color: "#f9df7b",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    fontFamily: "GreatVibes",
    color: "#fff",
    textTransform: "capitalize",
    marginBottom: "70px",
    textAlign: "left",
    marginTop: "100px",
  },
  certificateRecognition: {
    fontSize: "42px",
    fontFamily: "MontserratReg",
    color: "#fff",
    marginBottom: "140px",
    minHeight: "200px",
  },
  certificateSigneeContainer: {
    position: "absolute",
    top: "1500px",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },
  authorityWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  certificateSigneeWrapper: {
    position: "absolute",
    left: "0",
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
    fontFamily: "MontserratSemi",
    color: "#fff",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "2px solid #fff",
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

const Certificate34 = ({certificateData}) => {
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
              <Text style={styles.certificateBadgeText}>
                {badgeText[1]}
              </Text>
            }
          </View>

          {/* <View style={styles.certificateLogoWrapper}>
            {certificateData.logo && (
              <Image style={styles.certificateLogo} src={certificateData.logo} />
            )}
            <Text style={styles.companyName}>{certificateData.companyName}</Text>
          </View> */}

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
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate34