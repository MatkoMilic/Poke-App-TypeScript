import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigators';
import {ThemeProvider} from './components';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
