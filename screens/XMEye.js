import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {images} from '../constans';

const XMEye = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: screenWidth,
        height: screenHeight,
        overflow: 'hidden',
      }}>
      <Image
        style={{
          alignSelf: 'center',
          height: screenHeight * 0.23,
          marginVertical: screenHeight * 0.05,
        }}
        resizeMode="cover"
        source={images.eyeball}
      />

      <View style={{}}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 5,
            alignItems: 'center',
            width: screenWidth - 50,
            alignSelf: 'center',
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              overflow: 'hidden',
            }}
            resizeMode="cover"
            source={images.user2}
          />
          <Text
            style={{
              color: '#ccc',
              fontFamily: 'robotoRegular',
              fontSize: 18,
              marginHorizontal: 20,
            }}>
            Please input user name
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: screenWidth - 50,
            alignSelf: 'center',
            borderTopWidth: 1,
            borderColor: '#ccc',
            borderStyle: 'solid',
          }}
        />
      </View>
      <View
        style={{
          marginVertical: screenHeight * 0.05,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginBottom: 5,
            alignItems: 'center',
            width: screenWidth - 50,
            alignSelf: 'center',
          }}>
          <Image
            style={{
              height: 30,
              width: 30,
              overflow: 'hidden',
            }}
            resizeMode="cover"
            source={images.block2}
          />
          <Text
            style={{
              color: '#ccc',
              fontFamily: 'robotoRegular',
              fontSize: 18,
              marginHorizontal: 20,
            }}>
            Please input password
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: screenWidth - 50,
            alignSelf: 'center',
            borderTopWidth: 1,
            borderColor: '#ccc',
            borderStyle: 'solid',
          }}
        />
      </View>

      <View
        style={{
          marginTop: screenHeight * 0.01,
          height: screenHeight * 0.07,
          backgroundColor: '#386ffc',
          borderRadius: 5,
          width: screenWidth - 55,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontFamily: 'robotoRegular',
            fontSize: 18,
          }}>
          LOGIN
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginVertical: 15,
        }}>
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontFamily: 'robotoRegular',
            fontSize: 18,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            fontFamily: 'robotoRegular',
            fontSize: 18,
          }}>
          Forgot Password
        </Text>
      </View>
      <View
        style={{
          marginTop: screenHeight * 0.05,
          flexDirection: 'row',
          alignItems: 'center',
          width: screenWidth - 50,
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: screenWidth * 0.18,
            borderColor: '#00f',
            height: 1,
            borderTopWidth: 1,
            borderStyle: 'solid',
          }}
        />
        <Text
          style={{
            marginHorizontal: 10,
            color: '#000',
            textAlign: 'center',
            fontFamily: 'robotoRegular',
            fontSize: 18,
          }}>
          Other Login Methods
        </Text>
        <View
          style={{
            width: screenWidth * 0.18,
            borderColor: '#00f',
            height: 1,
            borderTopWidth: 1,
            borderStyle: 'solid',
          }}
        />
      </View>
      <View
        style={{
          marginTop: screenHeight * 0.03,
          height: screenHeight * 0.15,
          width: screenWidth - 50,
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            borderRadius: 10,
            height: screenHeight * 0.13,
            width: screenHeight * 0.13,
            backgroundColor: '#3ab4ff',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: screenHeight * 0.12,

              overflow: 'hidden',
            }}
            resizeMode="cover"
            source={images.addmem}
          />
        </View>
        <View
          style={{
            borderRadius: 10,
            height: screenHeight * 0.13,
            width: screenHeight * 0.13,
            backgroundColor: '#f4aa47',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: screenHeight * 0.13,

              overflow: 'hidden',
            }}
            resizeMode="cover"
            source={images.wifi}
          />
        </View>
        <View
          style={{
            borderRadius: 10,
            height: screenHeight * 0.13,
            width: screenHeight * 0.13,
            backgroundColor: '#3a579c',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            style={{
              height: screenHeight * 0.08,
              overflow: 'hidden',
            }}
            resizeMode="cover"
            source={images.fb2}
          />
        </View>
      </View>
    </View>
  );
};

export default XMEye;

const styles = StyleSheet.create({});
