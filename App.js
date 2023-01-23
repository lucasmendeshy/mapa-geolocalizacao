import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Alert,
  Pressable,
  SafeAreaView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export default function App() {
  /* State para a geolocalização */
  const [minhaLocalizacao, setMinhaLocalizacao] = useState(null);

  const [localizacao, setLocalizacao] = useState();

  useEffect(() => {
    async function obterLocalizacao() {
      // Acessando o status da requisição de permissão de uso
      const { status } = Location.requestForegroundPermissionsAsync();

      // Verificando o status
      /*  if (status !== "granted") {
        Alert.alert(
          "OPS!",
          "Você não autorizou o uso de recursos de localização"
        );
        return;
      } */
      // Acessando os dados de globalização
      let localizacaoAtual = await Location.getCurrentPositionAsync({});

      // Adicionando os dados ao state
      setMinhaLocalizacao(localizacaoAtual);
    }
    obterLocalizacao();
  }, []);

  console.log(minhaLocalizacao);

  const regiaoInicial = {
    latitude: -10,
    longitude: -55,
    latitudeDelta: 40,
    logintudeDelta: 40,
  };

  const marcarLocal = (event) => {
    setLocalizacao({
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
      ...minhaLocalizacao.coords,
    });
    console.log(localizacao);
  };
  return (
    <>
      <View style={estilos.container}>
        <View style={estilos.viewMapa}>
          <SafeAreaView style={estilos.viewSafe}>
            <StatusBar barStyle="dark-content" />
            <Pressable style={estilos.botao} onPress={marcarLocal}>
              <Text style={estilos.botaoTexto}>
                Descobrir minha localização
              </Text>
            </Pressable>
          </SafeAreaView>

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
              "";
              setLocalizacao({
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                latitude: minhaLocalizacao.coords.latitude,
                longitude: minhaLocalizacao.coords.longitude,
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
  viewMapa: {
    flex: 1,
  },
  viewSafe: {},
  botao: {
    padding: 14,
    backgroundColor: "purple",
    width: "100%",
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
