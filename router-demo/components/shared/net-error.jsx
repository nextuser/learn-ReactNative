import {View,Text,Button,StyleSheet} from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
export default function NetError(props){
   return  <View style={styles.container_center}>
      <SimpleLineIcons name={"drawer"} size={160} color={"#d31d1dff"} />
      <Text style={styles.textRed}>{props.title}</Text>

      <TouchableOpacity style={styles.reload} onPress={()=>props.reload()}>
        <Text style={styles.buttonText}>Reload</Text>
      </TouchableOpacity>
      
    
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
  },
    reload: {
    marginTop: 10,
    backgroundColor: '#1f99b0',
    justifyContent: 'center',
    height: 40,
    borderColor:"black",
    borderWidth: 2,
    borderRadius: 4,
    paddingLeft: 10,
    paddingRight: 10,
  }
});