import React from "react";
import Head from "./head";
import LandingPage from "./pages/landing-page";
import PdfViewer from "./pages/render-pdf";
import "../../assets/stylesheets/styles.scss";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
  return (
    <>
      <Head />
      <LandingPage />
      <ToastContainer />
      {/* <PdfViewer /> */}
    </>
  )
};

export default Root;
