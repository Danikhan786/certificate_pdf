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
import image from "../../../../assets/images/certificates-bg/certificate45bg.png"

import PoppinsBold from "../../../../assets/fonts/Poppins-Bold.ttf"
import PoppinsReg from "../../../../assets/fonts/Poppins-Regular.ttf"

Font.register({ family: "PoppinsBold", src: PoppinsBold })
Font.register({ family: "PoppinsReg", src: PoppinsReg })


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
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "150px",
    left: "300px",
  },
  certificateLogo: {
    width: "150px",
    height: "150px",
    margin: "0 auto 20px auto",
  },
  companName: {
    fontFamily: "PoppinsReg",
    fontSize: "65px",
    color: "#4d3a19",
    fontWeight: "500",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "770px",
    right: "1010px",
    color: "#000",
    textAlign: "center",
    lineHeight: "1.2",  
    textTransform: "uppercase",
    width: "330px",
  },
  certificateBadgeText: {
    fontFamily: "PoppinsBold",
    fontSize: "65px",
  },
  certificateBadgeText1: {
    fontSize: "55px",
    fontFamily: "PoppinsReg",
  },
  singleBadgeText: {
    fontFamily: "PoppinsBold",
    fontSize: "65px",
    marginTop: "30px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "450px",
    left: "400",
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
    color: "#19204a",
  },
  certificateTitle: {
    fontSize: "220px",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    fontFamily: "PoppinsBold",
    textTransform: "capitalize",
  },
  certificateValue: {
    fontSize: "60px",
    position: "absolute",
    top: "260px",
    left: "0",
    maxWidth: "1685px",
    textTransform: "uppercase",
    fontFamily: "PoppinsReg",
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
    justifyContent: "left",
    alignItems:"left",
    textAlign: "left",
  },
  certificatePresentedTo: {
    fontSize: "45px",
    fontFamily: "PoppinsBold",
    marginTop: "200px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#19204a",
  },
  certificateReceiverName: {
    fontSize: "230px",
    fontFamily: "PoppinsBold",
    color: "#4676b7",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "left",
    marginTop: "50px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "40px",
    fontFamily: "PoppinsReg",
    color: "#19204a",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "left",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1602px",
    left: "-100px",
    minHeight: "230px",
    width: "2500px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "600px",
    position: "0",
    left: "1880px",
    right: "0",
  },
  certificateDateWrapper: {
    width: "700px",
    position: "absolute",
    top: "75px",
    left: "0",
  },
  certificateSigneeName: {
    fontSize: "50px",
    fontWeight: "500",
    color: "#1b1f21",
    fontFamily: "PoppinsBold",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    color: "#1b1f21",
    fontFamily: "PoppinsReg",
    textAlign: "center",
    margin: "0 auto",
    // borderTop: "5px solid #2e3639",
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

const Certificate45 = ({certificateData}) => {
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

export default Certificate45