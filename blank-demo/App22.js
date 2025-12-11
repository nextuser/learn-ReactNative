import { useState } from "react";
import {Switch,StyleSheet,Text,View,Button,Alert, TouchableOpacity,Pressable} from 'react-native';
import { SafeAreaProvider,SafeAreaView } from "react-native-safe-area-context";
import { Dimensions } from "react-native";

export default function App(){
    const [isEnabled,setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

     const onPressOne = () =>
    Alert.alert('提示信息', '你想干嘛？', [
      { text: '确定', onPress: () => console.log('确认了') },
    ]);

    const onPressTwo = () =>
    Alert.alert('提示信息', '你又想干嘛？', [
      {
        text: '取消',
        onPress: () => console.log('取消了'),
      },
      { text: '确定', onPress: () => console.log('确认了') },
    ]);
    const {width, height} = Dimensions.get('window');
    return (<SafeAreaProvider> 
    <SafeAreaView style={styles.container}> 
        <Text style={styles.text}>screen width {width}, screen height:{height}</Text>
        <Switch style={styles.switch}  onValueChange={toggleSwitch} value={isEnabled} />

        <Text style={styles.text}>{isEnabled ? "开" : "关"}</Text>
        <TouchableOpacity  style={styles.buttonContainer} onPress={onPressOne}>
            <Text>{'你点我撒？'}</Text>
        </TouchableOpacity>
        <Pressable  style={styles.buttonContainer} onPress={onPressTwo}>
            <Text>{'你再点我撒？'}</Text>
        </Pressable>
    </SafeAreaView>
    </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    buttonContainer:{
        backgroundColor:'#e29447',
        alignItems:'center',
        padding:8,
        margin:20,
        borderRadius:5,
    },
    text:{
        textAlign:'center',
        alignContent:'center',
        justifyContent:'center',
    },
    switch:{
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
    }
});
