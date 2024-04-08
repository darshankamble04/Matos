import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ leftTop, leftBottom, rightTop, rightCenter, rightBottom }) => {
  return (
    <View style={styles.card}>
    <View style={styles.innerCard}>
      <View style={styles.left}>
        <Text style={styles.leftTop}>{leftTop}</Text>
        <Text style={styles.leftBottom}>{leftBottom}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.rightTop}>{rightTop}</Text>
        <Text style={styles.rightCenter}>{rightCenter}</Text>
        <Text style={styles.rightBottom}>{rightBottom}</Text>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F2F3F2',
    // borderRadius: 10,
    // paddingHorizontal: 15,
    // borderTopWidth: 1.3,
    // borderTopColor: "lightgray",
  },
  innerCard:{
    paddingVertical: 4,
    paddingTop:9,
    marginHorizontal: 10,
    borderBottomWidth: 1.3,
    borderBottomColor: "#e1e1e1",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  left: {
  },
  right: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  leftTop: {
    fontSize: 15,
    // fontWeight: '200',
    // marginBottom: 5,
  },
  leftBottom: {
    // fontSize: 14,
    // fontWeight: 'normal',
    color:"gray"
  },
  rightTop: {
  color:"#cb0505",
    fontSize: 15,
    // fontWeight: '200',
},
rightCenter: {
    // fontSize: 16,
    color:"gray"
},
rightBottom: {
    // fontSize: 14,
    color:"gray"
  },
});

export default Card;