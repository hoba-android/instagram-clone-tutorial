import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/colors';

const SearchBox = () => {
  const [searchText, setSearchText] = useState('');

  const textChange = (text) => {
    setSearchText(text);
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconwrapper}>
          <Icon
            name="search"
            size={20}
            color={colors.gray1}
            style={styles.icon}
          />
        </View>

        <View style={styles.inputwrapper}>
          <TextInput
            placeholder="search"
            value={searchText}
            onChangeText={(text) => textChange(text)}
            style={styles.input}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  iconwrapper: {
    display: 'flex',
    flex: 1,
  },
  inputwrapper: {
    display: 'flex',
    flex: 7,
  },
  input: {
    height: 40,
  },
  icon: {
    padding: 10,
  },
});
