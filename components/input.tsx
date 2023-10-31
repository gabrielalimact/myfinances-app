import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, KeyboardAvoidingView } from 'react-native';
import { COLORS } from '../constants';


const InputStyled = (props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputStyle = isFocused ? [styles.input, styles.inputFocused] : styles.input;

  return (
    <KeyboardAvoidingView>
      
      <Text style={styles.label}>{props.label}</Text>
      <TextInput style={inputStyle} {...props} keyboardType={props.type}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </KeyboardAvoidingView>
  )
}

export default InputStyled;

const styles = StyleSheet.create({
  input: {
    height: 50,
    fontSize: 16,
    fontFamily: 'regular',
    backgroundColor: COLORS.offwhite,
    borderRadius: 10,
    padding: 10,
  },
  inputFocused: {
    borderColor: COLORS.gray2,
    borderWidth: 1,
  },
  label: {
    fontSize: 20,
    fontFamily: 'regular',
    marginBottom: 8,
  }
})