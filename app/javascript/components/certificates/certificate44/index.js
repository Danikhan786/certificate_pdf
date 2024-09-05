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
import image from "../../../../assets/images/certificates-bg/certificate44bg.png"

import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import Monbaiti from "../../../../assets/fonts/monbaiti.ttf"
import Bolina from "../../../../assets/fonts/Bolina.otf"


Font.register({ family: "Monbaiti", src: Monbaiti })
Font.register({ family: "Bolina", src: Bolina })

Font.register({ family: "MontserratSemi", src: MontserratSemi })


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
    top: "445px",
    left: "390px",
    color: "#ddb94d",
    fontFamily: "MontserratSemi",
    textAlign: "center",
    lineHeight: "1.1",  
    textTransform: "uppercase",
    width: "370px",
  },
  certificateBadgeText: {
    fontSize: "60px",
  },
  singleBadgeText: {
    fontSize: "60px",
    marginTop: "30px"
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "600px",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
    color: "#000",
  },
  certificateTitleWrapper: {
    position: "absolute",
    right: "200px",
    top: "0",
    fontFamily: "Monbaiti",
  },
  certificateTitle: {
    fontSize: "220px",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "70px",
    position: "absolute",
    top: "210px",
    left: "0",
    right: "0",
    margin: "0 auto",
    maxWidth: "1685px",
    textTransform: "uppercase",
    letterSpacing: "13px",
  },
  presenterWrapper: {
    position: "absolute",
    top: "280px",
    left: "1100px",
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
    fontFamily: "Monbaiti",
    marginTop: "250px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#000",
  },
  certificateReceiverName: {
    fontSize: "250px",
    fontFamily: "Bolina",
    color: "#000",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "50px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "Monbaiti",
    color: "#000",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1500px",
    left: "600px",
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
    fontFamily: "Monbaiti",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    color: "#1b1f21",
    fontFamily: "Monbaiti",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "5px solid #2e3639",
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

const Certificate44 = ({certificateData}) => {

  var formattedDate = "";

  if(certificateData.date != "") {
    formattedDate = certificateData.date;
  } else {
    formattedDate = "02-02-2028";
  }

  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          
          <View style={styles.certificateBadgeWrapper}>
            <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
              {certificateData.badgeText.value}
            </Text>
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
                <Text style={{...styles.certificateSigneeName, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                  {formattedDate}
                </Text>
                <Text style={styles.certificateSigneeTitle}>
                  DATE
                </Text>
              </View>
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

export default Certificate44