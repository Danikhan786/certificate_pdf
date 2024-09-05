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
import image from "../../../../assets/images/certificates-bg/certificate47bg.png"

import TimesNewBold from "../../../../assets/fonts/Times-new-roman-Bold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import TypographerRotunda from "../../../../assets/fonts/TypographerRotunda.ttf"

Font.register({ family: "TimesNewBold", src: TimesNewBold })
Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "TypographerRotunda", src: TypographerRotunda })


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
    top: "160px",
    left: "0",
    right: "0",
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
    top: "2020px",
    left: "1670px",
    color: "#fff",
    lineHeight: "1.1",  
    textAlign: "center",
    textTransform: "uppercase",
    fontFamily: "MontserratReg",
    fontSize: "35px",
    width: "240px",
  },
  certificateBadgeText: {
  },
  singleBadgeText: {
    marginTop: "20px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "450px",
    left: "980px",
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
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    color: "#c0943b",
  },
  certificateTitle: {
    fontSize: "220px",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    margin: "0 auto",
    fontFamily: "TimesNewBold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "60px",
    position: "absolute",
    top: "260px",
    left: "0",
    right: "0",
    margin: "0 auto",
    textAlign: "center",
    maxWidth: "1685px",
    textTransform: "uppercase",
    fontFamily: "TimesNewBold",
    letterSpacing: "30px",
  },
  presenterWrapper: {
    position: "absolute",
    top: "280px",
    left: "0",
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
    fontFamily: "MontserratReg",
    marginTop: "200px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#26405e",
  },
  certificateReceiverName: {
    fontSize: "230px",
    fontFamily: "TypographerRotunda",
    color: "#26405e",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "50px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "MontserratReg",
    color: "#19204a",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1450px",
    left: "0",
    minHeight: "230px",
    width: "2900px",
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "600px",
    position: "0",
    left: "-150px",
    right: "0",
  },
  certificateSignee2Wrapper: {
    width: "600px",
    position: "absolute",
    top: "0",
    left: "1350px",
  },
  certificateSigneeName: {
    fontSize: "58px",
    fontWeight: "500",
    color: "#1b1f21",
    fontFamily: "MontserratReg",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "45px",
    fontWeight: "400",
    color: "#1b1f21",
    fontFamily: "MontserratReg",
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

const Certificate47 = ({certificateData}) => {
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
                <Text style={styles.certificateSigneeTitle}>
                  SIGNATURE
                </Text>
              </View>
              <View style={styles.certificateSignee2Wrapper}>
                {certificateData.secondSigneeSignature ?
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.secondSigneeSignature}
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

export default Certificate47