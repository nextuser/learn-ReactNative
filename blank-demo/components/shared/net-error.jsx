import {View,Text,Button,StyleSheet} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
export default function NetError(props){
   return  <View style={styles.container_center}>
      <SimpleLineIcons name={"exclamation"} size={160} color={"#d31d1dff"} />
      <Text style={styles.textRed}>{props.title}</Text>
    <Button title="Reload" onPress={()=>props.reload()}/>  
    </View>
}

const styles = StyleSheet.create({
  container_center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  textRed: {
    color: '#ddd',
    fontSize: 16,
    marginTop: 20
  }
});