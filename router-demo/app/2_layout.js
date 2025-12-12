import { StyleSheet, Text } from 'react-native';
import { Slot } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function Layout() {
  return   (  //这里不能把括号写到下一行，否则会reutrn直接加了分号
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>by charles</Text>
        <Slot/>
        <Text style={styles.footer}>strange </Text>
      </SafeAreaView>
    </SafeAreaProvider>
     
  );

  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : '#fff',
        alignItems:'center',
        justifyContent:'center'
    },
  header: {
    fontSize: 24,
    textAlign: 'center'
  },
  footer: {
    fontSize: 18,
    textAlign: 'center'
  }
});