import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Card from './Card';

const Cards = () => {
  const data = [
    { title: 'NIFTY 50', value: '22,513.70' },
    { title: 'S&P 500', value: '4,585.64' },
    { title: 'Dow Jones', value: '34,632.56' },
    { title: 'NASDAQ', value: '14,529.58' },
    // Add more data as needed
  ];

  return (
    <ScrollView horizontal={true} style={styles.container}>
      {data.map((item, index) => (
        <Card key={index} title={item.title} value={item.value} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

export default Cards;