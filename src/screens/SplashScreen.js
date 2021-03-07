import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const instaLogo = require('../assets/images/insta1.png')

const faceLogo = require('../assets/images/face1.png')

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image 
                style={styles.instaLogo}
                source = {instaLogo}
                />

            </View>
            <View style={styles.logoContainer}>
                <Text style={{color: 'grey', marginBottom: 5}}>From </Text>
                <View style={styles.faceWrapper}>
                    <Image 
                    
                    style={styles.faceLogo}
                    source = {faceLogo}
                    />
                </View>

            </View>
        </View>
    )
}

export default SplashScreen


const styles = StyleSheet.create({
    container: {
      display:'flex',
      flex: 1,
    },
    iconContainer: {
        display:'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
      },
     logoContainer: {
        display:'flex',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems:'center', 
        marginBottom: 30, 
      },
      instaLogo : {
          width: 200,
          height: 200, 
      },
      faceLogo :{
          width: 50, 
          height: 50, 

      },
   
  
  });