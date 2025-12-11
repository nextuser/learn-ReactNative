import {StyleSheet,Text,View}    from "react-native";
export default function App(){
    return (
        <View style={styles.container}>
            <Text style ={styles.title} >
                welcome to lesson for expo router
            </Text>
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
        fontSize:50,
        width:200,
        fontWeight:'bold',
        color : '#e29447',
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
