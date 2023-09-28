import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../constans';
import {Dimensions} from 'react-native';

const Two_A = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <LinearGradient
      style={{
        width: screenWidth,
        backgroundColor: 'transparent',
        height: screenHeight,
      }}
      locations={[0, 1]}
      colors={['#fbcb00', '#bf9a00']}
      useAngle={true}
      angle={180}>
      <Text
        style={{
          fontSize: 30,
          fontFamily: 'robotoBold',
          fontWeight: '700',
          marginHorizontal: screenHeight * 0.03,
          color: '#000',
          marginVertical: screenHeight * 0.1,
        }}>
        LOGIN
      </Text>
      <View
        style={{
          height: screenHeight * 0.075,
          borderWidth: 1,
          borderColor: '#f2f2f2',
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: screenWidth - 30,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: screenHeight * 0.03,
        }}>
        <Image
          style={{
            height: 32,
            width: 32,
            marginHorizontal: 10,
            overflow: 'hidden',
          }}
          resizeMode="cover"
          source={images.avatar}
        />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'robotoRegular',
            fontSize: 18,
            color: '#000',
            marginHorizontal: 3,
          }}>
          Name
        </Text>
      </View>
      <View
        style={{
          height: screenHeight * 0.075,
          borderWidth: 1,
          borderColor: '#f2f2f2',
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: screenWidth - 30,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 30,
            width: 30,
            overflow: 'hidden',
            marginHorizontal: 10,
          }}
          resizeMode="cover"
          source={images.Lock}
        />
        <Text
          style={{
            fontFamily: 'robotoRegular',
            fontSize: 18,
            color: '#000',
            marginHorizontal: 3,
            flex: 1,
          }}>
          Password
        </Text>
        <Image
          style={{
            height: 25,
            width: 29,
            marginHorizontal: 15,
            overflow: 'hidden',
          }}
          resizeMode="cover"
          source={images.eye_pass}
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          navigate('XMEye');
        }}>
        <View
          style={{
            borderRadius: 2,
            backgroundColor: '#060000',
            height: screenHeight * 0.073,
            width: screenWidth - 30,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: screenHeight * 0.09,
            marginBottom: screenHeight * 0.07,
          }}>
          <Text
            style={{
              fontSize: 22,
              fontFamily: 'robotoBold',
              fontWeight: '700',
              color: '#fff',
            }}>
            LOGIN
          </Text>
        </View>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 22,
          fontFamily: 'robotoBold',
          fontWeight: '700',
          textAlign: 'center',
          color: '#000',
        }}>
        CREATE ACCOUNT
      </Text>
    </LinearGradient>
  );
};

export default Two_A;

const styles = StyleSheet.create({});
