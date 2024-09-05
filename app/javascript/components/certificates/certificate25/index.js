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
import image from "../../../../assets/images/certificates-bg/certificate25bg.png"

import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import UnBPro from "../../../../assets/fonts/UnBPro_Bold.otf"
import UnBRegular from "../../../../assets/fonts/UnBPro_Regular.otf"
import WorkSans from "../../../../assets/fonts/WorkSans-Regular.ttf"
import WorkSansSemi from "../../../../assets/fonts/WorkSans-Medium.ttf"

Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "UnBPro", src: UnBPro })
Font.register({ family: "UnBRegular", src: UnBRegular })
Font.register({ family: "WorkSans", src: WorkSans })
Font.register({ family: "WorkSansSemi", src: WorkSansSemi })

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
    left: "270px",
    margin: "0 auto",
    color: "#3b3b3b",
    textAlign: "start",
    display: "flex",
  },
  badgeTextWrapper: {
    position: "absolute",
    top: "0",
    left: "-90px",
    color: "#fff",
    textTransform: "uppercase",
    textAlign: "center",
    width: "450px",
    lineHeight: "1.3",
  },
  certificateBadgeLine1: {
    fontSize: "120px",
    fontFamily: "GreatVibes",
    textAlign: "center",
    textTransform: "capitalize",
  },
  certificateBadgeText: {
    fontSize: "55px",
    fontFamily: "UnBPro",
    textAlign: "center",
  },
  singleBadgeText: {
    fontSize: "120px",
    fontFamily: "GreatVibes",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: "30px",
  },
  certificateForWrapper: {  
    position: "absolute",
    top: "450px",
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
    fontSize: "200px",
    fontFamily: "UnBPro",
    color: "#000",
  },
  certificateValue: {
    position: "absolute",
    top: "200px",
    left:"0",
    right: "0",
    fontSize: "90px",
    fontFamily: "UnBRegular",
    textTransform: "uppercase",
    letterSpacing: "20px",
  },
  presentedWrapper: {
    position: "absolute",
    top: "750px",
    right: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
  },
  presenterMessage: {
    textAlign: "center",
    fontSize: "60px",
    marginTop: "130px",
    marginBottom: "30px",
    fontFamily: "UnBPro",
    color: "#58595b",
    textTransform: "uppercase",
  },
  recieverName: {
    fontSize: "280px",
    fontWeight: "400",
    fontFamily: "GreatVibes",
    color: "#00a0e4",
    width: "40%",
    paddingBottom: "40px",
    margin: "40px auto 0",
    textAlign: "center",
    textTransform: "capitalize",
  },
  presenterValue: {
    textAlign: "center",
    fontSize: "50px",
    fontFamily: "WorkSans",
    color: "#58595b",
    maxWidth: "1900px",
    margin: "0 auto",
    marginTop: "40px",
  },
  bottomDetails: {
    maxWidth: "1300px",
    margin: "0 auto",
    width: "100%",
    position: "absolute",
    bottom: "700px",
    left: "0",
    right: "0",
  },
  firstSinger: {
    width: "100%",
    position: "absolute",
    top: "20px",
    left: "700px",
    right: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  },
  signTitle: {
    position: "absolute",
    top: "0",
    left: "100px",
    width: "30%",
    marginTop: "40px",
    paddingTop: "20px",
    fontSize: "50px",
    marginLeft: "40px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "WorkSans",
  },
  signName: {
    position: "absolute",
    top: "100px",
    left: "220px",
    fontSize: "60px",
    fontFamily: "WorkSansSemi",
    marginTop: "30px",
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  rightSection: {
    display: "block",
    width: "100%",
    position: "absolute",
    top: "80px",
    right: "0",
    left: "2500px",
  },
  secondSinger: {
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  },
  secondTitle: {
    width: "100%",
    position: "absolute",
    top: "0",
    left: "0",
    fontSize: "50px",
    fontFamily: "WorkSans",
  },
  secondName: {
    width: "100%",
    position: "absolute",
    top: "40px",
    left: "0",
    fontSize: "60px",
    fontFamily: "WorkSansSemi",
    marginTop: "30px",
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
    width: "100%",
    top: "200px",
    left: "160px",
    maxWidth: "400px",
    height: "160px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  certificateSecondSigneeImg: {
    position: "absolute",
    width: "100%",
    top: "150px",
    left: "0",
    maxWidth: "400px",
    height: "160px",
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 2625
const pageWidth = 3579

const Certificate25 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const formattedDate = formatDate(certificateData.date);
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;
  const badgeText = certificateData.badgeText.value.split(' ');
  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>
            <View style={styles.badgeTextWrapper}>
              <Text style={multiBadgeText ? styles.certificateBadgeLine1 : styles.singleBadgeText}>
                {badgeText[0]}
              </Text>
              {badgeText[1] &&
                <Text style={styles.certificateBadgeText}>
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
            {certificateData.presentedTo.label}
          </Text>
          <Text style={styles.recieverName}>
            {certificateData.recipientNames[0]}
          </Text>
          <Text style={styles.presenterValue}>
            {certificateData.recognitionText}
          </Text>
        </View>
        <View style={styles.bottomDetails}>
          <View style={styles.firstSinger}>
            <Text style={{...styles.signTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
              {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
            </Text>
            <Text style={{...styles.signName, ...(certificateData.firstSigneeName != "" ? {} : styles.displayNone)}}>
              {certificateData.firstSigneeName != "" ? certificateData.firstSigneeName : "Lorem ipsum"}
            </Text>
            <View style={styles.certificateSigneeWrapper}>
              {certificateData.firstSigneeSignature ?
                  <Image
                    style={styles.certificateSigneeImg}
                    src={certificateData.firstSigneeSignature}
                  />
                :
                  <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
              }
          </View>
          </View>
          <View style={styles.rightSection}>
            <View style={styles.secondSinger}>
              <Text style={{...styles.secondTitle, ...(certificateData.secondSigneeTitle != "" ? {} : styles.displayNone)}}>
                {certificateData.secondSigneeTitle != "" ? certificateData.secondSigneeTitle : "Lorem ipsum"}
              </Text>
              <Text style={{...styles.secondName, ...(certificateData.secondSigneeName != "" ? {} : styles.displayNone)}}>
                {certificateData.secondSigneeName != "" ? certificateData.secondSigneeName : "Lorem ipsum"}
              </Text>
              <View style={styles.certificateSigneeWrapper}>
              {certificateData.secondSigneeSignature ?
                  <Image
                    style={styles.certificateSecondSigneeImg}
                    src={certificateData.secondSigneeSignature}
                  />
                :
                  <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
              }
          </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

export default Certificate25
