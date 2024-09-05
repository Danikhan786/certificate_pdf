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
import image from "../../../../assets/images/certificates-bg/certificate22bg.png"

import Exmouth from "../../../../assets/fonts/Exmouth.ttf"
import NexaLight from "../../../../assets/fonts/nexa-light.otf"
import KenyanCoffeeRg from "../../../../assets/fonts/kenyan_coffee_rg.ttf"
import CENTAUR from "../../../../assets/fonts/CENTAUR.TTF"
import Nirmala from "../../../../assets/fonts/Nirmala.ttf"
import Roboto_bold from "../../../../assets/fonts/Roboto-Bold.ttf"
import NexaBold from "../../../../assets/fonts/nexa-bold.otf"

Font.register({ family: "Exmouth", src: Exmouth })
Font.register({ family: "NexaLight", src: NexaLight })
Font.register({ family: "KenyanCoffeeRg", src: KenyanCoffeeRg })
Font.register({ family: "CENTAUR", src: CENTAUR })
Font.register({ family: "Nirmala", src: Nirmala })
Font.register({ family: "Roboto_bold", src: Roboto_bold })
Font.register({ family: "NexaBold", src: NexaBold })

// Create styles
const styles = StyleSheet.create({
  page: {
    // flexDirection: "row",
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
    top: "500px",
    left: "200px",
    color: "#3b3b3b",
    textAlign: "start",
    display: "flex",
  },
  certificateLogoWrapper: {
    Width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "-300px",
    left: "1400px",
    right: "0",
  },
  certificateLogo: {
    width: "150px",
    height: "150px",
    margin: "0 auto 20px auto",
  },
  companyName: {
    fontFamily: "NexaLight",
    fontSize: "65px",
    color: "#000",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "55px",
    left: "215px",
    lineHeight: "1.1",
    textAlign: "center",
    color: "#492d18",
    textTransform: "uppercase",
    fontFamily: "KenyanCoffeeRg",
    width: "220px",
  },
  certificateBadgeText: {
    fontSize: "75px",
  },
  certificateBadgeText1: {
    fontSize: "60px",
    marginTop: "5px",
  },
  singleBadgeText: {
    fontSize: "75px",
    marginTop: "30px"
  },
  certificateForWrapper: {  
    position: "absolute",
    top: "680px",
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
    fontFamily: "CENTAUR"
  },
  certificateValue: {
    position: "absolute",
    top: "250px",
    left:"0",
    right: "0",
    fontSize: "30px",
    fontFamily: "Nirmala",
    textTransform: "uppercase",
    letterSpacing: "30px",
  },
  presentedWrapper: {
    position: "absolute",
    top: "1230px",
    right: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "50px",
    marginTop: "50px",
    fontFamily: "NexaLight",
  },
  recieverName: {
    fontSize: "270px",
    fontWeight: "400",
    fontFamily: "Exmouth",
    color: "#3b3b3b",
    width: "40%",
    paddingBottom: "20px",
    margin: "0 auto 70px",
    textTransform: "capitalize",
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
    width: "600px",
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
    fontFamily: "MontserratSemi",
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

const Certificate22 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }

  var formattedDate = "";

  if(certificateData.date != "") {
    formattedDate = formatDate(certificateData.date);
  } else {
    formattedDate = "2028-09-20"
  }

  const badgeText = certificateData.badgeText.value.split(' ');

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>

            <View style={styles.certificateLogoWrapper}>
              {certificateData.logo ? 
                  <Image style={styles.certificateLogo} src={certificateData.logo} />
                :
                  <Text style={{...styles.certificateLogo, ...styles.displayNone}} > Lorem Ipsum </Text>
              }
              <Text style={styles.companyName}>{certificateData.companyName}</Text>
            </View>

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
            OF {toTitleCase(certificateData.certificateType.value)}
          </Text>
        </View>
        <View style={styles.presentedWrapper}>
          <Text>
            {certificateData.presentedTo.label}
          </Text>
          <Text style={styles.recieverName}>
            {certificateData.recipientNames[0]}
          </Text>
          <Text>
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
                  <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>{certificateData.date}</Text>
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

export default Certificate22
