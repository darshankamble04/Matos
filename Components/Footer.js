import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from expo icons

const Footer = ({ activeTab, setActiveTab }) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Stocks' && styles.activeTab]}
        onPress={() => setActiveTab('Stocks')}
      >
        <MaterialIcons name="trending-up" size={24} color="black" />
        <Text style={styles.tabText}>Stocks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Orders' && styles.activeTab]}
        onPress={() => setActiveTab('Orders')}
      >
        <MaterialIcons name="shopping-cart" size={24} color="black" />
        <Text style={styles.tabText}>Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Portfolio' && styles.activeTab]}
        onPress={() => setActiveTab('Portfolio')}
      >
        <MaterialIcons name="assessment" size={24} color="black" />
        <Text style={styles.tabText}>Portfolio</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Discover' && styles.activeTab]}
        onPress={() => setActiveTab('Discover')}
      >
        <MaterialIcons name="explore" size={24} color="black" />
        <Text style={styles.tabText}>Discover</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 'Account' && styles.activeTab]}
        onPress={() => setActiveTab('Account')}
      >
        <MaterialIcons name="account-circle" size={24} color="black" />
        <Text style={styles.tabText}>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1.3,
    borderTopColor: 'lightgray',
    borderTopWidth: 1.3,
    height: 50,
    paddingHorizontal: 10,
  },
  tab: {
    alignItems: 'center',
    opacity: 0.6,
  },
  tabText: {
    fontSize: 12,
  },
  activeTab: {
    opacity: 1,
  },
});

export default Footer;