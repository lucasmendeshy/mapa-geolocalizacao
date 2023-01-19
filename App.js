import { useState } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function App() {
  const [localizacao, setLocalizacao] = useState();

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
          // initialRegion={regiaoInicial}
          region={localizacao ?? regiaoInicial}
          // liteMode={true} -> Funciona apenas para Android
          mapType="satellite" // Satellite
          userInterfaceStyle="dark" // Define o mapa para o estilo selecionado. Funciona apenas para IOS
          // maxZoomLevel={15} // 	Valor máximo de zoom para o mapa, deve estar entre 0 e 20
          // minZoomLevel={2} // Valor mínimo de zoom para o mapa, deve estar entre 0 e 20
          onPress={(e) => {
            setLocalizacao({
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
            });
            console.log(localizacao);
          }}
        >
          {localizacao && (
            <Marker
              coordinate={localizacao}
              title="Socorrooo!!" // O título do marcador
              // pinColor="purple" -> Muda a cor do marcador
              draggable // Adicionar isso permite que o marcador seja arrastável (reposicionado).
              onPress={(event) => {
                console.log(event.nativeEvent);
              }} // Exibindo no console.log as coordenadas
            >
              <Image source={require("./assets/ghost.png")} />
              {/* Mudando ícone do marcador e adicionando um fantasma */}
            </Marker>
          )}
        </MapView>
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
