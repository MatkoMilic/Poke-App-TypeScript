import {StyleSheet, ViewStyle} from 'react-native';

export interface Style {
  container: ViewStyle;
  containerlight: ViewStyle;
  containerdark: ViewStyle;
}

export const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
  },
  containerlight: {
    backgroundColor: 'white',
  },
  containerdark: {
    backgroundColor: 'red',
  },
});
