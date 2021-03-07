import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  FlatList,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {colors} from '../config/colors';
import PrimaryButton from '../components/PrimaryButton';
import SearchBox from '../components/SearchBox';

const instaTitle = require('../assets/images/title.png');

const DATA = [
  {id: 1, title: 'lan1', subtitle: 'lan1s'},
  {id: 2, title: 'lan2', subtitle: 'lan2s'},
  {id: 3, title: 'lan3', subtitle: 'lan3s'},
  {id: 4, title: 'lan4', subtitle: 'lan4s'},
  {id: 5, title: 'lan5', subtitle: 'lan5s'},
  {id: 6, title: 'lan6', subtitle: 'lan6s'},
  {id: 7, title: 'lan7', subtitle: 'lan7s'},
];

const InitialLuncherScreen = () => {
  const [modavVisible, setModalVisible] = useState(false);

  const languageHandler = () => {
    setModalVisible(!modavVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.languageWrapper}>
        <TouchableOpacity
          style={{flexDirection: 'row', padding: 5}}
          onPress={languageHandler}>
          <Text style={{paddingHorizontal: 10}}>English (United States)</Text>
          <Icon name="angle-down" size={20} color={colors.gray1} />
        </TouchableOpacity>
      </View>
      <View style={styles.buttonWrapper}>
        <Image style={styles.instaTitleImage} source={instaTitle} />
        <PrimaryButton
          buttonLable="Create New Account"
          buttonBgColor={colors.primary}
          buttonTextColor={colors.secondary}
        />

        <PrimaryButton
          buttonLable="Login"
          buttonBgColor={colors.secondary}
          buttonTextColor={colors.primary}
        />
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.fotterTextWrapper}>
          <Text style={{color: colors.gray1}}>from</Text>
          <Text>FACEBOOK</Text>
        </View>
      </View>
      <Modal visible={modavVisible} transparent={true}>
        <View
          style={[
            styles.modalContainter,
            modavVisible ? {backgroundColor: 'rgba(0,0,0,0.5)'} : null,
          ]}>
          <View style={styles.modalContentContainter}>
            <View style={{padding: 10}}>
              <Text style={{fontSize: 16, fontWeight: '700'}}>
                Select Language
              </Text>
            </View>
            <View style={{height: 0.5, backgroundColor: colors.gray1}} />
            <View style={styles.searchBoxWrapper}>
              <SearchBox />
            </View>
            <View style={{height: 0.5, backgroundColor: colors.gray1}} />
            <FlatList
              data={DATA}
              keyExtractor={(item) => +item.id}
              renderItem={({item}) => {
                return (
                  <View style={styles.langWrapper}>
                    <Text>{item.title}</Text>
                    <Text style={{fontSize: 12, color: colors.gray1}}>
                      {item.subtitle}
                    </Text>
                  </View>
                );
              }}
            />
          </View>
        </View>
        <TouchableOpacity onPress={languageHandler}>
          <Text>Close</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default InitialLuncherScreen;

const styles = StyleSheet.create({
  container: {display: 'flex', flex: 1},
  languageWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  buttonWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerWrapper: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  fotterTextWrapper: {
    borderTopColor: colors.gray1,
    borderTopWidth: 0.4,
    width: '100%',
    marginBottom: 10,
    padding: 5,
    alignItems: 'center',
  },
  instaTitleImage: {
    width: '80%',
    height: '60%',
  },
  modalContainter: {
    display: 'flex',
    flex: 1,
  },
  modalContentContainter: {
    display: 'flex',
    flex: 1,
    marginHorizontal: '10%',
    backgroundColor: colors.secondary,
  },
  searchBoxWrapper: {},
  langWrapper: {
    margin: 20,
  },
});
