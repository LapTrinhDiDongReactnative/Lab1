import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {images} from '../constans';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const FirstScreen = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View
      style={{
        backgroundColor: '#fff',
        flex: 1,
        width: screenHeight,
        overflow: 'hidden',
        height: screenHeight,
      }}>
      <LinearGradient
        style={{
          width: screenWidth,
          backgroundColor: 'transparent',
          position: 'absolute',
          height: screenHeight,
          left: 0,
          top: 0,
        }}
        locations={[0, 0.3, 0.49, 0.71, 1]}
        colors={[
          '#00ccf9',
          'rgba(0, 204, 249, 0.58)',
          'rgba(0, 204, 249, 0.7)',
          'rgba(0, 204, 249, 0.36)',
          '#00ccf9',
        ]}
        useAngle={true}
        angle={180}
      />
      <Image
        style={{
          top: screenHeight * 0.16,
          left: screenWidth / 2 - 75,

          width: 150,
          height: 150,
          position: 'absolute',
        }}
        resizeMode="cover"
        source={images.ellipse_8}
      />
      <View
        style={{
          height: screenHeight * 0.36,
          width: screenWidth,
          position: 'absolute',
          top: screenHeight * 0.38,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 25,
            textAlign: 'center',
            color: '#000',
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
          }}>{`GROW \nYOUR BUSINESS`}</Text>

        <Text
          style={{
            marginTop: screenHeight * 0.05,
            fontSize: 15,
            textAlign: 'center',
            color: '#000',
            fontFamily: 'Roboto-Bold',
            fontWeight: '700',
          }}>{`We will help you to grow your business using \nonline server`}</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: screenWidth,
          position: 'absolute',
          top: screenHeight * 0.72,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigate('One_A');
          }}>
          <View
            style={{
              borderRadius: 10,
              backgroundColor: '#e3c000',
              height: 48,
              width: 119,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 20,
                textAlign: 'center',
                color: '#000',
                fontFamily: 'Roboto-Bold',
                fontWeight: '700',
              }}>
              LOGIN
            </Text>
          </View>
        </TouchableOpacity>

        <View
          style={{
            borderRadius: 10,
            backgroundColor: '#e3c000',
            height: 48,
            width: 119,
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              color: '#000',
              fontFamily: 'Roboto-Bold',
              fontWeight: '700',
            }}>
            SIGN UP
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FirstScreen;
