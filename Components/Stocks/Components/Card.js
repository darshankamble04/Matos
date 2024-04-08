import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ title, value }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}hii</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 115,
    height: 50,
    backgroundColor: 'white',
    marginLeft: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'left',
    padding: 14,
    borderWidth: 1.3, // Border width
    borderColor: 'lightgray', // Border color
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: 'gray',
  },
});

export default Card;