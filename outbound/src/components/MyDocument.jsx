import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document
    style={styles.container}
    title="myanma_insurnace.pdf"
  >
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <View style={styles.section}>
        <Text>Section #1</Text>
      </View>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
    
  </Document>
);
export default MyDocument;
