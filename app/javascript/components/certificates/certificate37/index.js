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
import image from "../../../../assets/images/certificates-bg/certificate37bg.png"

import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import oldFont from "../../../../assets/fonts/OLD.ttf"
import Blacksword from "../../../../assets/fonts/Blacksword.otf"
import GoboldReg from "../../../../assets/fonts/GoboldRegular.otf"
import nexaLight from "../../../../assets/fonts/nexa-light.otf"
import nexaBold from "../../../../assets/fonts/nexa-bold.otf"


Font.register({ family: "MontserratSemi", src: MontserratSemi })
Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "oldFont", src: oldFont })
Font.register({ family: "Blacksword", src: Blacksword })
Font.register({ family: "GoboldReg", src: GoboldReg })
Font.register({ family: "nexaLight", src: nexaLight })
Font.register({ family: "nexaBold", src: nexaBold })


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
    top: "200px",
    left: "390px",
  },
  certificateLogo: {
    minWidth: "220px",
    minHeight: "150px",
    margin: "0 auto 20px auto",
  },
  companName: {
    fontFamily: "GoboldReg",
    fontSize: "65px",
    color: "#4d3a19",
    fontWeight: "500",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "1830px",
    left: "505px",
    textAlign: "center",
    width: "300px",
    fontSize: "55px",
    fontFamily: "GoboldReg",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "4px",
    lineHeight: "1.2"
  },
  certificateBadgeText: {
  },
  singleBadgeText: {
    marginTop: "30px",
  },
  certificateTitleWrapper: {
    position: "absolute",
    top: "580px",
    right: "400px",
    maxWidth: "2000px",
    width: "100%",
    textAlign: "right",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "end",
  },
  certificateTitle: {
    position: "absolute",
    right: "0",
    top: "-180px",
    fontSize: "190px",
    fontFamily: "oldFont",
    color: "#c6a871",
    lineHeight: "0px",
    margin: "0",
    textAlign: "right",
    textTransform: "capitalize",
  },
  certificateValue: {
    position: "absolute",
    top: "20px",
    right: "0",
    fontSize: "110px",
    fontFamily: "MontserratReg",
    color: "#4d3a19",
    margin: "0",
    letterSpacing: "10px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "900px",
    right: "300px",
    maxWidth: "1685px",
    width: "100%",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    fontFamily: "Blacksword",
    color: "#4d3a19",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "70px",
  },
  issueDate: {
    position: "absolute",
    right: "0",
    top: "500px",
    fontSize: "50px",
    backgroundColor: "#c6a871",
    color: "#fff",
    padding: "7px 30px",
    fontFamily: "GoboldReg",
    letterSpacing: "5px",
    textAlign: "center",
    width: "600px",
  },
  certificateRecognition: {
    marginTop: "200px",
    textAlign: "center",
    fontSize: "52px",
    fontFamily: "nexaLight",
    color: "#4d3a19",
    marginBottom: "140px",
    minHeight: "200px",
  },
  certificateSigneeContainer: {
    position: "absolute",
    top: "2100px",
    right: "350px",
    maxWidth: "2000px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: "40px",
    color: "#000",
    textAlign: "center",
  },
  authorityWrapper2: {
    marginLeft: "1400px"
  },
  certificateDirectorTitle: {
    fontFamily: "nexaBold",
    fontSize: "40px",
  },
  certificateAwardedTitle: {
    fontFamily: "nexaBold",
    fontSize: "40px",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate37 = ({certificateData}) => {

  function formatDate(inputDate) {
    const dateParts = inputDate.split('-');
    const year = dateParts[0];
    const month = new Date(inputDate).toLocaleString('default', { month: 'long' }).toUpperCase();
    const day = dateParts[2];
  
    return `${month}-${day}-${year}`;
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
            {certificateData.logo && (
              <Image style={styles.certificateLogo} src={certificateData.logo} />
            )}
            <Text style={styles.companName}>{certificateData.companyName}</Text>
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
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
              <Text style={{...styles.issueDate, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                {formattedDate}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
            </View>

            <View style={styles.certificateSigneeContainer}>
              <View style={styles.authorityWrapper}>
                <Text style={styles.certificateDirectorTitle}>{certificateData.firstSigneeTitle}</Text>
                <Text style={styles.certificateDirectorName}>
                  {certificateData.firstSigneeName}
                </Text>
              </View>

              <View style={styles.authorityWrapper2}>
                <Text style={styles.certificateAwardedTitle}>{certificateData.secondSigneeTitle}</Text>
                <Text style={styles.certificateAwardedName}>
                  {certificateData.secondSigneeName}
                </Text>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate37