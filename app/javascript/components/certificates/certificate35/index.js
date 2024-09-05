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
import image from "../../../../assets/images/certificates-bg/certificate35bg.png"

import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import MontserratSemi from "../../../../assets/fonts/Montserrat-SemiBold.ttf"
import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import oldFont from "../../../../assets/fonts/OLD.ttf"
import Blacksword from "../../../../assets/fonts/Blacksword.otf"
import GoboldReg from "../../../../assets/fonts/GoboldRegular.otf"
import nexaLight from "../../../../assets/fonts/nexa-light.otf"
import nexaBold from "../../../../assets/fonts/nexa-bold.otf"


Font.register({ family: "OpenSans", src: OpenSans })
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
    right: "0",
    left: "0",
  },
  certificateLogo: {
    width: "150px",
    height: "150px",
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
    top: "2020px",
    right: "1690px",
    textAlign: "center",
    margin: "0 auto",
    fontSize: "40px",
    fontFamily: "GoboldReg",
    color: "#edece8",
    maxWidth: "200px",
    textTransform: "uppercase",
    letterSpacing: "4px",
    lineHeight: "1.2"
  },
  certificateBadgeText: {
  },
  singleBadgeText: {
    marginTop: "10px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "750px",
    left: "850px",
    right: "0",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left",
    color: "#181c1e",
  },
  certificateTitleWrapper: {
    position: "absolute",
    top: "0",
    left: "0",
    textAlign: "center",
    display: "flex",
    maxWidth: "2000px",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  certificateTitle: {
    fontSize: "180px",
    fontFamily: "oldFont",
    color: "#c6a871",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "center",
    textTransform: "capitalize",
  },
  certificateValue: {
    fontSize: "180px",
    fontFamily: "oldFont",
    color: "#c6a871",
    margin: "0",
    marginLeft: "40px",
    maxWidth: "1685px",
    textTransform: "capitalize",
  },
  presenterWrapper: {
    position: "absolute",
    top: "250px",
    left: "50px",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
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
    fontSize: "50px",
    backgroundColor: "#c6a871",
    color: "#fff",
    padding: "7px 30px",
    fontFamily: "GoboldReg",
    letterSpacing: "5px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "52px",
    fontFamily: "nexaLight",
    color: "#4d3a19",
    marginBottom: "140px",
    minHeight: "200px",
  },
  certificateSigneeContainer: {
    position: "absolute",
    top: "1300px",
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

const Certificate35 = ({certificateData}) => {
  var formattedDate = "";
  if(certificateData.date != "") {
    formattedDate = certificateData.date
  } else {
    formattedDate = "02-02-2028"
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
                Certificate of
              </Text>
              <Text style={styles.certificateValue}>
                {certificateData.certificateType.value}
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
                <Text style={styles.certificateDirectorTitle}>{certificateData.firstSigneeName}</Text>
                <Text style={styles.certificateDirectorName}>
                  {certificateData.firstSigneeTitle}
                </Text>
              </View>

              <View style={styles.authorityWrapper2}>
                <Text style={styles.certificateAwardedTitle}>{certificateData.secondSigneeName}</Text>
                <Text style={styles.certificateAwardedName}>
                  {certificateData.secondSigneeTitle}
                </Text>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate35