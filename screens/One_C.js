import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const One_C = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;

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
          height: screenHeight * 0.4,
          width: screenWidth,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            marginTop: 18,
            textAlign: 'center',
            textTransform: 'uppercase',
            color: 'black',
            fontSize: 48,
            fontWeight: 'bold',
          }}>
          Code
        </Text>
      </View>

      <Text
        style={{
          textAlign: 'center',
          textTransform: 'uppercase',
          color: 'black',
          fontSize: 16,
          fontWeight: 'bold',
        }}>
        Verification
      </Text>
      <Text
        style={{
          marginTop: 25,
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
  );
};

export default One_C;

const styles = StyleSheet.create({});
