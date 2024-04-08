import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LiveOptionChainViewer = () => {
  const [optionChain, setOptionChain] = useState({});

  useEffect(() => {
    // Function to fetch live option chain data
    const fetchOptionChain = async () => {
      try {
        const token = "Key"; // Replace 'your-header-token' with your actual header token
        const response = await fetch('https://api.marketdata.app/v1/options/chain/AAPL', {
          headers: {
            'Authorization': `Bearer ${token}`,
            // Add other headers if needed
          },
        });
        const data = await response.json();
        setOptionChain(data);
      } catch (error) {
        console.error('Error fetching option chain data:', error);
      }
    };

    // Fetch option chain data when component mounts
    fetchOptionChain();

    // Set up interval to fetch data periodically (optional)
    const interval = setInterval(fetchOptionChain, 60000); // Fetch data every minute

    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Live Option Chain for BANKNIFTY</Text>
      {optionChain ? (
        <View>
          {/* Render option chain data here */}
          {/* Example: */}
          {optionChain.map((option, index) => (
            <View key={index} style={styles.option}>
              <Text>Symbol: {option.symbol}</Text>
              <Text>Expiration Date: {option.expirationDate}</Text>
              <Text>Strike: {option.strike}</Text>
              <Text>Call/Put: {option.callPut}</Text>
              {/* Add more fields as needed */}
            </View>
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  option: {
    marginBottom: 10,
  },
});

export default LiveOptionChainViewer;
