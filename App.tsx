import React from 'react';
import {SafeAreaView} from 'react-native';
import LeaderboardScreen from './src/features/Leaderboard/LeaderboardScreen';
import {Provider} from 'react-redux';
import store from './src/store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <LeaderboardScreen />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
