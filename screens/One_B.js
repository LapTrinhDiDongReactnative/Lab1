import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../constans';
import LinearGradient from 'react-native-linear-gradient';

const One_B = props => {
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
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={images.Lock}
          style={{
            marginTop: 20,
            height: 130,
            width: 115,
          }}
        />
        <Text
          style={{
            color: 'black',
            fontSize: 28,
            fontWeight: '700',
            textAlign: 'center',
            width: 200,
            textAlignVertical: 'center',
            marginVertical: 25,
          }}>
          Forgot Password
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 19,
            fontWeight: '700',
            textAlign: 'center',
            width: 350,
            textAlignVertical: 'center',
            marginVertical: 15,
          }}>
          Provide your account's email for which you want to reset your password
        </Text>
        <View
          style={{
            flexDirection: 'row',
            height: screenHeight * 0.07,
            width: screenWidth - 40,
            backgroundColor: '#c4c4c4',
            marginVertical: 15,
            alignItems: 'center',
          }}>
          <Image
            source={images.Mail}
            style={{
              height: screenHeight * 0.065,
              marginHorizontal: 10,
            }}
          />
          <TextInput
            style={{
              height: screenHeight * 0.07,
              flex: 1,
              fontSize: 16,
              fontWeight: '400',
            }}
            placeholder="Email"
            placeholderTextColor="black"
          />
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('One_C')}>
          <View
            style={{
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
              NEXT
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default One_B;

const styles = StyleSheet.create({});
