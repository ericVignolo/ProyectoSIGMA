import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function DetalleEquipo() {
  const { id } = useLocalSearchParams<{ id: string }>();
  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 24 }}>Detalle del equipo</Text>
      <Text>ID del equipo: {id}</Text>
      <Link href="/equipos">Volver a Equipos</Link>
    </View>
  );
}
