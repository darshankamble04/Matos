import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons from expo icons

const NavBar3 = () => {
  return (
    <View style={styles.navBar}>
      {/* Left Side */}
      <View style={styles.leftContainer}>
        <Text style={styles.brand}>Portfolio</Text>
      </View>

      {/* Right Side */}
      <View style={styles.rightContainer}>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="sort" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <MaterialIcons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#5A288B',
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
    fontSize: 20,
    fontWeight: '200',
    marginRight: 10,
    color:"white",
  },
  iconButton: {
    padding: 5,
    borderRadius: 5,
    margin:5,
  },
});

export default NavBar3;