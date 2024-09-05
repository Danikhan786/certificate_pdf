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
import image from "../../../../assets/images/certificates-bg/certificate13bg.png"

import Literata from "../../../../assets/fonts/Literata-Regular.ttf"
import GeorgiaRegular from "../../../../assets/fonts/georgia-regular.ttf"
import GeorgiaBold from "../../../../assets/fonts/georgia-bold.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"

Font.register({ family: "Literata", src: Literata })
Font.register({ family: "GeorgiaRegular", src: GeorgiaRegular })
Font.register({ family: "GeorgiaBold", src: GeorgiaBold })
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
  certificateContentWrapper: {
    position: "absolute",
    top: "330px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#0d0e11",
  },
  certificateTitleName: {
    fontSize: "229px",
    fontWeight: "700",
    fontFamily: "GeorgiaBold",
    color: "#0d0e11",
  },
  certificateTitle: {
    fontSize: "92px",
    fontFamily: "GeorgiaRegular",
    color: "#0d0e11",
  },
  certificatePresentedTo: {
    fontSize: "104px",
    fontWeight: "400",
    fontFamily: "GeorgiaRegular",
    marginTop: "200px",
    marginBottom: "120px",
    color: "#0d0e11",
  },
  certificateReceiverName: {
    fontSize: "229px",
    fontWeight: "400",
    fontFamily: "GreatVibes",
    color: "#0d0e11",
    marginBottom: "50px",
    textAlign: "center",
    paddingLeft: "100px",
    paddingRight: "100px",
    borderBottom: "5px solid #0d0e11",
  },
  certificateRecognition: {
    maxWidth: "2166px",
    fontSize: "83px",
    fontWeight: "400",
    fontFamily: "GreatVibes",
    color: "#0d0e11",
    minHeight: "295px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    minHeight: "300px",
    width: "2100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginTop: "100px",
  },
  certificateSigneeTitle: {
    fontSize: "63px",
    fontWeight: "400",
    fontFamily: "Literata",
    color: "#0d0e11",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "5px solid #0d0e11",
    width: "100%",
  },
  certificateSigneeWrapper: {
    width: "514px",
  },
  certificateSigneeDate: {
    fontSize: "63px",
    fontFamily: "GreatVibes",
    fontWeight: "400",
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
    bottom: "530px",
    left: "0",
    right: "0",
    textAlign: "center",
  },
  certificateBadgeText: {
    fontSize: "38px",
    fontWeight: "400",
    fontFamily: "GeorgiaRegular",
    color: "#fabd23",
    width: "180px",
    margin: "0 auto",
    textAlign: "center",
  },
  singleBadgeText: {
    fontSize: "38px",
    fontFamily: "GeorgiaRegular",
    color: "#fabd23",
    width: "180px",
    margin: "0 auto",
    textAlign: "center",
    marginBottom: "15px"
  },
  displayNone: {
    color: 'transparent',
  },

})

const pageWidth = 3600
const pageHeight = 2551

const Certificate13 = ({certificateData}) => {

  var formattedDate = "";
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}.${year}`;
  };

  if(certificateData.date != "") {
    formattedDate = formatDate(certificateData.date);
  } else {
    formattedDate = '02.02.2028';
  }

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
            <Text style={styles.certificateReceiverName}>
              {certificateData.recipientNames[0]}
            </Text>
            <Text style={styles.certificateRecognition}>
              {certificateData.recognitionText}
            </Text>
            <View style={styles.certificateAuthorityWrapper}>
              <View style={styles.certificateSigneeWrapper}>
                <Text style={{...styles.certificateSigneeDate, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                  {formattedDate}
                </Text>
                <Text style={styles.certificateSigneeTitle}>Date</Text>
              </View>
              <View style={styles.certificateSigneeWrapper}>
                {certificateData.firstSigneeSignature ?
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.firstSigneeSignature}
                    />
                  :
                    <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>
                      Lorem ipsum
                    </Text>
                }
                <Text style={styles.certificateSigneeTitle}>SIGNATURE</Text>
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
  )
}

export default Certificate13
