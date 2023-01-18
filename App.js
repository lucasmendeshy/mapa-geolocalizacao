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
        <MapView
          style={estilos.map}
          initialRegion={regiaoInicial}
          // liteMode={true} -> Funciona apenas para Android
          mapType="standard" // Satellite
          userInterfaceStyle="dark" // Define o mapa para o estilo selecionado. Funciona apenas para IOS
          maxZoomLevel={15} // 	Valor máximo de zoom para o mapa, deve estar entre 0 e 20
          minZoomLevel={2} // Valor mínimo de zoom para o mapa, deve estar entre 0 e 20
        />
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
