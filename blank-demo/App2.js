import {Text,ScrollView,View,StyleSheet} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native';

function getData(){
    const data = [
    { "id": 1, "title": "静夜思" },
    { "id": 2, "title": "望庐山瀑布" },
    { "id": 3, "title": "早发白帝城" },
    { "id": 4, "title": "黄鹤楼送孟浩然之广陵" },
    { "id": 5, "title": "将进酒" },
    { "id": 6, "title": "行路难·其一" },
    { "id": 7, "title": "蜀道难" },
    { "id": 8, "title": "月下独酌·其一" },
    { "id": 9, "title": "赠汪伦" },
    { "id": 10, "title": "梦游天姥吟留别" },
    { "id": 11, "title": "宣州谢朓楼饯别校书叔云" },
    { "id": 12, "title": "送友人" },
    { "id": 13, "title": "登金陵凤凰台" },
    { "id": 14, "title": "清平调·其一" },
    { "id": 15, "title": "秋浦歌·白发三千丈" },
    { "id": 16, "title": "渡荆门送别" },
    { "id": 17, "title": "夜宿山寺" },
    { "id": 18, "title": "独坐敬亭山" },
    { "id": 19, "title": "关山月" },
    { "id": 20, "title": "子夜吴歌·秋歌" },
    { "id": 21, "title": "下终南山过斛斯山人宿置酒" },
    { "id": 22, "title": "月下独酌·其二" },
    { "id": 23, "title": "塞下曲六首·其一" },
    { "id": 24, "title": "玉阶怨" },
    { "id": 25, "title": "春夜洛城闻笛" },
    { "id": 26, "title": "越中览古" },
    { "id": 27, "title": "山中问答" },
    { "id": 28, "title": "清平调·其一" },
    { "id": 29, "title": "清平调·其二" },
    { "id": 30, "title": "清平调·其三" }
  ]
  return data;
}

export default function App2(){
    const data = getData();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.container}>
                    {
                        // data.map((item) => {
                        //     return <Text key={item.id} style={styles.text}>{item.title}</Text>
                        // })
                   
                   }
                   <FlatList data={data} renderItem={ ({item,index}) => (
                    <Text style={styles.text}>{index+1}. {item.title}</Text>
                   )} keyExtractor={item=> item.id} 
                   ListHeaderComponent={<Text style={styles.header}>唐诗-李白</Text>}
                   ListFooterComponent={<Text style={styles.footer}>共{data.length}首</Text>}
                   onEndReached={onEndReached}
                   onEndReachedThreshold={0.1}
                   />
            </SafeAreaView>
        </SafeAreaProvider>
    )

}

function onEndReached(){
    console.log("onEndReached");

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        color: 'blue',
        alignContent: 'center',
        justifyContent: 'start',
    },
    header:{
        textAlign: 'center',
        fontSize:40,
        lineHeight:50,
        fontWeight: 'bold',
        color: 'black',
    },
    footer:{
        textAlign: 'center',
        fontSize:30,
        lineHeight:40,
        fontWeight: 'bold',
        color: 'black',
    },
    
});