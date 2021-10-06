import React from 'react';
import {RootNavigator} from './navigators';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from './components';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <ThemeProvider>
        <RootNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
