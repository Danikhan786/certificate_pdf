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
import image from "../../../../assets/images/certificates-bg/certificate48bg.png"

import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import Old from "../../../../assets/fonts/OLD.ttf"
import RobotoReg from "../../../../assets/fonts/Roboto-Regular.ttf"
import RobotoLight from "../../../../assets/fonts/Roboto-Light.ttf"
import Exmouth from "../../../../assets/fonts/Exmouth.ttf"

Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "Old", src: Old })
Font.register({ family: "RobotoReg", src: RobotoReg })
Font.register({ family: "RobotoLight", src: RobotoLight })
Font.register({ family: "Exmouth", src: Exmouth })


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
    top: "30px",
    left: "1300px",
  },
  certificateLogo: {
    width: "150px",
    height: "150px",
    margin: "0 auto 20px auto",
  },
  companName: {
    fontFamily: "MontserratReg",
    fontSize: "65px",
    color: "#4d3a19",
    fontWeight: "500",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "2010px",
    left: "1710px",
    color: "#fff",
    lineHeight: "1.1",  
    textTransform: "uppercase",
    fontFamily: "MontserratReg",
    fontSize: "40px",
    maxWidth: "200px",
    margin: "0 auto",
  },
  certificateBadgeText: {
    letterSpacing: "10px",
  },
  certificateBadgeText1: {
  },
  singleBadgeText: {
    marginTop: "20px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "620px",
    left: "450px",
    right: "0",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificateTitleWrapper: {
    position: "absolute",
    left: "0",
    top: "0",
    textAlign: "left",
    display: "flex",
    justifyContent: "left",
    flexDirection: "row",
    color: "#000",
    maxWidth: "2685px",
    fontFamily: "Old",
    textTransform: "uppercase",
    fontSize: "140px",
    gap: "50px",
  },
  presenterWrapper: {
    position: "absolute",
    top: "0",
    left: "500px",
    right: "0",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificatePresentedTo: {
    fontSize: "65px",
    fontFamily: "RobotoReg",
    marginTop: "250px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#26405e",
  },
  certificateReceiverName: {
    fontSize: "230px",
    fontFamily: "Exmouth",
    color: "#26405e",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "100px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "RobotoLight",
    color: "#19204a",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1400px",
    left: "-100px",
    minHeight: "230px",
    width: "1400px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "600px",
    position: "0",
    left: "1700px",
    right: "0",
  },
  certificateDateWrapper: {
    width: "600px",
    position: "absolute",
    top: "78px",
    left: "500px",
  },
  certificateSigneeName: {
    fontSize: "58px",
    fontWeight: "500",
    color: "#000",
    fontFamily: "RobotoReg",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    color: "#000",
    fontFamily: "RobotoReg",
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
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate48 = ({certificateData}) => {
  var formattedDate = "";

  if(certificateData.date != "") {
    formattedDate = certificateData.date;
  } else {
    formattedDate = "02-02-2028";
  }

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
            <Text style={styles.companName}>{certificateData.companyName}</Text>
          </View>
          
          <View style={styles.certificateBadgeWrapper}>
            <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
              {badgeText[0]}
            </Text>
            {badgeText[1] &&
              <Text style={styles.certificateBadgeText1}>
                {badgeText[1]}
              </Text>
            }
          </View>

          <View style={styles.certificateContentWrapper}>
            
            <View style={styles.certificateTitleWrapper}>
              <Text style={styles.certificateTitle}>
                Certificate
              </Text>
              <Text style={styles.certificateValue}>
                 of {certificateData.certificateType.value.toUpperCase()}
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
              <View style={styles.certificateDateWrapper}>
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

export default Certificate48