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
import image from "../../../../assets/images/certificates-bg/certificate23bg.png"

import GeorgiaBold from "../../../../assets/fonts/georgia-bold.ttf"
import MyriadProRegular from "../../../../assets/fonts/MyriadPro-Regular.ttf"
import OldeEnglish from "../../../../assets/fonts/OldeEnglish.ttf"
import MontBold from "../../../../assets/fonts/Mont-HeavyDEMO.otf"
import MontRegular from "../../../../assets/fonts/Mont-ExtraLightDEMO.otf"
import KenyanCoffeeRg from "../../../../assets/fonts/kenyan_coffee_rg.ttf"
import Exmouth from "../../../../assets/fonts/Exmouth.ttf"
import NexaLight from "../../../../assets/fonts/nexa-light.otf"
import CENTAUR from "../../../../assets/fonts/CENTAUR.TTF"
import Nirmala from "../../../../assets/fonts/Nirmala.ttf"
import Roboto_bold from "../../../../assets/fonts/Roboto-Bold.ttf"
import NexaBold from "../../../../assets/fonts/nexa-bold.otf"
import Baskvill from "../../../../assets/fonts/baskvill.ttf"
import NewGotIt from "../../../../assets/fonts/newsgothicbt.ttf"
import AlexBrush from "../../../../assets/fonts/AlexBrush-Regular.ttf"

Font.register({ family: "GeorgiaBold", src: GeorgiaBold })
Font.register({ family: "MyriadProRegular", src: MyriadProRegular })
Font.register({ family: "OldeEnglish", src: OldeEnglish })
Font.register({ family: "MontBold", src: MontBold })
Font.register({ family: "MontRegular", src: MontRegular })
Font.register({ family: "KenyanCoffeeRg", src: KenyanCoffeeRg })
Font.register({ family: "Exmouth", src: Exmouth })
Font.register({ family: "NexaLight", src: NexaLight })
Font.register({ family: "CENTAUR", src: CENTAUR })
Font.register({ family: "Nirmala", src: Nirmala })
Font.register({ family: "Roboto_bold", src: Roboto_bold })
Font.register({ family: "NexaBold", src: NexaBold })
Font.register({ family: "Baskvill", src: Baskvill })
Font.register({ family: "NewGotIt", src: NewGotIt })
Font.register({ family: "AlexBrush", src: AlexBrush })

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
  certificateBadgeWrapper: {
    position: "absolute",
    top: "566px",
    left: "485px",
    fontFamily: "KenyanCoffeeRg",
    color: "#492d18",
    textTransform: "uppercase",
    width: "220px",
    textAlign: "center",
  },
  certificateBadgeText: {
    fontSize: "70px",
  },
  certificateBadgeText1: {
    fontSize: "70px",
  },
  singleBadgeText: {
    fontSize: "70px",
    marginTop: "30px",
  },
  certificateForWrapper: {  
    position: "absolute",
    top: "600px",
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
    top: "-200px",
    left: "0",
    right: "0",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    textTransform: "uppercase",
    fontSize: "400px",
    fontFamily: "Baskvill",
    color: "#2e3e43",
  },
  certificateValue: {
    position: "absolute",
    top: "160px",
    left:"0",
    right: "380px",
    fontSize: "75px",
    textAlign: "right",
    fontFamily: "NexaLight",
    textTransform: "uppercase",
    letterSpacing: "100px",
  },
  presentedWrapper: {
    position: "absolute",
    top: "840px",
    right: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "55px",
    marginTop: "50px",
    fontFamily: "NewGotIt",
  },
  presentedLabel: {
    fontFamily: "NewGotIt",
    textTransform: "uppercase",
    backgroundColor: "#cf9e27",
    width: "47%",
    padding: "10px 0",
    color: "#fff",
    position: "absolute",
    left:"1420px",
    letterSpacing: "7px",
    top: "0",
  },
  recieverName: {
    position: "absolute",
    top: "181px",
    left: "1420px",
    fontSize: "250px",
    fontWeight: "400",
    fontFamily: "AlexBrush",
    color: "#2e3e43",
    borderBottom: "13px solid #2e3e43",
    width: "47%",
    textTransform: "capitalize"
  },
  presentationDetails: {
    position: "absolute",
    top: "550px",
    left: "1300px",
    fontFamily: "Nirmala",
    color: "#2e3e43",
    width: "1800px",
    fontSize: "55px"
  },
  bottomDetails: {
    maxWidth: "1300px",
    margin: "0 auto",
    width: "100%",
    position: "absolute",
    bottom: "600px",
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

const Certificate23 = ({certificateData}) => {
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
          <Text style={styles.presentedLabel}>
            {certificateData.presentedTo.label}
          </Text>
          <Text style={styles.recieverName}>
            {certificateData.recipientNames[0]}
          </Text>
          <Text style={styles.presentationDetails}>
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

export default Certificate23
