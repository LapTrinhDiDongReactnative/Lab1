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
          marginTop: screenHeight * 0.08,
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
          height: screenHeight * 0.072,
          width: screenWidth - 40,
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
          height: screenHeight * 0.072,
          width: screenWidth - 40,
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          paddingHorizontal: 15,
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop: screenHeight * 0.04,
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
            width: 30,
            height: 27,
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

      <Text
        style={{
          color: '#000',
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          alignSelf: 'center',
          marginTop: screenHeight * 0.03,
          marginBottom: screenHeight * 0.01,
        }}>
        When you agree to terms and conditions
      </Text>
      <Text
        style={{
          color: '#5d25fa',
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          marginVertical: screenHeight * 0.01,
        }}>
        For got your password?
      </Text>
      <Text
        style={{
          color: '#000',
          fontSize: 14,
          textAlign: 'center',
          fontFamily: 'Roboto-Regular',
          marginBottom: screenHeight * 0.01,
        }}>
        Or login with
      </Text>

      <View
        style={{
          width: screenWidth,
          height: screenHeight * 0.072,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: '#25479b',
            width: screenWidth / 3.5,
            height: screenHeight * 0.07,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              marginRight: 10,
              marginBottom: 3,
              width: screenHeight * 0.05,
              height: screenHeight * 0.05,
              overflow: 'hidden',
            }}
            resizeMode="cover"
            source={require('../assets/icofacebook.png')}
          />
        </View>
        <View
          style={{
            backgroundColor: '#0f8ee0',
            width: screenWidth / 3.5,
            height: screenHeight * 0.07,
            borderRadius: 2,
          }}>
          <Text
            style={{
              fontSize: 50,
              color: '#fff',
              fontFamily: 'Roboto-Bold',
              fontWeight: '700',
              textAlign: 'center',
              position: 'absolute',
              top: -12,
              left: 42,
            }}>
            z
          </Text>
        </View>
        <View
          style={{
            borderColor: '#0680f1',
            borderWidth: 1,
            borderStyle: 'solid',
            backgroundColor: '#fff',
            width: screenWidth / 3.5,
            height: screenHeight * 0.07,
            borderRadius: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: screenHeight * 0.05,
              height: screenHeight * 0.05,
              overflow: 'hidden',
            }}
            resizeMode="cover"
            source={require('../assets/icogoogle.png')}
          />
        </View>
      </View>

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
    </Pressable>
  );
};

export default One_D;

const styles = StyleSheet.create({});
