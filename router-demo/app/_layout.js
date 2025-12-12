import { StyleSheet, Text,Image ,TouchableOpacity} from 'react-native';
import { Slot } from 'expo-router';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Stack,Link } from 'expo-router';
import  {Ionicons,MaterialIcons,FontAwesome5,AntDesign,Foundation,SimpleLineIcons} from '@expo/vector-icons'

function LogoTitle(props){
  return (
    <Foundation.Button name="home" size={36} color="white" >
    <Text style={{color:'white',fontSize:24}}>title for {props && props.title? props.title : ''}</Text>
    </Foundation.Button>
  );
}

function HomeTitle(props){
  return (
   <Foundation.Button name="home" size={36} color="white" >
    <Text style={{color:'white',fontSize:24}}>{props.title}</Text>
    </Foundation.Button>
  );

}

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerBackButtonDisplayMode: 'minimal',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '400',
        color:'#2A2929',
        fontSize:16,
      },
      animation: 'slide_from_right',
    }}
    
    >
      <Stack.Screen name="index" options={{
        headerTitle: (props) => <HomeTitle  {...props} />,
        headerLeft: () => (<HeaderButton name="bell" href="/notifications" />),
        headerRight: () =>(<> <HeaderButton name="magnifier" href="/search" /> <HeaderButton name="options" href="/settings" /></>),
      }} />
      <Stack.Screen name="article" options={{
        headerTitle: (props) => <LogoTitle  {...props}/>,
      }} />
      <Stack.Screen name="details" options={{
        headerTitle: (props) => <LogoTitle  {...props}/>,
      }} />
      <Stack.Screen name="details2" options={{
        headerTitle: (props) => <LogoTitle  {...props}/>,
      }} />
      <Stack.Screen name="courses/[id]" options={
        
        ({route}) => ({
        headerTitle: (props) => <LogoTitle {...props} title={route&& route.params && route.params.title || 'Course'} />,  
      })} /> 
    </Stack>
  );
}

// function HeaderLef(){
//   return (
//     <Link asChild href="/article" styles={styles.link}>
//       <TouchableOpacity >
//        <SimpleLineIcons name="bell" size={36} color="white" /> 
//       </TouchableOpacity>
//     </Link>
//   )
// }


// function HeaderRight(){
//   return (<>
//     <Link asChild href="/search" styles={styles.link}>
//       <TouchableOpacity >
//        <SimpleLineIcons name="magnifier" size={36} color="white" /> 
//       </TouchableOpacity>
//     </Link>
//     <Link href="/settings"  style={styles.headerRight} asChild>
//         <TouchableOpacity>
//           <SimpleLineIcons size={20} color="#1f99b0" name="options"/>
//         </TouchableOpacity>
//       </Link></>
//   )
// }

function HeaderButton(props){
  const{name , ... rest} = props;

  return (<Link {...rest} asChild ><TouchableOpacity><SimpleLineIcons name={name} size={36}  /></TouchableOpacity></Link> )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    textAlign: 'center'
  },
  footer: {
    fontSize: 18,
    textAlign: 'center'
  },
  logo: {
    width: 130,
    height: 30,
  },
  link:{
    color:'blue',
  },
});

