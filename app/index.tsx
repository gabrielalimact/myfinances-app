import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import { COLORS } from '../constants';
import { router } from 'expo-router';
import BottomButtonsLogin from '../components/bottomButtonsLogin';

export default function App() {

  
  return (
    <View style={styles.container}>
      <View style={styles.backgroundStyle}>
        <Image source={require('../assets/login.png')} style={styles.image} />
      </View>
      <View style={styles.textsView}>
        <Text style={styles.title}>Enterprise Task Management</Text>
        <Text style={styles.subtitle}>Optimizing task management for improved business perfomance</Text>
      </View>

      <BottomButtonsLogin buttonText='Sign in' isLogin={true}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: COLORS.white,
  },
  backgroundStyle: {
    backgroundColor: COLORS.gray3,
    height: 300
  },
  image: {
    alignSelf: 'center',
    borderRadius: 50,
  },
  textsView: {
    marginTop: 60,
    padding: 20,
    gap: 20,
  },
  title: {
    fontSize : 40,
    fontFamily: 'medium',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'regular',
  },
  bottomView: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
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
});
