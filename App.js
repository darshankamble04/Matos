import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
// import NavBar from './NavBar';
// import Footer from './Footer';
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "./Components/Home/NavBar";
import Footer from "./Components/Footer";
import Main from "./Components/Stocks/Main";
import Portfolio from "./Components/Portfolio/Portfolio";
import LiveOptionChainViewer from "./Components/Stocks/Components/LiveOptionChainViewer";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Your Home Screen content */}
      {/* <NavBar />  */}
      <Main />
      <LiveOptionChainViewer/>
    </View>
  );
};

const OrdersScreen = () => {
  return (
    <View style={styles.container}>
      {/* Your Orders Screen content */}
      <Text>Order</Text>
    </View>
  );
};

const PortfolioScreen = () => {
  return (
    <View style={styles.container}>
      {/* Your Portfolio Screen content */}
      <Portfolio />
    </View>
  );
};
const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      {/* Your Discover Screen content */}
      <Text>Order</Text>
    </View>
  );
};

const AccountScreen = () => {
  return (
    <View style={styles.container}>
      {/* Your Account Screen content */}
      {/* <Portfolio /> */}
      <Text>acc</Text>
    </View>
  );
};

const App = () => {
  
  const [activeTab, setActiveTab] = useState("Stocks");

  const renderScreen = () => {
    switch (activeTab) {
      case "Stocks":
        return <HomeScreen />;
      case "Orders":
        return <OrdersScreen />;
      case "Portfolio":
        return <PortfolioScreen />;
      case "Discover":
        return <DiscoverScreen />;
      case "Account":
        return <AccountScreen />;
      default:
        return null;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#5A288B" barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        {renderScreen()}
        <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // fontFamily: 'Poppins-Regular',
    // fontSize: 40,
  },
});

export default App;
