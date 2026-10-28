import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{color:"white", fontStyle:"italic" , fontWeight:"bold"}}>Edit src/app/index.tsx to edit this screen.</Text>
      <Text>Hi my friend i'm the best i dont't need to be like some body. that all my greatthese freind for the life </Text>
      <Text>Yes it verif diffculte but i can't give up. hi hello </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    color: "#5f0a0a"
  },
});
