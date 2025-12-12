import {View,Text,StyleSheet, Button} from 'react-native'
import {Link, useLocalSearchParams} from 'expo-router'
import { TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

export default function Course(){
    const {id} = useLocalSearchParams();
    return (
        <View style={styles.container}>
            <Text style ={styles.title} >
                this is detail information
            </Text>
            <Text style ={styles.info} >
                id: {id}
            </Text>
            <TouchableOpacity onPress={()=>router.back()}>
                <Text style={styles.link}>
                    go back
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
    info : {
        fontSize: 20,
        fontWeight: 'italic',
    },
    Button : {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
});