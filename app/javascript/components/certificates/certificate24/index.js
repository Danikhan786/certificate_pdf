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
import image from "../../../../assets/images/certificates-bg/certificate24bg.png"

import NexaLight from "../../../../assets/fonts/nexa-light.otf"
import Roboto_bold from "../../../../assets/fonts/Roboto-Bold.ttf"
import NexaBold from "../../../../assets/fonts/nexa-bold.otf"
import kenyanCoffee from "../../../../assets/fonts/kenyanCoffeerg.otf"
import Elephant from "../../../../assets/fonts/ELEPHNT.TTF"
import Nirmala from "../../../../assets/fonts/Nirmala.ttf"
import helloHoney from "../../../../assets/fonts/helloHoney.otf"

Font.register({ family: "NexaLight", src: NexaLight })
Font.register({ family: "Roboto_bold", src: Roboto_bold })
Font.register({ family: "NexaBold", src: NexaBold })
Font.register({ family: "kenyanCoffee", src: kenyanCoffee })
Font.register({ family: "Elephant", src: Elephant })
Font.register({ family: "Nirmala", src: Nirmala })
Font.register({ family: "helloHoney", src: helloHoney })

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
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "320px",
    left: "1700px",
    margin: "0 auto",
    color: "#3b3b3b",
    textAlign: "start",
    display: "flex",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "0",
    left: "-20px",
    right: "0",
    fontFamily: "kenyanCoffee",
    color: "#492d18",
    textAlign: "center",
    textTransform: "uppercase",
    width: "230px",
  },
  certificateBadgeText: {
    fontSize: "65px",
  },
  certificateBadgeText1: {
    fontSize: "70px",
  },
  singleBadgeText: {
    fontSize: "65px",
    marginTop: "30px",
  },
  certificateForWrapper: {  
    position: "absolute",
    top: "630px",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: "100%",
    lineHeight: "normal",
  },
  certificateLable: {
    position: "absolute",
    width: "100%",
    top: "0",
    left: "0",
    right: "0",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    fontSize: "250px",
    fontFamily: "Elephant",
    color: "#1c3a6a",
  },
  certificateValue: {
    position: "absolute",
    top: "300px",
    left:"0",
    right: "0",
    fontSize: "38px",
    fontFamily: "Nirmala",
    textTransform: "uppercase",
    letterSpacing: "55px",
  },
  presentedWrapper: {
    position: "absolute",
    top: "1001px",
    right: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
  },
  presenterMessage: {
    textAlign: "center",
    fontSize: "60px",
    marginTop: "80px",
    marginBottom: "30px",
    fontFamily: "NexaLight",
    color: "#1c3a6a",
  },
  recieverName: {
    fontSize: "270px",
    fontWeight: "400",
    fontFamily: "helloHoney",
    color: "#1c3a6a",
    borderBottom: "5px solid #1c3a6a",
    width: "40%",
    paddingBottom: "40px",
    margin: "60px auto 70px",
    textAlign: "center",
    textTransform: "capitalize",
  },
  presenterValue: {
    textAlign: "center",
    fontSize: "50px",
    fontFamily: "NexaLight",
    color: "#000",
  },
  leftDivider: {
    position: "absolute",
    top: "-45px",
    left: "750px",
    backgroundColor: "#000",
    height: "2px",
    width: "400px"
  },
  rightDivider: {
    position: "absolute",
    top: "-45px",
    right: "750px",
    backgroundColor: "#000",
    height: "2px",
    width: "400px"
  },
  bottomDetails: {
    maxWidth: "1300px",
    margin: "0 auto",
    width: "100%",
    position: "absolute",
    bottom: "400px",
    left: "600px",
    right: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  signTitle: {
    position: "absolute",
    top: "0",
    left: "100px",
    width: "30%",
    borderTop: "4px solid #000",
    marginTop: "40px",
    paddingTop: "20px",
    fontSize: "50px",
    marginLeft: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto_bold",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  rightSection: {
    display: "block",
    position: "absolute",
    right: "0",
    top: "0",
    left: "1500px",
    marginLeft: "500px",
  },
  dateOfIssue: {
    position: "absolute",
    top: "-30px",
    left: "0",
    fontSize: "50px",
    fontFamily: "NexaBold",
  },
  dateTitle: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "70%",
    borderTop: "4px solid #000",
    marginTop: "40px",
    paddingTop: "20px",
    fontSize: "50px",
    marginLeft: "80px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Roboto_bold",
  },
  divider: {
    position: "absolute",
    top: "40px",
    left: "0",
    margin: "0 auto",
    backgroundColor: "#000",
    height: "4px",
    width: "280px",
  },
  certificateSigneeWrapper: {
    height: "350px",
    position: "absolute",
    left: "0",
    display: "block",
    width: "100%",
  },
  certificateSigneeTitle: {
    fontSize: "45px",
    fontWeight: "400",
    fontFamily: "Nirmala",
    color: "#000",
    textAlign: "center",
    margin: "0 auto",
    borderTop: "2px solid #000",
    padding: "30px 0",
    width: "100%",
    textTransform: "uppercase",
  },
  certificateSigneeImg: {
    position: "absolute",
    // left: "0",
    width: "100%",
    top: "-150px",
    left: "160px",
    maxWidth: "400px",
    height: "160px",
    margin: "0 auto",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 2625
const pageWidth = 3579

const Certificate24 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;
  var formattedDate = "";

  if(certificateData.date != "") {
    formattedDate = certificateData.date;
  } else {
    formattedDate = "02-02-2028";
  }
  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>

            <View style={styles.certificateBadgeWrapper}>
              <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
                {badgeText[0]}
              </Text>
              {badgeText[1] &&
                <Text style={styles.certificateBadgeText1}>
                  {badgeText[1]}
                </Text>
              }
            </View>

          </View>
        </View>
        <View style={styles.certificateForWrapper}>
          <Text style={styles.certificateLable}>
            CERTIFICATE
          </Text>
          <Text style={styles.certificateValue}>
            OF {certificateData.certificateType.value.toUpperCase()}
          </Text>
        </View>
        <View style={styles.presentedWrapper}>
          <Text style={styles.presenterMessage}>
            {certificateData.topText}
          </Text>
          <View style={styles.leftDivider}></View>
          <Text style={styles.recieverName}>
            {certificateData.recipientNames[0]}
          </Text>
          <View style={styles.rightDivider}></View>
          <Text style={styles.presenterValue}>
            {certificateData.recognitionText}
          </Text>
        </View>
        <View style={styles.bottomDetails}>
        <View style={styles.certificateSigneeWrapper}>
              {certificateData.firstSigneeSignature ?
                  <Image
                    style={styles.certificateSigneeImg}
                    src={certificateData.firstSigneeSignature}
                  />
                :
                 <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}></Text>
              }
            <Text style={styles.signTitle}>Signatures</Text>
          </View>
          <View style={styles.rightSection}>
            <Text style={{...styles.dateOfIssue, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
              {formattedDate}
            </Text>
            <View style={styles.divider}></View>
            <Text style={styles.dateTitle}>Date</Text>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Certificate24