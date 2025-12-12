import { Link ,useRouter,Stack} from "expo-router";
import {StyleSheet,Text,View,TouchableOpacity}    from "react-native";
export default function App(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title:"首页"
            }}/>
            <Text style ={styles.title} >
                welcome to lesson for expo router
            </Text>
            <Link href="/details2" style={styles.link} asChild>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text}>
                        details2
                    </Text>
                </TouchableOpacity>

            </Link>
            <TouchableOpacity style={styles.button} onPress={()=>router.navigate('/article',{title:"article Title"})}>
                    <Text style={styles.text}>
                        article
                    </Text>
             </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={()=>router.navigate('/details')}>
                    <Text style={styles.text}>
                        details
                    </Text>
             </TouchableOpacity>

        
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor : '#fff',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        fontSize:30,
        width:200,
        fontWeight:'bold',
        color : '#e29447',
    },
    text:{
        fontSize:16,
        color:'#0d162cff',
    },
    button:{
        backgroundColor:'#e29447',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        margin:5,
        height:80,
        width:200,
        borderRadius:10,
    },
    link:{
        color:'blue',
        hoverColor:'green',
    }
})



