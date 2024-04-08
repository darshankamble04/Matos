import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import NavBar3 from "./Components/NavBar3";
import ThreeOptions from "./Components/ThreeOptions";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Positions");

  const renderContent = () => {
    switch (activeTab) {
      case "Positions":
        return <PositionsScreen />;
      case "Holdings":
        return <HoldingsScreen />;
      default:
        return null;
    }
  };

  const PositionsScreen = () => {
    return (
      <View style={styles.container}>
        <ThreeOptions/>
      </View>
    );
  };

  const HoldingsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Holdings Content Goes Here</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <NavBar3 />
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Positions" && styles.activeTab]}
          onPress={() => setActiveTab("Positions")}
        >
          <Text style={[styles.tabText, activeTab === "Positions" && styles.activeTabText]}>Positions (4)</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === "Holdings" && styles.activeTab]}
          onPress={() => setActiveTab("Holdings")}
        >
          <Text style={[styles.tabText, activeTab === "Holdings" && styles.activeTabText]}>Holdings</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#e1e1e1', 
  },
  tabBar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "white",
    
    backgroundColor: '#F2F3F2',
    // height: 50,
    paddingHorizontal: 10,
    // borderBottomWidth: 1.3,
    // borderBottomColor: 'lightgray',
    // borderStyle: 'solid',
  },
  tab: {
    paddingVertical: 10,
    marginRight: 25,
  },
  tabText: {
    fontSize: 16,
    color: 'gray',
  },
  activeTab: {
    borderBottomWidth: 1.9,
    borderBottomColor: 'black',
    borderStyle: 'solid',

  },
  activeTabText: {
    color: 'black',
    fontWeight: 'thin',
  },
});

export default Portfolio;