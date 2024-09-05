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
import image from "../../../../assets/images/certificates-bg/certificate27bg.png"

// import OpenSans from "../../../../assets/fonts/OpenSans.ttf"
import GreatVibes from "../../../../assets/fonts/GreatVibes-Regular.ttf"
import WorkSans from "../../../../assets/fonts/WorkSans-Light.ttf"
import WorkSansBold from "../../../../assets/fonts/WorkSans-SemiBold.ttf"
import WorkSansBlack from "../../../../assets/fonts/WorkSans-Black.ttf"
import UnBBold from "../../../../assets/fonts/UnBPro_Bold.otf"


// Font.register({ family: "OpenSans", src: OpenSans })
Font.register({ family: "GreatVibes", src: GreatVibes })
Font.register({ family: "WorkSans", src: WorkSans })
Font.register({ family: "WorkSansBold", src: WorkSansBold })
Font.register({ family: "WorkSansBlack", src: WorkSansBlack })
Font.register({ family: "UnBBold", src: UnBBold })

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
  certificateBadgeWrapper: {
    position: "absolute",
    top: "2010px",
    left: "1555px",
    textAlign: "center",
    color: "#fff",
    width: "450px",
  },
  certificateBadgeText: {
    fontSize: "80px",
    fontFamily: "GreatVibes",
  },
  certificateBadgeText2: {
    fontSize: "50px",
    fontFamily: "UnBBold",
    textTransform: "uppercase",
  },
  singleBadgeText: {
    fontSize: "80px",
    fontFamily: "GreatVibes",
    marginTop: "35px",
  },
  certificateContentWrapper: {
    position: "absolute",
    top: "150px",
    left: "800px",
    right: "0",
    display: "flex",
    alignItems: "start",
    justifyContent: "start",
    textAlign: "left",
    color: "#000",
  },
  certificateTitle: {
    fontSize: "270px",
    fontWeight: "500",
    fontFamily: "GreatVibes",
    lineHeight: "x",
    color: "#fff",
    margin: "0",
    maxWidth: "1685px",
    textTransform: "",
    textAlign: "center",
    letterSpacing: "4px",
    textTransform: "capitalize",
  },
  typeCertificate: {
    position: "absolute",
    top: "250px",
    left: "940px",
    color: "#fff",
    margin: "0",
    fontSize: "69px",
    maxWidth: "1685px",
    textAlign: "center",
    fontWeight: "500",
    lineHeight: "0",
    fontFamily: "WorkSansBlack",
    letterSpacing: "10px",
    textTransform: "uppercase",
  },
  presenterWrapper: {
    position: "absolute",
    top: "640px",
    left: "0",
    maxWidth: "1880px",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  certificatePresentedTo: {
    fontSize: "40px",
    fontWeight: "500",
    fontFamily: "UnBBold",
    marginTop: "250px",
    marginBottom: "90px",
    textTransform: "uppercase",
    color: "#231f20",
  },
  certificateReceiverName: {
    fontSize: "208px",
    fontWeight: "400",
    fontFamily: "GreatVibes",
    color: "#00aeef",
    marginBottom: "70px",
    textAlign: "center",
    textTransform: "capitalize",
  },
  certificateRecognition: {
    maxWidth: "1814px",
    fontSize: "50px",
    fontWeight: "400",
    fontFamily: "WorkSans",
    color: "#58595b",
    marginBottom: "140px",
    minHeight: "200px",
    textAlign: "center",
  },
  certificateAuthorityWrapper: {
    position: "absolute",
    top: "1900px",
    left: "-300px",
    minHeight: "350px",
    width: "2050px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  certificateSigneeWrapper: {
    width: "600px",
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  signeeWrapper: {
    position: "absolute",
    top: "0",
    left:"1900px",
  },
  signee2Wrapper: {
    position: "absolute",
    top: "0",
    left:"100px",
  },
  certificateSigneeTitle: {
    fontSize: "40px",
    fontFamily: "WorkSans",
    color: "#1b1f21",
    textAlign: "center",
    margin: "0 auto 20px",
    width: "100%",
    textTransform: "uppercase",
  },
  certificateSigneeName: {
    fontFamily: "WorkSansBold",
    fontSize: "60px",
    textAlign: "center"
  },
  certificateSigneeImg: {
    maxWidth: "640px",
    height: "210px",
    margin: "0 auto",
    objectFit: "contain",
  },
  displayNone: {
    color: 'transparent',
  },
})

const pageHeight = 2551
const pageWidth = 3579

const Certificate27 = ({certificateData}) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };

  const formattedDate = formatDate(certificateData.date);
  const badgeText = certificateData.badgeText.value.split(' ');
  const multiBadgeText = certificateData.badgeText.value.split(' ').length > 1;

  return (
    <Document>
      <Page size={[pageWidth, pageHeight]}>
        <View style={styles.certificateWrapper}>
          <Image src={image} style={styles.certificateBg} />

          <View style={styles.certificateBadgeWrapper}>
            <Text style={multiBadgeText ? styles.certificateBadgeText : styles.singleBadgeText}>
              {badgeText[0]}
            </Text>
            {badgeText[1] &&
              <Text style={styles.certificateBadgeText2}>
                {badgeText[1]}
              </Text>
            }
          </View>

          <View style={styles.certificateContentWrapper}>
            <View style={styles.typeOfCertificate}>
              <Text style={styles.certificateTitle}>
                Certificate
              </Text>
              <Text style={styles.typeCertificate}>
                OF {certificateData.certificateType.value.toUpperCase()}
              </Text>
            </View>

            <View style={styles.presenterWrapper}>
              <Text style={styles.certificatePresentedTo}>
                {certificateData.presentedTo.label}
              </Text>
              <Text style={styles.certificateReceiverName}>
                {certificateData.recipientNames[0]}
              </Text>
              <Text style={styles.certificateRecognition}>
                {certificateData.recognitionText}
              </Text>
            </View>

            <View style={styles.certificateAuthorityWrapper}>
              <View style={styles.signeeWrapper}>
                <Text style={{...styles.certificateSigneeTitle, ...(certificateData.firstSigneeTitle != "" ? {} : styles.displayNone)}}>
                  {certificateData.firstSigneeTitle != "" ? certificateData.firstSigneeTitle : "Lorem ipsum"}
                </Text>
                <Text style={{...styles.certificateSigneeName, ...(certificateData.firstSigneeName != "" ? {} : styles.displayNone)}}>
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
              
              <View style={styles.signee2Wrapper}>
                <Text style={{...styles.certificateSigneeTitle, ...(certificateData.secondSigneeTitle != "" ? {} : styles.displayNone)}}>
                  {certificateData.secondSigneeTitle != "" ? certificateData.secondSigneeTitle : "Lorem ipsum"}
                </Text>
                <Text style={{...styles.certificateSigneeName, ...(certificateData.secondSigneeName != "" ? {} : styles.displayNone)}}>
                  {certificateData.secondSigneeName != "" ? certificateData.secondSigneeName : "Lorem ipsum"}
                </Text>
                <View style={styles.certificateSigneeWrapper}>
                  {certificateData.secondSigneeSignature ?
                      <Image
                        style={styles.certificateSigneeImg}
                        src={certificateData.secondSigneeSignature}
                      />
                    :
                      <Text style={{...styles.certificateSigneeImg, ...styles.displayNone}}>Lorem ipsum</Text>
                  }
                </View>
              </View>
            </View>
          </View>

        </View>
      </Page>
    </Document>
  )
}

export default Certificate27
