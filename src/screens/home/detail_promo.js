import React from 'react';
import {View, Text, Button, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  tinyLogo: {
    width: 320,
    height: 160,
    position: '!important',
  },
  logo: {
    width: 66,
    height: 58,
  },
});

const TextStyle = StyleSheet.create({
  title: {
    color:'#2F2F8D',
    size : '20',
    weight : '700',
    alignItems : 'left'
  },

  description: {
    color:'#000000',
    size : 20,
    weight : '700',
    LineHeight : 24,
    paddingTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    alignItems:'center',
    justifyContent:'center'
  },

  lite:{
    color:'#C8C8C8',
    size : 10,
    weight : '400',
    style : 'italic',
  }

});

export default function DetailPromo(){
  return(
    <View style={{flex:1, alignItems:'center', justifyContent:'center', background:'#ffffff'}}>
    <Image
    style={styles.tinyLogo}
    source={require('../../../assets/home/image_1.svg')}
    />
    <Text
      style={TextStyle.title}>
      Tips untuk memilih kendaraan yang baik
    </Text>
    <Text
    style={TextStyle.lite}
    >
      01/01/2001
    </Text>
    <Text
      style={TextStyle.description}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
    </View>
  );
}
