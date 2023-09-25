import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const FirstScreen = props => {
  const {navigation, route} = props;
  const {navigate, goBack} = navigation;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.gradientBackground}></View>
        <View style={styles.circle} />
        <Text style={styles.title}>GROW YOUR BUSINESS</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.subtitle}>
          We will help you to grow your business using online server
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            width: 350,
            marginTop: 40,
          }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate('One_A')}>
            <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    backgroundColor: '#8be8fc',
  },
  header: {
    height: screenHeight * 0.6,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  gradientBackground: {},
  circle: {
    top: 60,
    width: 150,
    height: 150,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: '#111',
    position: 'absolute',
  },
  title: {
    color: 'black',
    fontSize: 35,
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginTop: 250,
    width: 350,
    textAlignVertical: 'center',
  },
  content: {
    height: screenHeight * 0.4,
    alignItems: 'center',
    padding: 20,
  },
  subtitle: {
    color: 'black',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 15,
  },
  button: {
    width: 119,
    height: 48,
    backgroundColor: '#E3C000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: '700',
  },
});

export default FirstScreen;
