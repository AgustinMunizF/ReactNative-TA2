import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Imagenes = () => {
  // Array con todas las imágenes
  const todasLasImagenes = [
    {
      id: 1,
      uri: "https://cdn.pixabay.com/photo/2022/09/28/11/31/halloween-7484855_1280.jpg",
      descripcion: "Murciélagos",
    },
    {
      id: 2,
      uri: "https://cdn.pixabay.com/photo/2024/10/06/08/07/ai-generated-9099330_640.jpg",
      descripcion: "Hombre espantapájaros",
    },
    {
      id: 3,
      uri: "https://cdn.pixabay.com/photo/2017/10/10/16/55/halloween-2837936_640.png",
      descripcion: "Calabaza tenebrosa",
    },
    {
      id: 4,
      uri: "https://cdn.pixabay.com/photo/2024/10/06/07/48/ai-generated-9099289_640.jpg",
      descripcion: "Dulces",
    },
    {
      id: 5,
      uri: "https://cdn.pixabay.com/photo/2023/10/10/13/23/pumpkins-8306419_640.jpg",
      descripcion: "Calabazas de Halloween",
    },
    {
      id: 6,
      uri: "https://cdn.pixabay.com/photo/2024/10/20/09/00/ai-generated-9134469_640.jpg",
      descripcion: "Calabaza de Haloween",
    },
    {
      id: 7,
      uri: "https://cdn.pixabay.com/photo/2022/10/07/13/42/long-halloween-7505073_640.jpg",
      descripcion: "Hombre tenebroso",
    },
    {
      id: 8,
      uri: "https://cdn.pixabay.com/photo/2024/10/26/07/43/ai-generated-9150466_640.jpg",
      descripcion: "Gato magico",
    },
    {
      id: 9,
      uri: "https://cdn.pixabay.com/photo/2020/09/03/08/32/pumpkin-5540550_640.jpg",
      descripcion: "Animalitos de Haloween",
    },
    {
      id: 10,
      uri: "https://cdn.pixabay.com/photo/2024/10/07/23/27/ai-generated-9104012_640.jpg",
      descripcion: "Niño voraz",
    },
  ];

  // Definimos el tipo de índice de imagen
  type IndiceImagen = { [key: number]: number };

  // Estado para mantener el índice actual de cada imagen
  const [indiceImagen, setIndiceImagen] = useState(
    todasLasImagenes.reduce((contador, imagen) => {
      contador[imagen.id] = imagen.id - 1;
      return contador;
    }, {} as { [key: number]: number })
  );

  // Función para cambiar a la siguiente imagen del array
  const cambiarImagen = (id: number) => {
    setIndiceImagen((prevState) => {
      const nuevoIndice = (prevState[id] + 1) % todasLasImagenes.length;
      return { ...prevState, [id]: nuevoIndice };
    });
  };

  return (
    <View style={estilos.contenedor}>
      <FlatList
        // Filtramos las imágenes para mostrar inicialmenete solo las que tienen un id impar
        data={todasLasImagenes.filter((imagen) => imagen.id % 2 !== 0)}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={estilos.contenedorImagen}>
            <Image
              source={{ uri: todasLasImagenes[indiceImagen[item.id]].uri }}
              style={estilos.imagen}
            />
            <Text style={estilos.descripcion}>
              {todasLasImagenes[indiceImagen[item.id]].descripcion}
            </Text>
            <TouchableOpacity
              style={estilos.boton}
              onPress={() => cambiarImagen(item.id)}
            >
              <Text style={estilos.textoBoton}>Cambiar Imagen</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contenedorImagen: {
    alignItems: "center",
    marginVertical: 10,
  },
  imagen: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  descripcion: {
    marginTop: 5,
    fontSize: 16,
    color: "black",
  },
  boton: {
    backgroundColor: "orange",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  textoBoton: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default Imagenes;
