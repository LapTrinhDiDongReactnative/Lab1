import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const One_C = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <LinearGradient
      style={{
        height: screenHeight,
        width: screenWidth,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        overflow: 'hidden',
      }}
      locations={[0, 0.3, 0.85, 1]}
      colors={['#c7f4f6', '#d1f4f6', '#e5f4f5', '#00ccf9']}
      useAngle={true}
      angle={180}>
      <View
        style={{
          height: screenHeight,
          width: screenWidth,
          overflow: 'hidden',
        }}>
        <Text
          style={{
            marginTop: screenHeight * 0.13,
            marginBottom: screenHeight * 0.08,
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'black',
            fontSize: 49,
            fontWeight: 'bold',
            fontFamily: 'Roboto-Bold',
          }}>
          Code
        </Text>

        <Text
          style={{
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'black',
            fontSize: 19,
            fontWeight: 'bold',
            fontFamily: 'Roboto-Bold',
          }}>
          Verification
        </Text>
        <Text
          style={{
            marginTop: screenHeight * 0.09,
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Enter ontime password sent on
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>
          ++848273458463
        </Text>
        <View
          style={{
            marginVertical: screenHeight * 0.05,
            flexDirection: 'row',
            width: screenWidth,
            justifyContent: 'center',
          }}>
          <View
            style={{
              height: screenWidth * 0.142,
              width: 3,
              backgroundColor: 'black',
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: screenWidth * 0.142,
              borderTopWidth: 3,
              borderBottomWidth: 3,
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: 3,
              backgroundColor: 'black',
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: screenWidth * 0.142,
              borderTopWidth: 3,
              borderBottomWidth: 3,
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: 3,
              backgroundColor: 'black',
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: screenWidth * 0.142,
              borderTopWidth: 3,
              borderBottomWidth: 3,
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: 3,
              backgroundColor: 'black',
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: screenWidth * 0.142,
              borderTopWidth: 3,
              borderBottomWidth: 3,
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: 3,
              backgroundColor: 'black',
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: screenWidth * 0.142,
              borderTopWidth: 3,
              borderBottomWidth: 3,
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: 3,
              backgroundColor: 'black',
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: screenWidth * 0.142,
              borderTopWidth: 3,
              borderBottomWidth: 3,
            }}></View>
          <View
            style={{
              height: screenWidth * 0.142,
              width: 3,
              backgroundColor: 'black',
            }}></View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('One_D')}>
          <View
            style={{
              alignSelf: 'center',
              height: screenHeight * 0.073,
              width: screenWidth - 40,
              backgroundColor: '#e3c000',
              marginVertical: 20,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: 'black',
                fontSize: 25,
                fontWeight: '700',
              }}>
              Verify code
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default One_C;

const styles = StyleSheet.create({});
