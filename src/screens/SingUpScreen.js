import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../config/colors';

const SingUpScreen = () => {
  return (
    <View style={styles.containter}>
      <View style={styles.iconWrapper}>
        <Icon
          name="ios-person-circle-outline"
          size={200}
          color={colors.gray1}
        />
      </View>
      <View style={styles.swithcTitleWrapper}>
        <TouchableOpacity style={styles.titleSwitch}>
          <Text style={styles.title}>Phone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleSwitch}>
          <Text style={styles.title}>Email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SingUpScreen;

const styles = StyleSheet.create({
  containter: {
    display: 'flex',
    flex: 1,
  },
  iconWrapper: {
    display: 'flex',

    alignItems: 'center',
  },
  swithcTitleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 30,
    margin: 30,
  },
  titleSwitch: {
    display: 'flex',
    flex: 1,
    borderBottomColor: colors.balck,
    borderBottomWidth: 1,
  },
  title: {
    textAlign: 'center',
    padding: 15,
  },
});
