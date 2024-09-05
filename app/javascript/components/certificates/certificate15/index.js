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
import image from "../../../../assets/images/certificates-bg/certificate15bg.png"

import CinzelDecorativeBold from "../../../../assets/fonts/CinzelDecorative-Bold.ttf"
import GreatVibesRegular from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import OpenSansRegular from "../../../../assets/fonts/OpenSans.ttf"
import OpenSansBold from "../../../../assets/fonts/OpenSans-Bold.ttf"

Font.register({ family: "CinzelDecorativeBold", src: CinzelDecorativeBold })
Font.register({ family: "GreatVibes", src: GreatVibesRegular })
Font.register({ family: "OpenSansRegular", src: OpenSansRegular })
Font.register({ family: "OpenSansBold", src: OpenSansBold })

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
    top: "450px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#ffffff",
  },
  certificateTitle: {
    fontSize: "83px",
    fontWeight: "700",
    fontFamily: "CinzelDecorativeBold",
    marginBottom: "1050px",
    color: "#ffffff",
  },
  certificateTitleName: {
    fontSize: "167px",
    fontWeight: "700",
    fontFamily: "CinzelDecorativeBold",
    color: "#fed253",
  },
  certificatePresentedTo: {
    fontSize: "67px",
    fontWeight: "500",
    fontFamily: "OpenSansBold",
    color: "#ffffff",
    marginBottom: "70px",
    textTransform: "uppercase",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    color: "#fed254",
    fontFamily: "GreatVibes",
    marginBottom: "150px",
  },
  certificateRecognition: {
    maxWidth: "1800px",
    fontSize: "42px",
    fontWeight: "400",
    fontFamily: "OpenSansRegular",
    color: "#ffffff",
    minHeight: "150px",
  },
  certificateAuthorityWrapper: {
    minHeight: "230px",
    width: "1845px",
    display: "flex",
    flexDirection: "row",
    alignItems: "start",
    justifyContent: "space-between",
    marginTop: "300px",
  },
  certificateSigneeWrapper: {
    width: "600px",
  },
  certificateSigneeTitle: {
    fontSize: "42px",
    fontWeight: "400",
    color: "#ffffff",
    fontFamily: "OpenSansRegular",
    textAlign: "center",
    margin: "0 auto",
    padding: "10px",
    width: "100%",
  },
  certificateSigneeName: {
    fontSize: "58px",
    fontWeight: "500",
    color: "#ffffff",
    fontFamily: "OpenSansBold",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "1300px",
    left: "1050px",
    textAlign: "center",
    width: "340px",
    color: "#fed254",
    lineHeight: "1",
  },
  certificateBadgeText: {
    fontSize: "90px",
    fontFamily: "GreatVibes",
    margin: "0 auto",
    textAlign: "center",
  },
  certificateBadgeText1: {
    fontSize: "40px",
    fontFamily: "OpenSansBlack",
  },
  singleBadgeText: {
    fontSize: "90px",
    fontFamily: "GreatVibes",
    textAlign: "center",
    margin: "0 auto",
    marginTop: "20px",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 3579
const pageWidth = 2551

const Certificate15 = ({certificateData}) => {

  var formattedDate = "";

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  if(certificateData.date != "") {
    formattedDate = formatDate(certificateData.date);
  } else {
    formattedDate = "13 September, 2028"
  }

  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <>
      <Document>
        <Page size={[pageWidth, pageHeight]}>
          <View style={styles.certificateWrapper}>
            <Image src={image} style={styles.certificateBg} />
            <View style={styles.certificateContentWrapper}>
              <Text style={styles.certificateTitleName}>Certificate</Text>
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
                  <Text style={styles.certificateSigneeTitle}>Date</Text>
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                    {formattedDate}
                  </Text>
                </View>
                <View style={styles.certificateSigneeWrapper}>
                  <Text style={styles.certificateSigneeTitle}>
                    {certificateData.firstSigneeTitle}
                  </Text>
                  <Text style={styles.certificateSigneeName}>
                    {certificateData.firstSigneeName}
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.certificateBadgeWrapper}>
              <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
                {certificateData.badgeText.value}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  )
}

export default Certificate15
