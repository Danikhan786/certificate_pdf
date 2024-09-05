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
import image from "../../../../assets/images/certificates-bg/certificate50bg.png"

import MontserratReg from "../../../../assets/fonts/Montserrat-Regular.ttf"
import CormorantLight from "../../../../assets/fonts/CormorantGaramond-Light.ttf"
import CormorantItalic from "../../../../assets/fonts/CormorantGaramond-Italic.ttf"


Font.register({ family: "MontserratReg", src: MontserratReg })
Font.register({ family: "CormorantLight", src: CormorantLight })
Font.register({ family: "CormorantItalic", src: CormorantItalic })

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
    top: "230px",
    left: "400px",
  },
  certificateLogo: {
    width: "150px",
    height: "150px",
    margin: "0 auto 20px auto",
  },
  companName: {
    fontFamily: "CormorantLight",
    fontSize: "80px",
    color: "#ffe7c0",
    fontWeight: "500",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "280px",
    left: "0",
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
    left: "900px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    fontFamily: "CormorantLight",
  },
  certificateTitle: {
    fontSize: "250px",
    lineHeight: "0px",
    margin: "0",
    maxWidth: "1685px",
    textAlign: "end",
    color: "#c99b70",
    textTransform: "uppercase",
  },
  certificateValue: {
    fontSize: "70px",
    textAlign: "center",
    marginTop: "-40px",
    maxWidth: "1685px",
    color: "#fff",
    textTransform: "capitalize",
  },
  presenterWrapper: {
    position: "absolute",
    top: "250px",
    left: "800px",
    maxWidth: "1685px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems:"center",
    textAlign: "center",
  },
  certificateReceiverName: {
    fontSize: "240px",
    fontWeight: "400",
    fontFamily: "CormorantLight",
    color: "#fff",
    textTransform: "capitalize",
    marginBottom: "60px",
    textAlign: "center",
    marginTop: "300px",
  },
  certificateRecognition: {
    marginTop: "40px",
    fontSize: "100px",
    fontFamily: "CormorantLight",
    color: "#fff",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateDate: {
    fontSize: "90px",
    color: "#c99b70",
    textAlign: "center",
    fontFamily: "CormorantItalic",
  },
  certificateAuthorityWrapper: {
    minHeight: "350px",
    width: "2550px",
    position: "absolute",
    top: "1800px",
    left: "300px",
    display: "flex",
    gap: "90px",
    flexDirection: "row",
  },
  teamWrapper: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    gap: "100px",
  },
  certificateSigneeWrapper: {
    width: "800px",
  },
  certificateSigneeName: {
    fontSize: "55px",
    color: "#cfbba1",
    fontFamily: "CormorantLight",
    textAlign: "center",
    margin: "0 auto",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "28px",
    fontWeight: "400",
    fontFamily: "CormorantLight",
    color: "#fff",
    textAlign: "center",
    margin: "0 auto",
    padding: "30px 0",
    width: "100%",
    textTransform: "uppercase",
  },
  singleBadgeText: {

  },
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate50 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const formattedDate = formatDate(certificateData.date);
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
          
          <View style={styles.certificateContentWrapper}>
            <View style={styles.certificateTitleWrapper}>
              <Text style={styles.certificateTitle}>
                certificate
              </Text>
              <Text style={styles.certificateValue}>
                {certificateData.presentedTo.label}
              </Text>
            </View>

            <View style={styles.presenterWrapper}>
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
              <Text style={styles.certificateDate}>
                on January 1st 20xx.
              </Text>
            </View>

            <View style={styles.certificateAuthorityWrapper}>
              <View style={styles.teamWrapper}>
                <View style={styles.certificateSigneeWrapper}>
                  <Text style={styles.certificateSigneeName}>Robert William</Text>
                  <Text style={styles.certificateSigneeTitle}>Chief executive officer</Text>
                </View>

                <View style={styles.certificateSigneeWrapper}>
                <Text style={styles.certificateSigneeName}>James Smith</Text>
                  <Text style={styles.certificateSigneeTitle}>President</Text>
                </View>
              </View>

              <View style={styles.teamWrapper}>
                <View style={styles.certificateSigneeWrapper}>
                <Text style={styles.certificateSigneeName}>Elizabeth Jones</Text>
                  <Text style={styles.certificateSigneeTitle}>Managers</Text>
                </View>

                <View style={styles.certificateSigneeWrapper}>
                <Text style={styles.certificateSigneeName}>Linda Brown</Text>
                  <Text style={styles.certificateSigneeTitle}>Supervisors</Text>
                </View>
              </View>

              <View style={styles.teamWrapper}>
                <View style={styles.certificateSigneeWrapper}>
                <Text style={styles.certificateSigneeName}>Elizabeth Jones</Text>
                  <Text style={styles.certificateSigneeTitle}>Managers</Text>
                </View>

                <View style={styles.certificateSigneeWrapper}>
                <Text style={styles.certificateSigneeName}>Linda Brown</Text>
                  <Text style={styles.certificateSigneeTitle}>Supervisors</Text>
                </View>
              </View>

            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate50