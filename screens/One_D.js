import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const One_D = () => {
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}>
      <View
        style={{
          height: screenHeight * 0.19,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Login
        </Text>
      </View>
      <View style={{}}></View>
    </View>
  );
};

export default One_D;

const styles = StyleSheet.create({});
