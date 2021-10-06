import React from 'react';
import {RootNavigator} from './navigators';
import {NavigationContainer} from '@react-navigation/native';
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
