import { ActivityIndicator } from "react-native";
import { StyleSheet } from 'react-native';
export default function Loading() {
  return 
    <ActivityIndicator size='large' color='#1f99b0'
      style={styles.loading} />;
  
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: "#fff",
    position: "absolute",
    color: "#1f99b0",
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    textAlign: "center",
    zIndex : 1,
    left:0,
    right:0,
    top:0,
    bottom:0,

  },
});