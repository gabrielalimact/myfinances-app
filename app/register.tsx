import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { router } from 'expo-router'
import { COLORS } from '../constants'
import { Ionicons } from '@expo/vector-icons';
import InputStyled from '../components/input';
import BottomButtonsLogin from '../components/bottomButtonsLogin';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const Register = () => {
  const handleGoBack = () => {
    router.back()
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <Ionicons name="ios-arrow-undo-outline" size={30} color="black" onPress={handleGoBack} />

          <View style={styles.topArea}>
            <Text style={styles.title}>Let's sign you up.</Text>
            <Text style={styles.subtitle}>Welcome! Create an account to enjoy.</Text>
          </View>

            <View style={styles.inputView}>
              <InputStyled label="Name" placeholder='Your name' />
              <InputStyled label="Email" type='email-address' placeholder='Your email' />
              <InputStyled label="Password" secureTextEntry={true} placeholder='Password'/>
            </View>
        </View>

      </KeyboardAwareScrollView>
      <BottomButtonsLogin isHome={true} buttonText='Sign up'/>
    </SafeAreaView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 10,
  },
  topArea: {
    marginVertical: 20,

  },
  title: {
    fontSize: 40,
    fontFamily: 'medium',
  },
  subtitle: {
    fontSize: 26,
    fontFamily: 'regular',
  },
  inputView: {
    gap: 20,
  }
})