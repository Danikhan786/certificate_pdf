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
import image from "../../../../assets/images/certificates-bg/certificate17bg.png"

import MyriadProBold from "../../../../assets/fonts/MyriadPro-Bold.OTF"
import MyriadProRegular from "../../../../assets/fonts/MyriadPro-Regular.ttf"
import HelveticaNeueBold from "../../../../assets/fonts/HelveticaNeueBold.otf"

Font.register({ family: "MyriadProBold", src: MyriadProBold })
Font.register({ family: "MyriadProRegular", src: MyriadProRegular })
Font.register({ family: "HelveticaNeueBold", src: HelveticaNeueBold })

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
    top: "460px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#0d0e11",
  },
  certificateTitleName: {
    fontSize: "200px",
    fontWeight: "700",
    fontFamily: "MyriadProBold",
    color: "#17405b",
    marginBottom: "58px",
  },
  certificateTitle: {
    fontSize: "99px",
    fontWeight: "700",
    fontFamily: "HelveticaNeueBold",
    color: "#f3cf6e",
  },
  certificatePresentedTo: {
    fontSize: "67px",
    fontWeight: "700",
    fontFamily: "MyriadProBold",
    marginTop: "200px",
    marginBottom: "150px",
    color: "#f4cf6f",
  },
  certificateReceiverName: {
    fontSize: "200px",
    fontWeight: "400",
    fontFamily: "MyriadProRegular",
    color: "#3b3b3b",
    textAlign: "center",
    paddingLeft: "200px",
    paddingRight: "200px",
    lineHeight: "0",
    borderBottom: "5px solid #f2cd6d",
  },
  certificateRecognition: {
    marginTop: "80px",
    maxWidth: "1925px",
    fontSize: "42px",
    fontWeight: "700",
    fontFamily: "MyriadProBold",
    color: "#3b3b3b",
    minHeight: "150px",
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
  certificateSigneeTitle: {
    fontSize: "67px",
    fontWeight: "400",
    fontFamily: "MyriadProRegular",
    color: "#3b3c3b",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "5px solid #f2cd6d",
    width: "100%",
    paddingTop: "10px",
  },
  certificateSigneeWrapper: {
    width: "600px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateSigneeDate: {
    fontSize: "67px",
    fontWeight: "400",
    fontFamily: "MyriadProRegular",
    color: "#3b3c3b",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
    paddingTop: "10px",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    bottom: "500px",
    left: "0",
    right: "0",
    textAlign: "center",
  },
  singleBadgeText: {

  },
  displayNone: {
    color: 'transparent',
  },
})

const pageWidth = 3600
const pageHeight = 2551

const Certificate17 = ({certificateData}) => {

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
    formattedDate = "20 September, 2028";
  }

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <Text style={styles.certificateTitleName}>Certificate</Text>
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
                {certificateData.firstSigneeSignature ?
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.firstSigneeSignature}
                    />
                  :
                    <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}></Text>
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
        </View>
      </Page>
    </Document>
  )
}

export default Certificate17
