import { Link } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function Equipos() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24 }}>Equipos</Text>
      <Text>Seleccioná un equipo para ver su detalle.</Text>
      <Link href={{ pathname: '/equipos/[id]', params: { id: '1' } }} asChild>
        <Pressable><Text>Equipo 1</Text></Pressable>
      </Link>
      <Link href={{ pathname: '/equipos/[id]', params: { id: '2' } }} asChild>
        <Pressable><Text>Equipo 2</Text></Pressable>
      </Link>
      <Link href="/">Volver al inicio</Link>
    </View>
  );
}
