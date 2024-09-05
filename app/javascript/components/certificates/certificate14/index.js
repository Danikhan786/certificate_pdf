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
import image from "../../../../assets/images/certificates-bg/certificate14bg.png"

import Arizonia from "../../../../assets/fonts/Arizonia-Regular.ttf"
import Chapaza from "../../../../assets/fonts/Chapaza.ttf"
import MontserratBold from "../../../../assets/fonts/Montserrat-Bold.ttf"
import MontserratRegular from "../../../../assets/fonts/Montserrat-Variable.ttf"

Font.register({ family: "Arizonia", src: Arizonia })
Font.register({ family: "Chapaza", src: Chapaza })
Font.register({ family: "MontserratBold", src: MontserratBold })
Font.register({ family: "MontserratRegular", src: MontserratRegular })

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
    top: "360px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#0d0e11",
  },
  certificateLogoWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "50px",
  },
  companyLogo: {
    maxWidth: "310px",
    height: "220px",
    objectFit: "contain",
    marginBottom: "30px",
  },
  companyLogoNone: {
    maxWidth: "350px",
    maxHeight: "365px",
    height: "365px",
    width: "100%",
    marginBottom: "30px",
    opacity: 0
  },
  companyName: {
    fontSize: "66px",
    fontWeight: "400",
    fontFamily: "Chapaza",
    color: "#232e58",
  },
  certificateTitle: {
    fontSize: "167px",
    fontWeight: "400",
    fontFamily: "Chapaza",
    color: "#232e58",
  },
  certificatePresentedTo: {
    fontSize: "50px",
    fontWeight: "700",
    fontFamily: "MontserratBold",
    marginBottom: "100px",
    color: "#e5bc6b",
  },
  certificateReceiverName: {
    fontSize: "221px",
    fontWeight: "400",
    fontFamily: "Arizonia",
    color: "#0d0e11",
    marginBottom: "80px",
    textAlign: "center",
  },
  certificateRecognition: {
    maxWidth: "1745px",
    fontSize: "35px",
    fontWeight: "400",
    fontFamily: "MontserratRegular",
    color: "#232e58",
    minHeight: "127px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    minHeight: "350px",
    width: "1743px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "150px",
  },
  certificateSigneeName: {
    fontSize: "42px",
    fontWeight: "700",
    fontFamily: "MontserratBold",
    color: "#232e58",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "31px",
    fontWeight: "400",
    fontFamily: "MontserratRegular",
    color: "#7b83a1",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "5px solid #0d0e11",
    width: "100%",
    paddingTop: "10px",
  },
  certificateSigneeWrapper: {
    width: "514px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    bottom: "520px",
    left: "0",
    right: "0",
    textAlign: "center",
  },
  certificateBadgeText: {
    fontSize: "32px",
    fontWeight: "400",
    fontFamily: "Chapaza",
    color: "#da1f47",
    width: "180px",
    margin: "0 auto",
    textAlign: "center",
    textTransform: "uppercase",
  },
  displayNone: {
    color: 'transparent',
  },
  singleBadgeText: {
    fontSize: "32px",
    fontFamily: "Chapaza",
    color: "#da1f47",
    width: "180px",
    margin: "0 auto",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "20px",
  },
})

const pageWidth = 3600
const pageHeight = 2551

const Certificate14 = ({certificateData}) => {
  const toTitleCase = (inputString) => {
    return inputString.replace(/\w\S*/g, function(word) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    });
  }

  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <View style={styles.certificateLogoWrapper}>
              {certificateData.logo ?
                  <Image style={styles.companyLogo} src={certificateData.logo} />
                :
                  <Image style={{...styles.companyLogoNone, ...styles.displayNone}} src={image} />
              }
              <Text style={{...styles.companyName, ...(certificateData.companyName != "" ? {} : styles.displayNone)}}>{certificateData.companyName != "" ? certificateData.companyName : 'Lorem ipsum'}</Text>
            </View>
            <Text style={styles.certificateTitle}>Certificate of {toTitleCase(certificateData.certificateType.value)}</Text>
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
                {certificateData.firstSigneeSignature ?
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.firstSigneeSignature}
                    />
                  : 
                    <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem Ipsum</Text>
                }
                <Text style={{...styles.certificateSigneeName, ...(certificateData.firstSigneeName != "" ? {} : styles.displayNone)}}>
                  {certificateData.firstSigneeName != "" ? certificateData.firstSigneeName : "Lorem ipsum"}
                </Text>
                <Text style={{...styles.certificateSigneeTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
                  {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
                </Text>
              </View>
              <View style={styles.certificateSigneeWrapper}>
                {certificateData.secondSigneeSignature ? 
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.secondSigneeSignature}
                    />
                  :
                    <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem Ipsum</Text>
                }
                <Text style={{...styles.certificateSigneeName, ...(certificateData.secondSigneeName != "" ? {} : styles.displayNone)}}>
                  {certificateData.secondSigneeName != "" ? certificateData.secondSigneeName : "Lorem ipsum"}
                </Text>
                <Text style={{...styles.certificateSigneeTitle, ...(certificateData.secondSigneeTitle != "" ? {} : styles.displayNone)}}>
                  {certificateData.secondSigneeTitle != "" ? certificateData.secondSigneeTitle : "Lorem ipsum"}
                </Text>
              </View>
            </View>
          </View>
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
        </View>
      </Page>
    </Document>
  )
}

export default Certificate14
