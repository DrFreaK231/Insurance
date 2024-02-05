import React from "react";
import MyDocument from "./MyDocument";
import { PDFViewer } from "@react-pdf/renderer";

const PdfOverlay = () => {
  return (
    <div
      style={{
        width: "80%",
        height: "80%",
        left: "10%",
        top:"10%",
        margin: "0 auto",
        position: "fixed",
      }}
      id="root"
    >
      <PDFViewer width={"100%"} height={"100%"} >
        <MyDocument />
      </PDFViewer>
    </div>
  );
};

export default PdfOverlay;
