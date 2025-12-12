import { MaterialCommunityIcons, SimpleLineIcons } from '@expo/vector-icons'
import {Stack} from 'expo-router'
import { useRouter } from 'expo-router'
import { TouchableOpacity } from 'react-native'

export default function AppLayout(){
    return (
        <Stack
            screenOptions={{
                headerStyle:{
                    backgroundColor:"#fff"
                },
                headerTintColor:"#1f99b0",
                headerTitleStyle: {
                    fontWeight: '400',
                    color: '#2A2929',
                    fontSize: 16,
                },
                headerBackButtonDisplayMode:'minimal',
                headerLeft:()=><CloseButton/>
            }}
        
        >   <Stack.Screen name="(tabs)" options={{
                headerShown:false   
                }} />
        
            <Stack.Screen name = "articles/index" options={{
                title:"首页"
            }}/>
            <Stack.Screen name = "settings/index" options={{
                title:"Options"
            }}/>
            <Stack.Screen name = "courses/[id]" options={{
                title:"Courses"
            }}/>
            <Stack.Screen name = "search/index" options={{
                title:"搜索"
            }}/>

            <Stack.Screen name = "notifications/index" options={{
                title:"通知"
            }}/>
            <Stack.Screen name = "teachers/[id]" options={{
                title:"老师",
                presentation:"fullScreenModal",
            }}/>
        </Stack>
    )
}

function CloseButton(){
    const router = useRouter();
    return (
        <TouchableOpacity style={{
            padding:10,
            marginRight:10,
        }} onPress={()=>{
            router.dismiss();
        }}>
        <MaterialCommunityIcons name="close" size={20} color="#000"/>
        </TouchableOpacity>
    )
}