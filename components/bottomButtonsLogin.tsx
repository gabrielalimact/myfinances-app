import { COLORS } from "../constants"
import { Pressable, View, Text, StyleSheet } from "react-native"
import { router } from "expo-router"

const BottomButtonsLogin = (props) => {
  const handlePressButton = () => {
    if(props.isLogin) router.push('/login');
    if(props.isHome) router.push('/home');
  }
  const onRegister = () => {
    router.push('/register');
  }
  return (
    <View style={styles.bottomView}>
      <Pressable style={styles.button} onPress={handlePressButton}>
        <Text style={styles.buttonText}>{props.buttonText}</Text>
      </Pressable>
      
      <View style={styles.bottomViewText}>
        <Text style={{fontSize: 16, fontFamily: 'regular'}}>Don't have an account?</Text>
        <Text style={{color: COLORS.tertiary, fontSize: 16}} onPress={onRegister}>Register</Text>
      </View>
    </View>
  )
}

export default BottomButtonsLogin

const styles = StyleSheet.create({
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  button: {
    backgroundColor: COLORS.tertiary,
    padding: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'semibold',
    fontSize: 18,
  },
  bottomViewText: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    marginTop: 15,
  },
})