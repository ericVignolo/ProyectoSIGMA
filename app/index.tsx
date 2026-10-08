import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Inicio() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24 }}>SIGMA</Text>
      <Text>Seleccioná una opción del menú.</Text>
      <Link href="/equipos" asChild>
        <Pressable><Text>Equipos</Text></Pressable>
      </Link>
      <Link href="/tareas" asChild>
        <Pressable><Text>Tareas</Text></Pressable>
      </Link>
      <Link href="/nueva-tarea" asChild>
        <Pressable><Text>Nueva tarea</Text></Pressable>
      </Link>
    </View>
  );
}
