import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import GameScreen from './screens/Game/GameScreen';
export default function App() {
  return (
    <LinearGradient
      colors={['#F2EE9D', '#7A9D54', '#557A46']}
      style={styles.linearGradient}>
      <View style={styles.overlay}>
        <GameScreen />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  overlay: {
    flex: 1,
  },
});
