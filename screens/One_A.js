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
const One_A = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    // Phân màu theo tuyến tính
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
          width: screenWidth,
          height: screenHeight,
          overflow: 'hidden',
        }}>
        <Image
          style={{
            top: screenHeight * 0.13,
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
            top: screenHeight * 0.35,
            position: 'absolute',
            left: 0,
            height: screenHeight * 0.35,
            width: screenWidth,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#000',
              fontFamily: 'Roboto-Bold',
              fontWeight: '700',
              fontSize: 25,
            }}>{`GROW\nYOUR BUSINESS`}</Text>

          <Text
            style={{
              marginTop: screenHeight * 0.05,
              fontSize: 15,
              textAlign: 'center',
              color: '#000',
              fontFamily: 'Roboto-Bold',
              fontWeight: '700',
            }}>{`We will help you to grow your business using\nonline server`}</Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: screenWidth,
            position: 'absolute',
            top: screenHeight * 0.7,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigate('One_B');
            }}>
            <View
              style={{
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
        <View
          style={{
            width: screenWidth,
            height: screenHeight * 0.11,
            position: 'absolute',
            top: screenHeight * 0.8,
            left: 0,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              textAlign: 'center',
              color: '#000',
              fontFamily: 'Roboto-Bold',
              fontWeight: '700',
            }}>
            HOW WE WORK?
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default One_A;
