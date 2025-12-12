# 项目构成
- 服务端数据接口
  # server
 - [ts-course-api](./ts-course-api)
- appdemo
  - [blank-demo](./blank-demo)

# expo go install in android

- [expo-go apk](https://pan.baidu.com/s/1nyPeFilsO2rc3KVnEppsaw?pwd=61tc#list/path=%2F&parentPath=%2F)
- [React Native Course](https://clwy.cn/chapters/react-native-loading)

下载之后，进入apk文件所在目录，执行以下命令
- install commands

```shell
# 列出已连接的Android设备
$ adb devices
List of devices attached
10AEA534Q4001TP	device
emulator-5554	device

# 安装apk 这里-s 指定设备，注意这里的10AEA534Q4001TP是设备id，请把它更换成你手机的id
$ adb -s 10AEA534Q4001TP install ./Expo-Go-54.0.6.apk
Performing Streamed Install
Success


```

# 图标
[vector-icons](https://oblador.github.io/react-native-vector-icons/)


