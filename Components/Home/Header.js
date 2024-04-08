import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={style.container}>
        <View style={style.box1}>
            <Image
                style={style.logo}
                source={require('../../assets/IntaWTextImg-removebg-preview.png')}
            />
        </View>
        <View style={style.box2}>
            <Text>Bodfsdfx2</Text>npx expo start 
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    logo:{
        width:100,
        height:50,
        resizeMode:"contain"
    },
    container:{
        justifyContent:"space-between",
        display:"flex",
        flexDirection:"row"
    },
    box1:{
        backgroundColor:"blue"
    },
    box1:{
        backgroundColor:"blue"
    }
})

export default Header

