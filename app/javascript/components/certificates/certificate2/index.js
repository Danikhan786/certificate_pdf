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
import image from "../../../../assets/images/certificates-bg/certificate2bg.png";

import Montserrat from "../../../../assets/fonts/Montserrat-Bold.ttf";
import Exmouth from "../../../../assets/fonts/Exmouth.ttf";
import RobotoRegular from "../../../../assets/fonts/Roboto-Regular.ttf";
import RobotoBold from "../../../../assets/fonts/Roboto-Bold.ttf";

Font.register({ family: "Montserrat", src: Montserrat });
Font.register({ family: "Exmouth", src: Exmouth });
Font.register({ family: "Roboto Regular", src: RobotoRegular });
Font.register({ family: "Roboto Bold", src: RobotoBold });

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
    top: "135px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#fff",
  },
  certificateTitle: {
    fontSize: "271px",
    fontWeight: "700",
    color: "#2f2e2e",
    fontFamily: "Montserrat",
    lineHeight: "0px",
    margin: "0",
  },
  certificateSubTitle: {
    fontSize: "104px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    marginBottom: "125px",
    color: "#ffa40a",
  },
  certificatePresentedTo: {
    fontSize: "50px",
    fontWeight: "700",
    fontFamily: "Montserrat",
    marginBottom: "75px",
    color: "#2f2e2e",
  },
  certificateReceiverName: {
    fontSize: "292px",
    fontWeight: "400",
    color: "#1d2324",
    marginBottom: "120px",
    fontFamily: "Exmouth",
    paddingLeft: "50px",
    paddingRight: "50px",
    borderBottom: "8px solid #000",
  },
  certificateRecognition: {
    maxWidth: "1829px",
    fontSize: "50px",
    fontWeight: "400",
    fontFamily: "Roboto Regular",
    color: "#2f2e2e",
    marginBottom: "100px",
    minHeight: "168px",
  },
  certificateAuthorityWrapper: {
    minHeight: "230px",
    width: "2100px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "250px",
  },
  certificateSigneeName: {
    borderTop: "7px solid #000",
    padding: "10px 20px",
    fontSize: "78px",
    fontWeight: "700",
    fontFamily: "Roboto Bold",
    color: "#1d2324",
    textAlign: "center",
  },
  certificateSigneeTitle: {
    fontSize: "54px",
    fontWeight: "400",
    fontFamily: "Roboto Regular",
    color: "#fdbc00",
    textAlign: "center",
    margin: "0 auto",
  },
  certificateLogo: {
    maxHeight: "230px",
    maxWidth: "230px",
    width: "100%",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "1890px",
    left: "1610px",
    right: "0",
    textAlign: "center",
    width: "340px",
    color: "#1d2324",
    fontFamily: "Roboto Bold",
  },
  certificateBadgeText: {
    fontSize: "75px",
  },
  singleBadgeText: {
    marginTop: "30px",
    fontSize: "75px",
  },
  certificateDateWrapper: {
    position: "absolute",
    top: "250px",
    left: "0px",
    display: "flex",
    flexDirection: "row",
    transform: "rotate(270deg)",
  },
  certificateDateTitle: {
    fontSize: "54px",
    fontWeight: "700",
    fontFamily: "Roboto Bold",
  },
  certificateDateText: {
    fontSize: "54px",
    fontWeight: "700",
    fontFamily: "Roboto Regular",
  },
  displayNone: {
    color: 'transparent',
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
});

const pageWidth = 3579;
const pageHeight = 2551;

const Certificate2 = ({certificateData}) => {
  const separator = ' ';
  const certificateString = certificateData.certificateType.label.substring(0, certificateData.certificateType.label.indexOf(separator));
  const restOfString = certificateData.certificateType.label.substring(certificateData.certificateType.label.indexOf(separator) + separator.length);
  console.log(certificateData);
  var formattedDate = "";
  if(certificateData.date != "") {
    const dateParts = certificateData.date.split('-');
    formattedDate = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;
  } else {
    formattedDate = "20-20-2023";
  }
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <>
      <Document>
        <Page size={[pageWidth, pageHeight]}>
          <View style={styles.certificateWrapper}>
            <Image src={image} style={styles.certificateBg} />
            <View style={styles.certificateContentWrapper}>
              <Text style={styles.certificateTitle}>{certificateString}</Text>
              <Text style={styles.certificateSubTitle}>
                {restOfString}
              </Text>
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
                  {certificateData.firstSigneeSignature && (
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.firstSigneeSignature}
                    />
                  )}
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.secondSigneeName != "" ? {} : styles.displayNone)}}>
                    {certificateData.firstSigneeName != "" ? certificateData.firstSigneeName : "Lorem ipsum"}
                  </Text>
                  <Text style={{...styles.certificateSigneeTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
                    {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
                  </Text>
                </View>
                <View style={styles.certificateSigneeWrapper}>
                  {certificateData.secondSigneeSignature && (
                    <Image
                      style={styles.certificateSigneeImg}
                      src={certificateData.secondSigneeSignature}
                    />
                  )}
                  <Text style={{...styles.certificateSigneeName, ...(certificateData.secondSigneeName != "" ? {} : styles.displayNone)}}>
                    {certificateData.secondSigneeName != "" ? certificateData.secondSigneeName : "Lorem ipsum"}
                  </Text>
                  <Text style={{...styles.certificateSigneeTitle, ...(certificateData.secondSigneeTitle != "" ? {} : styles.displayNone)}}>
                    {certificateData.secondSigneeTitle != "" ? certificateData.secondSigneeTitle : "Lorem ipsum"}
                  </Text>
                </View> 
              </View>
            </View>
            <View style={styles.certificateBadgeWrapper}>
              <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
                {certificateData.badgeText.value}
              </Text>
            </View>
            <View style={styles.certificateDateWrapper}>
              <Text style={styles.certificateDateTitle}>Date: </Text>
              <Text style={{...styles.certificateDateText, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                {formattedDate}
              </Text>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default Certificate2;
