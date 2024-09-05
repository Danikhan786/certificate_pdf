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

import MyridPro from "../../../../assets/fonts/MyriadPro-Regular.ttf";
import NexaBold from "../../../../assets/fonts/nexa-bold.otf";
import NexaLight from "../../../../assets/fonts/nexa-light.otf";
import Bebas from "../../../../assets/fonts/Bebas-Regular.otf";
import GreatDay from "../../../../assets/fonts/GreatDay.ttf";

import logo from "../../../../assets/images/logo4.png";
import image from "../../../../assets/images/certificates-bg/certificate4bg.png";

Font.register({ family: "Nexa Regular", src: NexaLight });
Font.register({ family: "Nexa Bold", src: NexaBold });
Font.register({ family: "Bebas", src: Bebas });
Font.register({ family: "MyriadPro", src: MyridPro });
Font.register({ family: "Greate Day", src: GreatDay });

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  certificateWrapper: {
    width: "100%",
    height: "100%",
    position: "relative",
    backgroundColor: "#fff",
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
    top: "100px",
    left: "0",
    right: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    color: "#162d49",
    lineHeight: "normal",
  },
  certificateBadgeWrapper: {
    position: "absolute",
    top: "340px",
    right: "490px",
    textAlign: "center",
    margin: "0 auto",
    fontSize: "70px",
    fontFamily: "Bebas",
    color: "#fff",
    maxWidth: "240px",
    width: "100%",
    margin: "0 auto",
    lineHeight: "1",
  },
  certificateBadgeText: {
    textAlign: "center",
  },
  singleBadgeText: {
    marginTop: "20px"
  },
  certificateLogoWrapper: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "260px",
    left: "200px",
  },
  certificateLogo: {
    width: "400px",
    height: "200px",
  },
  companyName: {
    fontSize: "60px",
    fontFamily: "Nexa Regular",
    color: "#091321",
    marginTop: "43px",
  },
  companyNameSpan: {
    fontSize: "60px",
    fontWeight: "400",
    fontFamily: "Nexa Bold",
    color: "#162d49",
  },
  certificateTitle: {
    fontSize: "140px",
    fontWeight: "400",
    color: "#fff",
    fontFamily: "Bebas",
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
    top: "301px",
    right: "1200px",
  },
  certificateTitleSpan: {
    fontSize: "62px",
    fontWeight: "400",
    fontFamily: "Nexa Bold",
    color: "#fff",
  },
  certificateContentInnerWrapper: {
    position: "absolute",
    top: "900px",
    textAlign: "center",
  },
  certificatePresentedTo: {
    fontSize: "50px",
    fontWeight: "400",
    fontFamily: "Nexa Regular",
    textAlign: "center",
    margin: "0 auto",
    maxWidth: "2500px",
    color: "#808a93",
    marginBottom: "95px",
  },
  certificateReceiverName: {
    maxWidth: "2500px",
    fontSize: "212px",
    fontWeight: "400",
    fontFamily: "Greate Day",
    margin: "0 auto 80px auto",
  },
  certificateRecognition: {
    maxWidth: "2500px",
    fontSize: "51px",
    fontWeight: "400",
    color: "#808a93",
    fontFamily: "Nexa Regular",
    textAlign: "center",
    borderTopWidth: "3px",
    borderTopColor: "#162d49",
    padding: "50px 0",
    lineHeight: "normal",
    margin: "0 auto 100px auto",
  },
  certificateDateWrapper: {
    backgroundColor: "#162d49",
    padding: "40px 80px",
    fontFamily: "Bebas",
    fontSize: "75px",
    fontWeight: "400",
    color: "#fff",
    maxWidth: "900px",
    margin: "0 auto",
  },
  certificateAuthorityWrapper: {
    minHeight: "230px",
    width: "2500px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "50px",
  },
  certificateSigneeWrapper: {
    width: "400px",
    textAlign: "center",
  },
  certificateSigneeDate: {
    fontSize: "58px",
    color: "#283949",
    textAlign: "center",
    fontFamily: "MyriadPro",
  },
  certificateSigneeTitle: {
    fontSize: "58px",
    fontWeight: "400",
    color: "#283949",
    textAlign: "center",
    fontFamily: "MyriadPro",
  },
  displayNone: {
    color: 'transparent',
  },
});

const pageWidth = 3600;
const pageHeight = 2300;

const Certificate4 = ({certificateData}) => {
  var title = ""
  var formattedDate = "";

  const str = certificateData.companyName;
  if(str != "") {
    title = str.split(' ');
  } else {
    title = "Lor Ipsum".split(' ');
  }

  if(certificateData.date != "") {
    const date = new Date(certificateData.date);
    const month = date.toLocaleString('en-US', { month: 'long' }).toUpperCase();
    const day = date.getDate();
    const year = date.getFullYear();
    formattedDate = `${month}-${day}-${year}`;
  } else {
    formattedDate = "02-02-2028";
  }

  const modifiedTitle = certificateData.certificateType.label.replace(/\bCertificate\b/g, '');
  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <>
      <Document>
        <Page size={[pageWidth, pageHeight]}>
          <View style={styles.certificateWrapper}>
            <Image src={image} style={styles.certificateBg} />
            <View style={styles.certificateContentWrapper}>
              <View style={styles.certificateLogoWrapper}>
                {certificateData.logo && (
                  <Image style={styles.certificateLogo} src={certificateData.logo} />
                )}
                <Text style={{...styles.companyName, ...(certificateData.companyName != "" ? {} : styles.displayNone)}}>
                  {title[0]} <Text style={{...styles.companyNameSpan, ...(certificateData.companyName != "" ? {} : styles.displayNone)}}>{title.slice(1).join(' ')}</Text>
                </Text>
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

              <Text style={styles.certificateTitle}>
                CERTIFICATE {"\n"}
                <Text style={styles.certificateTitleSpan}>
                  of {certificateData.certificateType.value.toUpperCase()}
                </Text>
              </Text>
              <View style={styles.certificateContentInnerWrapper}>
                <Text style={styles.certificatePresentedTo}>
                  {certificateData.topText}
                </Text>
                <Text style={styles.certificateReceiverName}>{certificateData.recipientNames[0]}</Text>
                <Text style={styles.certificateReceiverNameBottom}></Text>
                <Text style={styles.certificateRecognition}>{certificateData.recognitionText}</Text>
                <Text style={{...styles.certificateDateWrapper, ...(certificateData.date != "" ? {} : styles.displayNone)}}>
                  {formattedDate}
                </Text>
                <View style={styles.certificateAuthorityWrapper}>
                  <View style={styles.certificateSigneeWrapper}>
                    <Text  style={{...styles.certificateSigneeDate, ...(certificateData.firstSigneeName != "" ? {} : styles.displayNone)}}>
                      {certificateData.firstSigneeName != "" ? certificateData.firstSigneeName : "Lorem ipsum"}
                    </Text>
                    <Text style={{...styles.certificateSigneeTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
                      {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
                    </Text>
                  </View>
                  <View style={styles.certificateSigneeWrapper}>
                    <Text style={{...styles.certificateSigneeDate, ...(certificateData.secondSigneeName != "" ? {} : styles.displayNone)}}>
                      {certificateData.secondSigneeName != "" ? certificateData.secondSigneeName : "Lorem ipsum"}
                    </Text>
                    <Text style={{...styles.certificateSigneeTitle, ...(certificateData.secondSigneeTitle != "" ? {} : styles.displayNone)}}>
                      {certificateData.secondSigneeTitle != "" ? certificateData.secondSigneeTitle : "Lorem ipsum"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </>
  );
};

export default Certificate4;
