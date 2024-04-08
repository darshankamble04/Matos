import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Card from "./Card";

const ThreeOptions = () => {
  const [activeTab, setActiveTab] = useState("Regular");

  const renderContent = () => {
    switch (activeTab) {
      case "Regular":
        return <RegularScreen />;
      case "MTF":
        return <MTFScreen />;
      case "Strategy":
        return <StrategyScreen />;
      default:
        return null;
    }
  };

  const cardsData = [
    {
      leftTop: "BANKNIFTY 45300 PE",
      leftBottom: "NFO 07 FEB 24 OPT\nDelivery    Qty.  0",
      rightTop: "-150.00",
      rightCenter: "0.00 Avg.",
      rightBottom: "340.00 (-42.48%) LTP",
    },
    {
      leftTop: "BANKNIFTY 45300 PE",
      leftBottom: "NFO 07 FEB 24 OPT\nDelivery    Qty.  0",
      rightTop: "-150.00",
      rightCenter: "0.00 Avg.",
      rightBottom: "340.00 (-42.48%) LTP",
    },
    {
      leftTop: "BANKNIFTY 45300 PE",
      leftBottom: "NFO 07 FEB 24 OPT\nDelivery    Qty.  0",
      rightTop: "-150.00",
      rightCenter: "0.00 Avg.",
      rightBottom: "340.00 (-42.48%) LTP",
    },
    {
      leftTop: "BANKNIFTY 45300 PE",
      leftBottom: "NFO 07 FEB 24 OPT\nDelivery    Qty.  0",
      rightTop: "-150.00",
      rightCenter: "0.00 Avg.",
      rightBottom: "340.00 (-42.48%) LTP",
    },
    
  ];

  const RegularScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.leftSide}>
            <Text style={styles.label}>Today's P&amp;L</Text>
            <Text style={styles.value}>+734.30</Text>
          </View>
          <View style={styles.rightSide}>
            <Text style={styles.label}>Overall P&amp;L</Text>
            <Text style={styles.value}>+343.20</Text>
          </View>
        </View>
        <View style={styles.status}>
          <Text style={styles.statusVal}>Closed (4)</Text>
        </View>

        <View>
          {cardsData.map((data, index) => (
            <Card
              key={index}
              leftTop={data.leftTop}
              leftBottom={data.leftBottom}
              rightTop={data.rightTop}
              rightCenter={data.rightCenter}
              rightBottom={data.rightBottom}
            />
          ))}
        </View>
      </View>
    );
  };

  const MTFScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.leftSide}>
            <Text style={styles.label}>Today's P&amp;L</Text>
            <Text style={styles.value}>+734.30</Text>
          </View>
          <View style={styles.rightSide}>
            <Text style={styles.label}>Overall P&amp;L</Text>
            <Text style={styles.value}>+343.20</Text>
          </View>
        </View>
        <Text>MTF Content Goes Here</Text>
      </View>
    );
  };
  const StrategyScreen = () => {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.leftSide}>
            <Text style={styles.label}>Today's P&amp;L</Text>
            <Text style={styles.value}>+734.30</Text>
          </View>
          <View style={styles.rightSide}>
            <Text style={styles.label}>Overall P&amp;L</Text>
            <Text style={styles.value}>+343.20</Text>
          </View>
        </View>
        <Text>Strategy Content Goes Here</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Regular" && styles.activeTab]}
          onPress={() => setActiveTab("Regular")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Regular" && styles.activeTabText,
            ]}
          >
            Regular (4)
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "MTF" && styles.activeTab]}
          onPress={() => setActiveTab("MTF")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "MTF" && styles.activeTabText,
            ]}
          >
            MTF
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Strategy" && styles.activeTab]}
          onPress={() => setActiveTab("Strategy")}
        >
          <Text
            style={[
              styles.tabText,
              activeTab === "Strategy" && styles.activeTabText,
            ]}
          >
            Strategy
          </Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    height: 50,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  tab: {
    paddingHorizontal: 18,
    paddingVertical: 2,
    borderRadius: 25,
    marginRight: 14,
    borderWidth: 1.3, // Border width
    borderColor: "lightgray", // Border color
  },
  tabText: {
    fontSize: 16,
    color: "black",
  },
  activeTab: {
    borderBottomWidth: 1.3,
    borderColor: "#5A288B",
    borderStyle: "solid",
    backgroundColor: "#5A288B",
  },
  activeTabText: {
    color: "white",
  },

  //   for card of P&L
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    // backgroundColor: 'lightgray',
    backgroundColor: "#f6f5f8",
    
    // borderRadius: 10,
    // marginBottom: 20,
    borderBottomWidth: 1.3,
    borderBottomColor: "lightgray",
    borderTopWidth: 1.3,
    borderTopColor: "lightgray",
  },
  leftSide: {
    flex: 1,
    marginRight: 10,
    alignItems: "flex-start",
  },
  rightSide: {
    flex: 1,
    marginLeft: 10,
    alignItems: "flex-end",
  },
  label: {
    // fontSize: 16,
    // fontWeight: '100',
    // marginBottom: 5,
    color: "gray",
  },
  value: {
    fontSize: 14,
    marginTop: -4,
    color: "green", // or any color you prefer
  },

  // status
  status: {
    backgroundColor: '#F2F3F2',
    
  },
  statusVal: {
    paddingVertical: 8,
    borderBottomWidth: 1.3,
    borderBottomColor: "#e1e1e1",
    color: "gray",
    marginHorizontal: 10,
  },
});

export default ThreeOptions;
