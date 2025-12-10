import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,TextInput } from 'react-native';
import { useState , useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import Loading from './components/shared/loading';
import { SimpleLineIcons } from '@expo/vector-icons';
import NetError from './components/shared/net-error';


export default function App() {
//hook 需要再函数中调用
  const [count ,setCount] = useState (0);
  const [courses ,setCourses] = useState ([]) ;
  const [key,setKey] = useState("");
  const [loading ,setLoading] = useState (false) ;
  const [error ,setError] = useState (false) ;
  const loadRecords = async (key) => {
    try{  
        setLoading(true);     
        console.log("loading records for key=", key);
        let url = `http://192.168.0.39:3000/search?q=${key ? key : ''}`;
        //await new Promise(resolve => setTimeout(resolve, 2000)); //模拟网络延迟
        console.log("fetching url:", url);
        let res = await fetch(url);
        console.log("res from " ,res);
        let resJson = await res.json();

        //console.log("json result from " ,resJson);
        let {data} = resJson;
         
        setCourses(data.courses);

        console.log("courses " ,data.courses);
        if(data.courses.length > 0)console.log("courses [0]" ,data.courses[0].id ,data.courses[0].name);

        setError(false);
    } catch (err) {
      //console.error("Failed to load records", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRecords(key);
  }, []);

  if(loading){
    return (<View style={styles.container_center}><Loading /></View>);
  }

  if(error){
    return <NetError title="Network error" reload={()=>loadRecords(key)}/>;
    // return (<View style={styles.container_center}>
    //   <SimpleLineIcons name={"exclamation"} size={160} color={"#ddd"} />
    //   <Text style={styles.textRed}>Network error</Text>
    // <Button title="Reload" onPress={()=>loadRecords(key)}/>  
    // </View>);
  }

  return (
    <View style={styles.container}>
      <TextInput placeholder='please input keyword to search'
      defaultValue={key}
      style={styles.textInput} value ={key } onChangeText={setKey} onBlur={()=>loadRecords(key)}></TextInput>

      <Text style={[{color: 'red'},styles.title ]}>Courses {courses.length} count </Text>

      {
        courses.map((course) => {
          return <Text key={course.id} style={styles.textRed}>{course.name}</Text>
        })
      }
 
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'start',
    justifyContent: 'top',
    paddingLeft:16,
    paddingTop:30
  },

    container_center: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft:16,
    paddingTop:30
  },
  title:{
    fontSize:22,
    fontWeight: 'bold',
    color :'#e29447',
    marginBottom:20,

  },
  textInput:{
    height:40,
    width:300,
    margin:12,
    padding:10,
    borderColor:'#ccc',
    borderWidth:2,
    marginBottom:20,
    borderRadius:5,
  },

   textRed:{
    fontSize: 18,
    color: 'red',
    alignContent:'center',
    justifyContent:'start',
  }
});
