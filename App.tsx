import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LeaderboardScreen from './src/features/Leaderboard/LeaderboardScreen';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.main_container}>
        <LeaderboardScreen />
      </SafeAreaView>
    </Provider>
  );
}

export default App;

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
});
