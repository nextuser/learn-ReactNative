import {Stack} from 'expo-router'

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
        </Stack>
    )
}