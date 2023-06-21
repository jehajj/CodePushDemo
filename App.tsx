/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

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
        <Text>CodePushDemo App</Text>
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

export default App;
