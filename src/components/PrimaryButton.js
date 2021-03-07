import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {colors} from '../config/colors';

const PrimaryButton = ({buttonLable, buttonBgColor, buttonTextColor}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: buttonBgColor}]}>
        <Text style={[styles.text, {color: buttonTextColor}]}>
          {buttonLable}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
  },
  button: {
    padding: 15,
    borderRadius: 5,
  },
  text: {
    textAlign: 'center',

    fontSize: 16,
  },
});
