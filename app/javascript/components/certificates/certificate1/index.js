import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";
import image from "../../../../assets/images/certificates-bg/certificate1bg.png";

import MyriadProFont from "../../../../assets/fonts/MyriadPro-Regular.ttf";
import OpenSans from "../../../../assets/fonts/OpenSans.ttf";

Font.register({ family: "MyriadProFont", src: MyriadProFont });
Font.register({ family: "OpenSans", src: OpenSans });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
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
    top: "559px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
    fontFamily: "OpenSans",
    lineHeight: "normal",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "1300px",
    margin: "0 auto",
    fontSize: "30px",
    fontFamily: "OpenSans",
    color: "#edece8",
    maxWidth: "200px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  certificateBadgeText: {
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: "4px",
    lineHeight: "1.2"
  },
  certificateTitle: {
    maxWidth: "2000px",
    padding: "50px 100px 10px 100px",
    border: "4px solid #d5e0dd",
    fontSize: "121px",
    fontWeight: "400",
    color: "#d1b661",
    marginBottom: "79px",
    fontFamily: "MyriadProFont",
  },
  certificateSubTitle: {
    maxWidth: "2413px",
    fontSize: "42px",
    fontWeight: "400",
    marginBottom: "116px",
    minHeight: "70px",
  },
  certificatePresentedTo: {
    maxWidth: "2000px",
    fontSize: "67px",
    fontWeight: "400",
    padding: "0 100px 40px 100px",
    borderBottom: "5px solid #b4c4c3",
    marginBottom: "46px",
  },
  certificateReceiverName: {
    maxWidth: "2000px",
    fontSize: "150px",
    fontWeight: "400",
    color: "#d1b661",
    marginBottom: "100px",
    fontFamily: "MyriadProFont",
  },
  certificateOnBehalf: {
    fontSize: "54px",
    fontWeight: "600",
    marginBottom: "35px",
  },
  certificateRecognition: {
    maxWidth: "1742px",
    fontSize: "46px",
    fontWeight: "400",
    minHeight: "200px"
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    bottom: "-400px",
    minHeight: "230px",
    width: "2176px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "120px",
  },
  certificateSigneeWrapper: {
    width: "484px",
  },
  certificateSigneeTitle: {
    borderTop: "2px solid #b4c4c3",
    padding: "25px 20px",
    fontSize: "44px",
    fontWeight: "400",
    color: "#d1b661",
  },
  certificateLogo: {
    maxHeight: "230px",
    maxWidth: "230px",
    width: "100%",
  },
  displayNone: {
    color: 'transparent',
  },
  signleLineBadgeText: {
    color: "#edece8",
    marginTop: "15px",
  },
});

const pageWidth = 3579;
const pageHeight = 2551;
const Certificate1 = ({certificateData}) => {
  const badgeText = certificateData.badgeText.value.split(' ');
  var multiBadget = badgeText.length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />
          <View style={styles.certificateContentWrapper}>

            <View style={styles.certificateBadgeWrapper}>
              <Text style={multiBadget ? styles.certificateBadgeText : styles.signleLineBadgeText}>
                {badgeText[0]}
              </Text>
              {badgeText[1] &&
                <Text style={styles.certificateBadgeText}>
                  {badgeText[1]}
                </Text>
              }
            </View>

            <Text style={styles.certificateTitle}>{certificateData.certificateType.label}</Text>
            <Text style={styles.certificateSubTitle}>
              {certificateData.topText}
            </Text>
            <Text style={styles.certificatePresentedTo}>
              {certificateData.presentedTo.label}
            </Text>
            <Text style={styles.certificateReceiverName}>
              {certificateData.recipientNames[0]}
            </Text>
            <Text style={{...styles.certificateOnBehalf, ...(certificateData.onBehalfOfCompany != "" ? {} : styles.displayNone)}}>
              on behalf of {certificateData.onBehalfOfCompany}
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
                    <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
                }
                <Text style={{...styles.certificateSigneeTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
                  {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
                </Text>
              </View>
              <View style={styles.certificateLogoWrapper}>
                {certificateData.logo && (
                  <Image style={styles.certificateLogo} src={certificateData.logo} />
                )}
              </View>
              <View style={styles.certificateSigneeWrapper}>
                {certificateData.secondSigneeSignature ?
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.secondSigneeSignature}
                    />
                  :
                    <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
                }
                <Text style={{...styles.certificateSigneeTitle, ...(certificateData.secondSigneeTitle != "" ? {} : styles.displayNone)}}>
                  {certificateData.secondSigneeTitle != "" ? certificateData.secondSigneeTitle : "Lorem ipsum"}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Certificate1;
