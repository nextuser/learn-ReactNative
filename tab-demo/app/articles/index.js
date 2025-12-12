import {StyleSheet,Text,TouchableOpacity,View}    from "react-native";
import {Link,Stack} from "expo-router";
import { useRouter } from "expo-router";
export default function Details(){
    const router = useRouter();
    return (
        <View style={styles.container}>
            <Stack.Screen options={{
                title:"article Title",
                headerStyle:{
                    backgroundColor:"e29447",
                },
                headerTintColor:"#fff",
                headerTitleStyle:{
                    fontSize:24,
                },
            }}/>
            <Text style ={styles.title} >
                this is detail2 information
            </Text>

            <TouchableOpacity  style={styles.linkButton} onPress={()=>router.push("/articles")}>
                <Text style={styles.text}>push article</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.linkButton} onPress={()=>router.replace("/details")}>
                <Text style={styles.text}>replace details</Text>
            </TouchableOpacity>

            <TouchableOpacity  style={styles.linkButton} onPress={()=>router.back()}>
                <Text style={styles.text}>back</Text>
            </TouchableOpacity>
            <Link style={styles.link} href="/courses/1?title=Vue.js" asChild> 
                <Text>ref 1</Text>
            </Link>
            <Link style={styles.link} href={
                    {
                        pathname:"/courses/[id]",
                        params:{id:2, title :"React Native"}
                    }
                }
                     asChild> 
                <Text>react native</Text>
            </Link>

            <Link style={styles.link} href={
                    {
                        pathname:"/courses/[id]",
                        params:{id:3, title :"微信"}
                    }
                }
                     asChild> 
                <Text>微信。。。</Text>
            </Link>
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
        height:80,
        width:200,
        margin:10,
        paddingVertical:10,
        alignItems:'center',
        alignContent:'center',
        textAlign:'center',
        
        justifyContent:'center',
        fontSize:18,
        borderRadius:5,
        backgroundColor:'#d17a33ff',
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
