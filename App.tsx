/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';
import codePush from 'react-native-code-push';
import Config from 'react-native-config';

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
  ...(Platform.OS === 'ios' && {
    deploymentKey: Config.CODE_PUSH_KEY_IOS,
  }),
  installMode: codePush.InstallMode.IMMEDIATE,
};

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, styles.mainAreaView]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Header />
      <View
        style={[
          {
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          },
          styles.contentView,
        ]}>
        <Text>CodePushDemo Demo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainAreaView: {
    flex: 1,
  },
  contentView: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default codePush(codePushOptions)(App);
