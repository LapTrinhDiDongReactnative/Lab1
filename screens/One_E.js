import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {images} from '../constans';

const One_E = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;
  return (
    <View
      style={{
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        overflow: 'hidden',
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
      }}>
      <Text
        style={{
          fontSize: 25,
          color: '#000',
          fontWeight: '700',
          fontFamily: 'Roboto-Bold',
          textAlign: 'center',
          marginTop: screenHeight * 0.075,
          marginBottom: screenHeight * 0.03,
        }}>
        REGISTER
      </Text>
      <View
        style={{
          height: screenHeight * 0.07,
          borderWidth: 1,
          borderColor: 'rgba(196, 196, 196, 0.3)',
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: screenWidth - 40,
          alignSelf: 'center',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 10,
          marginVertical: screenHeight * 0.02,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
            color: '#000',
          }}>
          Name
        </Text>
      </View>
      <View
        style={{
          height: screenHeight * 0.07,
          borderWidth: 1,
          borderColor: 'rgba(196, 196, 196, 0.3)',
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: screenWidth - 40,
          alignSelf: 'center',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 10,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
            color: '#000',
          }}>
          Phone
        </Text>
      </View>
      <View
        style={{
          height: screenHeight * 0.07,
          borderWidth: 1,
          borderColor: 'rgba(196, 196, 196, 0.3)',
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: screenWidth - 40,
          alignSelf: 'center',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 10,
          marginVertical: screenHeight * 0.02,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
            color: '#000',
          }}>
          Email
        </Text>
      </View>
      <View
        style={{
          height: screenHeight * 0.07,
          borderWidth: 1,
          borderColor: 'rgba(196, 196, 196, 0.3)',
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: screenWidth - 40,
          alignSelf: 'center',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          flexDirection: 'row',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
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
          source={images.eye_pass}
        />
      </View>
      <View
        style={{
          height: screenHeight * 0.07,
          borderWidth: 1,
          borderColor: 'rgba(196, 196, 196, 0.3)',
          borderStyle: 'solid',
          backgroundColor: 'rgba(196, 196, 196, 0.3)',
          width: screenWidth - 40,
          alignSelf: 'center',
          alignItems: 'flex-start',
          justifyContent: 'center',
          paddingHorizontal: 10,
          marginVertical: screenHeight * 0.02,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: 'Roboto-Regular',
            textAlign: 'center',
            color: '#000',
          }}>
          Birthday
        </Text>
      </View>

      <View
        style={{
          height: screenHeight * 0.07,
          width: screenWidth - 50,
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          marginTop: 10,
        }}>
        <Image
          style={{
            height: 23,
            width: 23,
            marginHorizontal: 13,
          }}
          resizeMode="cover"
          source={images.rdbMale}
        />
        <Text
          style={{
            textAlign: 'center',
            color: '#000',
            fontFamily: 'Roboto-Regular',
            fontSize: 18,
            marginRight: 8,
          }}>
          Male
        </Text>
        <Image
          style={{
            height: 23,
            width: 23,
            marginHorizontal: 13,
          }}
          resizeMode="cover"
          source={images.rdbFemale}
        />
        <Text
          style={{
            textAlign: 'center',
            color: '#000',
            fontFamily: 'Roboto-Regular',
            fontSize: 18,
          }}>
          Female
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => {
          navigate('Two_A');
        }}>
        <View
          style={{
            borderRadius: 2,
            backgroundColor: '#e53935',
            height: screenHeight * 0.065,
            width: screenWidth - 20,
            alignSelf: 'center',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
            marginBottom: 6,
          }}>
          <Text
            style={{
              fontSize: 20,
              color: '#fff',
              fontFamily: 'Roboto-Bold',
              fontWeight: '700',
              textAlign: 'center',
            }}>
            REGISTER
          </Text>
        </View>
      </TouchableOpacity>

      <Text
        style={{
          fontSize: 14,
          width: screenWidth * 0.8,
          height: screenHeight * 0.05,
          textAlign: 'center',
          alignSelf: 'center',
          fontFamily: 'Roboto-Regular',
          color: '#000',
          marginVertical: screenHeight * 0.01,
        }}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

export default One_E;

const styles = StyleSheet.create({});
