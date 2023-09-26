import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const One_D = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <Pressable
      style={{
        width: screenWidth,
        overflow: 'hidden',
        height: screenHeight,
        backgroundColor: '#fff',
      }}>
      <Text
        style={{
          marginTop: screenHeight * 0.05,
          fontSize: 25,
          fontFamily: 'Roboto-Bold',
          fontWeight: '700',
          textAlign: 'center',
          color: '#000',
        }}>
        LOGIN
      </Text>
      <View
        style={{
          height: 54,
          width: 330,
          borderColor: '#f2f2f2',
          borderWidth: 1,
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: screenHeight * 0.07,
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Roboto-Regular',
            fontSize: 18,
            color: '#000',
          }}>
          Email
        </Text>
      </View>
      <View
        style={{
          height: 54,
          width: 330,
          borderColor: '#f2f2f2',
          borderWidth: 1,
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: screenHeight * 0.07,
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Roboto-Regular',
            fontSize: 18,
            color: '#000',
          }}>
          Password
        </Text>
        <Image
          style={{
            width: 38,
            height: 36,
            overflow: 'hidden',
          }}
          resizeMode="cover"
          source={require('../assets/eye_pass.png')}
        />
      </View>

      <TouchableOpacity
        style={{
          marginTop: screenHeight * 0.08,
        }}
        onPress={() => {
          navigate('One_E');
        }}>
        <View
          style={{
            backgroundColor: '#e53935',
            height: screenHeight * 0.065,
            borderRadius: 2,
            width: screenWidth - 50,
            marginHorizontal: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              fontFamily: 'Roboto-Bold',
              fontWeight: '700',
              textAlign: 'center',
            }}>
            LOGIN
          </Text>
        </View>
      </TouchableOpacity>

      <View
        style={{
          top: 524,
          left: 19,
          position: 'absolute',
          width: 328,
          height: 45,
        }}>
        <View
          style={{
            left: 0,
            width: 328,
            height: 45,
            top: 0,
            left: 0,
            position: 'absolute',
          }}>
          <View
            style={{
              backgroundColor: '#25479b',
              left: 0,
              width: 110,
              top: 0,
              height: 45,
              borderRadius: 2,
              position: 'absolute',
            }}
          />
          <View
            style={{
              left: 108,
              backgroundColor: '#0f8ee0',
              width: 110,
              top: 0,
              height: 45,
              borderRadius: 2,
              position: 'absolute',
            }}
          />
          <View
            style={{
              left: 218,
              borderColor: '#0680f1',
              borderWidth: 1,
              borderStyle: 'solid',
              width: 110,
              backgroundColor: '#fff',
              width: 110,
              top: 0,
              height: 45,
              borderRadius: 2,
              position: 'absolute',
            }}
          />
        </View>
      </View>

      <Image
        style={{
          top: 528,
          width: 30,
          height: 30,
          left: 50,
          position: 'absolute',
          overflow: 'hidden',
        }}
        resizeMode="cover"
        source={require('../assets/icofacebook.png')}
      />
      <Image
        style={{
          top: 529,
          left: 270,
          width: 35,
          height: 35,
          position: 'absolute',
          overflow: 'hidden',
        }}
        resizeMode="cover"
        source={require('../assets/icogoogle.png')}
      />

      <Text
        style={{
          top: 514,
          left: 144,
          fontSize: 50,
          width: 69,
          color: '#fff',
          fontFamily: 'Roboto-Bold',
          fontWeight: '700',
          textAlign: 'center',
          position: 'absolute',
        }}>
        z
      </Text>
      <View
        style={{
          backgroundColor: 'rgba(49, 170, 82, 0.19)',
          width: screenWidth,
          left: 0,
          height: screenHeight,
          top: 0,
          left: 0,
          position: 'absolute',
          zIndex: -100,
        }}
      />
      <Text
        style={{
          top: 397,
          left: 36,
          color: '#000',
          width: 260,
          fontSize: 14,
          height: 20,
          width: 260,
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          position: 'absolute',
        }}>
        When you agree to terms and conditions
      </Text>
      <Text
        style={{
          top: 464,
          left: 45,
          color: '#000',
          width: 260,
          fontSize: 14,
          height: 20,
          width: 260,
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          position: 'absolute',
        }}>
        Or login with
      </Text>
      <Text
        style={{
          top: 430,
          color: '#5d25fa',
          left: 50,
          height: 20,
          width: 260,
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          position: 'absolute',
        }}>
        For got your password?
      </Text>
    </Pressable>
  );
};

export default One_D;

const styles = StyleSheet.create({});
