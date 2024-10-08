import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const Notes = () => {
  const pdfUrl = require('../../assets/lebo101.pdf'); // Adjust the path according to your project structure
  const [showPdf, setShowPdf] = useState(true);
  const [loading, setLoading] = useState(true);
  return (
    <View style={styles.container}>
      {showPdf && (
        <View style={styles.pdfContainer}>
          {loading && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

          <WebView
            source={pdfUrl}
            style={styles.pdf}
            onLoadStart={() => setLoading(true)} // Show loader when loading starts
            onLoadEnd={() => setLoading(false)}  // Hide loader when loading ends
            onError={(error) => {
              setLoading(false);
              console.error(error);
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding : 10,
    margin : 10
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
  pdfContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  pdf: {
    flex: 1,
  },
  loader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Optional: add a semi-transparent background
  },
});

export default Notes;
