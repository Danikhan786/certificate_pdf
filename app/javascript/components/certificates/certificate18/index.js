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
import image from "../../../../assets/images/certificates-bg/certificate18bg.png"

import ExoBold from "../../../../assets/fonts/Exo-Bold.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import MontserratBold from "../../../../assets/fonts/Montserrat-Bold.ttf"
import MontserratSemiBold from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import OpenSansSemiBold from "../../../../assets/fonts/OpenSans-SemiBold.ttf"
import OpenSansBlack from "../../../../assets/fonts/OpenSans-ExtraBold.ttf"

Font.register({ family: "ExoBold", src: ExoBold })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "MontserratBold", src: MontserratBold })
Font.register({ family: "MontserratSemiBold", src: MontserratSemiBold })
Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "OpenSansSemiBold", src: OpenSansSemiBold })
Font.register({ family: "OpenSansBlack", src: OpenSansBlack })

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
    top: "490px",
    left: "1068px",
    right: "0",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left",
    color: "#181c1e",
  },
  certificateTitleName: {
    fontSize: "167px",
    fontWeight: "700",
    fontFamily: "MontserratBold",
    color: "#230760",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  certificateTitle: {
    fontSize: "83px",
    fontWeight: "500",
    fontFamily: "MontserratSemiBold",
    color: "#181c1e",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textTransform: "uppercase",
  },
  certificatePresentedTo: {
    fontSize: "67px",
    fontWeight: "500",
    fontFamily: "OpenSansSemiBold",
    marginTop: "250px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#1b1f21",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    fontFamily: "GreatVibes",
    color: "#f2c62c",
    marginBottom: "70px",
  },
  certificateRecognition: {
    maxWidth: "1814px",
    fontSize: "42px",
    fontWeight: "400",
    fontFamily: "OpenSans",
    color: "#2d3538",
    marginBottom: "140px",
    minHeight: "200px",
  },
  certificateAuthorityWrapper: {
    minHeight: "350px",
    width: "1750px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "600px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    fontFamily: "OpenSans",
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
  certificateBadgeWrapper: {
    position: "absolute",
    top: "480px",
    left: "270px",
    textAlign: "center",
    color: "#230760",
    width: "370px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    lineHeight: "1",
  },
  certificateBadgeTextTop: {
    fontSize: "100px",
    fontFamily: "GreatVibes",
  },
  certificateBadgeText: {
    fontSize: "50px",
    fontFamily: "OpenSansBlack",
    textTransform: "uppercase",
  },
  singleBadgeText: {
    fontSize: "100px",
    fontFamily: "GreatVibes",
    marginTop: "25px"
  },
  certificateLogoWrapper: {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "200px",
    right: "100px",
  },
  certificateLogo: {
    width: "150px",
    height: "150px",
    margin: "0 auto 20px auto",
  },
  companyName: {
    fontFamily: "ExoBold",
    fontSize: "65px",
    color: "#ffffff",
    fontWeight: "500",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate18 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  var formattedDate = "";

  if(certificateData.date != "") {
    formattedDate = formatDate(certificateData.date);
  } else {
    formattedDate = "20 September, 2028";
  }

  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <Text style={styles.certificateTitleName}>CERTIFICATE</Text>
            <Text style={styles.certificateTitle}>OF {certificateData.certificateType.value.toUpperCase()}</Text>
            <Text style={styles.certificatePresentedTo}>
              {certificateData.presentedTo.label}
            </Text>
            <View>
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
            </View>
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
                <Text style={styles.certificateSigneeTitle}>Signature</Text>
              </View>
              <View style={styles.certificateSigneeWrapper}>
                <Text style={{...styles.certificateSigneeDate, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                  {formattedDate}
                </Text>
                <Text style={styles.certificateSigneeTitle}>Date</Text>
              </View>
            </View>
          </View>
          <View style={styles.certificateBadgeWrapper}>
            <Text style={multiBadgeText ? styles.certificateBadgeTextTop : styles.singleBadgeText}>
              {badgeText[0]}
            </Text>
            {badgeText[1] &&
              <Text style={styles.certificateBadgeText}>
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
        </View>
      </Page>
    </Document>
  )
}

export default Certificate18
