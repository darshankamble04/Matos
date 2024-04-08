import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BigCards = ({ logo, companyName, price, change }) => {
  return (
    <View style={styles.bigCard}>
      {/* Logo */}
      {/* <Text>{logo}</Text> */}
      {/* Company Name */}
      <Text>{companyName}</Text>
      {/* Price */}
      <Text style={styles.value}>{price}</Text>
      {/* Change */}
      <View style={styles.changeContainer}>
        <Text style={styles.changeValue}>{change}%</Text>
        <Text style={styles.upperArrow}>▲</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bigCard: {
    width: '27%',
    borderWidth: 1.3, // Border width
    padding: 10,
    // alignItems: 'center',
    margin: 10,
    borderRadius: 10,
    borderColor: 'lightgray', // Border color
  },
  value: {
    fontSize: 14,
    color: 'gray',
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  changeValue: {
    marginRight: 5,
  },
  upperArrow: {
    color: 'green', // or any color you prefer
  },
});

export default BigCards;