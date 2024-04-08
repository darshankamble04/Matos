import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from expo icons

const NavBar = () => {
  return (
    <View style={styles.navBar}>
      {/* Left Side */}
      <View style={styles.leftContainer}>
        <Text style={styles.brand}>Stocks</Text>
      </View>

      {/* Right Side */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatarButton}>
          {/* You can replace the placeholder avatar with your own image */}
          <Text style={styles.avatarText}>KD</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#5A288B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  brand: {
    color:"white",
    fontSize: 18,
    fontWeight: '200',
    marginRight: 10,
  },
  iconButton: {
    padding: 5,
    borderRadius: 5,
    margin:5,
  },
  avatarButton: {
    backgroundColor: 'gray',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default NavBar;