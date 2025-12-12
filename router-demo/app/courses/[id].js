import {View,Text,StyleSheet, Button} from 'react-native'
import {Link, useLocalSearchParams,Stack} from 'expo-router'
import { TouchableOpacity } from 'react-native';
import { router,useNavigation } from 'expo-router';

export default function Course(){

    const {id,title} = useLocalSearchParams();
    const navigation = useNavigation();

    const t  = title || `Course ${id} title`
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title:t
            }}/>
            <Text style ={styles.title} >
                this is detail information
            </Text>
            <Text style ={styles.info} >
                id: {id}
            </Text>
            <TouchableOpacity onPress={()=>router.back()} style={styles.linkButton}>
                <Text style={styles.link}>
                    go back
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.setOptions({title:'changed title'})} style={styles.linkButton}>
                <Text style={styles.link}>
                    change title
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
    linkButton : {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
});