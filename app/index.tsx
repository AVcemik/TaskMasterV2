// app/index.tsx
import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Привет из Expo Router!</Text>
      
      <Pressable onPress={() => console.log("Кнопка нажата!")} style={styles.btn}>
        <Text style={styles.btnText}>Нажми меня</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  btnText: {
    color: "white",
  }
});