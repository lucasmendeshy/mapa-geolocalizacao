import { StyleSheet, Text, View, StatusBar } from "react-native";
import MapView from "react-native-maps";

export default function App() {
  const regiaoInicial = {
    latitude: -10,
    longitude: -55,
    latitudeDelta: 40,
    logintudeDelta: 40,
  };

  return (
    <>
      <StatusBar />
      <View style={estilos.container}>
        <MapView style={estilos.map} initialRegion={regiaoInicial} />
      </View>
    </>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
