import React from "react";
import { View, ScrollView, StyleSheet, Text } from "react-native";
import Cards from "./Components/Cards";
import NavBar from "../Home/NavBar";
import BigCards from "./Components/BigCards";

const Main = () => {
  const cardDetails = [
    {
      logo: "Logo1",
      companyName: "SBI Cards",
      price: "730.35",
      change: "5.22",
    },
    {
      logo: "Logo1",
      companyName: "SBI Cards",
      price: "730.35",
      change: "5.22",
    },
    {
      logo: "Logo1",
      companyName: "SBI Cards",
      price: "730.35",
      change: "5.22",
    },
    {
      logo: "Logo1",
      companyName: "SBI Cards",
      price: "730.35",
      change: "5.22",
    },
    {
      logo: "Logo1",
      companyName: "SBI Cards",
      price: "730.35",
      change: "5.22",
    },
    // Add more card details here if needed
  ];

  return (
    <View style={styles.container}>
      {/* Your Home Screen content */}
      <NavBar />
      <Cards />

      <Text style={styles.heading}>Top Gainers</Text>
      <View style={styles.bigCardContainer}>
        {cardDetails.map((card, index) => (
          <BigCards key={index} {...card} />
        ))}
        <View style={styles.seeMoreContainer}>
          <Text style={styles.seeMoreText}>See More &gt; Gainers</Text>
        </View>
      </View>

      <Text style={styles.heading}>Top Losers</Text>
      <View style={styles.bigCardContainer}>
        {cardDetails.map((card, index) => (
          <BigCards key={index} {...card} />
        ))}
        <View style={styles.seeMoreContainer}>
          <Text style={styles.seeMoreText}>See More &gt; Losers</Text>
        </View>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    // paddingVertical: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 10,
  },
  bigCardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 20,
  },
  seeMoreContainer: {
    alignItems: "flex-end",
  },
  seeMoreText: {
    color: "blue", // or any color you prefer
    width: "80%",
    // height:100,
    // borderWidth: 1,
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
});

export default Main;
