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
import image from "../../../../assets/images/certificates-bg/certificate49bg.png"

import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import EBGaramond from "../../../../assets/fonts/EBGaramond-VariableFont_wght.ttf"
import EBGaramondItalic from "../../../../assets/fonts/EBGaramond-Italic-VariableFont_wght.ttf"
import PinyonScript from "../../../../assets/fonts/PinyonScript-Regular.ttf"
import EBGaramondReg from "../../../../assets/fonts/EBGaramond-Regular.ttf"

Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "EBGaramond", src: EBGaramond })
Font.register({ family: "EBGaramondItalic", src: EBGaramondItalic })
Font.register({ family: "PinyonScript", src: PinyonScript })
Font.register({ family: "EBGaramondReg", src: EBGaramondReg })

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
    position: "relative",
    width: "400px",
    right: "625px",
    borderRadius: "50%",
    transform: "rotate(-50deg)",
    color: "#fff",
    top: "0",
    right: "400px",
  },
  certificateBadgeText: {
    fontSize: "50px",
    height: "200px",
    position: "absolute",
    width: "20px",
    left: "0",
    top: "0",
    transformOrigin: "bottom center",
    transform: "rotate(10deg)",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "280px",
    left: "0",
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
    left: "700px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "EBGaramond",
    color: "#1b2e50",
  },
  certificateTitle: {
    fontSize: "200px",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "end",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "110px",
    textAlign: "end",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "350px",
    left: "500px",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontWeight: "500",
    fontFamily: "EBGaramondItalic",
    marginTop: "250px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#1b2e50",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    fontFamily: "PinyonScript",
    color: "#1b2e50",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "300px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "60px",
    fontFamily: "EBGaramondReg",
    color: "#1b2e50",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    minHeight: "350px",
    width: "1750px",
    position: "absolute",
    top: "1800px",
    left: "600px",
    right: "0",
    margin: "0 auto",
  },
  certificateSigneeWrapper: {
    width: "600px",
  },
  certificateDateWrapper: {
    width: "600px",
    position: "absolute",
    right: "250px",
    top: "95px",
  },
  certificateSigneeName: {
    fontSize: "58px",
    fontWeight: "500",
    color: "#1b1f21",
    fontFamily: "EBGaramondReg",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "45px",
    fontWeight: "400",
    fontFamily: "EBGaramondReg",
    color: "#000",
    textAlign: "center",
    margin: "0 auto",
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

const pageHeight = 2551
const pageWidth = 3579

const Certificate49 = ({certificateData}) => {
  function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const month = new Date(inputDate).toLocaleString('default', { month: 'long' }).toUpperCase();
    const day = parseInt(dateParts[2]);
    let dayStr;
  
    if (day === 1 || day === 21 || day === 31) {
      dayStr = `${day}ST`;
    } else if (day === 2 || day === 22) {
      dayStr = `${day}ND`;
    } else if (day === 3 || day === 23) {
      dayStr = `${day}RD`;
    } else {
      dayStr = `${day}TH`;
    }
  
    return `${month} ${dayStr} ${year}`;
  }

  var formattedDate = "";

  if(certificateData.date != "") {
    formattedDate = formatDate(certificateData.date);
  } else {
    formattedDate = formatDate("02-02-2028");
  }

  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          
          <View style={styles.certificateContentWrapper}>

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

              <View style={styles.certificateDateWrapper}>
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                    {formattedDate}
                  </Text>
                  <Text style={styles.certificateSigneeTitle}>
                    DATE
                  </Text>
                </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate49