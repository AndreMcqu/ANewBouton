import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Btn from './composant/comps';
import TxtBox from './composant/champ';

export default function App() {
  return (
    <View style={styles.container}>
      <TxtBox label='Sub Here'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
