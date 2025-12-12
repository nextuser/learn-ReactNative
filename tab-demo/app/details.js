import {StyleSheet,Text,TouchableOpacity,View}    from "react-native";
import {Link} from "expo-router";
import { useRouter,Stack } from "expo-router";
export default function Details(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title:"Detail 1"
            }}/>
            <Text style ={styles.title} >
                this is detail information
            </Text>

            <TouchableOpacity  style={styles.linkButton} onPress={()=>router.back()}>
                <Text style={styles.text}>back</Text></TouchableOpacity>
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
        marginVertical:20,
        fontSize:50,
        width:200,
        fontWeight:'bold',
        color : '#e29447',
    }

    ,
    link:{
        color:'blue',
        hoverColor:'green',
    },
    linkButton:{
        backgroundColor:'#e29447',
        padding:10,
        margin:5,
        height:80,
        width:200,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    }
})


// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>
//         欢迎来到长乐未央 Expo Router 课程!
//       </Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 50,
//     width: 200,
//     fontWeight: 'bold',
//     color: '#e29447',
//   }
// });
