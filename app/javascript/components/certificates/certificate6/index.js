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
import image from "../../../../assets/images/certificates-bg/certificate6bg.png"

import RalewaySemiBold from "../../../../assets/fonts/Raleway-SemiBold.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import LiterataRegular from "../../../../assets/fonts/Literata-Regular.ttf"
import Aller from "../../../../assets/fonts/Aller_Rg.ttf"
import GeorgiaRegular from "../../../../assets/fonts/georgia-regular.ttf"
import GeorgiaBold from "../../../../assets/fonts/georgia-bold.ttf"

Font.register({ family: "Raleway Semi", src: RalewaySemiBold })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "Literata", src: LiterataRegular })
Font.register({ family: "Aller", src: Aller })
Font.register({ family: "Georgia Regular", src: GeorgiaRegular })
Font.register({ family: "Georgia Bold", src: GeorgiaBold })

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
    top: "380px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  certificateLogoWrapper: {
    margin: "0 auto 75px auto",
    textAlign: "center",
    minHeight: "280px",
  },
  companyLogo: {
    maxWidth: "500px",
    width: "100%",
    height: "150px",
    objectFit: "contain",
    margin: "0 auto 30px auto",
  },
  companyName: {
    fontSize: "67px",
    color: "#1f1614",
    fontWeight: "600",
    fontFamily: "Raleway Semi",
    textAlign: "center",
  },
  certificateTitle: {
    fontSize: "146px",
    fontWeight: "700",
    fontFamily: "Georgia Bold",
    color: "#1f1614",
    lineHeight: "0px",
    margin: "0",
  },
  certificatePresentedTo: {
    fontSize: "92px",
    fontWeight: "700",
    fontFamily: "Georgia Regular",
    marginTop: "250px",
    marginBottom: "100px",
    color: "#1f1614",
  },
  certificateReceiverName: {
    fontSize: "229px",
    fontWeight: "400",
    fontFamily: "GreatVibes",
    color: "#1f1613",
    marginBottom: "100px",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderBottom: "6px solid #1f1613",
  },
  certificateRecognition: {
    maxWidth: "2320px",
    fontSize: "38px",
    fontWeight: "400",
    fontFamily: "Aller",
    color: "#1f1613",
    minHeight: "170px",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    bottom: "-200px",
    minHeight: "230px",
    width: "2490px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: "0",
  },
  certificateSigneeWrapper: {
    width: "520px",
    textAlign: "center",
  },
  certificateSigneeTitle: {
    borderTop: "5px solid #1f1613",
    width: "100%",
    fontSize: "63px",
    fontWeight: "400",
    fontFamily: "Literata",
    color: "#1f1613",
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
    bottom: "465px",
    left: "1700px",
    right: "0",
    marginRight: "15px",
    color: "#1f1613",
    display: "flex",
    justifyContent: "center",
  },
  certificateBadgeText1: {
    maxWidth: "200px",
    fontSize: "31px",
    fontWeight: "700",
    fontFamily: "Literata",
    color: "#1f1613",
    textAlign: "center",
  },
  certificateBadgeText: {
    maxWidth: "200px",
    fontSize: "31px",
    fontWeight: "700",
    fontFamily: "Georgia Bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  singleBadgeText: {
    maxWidth: "200px",
    fontSize: "30px",
    fontFamily: "Literata",
    color: "#1f1613",
    textAlign: "center",
    marginBottom: "15px",
  },
  certificateDateText: {
    fontSize: "63px",
    fontWeight: "700",
    fontFamily: "GreatVibes",
    color: "#1f1613",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageWidth = 3600
const pageHeight = 2551

const Certificate6 = ({certificateData}) => {
  var formattedDate = "";
  if(certificateData.date != "") {
    const dateParts = certificateData.date.split('-');
    formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
  } else { 
    formattedDate = '02.02.2028'
  }

  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;
  return (
    <>
      <Document>
        <Page size={[pageWidth, pageHeight]}>
          <View style={styles.certificateWrapper}>
            <Image src={image} style={styles.certificateBg} />
            <View style={styles.certificateContentWrapper}>
              <View style={styles.certificateLogoWrapper}>
                {certificateData.logo && (
                  <Image style={styles.companyLogo} src={certificateData.logo } />
                )}
                <Text style={{...styles.companyName, ...(certificateData.companyName != "" ? {} : styles.displayNone)}}>
                  {certificateData.companyName != "" ? certificateData.companyName : "Lorem"}
                </Text>
              </View>
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
                  <Text style={{...styles.certificateDateText, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
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
                      <Text
                        style={{...styles.certificateSigneeImg, ...styles.displayNone}}
                      >Lorem Ipsum</Text>

                  }
                  <Text style={styles.certificateSigneeTitle}>
                    SIGNATURE
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.certificateBadgeWrapper}>
              <Text style={multiBadgeText ? styles.certificateBadgeText1 : styles.singleBadgeText}>
                {badgeText[0]}
              </Text>
              {badgeText[1] &&
                <Text style={styles.certificateBadgeText}>
                  {badgeText[1]}
                </Text>
              }
            </View>
          </View>
        </Page>
      </Document>
    </>
  )
}

export default Certificate6
