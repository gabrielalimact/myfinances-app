import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { COLORS } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import InputStyled from '../components/input';
import BottomButtonsLogin from '../components/bottomButtonsLogin';


const Login = () => {
  const handleGoBack = () => {
    router.back()
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <View style={styles.container}>
          <Ionicons name="ios-arrow-undo-outline" size={30} color="black" onPress={handleGoBack} />

          <Text style={styles.title}>Let's sign you in.</Text>
          <Text style={styles.subtitle}>Welcome back! You've been missed.</Text>

          <View style={styles.inputView}>
            <InputStyled label="Email" type='email-address' placeholder='Your email' />
            <InputStyled label="Password" secureTextEntry={true} placeholder='Password'/>
          </View>
        </View>

        <BottomButtonsLogin isHome={true} buttonText='Sign in'/>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    fontFamily: 'medium',
    marginTop: 20,
    marginLeft: 20,
  },
  subtitle: {
    fontSize: 26,
    fontFamily: 'regular',
    marginTop: 10,
    marginLeft: 20,
  },
  inputView: {
    marginTop: 40,
    padding: 20,
    gap: 20,
  }
})