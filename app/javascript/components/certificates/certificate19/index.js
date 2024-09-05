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
import image from "../../../../assets/images/certificates-bg/certificate19bg.png"

import Exmouth from "../../../../assets/fonts/Exmouth.ttf"
import GeorgiaBold from "../../../../assets/fonts/georgia-bold.ttf"
import MyriadProRegular from "../../../../assets/fonts/MyriadPro-Regular.ttf"
import NexaBold from "../../../../assets/fonts/nexa-bold.otf"
import OldeEnglish from "../../../../assets/fonts/OldeEnglish.ttf"
import MontBold from "../../../../assets/fonts/Mont-HeavyDEMO.otf"
import MontRegular from "../../../../assets/fonts/Mont-ExtraLightDEMO.otf"

Font.register({ family: "Exmouth", src: Exmouth })
Font.register({ family: "GeorgiaBold", src: GeorgiaBold })
Font.register({ family: "MyriadProRegular", src: MyriadProRegular })
Font.register({ family: "NexaBold", src: NexaBold })
Font.register({ family: "OldeEnglish", src: OldeEnglish })
Font.register({ family: "MontBold", src: MontBold })
Font.register({ family: "MontRegular", src: MontRegular })

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
    top: "1100px",
    left: "920px",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#3b3b3b",
  },
  certificateTitleWrapper: {
    position: "absolute",
    top: "170px",
    left: "250px",
  },
  certificateTitleName: {
    fontSize: "200px",
    fontWeight: "700",
    fontFamily: "OldeEnglish",
    color: "#ddb359",
    lineHeight: "0px",
    margin: "0",
    textTransform: "uppercase",
  },
  certificateTitle: {
    fontSize: "120px",
    fontWeight: "400",
    fontFamily: "MyriadProRegular",
    textTransform: "uppercase",
    color: "#ffffff",
  },
  certificatePresentedTo: {
    fontSize: "67px",
    fontWeight: "700",
    fontFamily: "GeorgiaBold",
    textTransform: "uppercase",
    color: "#3b3b3b",
    textAlign: "center",
  },
  certificatePresented: {
    fontSize: "67px",
    fontWeight: "700",
    fontFamily: "GeorgiaBold",
    marginBottom: "100px",
    textTransform: "uppercase",
    color: "#ddb359",
    textAlign: "center",
  },
  certificateReceiverName: {
    fontSize: "270px",
    fontWeight: "400",
    fontFamily: "Exmouth",
    color: "#3b3b3b",
    borderBottom: "8px solid #ddb359",
  },
  certificateRecognition: {
    maxWidth: "2000px",
    fontSize: "42px",
    fontWeight: "700",
    fontFamily: "MontRegular",
    color: "#5e5e5e",
    marginTop: "120px",
    marginBottom: "70px",
    minHeight: "166px",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    bottom: "-320px",
    minHeight: "350px",
    width: "1862px",
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "650px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  certificateSigneeTitle: {
    fontSize: "67px",
    fontWeight: "400",
    fontFamily: "NexaBold",
    color: "#3b3b3b",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "5px solid #ddb359",
    padding: "30px 0",
    width: "100%",
    textTransform: "uppercase",
  },
  certificateSigneeDate: {
    fontSize: "67px",
    fontFamily: "NexaBold",
    fontWeight: "400",
    color: "#3b3b3b",
    margin: "0 auto",
    textAlign: "center",
    width: "100%",
    paddingBottom: "20px",
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

const pageHeight = 2625
const pageWidth = 3579

const Certificate19 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  var formattedDate = "";
 
  if(certificateData.date != "") {
    formattedDate = formatDate(certificateData.date);
  } else {
    formattedDate = "18 September,2028"
  }

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <Text style={styles.certificatePresented}>{certificateData.presentedTo.label}</Text>
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
          <View style={styles.certificateTitleWrapper}>
            <Text style={styles.certificateTitleName}>Certificate</Text>
            <Text style={styles.certificateTitle}>OF {certificateData.certificateType.value.toUpperCase()}</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Certificate19
