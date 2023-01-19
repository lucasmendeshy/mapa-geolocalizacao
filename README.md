# Referência

## 01-api-mapView

**Documentação:** https://docs.expo.dev/versions/v47.0.0/sdk/map-view/

### Instalação:

`npx expo install react-native-maps`

### Importação da biblioteca

`import MapView, { Marker } from "react-native-maps";`

## 02-mapView-com-outras-props

**Documentação completa sobre o mapView** https://github.com/react-native-maps/react-native-maps

## 03-mapView-com-marcador

`import MapView, { Marker } from "react-native-maps";`

**Documentação completa sobre o Marker** https://github.com/react-native-maps/react-native-maps/blob/master/docs/marker.md

## 04-mapview-com-marcador-interativo

**DESAFIO**

Programe recursos que permitam colocar o `Marker` no local em que o usuário tocar no `MapView`.

**Dicas:**

- Você precisará trabalhar com `state` para registrar a localização, além de evento `onPress` (no MapView) e função.
- Lembre-se que para acessar dados da localização, você pode utilizar as informações do `event.nativeEvent`
